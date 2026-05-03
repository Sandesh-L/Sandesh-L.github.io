// Pre-renders the SPA at build time so scrapers and crawlers see real content
// instead of the empty <div id="root">. Runs after `vite build` via `postbuild`.
//
// Flow: spawn `vite preview` -> headless Chrome loads the page -> save the
// rendered DOM back over build/index.html.

import { spawn } from "node:child_process";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BUILD_DIR = join(__dirname, "..", "build");
const PORT = 4173;
const URL = `http://127.0.0.1:${PORT}/`;

const log = (msg) => console.log(`[prerender] ${msg}`);

log(`starting vite preview on port ${PORT}`);
const server = spawn(
  "npx",
  ["vite", "preview", "--port", String(PORT), "--host", "127.0.0.1", "--strictPort"],
  { stdio: ["ignore", "pipe", "pipe"] }
);

const serverReady = new Promise((resolve, reject) => {
  const timeout = setTimeout(
    () => reject(new Error("preview server did not start within 30s")),
    30000
  );
  server.stdout.on("data", (chunk) => {
    if (chunk.toString().includes("Local:")) {
      clearTimeout(timeout);
      resolve();
    }
  });
  server.stderr.on("data", (chunk) => process.stderr.write(chunk));
  server.on("error", reject);
});

try {
  await serverReady;
  log("preview server ready");

  log("launching headless chrome");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  log(`rendering ${URL}`);
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 30000 });

  const html = await page.content();
  await browser.close();

  const indexPath = join(BUILD_DIR, "index.html");
  await writeFile(indexPath, html);
  log(`wrote pre-rendered HTML to ${indexPath}`);
} finally {
  server.kill();
}
