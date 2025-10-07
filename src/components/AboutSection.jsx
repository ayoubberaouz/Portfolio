import { Briefcase, Code, User } from "lucide-react";
import { Button } from "@mui/material";
const handleDownloadCV = () => {
  const link = document.createElement("a");

  link.href = "my_cv/Ayoub beraouz.pdf";
  link.download = "my_cv/Ayoub beraouz.pdf"; // Customize the downloaded filename if needed

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Full-Stack Contributor
            </h3>

            <p className="text-muted-foreground">
              With proven experience across the full development lifecycle, I
              specialize in creating robust, seamless web applications using
              modern, high-demand frameworks like Angular, Spring Boot, React,
              and Laravel.
            </p>

            <p className="text-muted-foreground">
              I am passionate about applying a clean code approach to build
              elegant solutions for complex problems. I excel in collaborative,
              team-focused environments, and I'm dedicated to leveraging my
              skills in HTML5 & CSS3 & JS for strong foundational front-end
              design, staying current with the ever-evolving web landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <Button>
                <a
                  onClick={handleDownloadCV}
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Web Developer & Full-Stack Contributor
                  </h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Project Collaboration & Delivery
                  </h4>
                  <p className="text-muted-foreground">
                    A flexible team player adept at collaborating on and
                    delivering diverse projects across multiple technology
                    stacks (e.g., Spring Boot, Angular, Symfony, React).
                    Experienced in contributing to all stages of development,
                    ensuring project goals are met with technical proficiency
                    and effective communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
