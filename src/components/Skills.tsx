import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Database, Cpu, Cloud } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML", "CSS"],
      category: "frontend"
    },
    {
      title: "Backend",
      icon: <Database className="h-6 w-6" />,
      skills: ["Python", "C++", "Go", "PostgreSQL", "REST APIs", "GraphQL", "Node.js"],
      category: "backend"
    },
    {
      title: "HPC & Infrastructure",
      icon: <Cpu className="h-6 w-6" />,
      skills: ["SLURM", "Lmod", "Grafana", "Prometheus", "Docker", "Podman", "Singularity", "OpenOnDemand"],
      category: "infrastructure"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6"/>,
      skills: ["AWS applications", "Atlassian (Jira, Confluence)", "Linux", "Git/GitHub", "CI/CD (Github Actions, Jenkins)"],
      category: "cloud"
    }
  ];

  const interests = [
    "Open Source", "Machine Learning", "Music", "Reading", "Minimalism", "Tinkering"
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      sustainability: "bg-green-500/10 text-green-700 border-green-500/20",
      productivity: "bg-blue-500/10 text-blue-700 border-blue-500/20",
      frontend: "bg-purple-500/10 text-purple-700 border-purple-500/20",
      backend: "bg-orange-500/10 text-orange-700 border-orange-500/20",
      infrastructure: "bg-gray-500/10 text-gray-700 border-gray-500/20",
      cloud: "bg-cyan-500/10 text-cyan-700 border-cyan-500/20",
      featured: "bg-amber-500/10 text-amber-700 border-amber-500/20",
    };
    return colors[category] || "bg-gray-500/10 text-gray-700";
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-primary">
            Skills & Interests
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => (
              <Card key={index} className="border-accent/20 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-primary">
                    {skill.icon}
                    <span className="text-sm">{skill.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((s: string, skillIndex: number) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={getCategoryColor(skill.category)}
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-accent/20 flex">
            <CardHeader>
              <CardTitle className="text-primary text-center">Personal Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {interests.map((interest, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;