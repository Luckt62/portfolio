import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import profileImage from "@assets/generated_images/Professional_developer_headshot_40bce728.png";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating elegant solutions to complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">
                I'm a full-stack developer with a passion for building scalable web applications 
                that make a difference. With over 5 years of experience in the industry, I've had 
                the privilege of working with startups and established companies to bring their 
                digital visions to life.
              </p>
              <p className="text-foreground leading-relaxed">
                My expertise spans across modern JavaScript frameworks, cloud infrastructure, and 
                DevOps practices. I believe in writing clean, maintainable code and following 
                best practices to ensure long-term project success.
              </p>
              <p className="text-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge through technical writing and mentoring.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button data-testid="button-download-cv" className="gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
              <div className="text-sm text-muted-foreground">
                Available for freelance opportunities
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <img
                src={profileImage}
                alt="Professional headshot"
                className="w-full rounded-2xl"
                data-testid="img-profile"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}