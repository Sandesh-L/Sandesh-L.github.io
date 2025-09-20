import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import oea from "../assets/project_images/oe&a.png"
import gds from "../assets/project_images/gds.png"
import abc2tab from "../assets/project_images/abc2tab.jpg"
import healthClassification from "../assets/project_images/heathClassification.jpg"

const Projects = () => {
  const projects = [
    {
      title: "ABC to TAB",
      description: "A planning system to translate music written in ABC notation into guitar TAB notation.",
      image: abc2tab,
      technologies: ["Planning", "Machine Learning", "C", "C++", "Shell/Bash", "Python"],
      // liveUrl: "#",
      githubUrl: "https://github.com/Sandesh-L/abc2tab",
      featured: false
    },
    {
      title: "Opal Events & Arrangements",
      description: "A responsive portfolio website showcasing skills and services with a focus on clean design.",
      image: oea,
      technologies: ["Vue", "Tailwind CSS", "JavaScript", "Vercel"],
      liveUrl: "https://opalevents.vercel.app/",
      // githubUrl: "#",
      featured: false
    },
    {
      title: "Garage Door Solutions of KY",
      description: "A SEO focused business website displaying services and areas served with responsive UI elements.",
      image: gds,
      technologies: ["Astro", "JavaScript"],
      liveUrl: "https://garagedoorsolutionsofky.com/",
      // githubUrl: "#",
      featured: false
    },
    {
      title: "Heath Related Text Classification",
      description: "Improving models for health-related social media text classification. From benchmark F1 score of 64.9 to our 95.",
      image: healthClassification,
      technologies: ["Machine Learning", "Natural Language Processing", "Scikit-learn", "Python"],
      // liveUrl: "#",
      githubUrl: "https://github.com/Sandesh-L/NLP-project",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-primary">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`border-accent/20 hover:shadow-xl transition-all duration-300 ${
                  project.featured ? 'ring-2 ring-accent/20' : ''
                }`}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-primary">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.liveUrl ?
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      : ''
                    }
                    { project.githubUrl ?
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      : ''
                    }
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;