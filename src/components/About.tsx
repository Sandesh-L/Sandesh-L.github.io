import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-primary">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-accent/20">
                <CardContent className="p-8">
                  <div className="w-48 h-48 bg-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-6xl">👋</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <p className="mb-6 text-lg">
                I'm a passionate developer with a love for creating innovative solutions and beautiful user experiences.
                With a background in software development and HPC infrastructure, I enjoy working on projects that challenge me to learn and grow.
              </p>
              <p className="mb-6">
                When I'm not coding, you can find me exploring new technologies, reading,
                or enjoying the outdoors.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full">Creative Problem Solver</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">Team Player</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">Continuous Learner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
