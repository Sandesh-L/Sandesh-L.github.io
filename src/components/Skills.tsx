import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Globe, Cpu, Brain } from "lucide-react";

type SkillGroup = {
  title: string;
  icon: React.ReactNode;
  category: "languages" | "web" | "infrastructure" | "ml";
  skills: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages",
    icon: <Code className="h-5 w-5" />,
    category: "languages",
    skills: ["Python", "Go", "C / C++", "SQL", "JavaScript", "TypeScript", "Bash"],
  },
  {
    title: "Web & Backend",
    icon: <Globe className="h-5 w-5" />,
    category: "web",
    skills: [
      "FastAPI",
      "Flask",
      "Gunicorn",
      "Django",
      "React",
      "Vue",
      "Tailwind CSS",
      "PostgreSQL",
      "MySQL",
      "Peewee",
      "SQLAlchemy",
      "uv",
      "pyproject.toml",
      "Pydantic v2",
      "Pyright",
      "ruff",
    ],
  },
  {
    title: "HPC & Systems",
    icon: <Cpu className="h-5 w-5" />,
    category: "infrastructure",
    skills: [
      "Slurm",
      "GPFS",
      "Ansible",
      "Docker",
      "Kubernetes",
      "Singularity / Apptainer",
      "Podman",
      "MPI",
      "InfiniBand",
      "Open OnDemand",
      "Linux",
      "AWS",
    ],
  },
  {
    title: "AI / ML",
    icon: <Brain className="h-5 w-5" />,
    category: "ml",
    skills: [
      "PyTorch",
      "TensorFlow / tflite",
      "ONNX",
      "Whisper",
      "MediaPipe",
      "Meta SAM2 / SAM3D",
      "NVIDIA GPUs",
      "MIG",
      "vLLM",
      "LLMs",
      "RAG",
      "MCP",
      "Computer Vision",
      "NLP",
    ],
  },
];

const CATEGORY_COLOR: Record<SkillGroup["category"], string> = {
  languages: "bg-purple-500/10 text-purple-700 border-purple-500/20",
  web: "bg-orange-500/10 text-orange-700 border-orange-500/20",
  infrastructure: "bg-gray-500/10 text-gray-700 border-gray-500/20",
  ml: "bg-green-500/10 text-green-700 border-green-500/20",
};

const Skills = () => {
  const interests = ["Reading", "Flute", "Piano", "Tinkering", "Open Source"];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-primary">
            Skills & Interests
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {SKILL_GROUPS.map((group) => (
              <Card
                key={group.title}
                className="border-accent/20 hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-primary">
                    {group.icon}
                    <span className="text-sm">{group.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((s) => (
                      <Badge
                        key={s}
                        variant="secondary"
                        className={CATEGORY_COLOR[group.category]}
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
              <CardTitle className="text-primary text-center">
                Personal Interests
              </CardTitle>
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
