import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Systems Professional II / Senior Developer",
      company: "University of Kentucky (ITS RCI)",
      location: "Lexington, KY",
      duration: "July 2024 - Present",
      description: "Significantly reduced HPC cluster build and maintenance time by automating processes with Ansible scripts and architecting infrastructure for multiple high-performance computing environments with Slurm scheduling and GPFS storage. Led technical team of 10 developers in application design, resulting in 2 accepted conference papers.",
      technologies: ["SLURM", "Docker", "Podman", "PostgreSQL", "Prometheus"]

    },
    {
      title: "Software Developer",
      company: "NSF ACCESS Support (UKy)",
      location: "Lexington, KY",
      duration: "September 2022 - June 2024",
      description: "Designed and implemented the ACCESS Resource Advisor recommender system to help users select optimal high-performance computers for their needs. Developed REST APIs serving thousands of daily requests for HPC system information and designed SQL database architecture for efficient scaling.",
      technologies: ["Python", "Sqlite", "REST API", "HTML", "PostgreSQL"]
    },
    {
      title: "Software Developer",
      company: "Berea College",
      location: "Berea, KY",
      duration: "Jully 2021 - May 2022",
      description: "Developed full-stack applications for tracking volunteer hours, course catalogs, and chemical inventory management. Implemented unit tests and MVC design patterns while ensuring cross-device compatibility and accessibility features including screen reader support.",
      technologies: ["Python", "MySQL", "JavaScript", "Bootstrap", "HTML"]
    },
    {
      title: "Open Source Contributor",
      company: "Runestone Interactive",
      location: "Remote",
      duration: "June 2020 - August 2020",
      description: "Co-authored the first version of the How to Think Like a Data Scientist book on Runestone Academy, implementing business datasets and creating comprehensive instructions for data cleaning, pandas DataFrame usage, and Python programming.",
      technologies: ["Python", "Scikit-learn", "Pandas", "reStructuredText"]
    }
  ];

  const education = [
    {
      degree: "Master's of Science in Computer Science",
      institution: "University of Kentucky",
      location: "Kentucky, USA",
      duration: "2022 - 2024",
    },
    {
      degree: "Bachelor's of Arts in Computer Science",
      institution: "Berea College",
      location: "Kentucky, USA",
      duration: "2018 - 2022",
    },
    {
      degree: "Bachelor's of Arts in Mathematics",
      institution: "Berea College",
      location: "Kentucky, USA",
      duration: "2018 - 2022",
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
            <h3 className="text-2xl mb-8 text-primary">Work Experience</h3>
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