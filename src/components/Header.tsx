import { Button } from "./ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-primary cursor-pointer" onClick={() => scrollToSection('hero')}>
            <h3>Sandesh Lamichhane</h3>
          </div>
          <div className="hidden md:flex space-x-8">
            <Button variant="ghost" onClick={() => scrollToSection('about')}>
              About
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('skills')}>
              Skills
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('projects')}>
              Projects
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('experience')}>
              Experience
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')}>
              Contact
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;