
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/80 text-sm">
            © {new Date().getFullYear()} Sandesh Lamichhane. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;