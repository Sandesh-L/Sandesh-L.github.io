// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";
// import { Label } from "./ui/label";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // TODO: Handle form submission
  //   console.log('Form submitted');
  // };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "sandesh.lamichhane1@gmail.com",
      href: "mailto:sandesh.lamichhane1@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Richmond, KY",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/sandesh-l"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sandesh-l"
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-primary">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl mb-6 text-primary">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                I'm always interested in new opportunities and collaborations.
                Whether you have a project in mind or just want to chat about something,
                feel free to reach out!
              </p>


              <div>
                <h4 className="text-lg mb-4 text-primary">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="border-accent/20 hover:bg-accent hover:text-accent-foreground"
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      {social.icon}
                      <span className="sr-only">{social.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 p-3 rounded-lg
                      border border-accent text-foreground transition-all duration-300 ease-in-out
                      hover:bg-accent hover:translate-x-2 cursor-pointer"
                  >
                    <div
                      className="flex items-center justify-center w-12 h-12
                      text-accent group-hover:text-primary-foreground"
                    >
                      {item.icon}
                    </div>
                    <div className="group-hover:text-primary-foreground">
                      <p className="text-sm text-muted-foreground group-hover:text-primary-foreground">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        className="text-primary group-hover:text-primary-foreground transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            {/* Contact Form */}
            {/* <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-primary">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="border-accent/20 focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="border-accent/20 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="border-accent/20 focus:border-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="border-accent/20 focus:border-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or just say hello!"
                      rows={5}
                      className="border-accent/20 focus:border-accent resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;