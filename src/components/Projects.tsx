import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import oea from "../assets/project_images/oe&a.png";
import gds from "../assets/project_images/gds.png";
import abc2tab from "../assets/project_images/abc2tab.jpg";
import healthClassification from "../assets/project_images/heathClassification.jpg";
import myPariwar from "../assets/project_images/myPariwar.png";

type Project = {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  status?: string;
};

const buttonClass =
  "border-accent text-accent hover:bg-accent hover:text-accent-foreground";

const Projects = () => {
  const inProgress: Project[] = [
    {
      title: "LOOM",
      description:
        "A cross-domain trend detection system I've been chipping away at since January. Stuff is happening everywhere and it's hard to pick out signal from noise. LOOM is my attempt to pull it out, and help connect the dots on what's going on, and maybe where it's going.",
      technologies: ["Python", "SQLAlchemy", "Postgres", "Pydantic v2", "Pyright", "ruff", "uv"],
      status: "MVP-stage",
    },
    {
      title: "Edge ML inference",
      description:
        "Playing with Whisper variants, MediaPipe, and Meta's SAM2 / SAM3D, with ONNX gluing the toolchain together. Mostly figuring out what actually fits on the device you have, not the device the model was trained on.",
      technologies: ["PyTorch", "TensorFlow / tflite", "ONNX", "Whisper", "MediaPipe", "Meta SAM"],
      status: "Tinkering",
    },
  ];

  const projects: Project[] = [
    {
      title: "MyPariwar",
      description:
        "Built so my own family could actually keep track of itself. Bilingual (English and Nepali) with full Bikram Sambat calendar support throughout, since no existing tool offered either. Every change is audit-logged, every photo is auth-gated, and the whole thing runs behind a private tunnel with no exposed ports.",
      image: myPariwar,
      technologies: ["Go", "SQLite", "sqlc", "React", "TypeScript", "Cloudflare R2", "Tailscale"],
      liveUrl: "https://mypariwar.com",
      featured: true,
    },
    {
      title: "Health-Related Text Classification",
      description:
        "Improving models for health-related social media text classification. Took benchmark F1 from 64.9 to 95 via custom data cleaning, learning-rate tuning, and pretrained-model selection.",
      image: healthClassification,
      technologies: ["Machine Learning", "NLP", "scikit-learn", "Python"],
      githubUrl: "https://github.com/Sandesh-L/NLP-project",
    },
    {
      title: "ABC to TAB",
      description:
        "A planning system that translates music written in ABC notation into guitar TAB notation. Uses Fast Downward (LM-Cut heuristic) over a custom guitar model.",
      image: abc2tab,
      technologies: ["AI Planning", "Python", "C", "C++"],
      githubUrl: "https://github.com/Sandesh-L/abc2tab",
    },
  ];

  const freelance: Project[] = [
    {
      title: "Opal Events & Arrangements",
      description:
        "Site for a local event-planning business, focused on showcasing their services with a clean, responsive design.",
      image: oea,
      technologies: ["Vue", "Tailwind", "Vercel"],
      liveUrl: "https://opalevents.vercel.app/",
    },
    {
      title: "Garage Door Solutions of KY",
      description:
        "SEO-focused site for a local business with services and area-served pages.",
      image: gds,
      technologies: ["Astro", "JavaScript"],
      liveUrl: "https://garagedoorsolutionsofky.com/",
    },
  ];

  const renderCard = (project: Project, index: number) => (
    <Card
      key={index}
      className={`border-accent/20 hover:shadow-xl transition-all duration-300 flex flex-col ${
        project.featured ? "ring-2 ring-accent/30" : ""
      }`}
    >
      {project.image && (
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
          />
          {project.featured && (
            <Badge className="absolute top-3 left-3 bg-accent">Featured</Badge>
          )}
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-primary text-lg">{project.title}</CardTitle>
          {project.status && (
            <Badge
              variant="outline"
              className="border-accent text-accent whitespace-nowrap text-xs"
            >
              {project.status}
            </Badge>
          )}
        </div>
        <CardDescription className="text-muted-foreground text-sm">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-auto pt-0">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <Badge
              key={techIndex}
              variant="secondary"
              className="bg-primary/10 text-primary text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="flex gap-2">
            {project.liveUrl && (
              <Button
                variant="outline"
                size="sm"
                className={buttonClass}
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className={buttonClass}
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-10 text-primary">
            Projects
          </h2>

          <h3 className="text-xl text-primary mb-6 text-center">
            In progress
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {inProgress.map(renderCard)}
          </div>

          <h3 className="text-xl text-primary mb-6 text-center">
            Things I've Built
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(renderCard)}
          </div>

          <h3 className="text-xl text-primary mt-12 mb-6 text-center">
            Selected Freelance
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {freelance.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
