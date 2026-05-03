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
                  <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center shadow-lg ring-4 ring-accent/10">
                    <span className="text-8xl font-serif italic text-primary-foreground select-none translate-y-[-4px]">SL</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <p className="mb-6 text-lg">
                I'm a developer based in Kentucky. I build things to solve problems in my life and in the lives of people around me. Sometimes that's the HPC platforms ~1,200 researchers at the University of Kentucky run their work on, sometimes a freelance website for a local business that needed one, and sometimes a bilingual Nepali genealogy app I built so my own family could keep track of itself.
              </p>
              <p className="mb-6">
                When I'm not coding, you'll find me reading, playing flute or piano, or tinkering with whatever I'm currently obsessed with.
              </p>
              <p>
                On the work side, I'm currently digging into computer vision and knowledge synthesis systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
