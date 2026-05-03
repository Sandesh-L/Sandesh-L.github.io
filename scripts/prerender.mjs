// Pre-renders the SPA at build time so scrapers and crawlers see real content
// instead of the empty <div id="root">. Runs after `vite build` via `postbuild`.
//
// Uses Vite's programmatic preview() API + Puppeteer headless Chrome.

import { preview } from "vite";
import puppeteer from "puppeteer";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const BUILD_DIR = join(ROOT, "build");
const PORT = 4173;
const URL = `http://127.0.0.1:${PORT}/`;

const log = (msg) => console.log(`[prerender] ${msg}`);

log(`starting vite preview at ${URL}`);
const server = await preview({
  root: ROOT,
  preview: { port: PORT, strictPort: true, host: "127.0.0.1" },
});

try {
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
  server.httpServer.close();
}
