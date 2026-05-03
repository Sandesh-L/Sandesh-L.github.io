import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Globe, Cpu, Brain } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "Go", "C/C++", "SQL", "JavaScript", "TypeScript"],
      category: "languages",
    },
    {
      title: "Web & Backend",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "Vue", "Django", "FastAPI", "Tailwind CSS", "PostgreSQL"],
      category: "web",
    },
    {
      title: "HPC & Systems",
      icon: <Cpu className="h-6 w-6" />,
      skills: ["Slurm", "GPFS", "Ansible", "Docker", "Kubernetes", "Singularity / Apptainer", "MPI", "InfiniBand", "Linux", "AWS"],
      category: "infrastructure",
    },
    {
      title: "AI / ML",
      icon: <Brain className="h-6 w-6" />,
      skills: ["PyTorch", "LLMs", "RAG", "MCP", "NVIDIA GPUs", "Computer Vision", "NLP"],
      category: "ml",
    },
  ];

  const interests = ["Reading", "Flute", "Piano", "Tinkering", "Open Source"];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      languages: "bg-purple-500/10 text-purple-700 border-purple-500/20",
      web: "bg-orange-500/10 text-orange-700 border-orange-500/20",
      infrastructure: "bg-gray-500/10 text-gray-700 border-gray-500/20",
      ml: "bg-green-500/10 text-green-700 border-green-500/20",
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

          <div className="grid md:grid-cols-2 gap-6 mb-12">
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

          <Card className="border-accent/20">
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
