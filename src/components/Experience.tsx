import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CalendarDays, MapPin, FileText } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Systems Professional II / Senior Developer",
      company: "University of Kentucky (ITS RCI)",
      location: "Lexington, KY",
      duration: "July 2024 - Present",
      description: "I help build and run the platforms researchers at UKy actually use day-to-day: account portals, software-discovery tooling, the cluster-build automation that keeps the toil under control, and the LLM/RAG infrastructure powering the ACCESS chatbot. The cluster side is what I came for; the platform side is what I've grown into.",
      technologies: ["Slurm", "GPFS", "Ansible", "Python", "Django", "Angular", "NVIDIA GPUs", "InfiniBand", "LLM / RAG", "MCP"]
    },
    {
      title: "ACCESS Track 2 Software Developer",
      company: "University of Kentucky (NSF)",
      location: "Lexington, KY",
      duration: "September 2022 - June 2024",
      description: "Built tools to make national HPC infrastructure less mysterious to first-time users: the ACCESS Resource Advisor (which national supercomputer fits your problem?) and the first version of the Software Documentation Service (what's actually installed where?).",
      technologies: ["Python", "PostgreSQL", "REST APIs", "Recommender Systems", "SQL"]
    },
    {
      title: "Software Developer",
      company: "Berea College",
      location: "Berea, KY",
      duration: "July 2021 - May 2022",
      description: "My first real dev job. Worked on small full-stack apps for departments around campus that needed them: volunteer hours, course catalogs, a chemical inventory. Not glamorous, but it taught me how to ship.",
      technologies: ["Python", "Flask", "MySQL", "JavaScript", "Bootstrap", "MVC"]
    },
    {
      title: "Open Source Contributor",
      company: "Runestone Interactive",
      location: "Remote",
      duration: "June 2020 - August 2020",
      description: "Spent a summer co-authoring a data-science textbook on Runestone Academy. Wrote the business datasets, the data-cleaning chapters, and the pandas / scikit-learn intros. My first taste of teaching by writing.",
      technologies: ["Python", "pandas", "scikit-learn", "Google Colab", "reStructuredText"]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Kentucky",
      location: "Lexington, KY",
      duration: "Aug. 2022 - May 2024",
    },
    {
      degree: "B.A. in Computer & Information Sciences and Mathematics (double major)",
      institution: "Berea College",
      location: "Berea, KY",
      duration: "Aug. 2018 - May 2022",
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-primary">
            Experience & Education
          </h2>

          {/* Experience Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl text-primary">Work Experience</h3>
              <Button
                variant="outline"
                size="sm"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <FileText className="h-4 w-4 mr-2" />
                Full Resume
              </Button>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-accent/20">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <CardTitle className="text-primary">{exp.title}</CardTitle>
                        <CardDescription className="text-lg">{exp.company}</CardDescription>
                      </div>
                      <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-accent/10 text-accent"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl mb-8 text-primary">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-accent/20">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 pb-6">
                      <div>
                        <CardTitle className="text-primary">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg">{edu.institution}</CardDescription>
                      </div>
                      <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  {/* <CardContent>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent> */}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;