import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Modern_developer_hero_illustration_243abf15.png";

import {
  SiTypescript,
  SiPython,
  SiPhp,
  SiJavascript,
  SiMysql,
  SiSharp,
  SiLua,
  SiDart,
  SiSymfony,
  SiFlutter,
  SiReact,
  SiPostgresql,
} from "react-icons/si";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Développeur Full-Stack
                <span className="block text-primary">
                  Créant des Applications
                </span>
                <span className="block">Web Modernes</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Je crée des expériences numériques fluides avec des technologies
                de pointe. Spécialisé dans le développement Typescript, Python,
                PHP et encore d'autres.
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                data-testid="button-view-projects"
                className="gap-2"
              >
                Voir les Projets
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                data-testid="button-contact-me"
              >
                Me Contacter
              </Button>
            </div>

            {/* STATS */}
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">2+</div>
                <div className="text-sm text-muted-foreground">
                  Ans d'Expérience
                </div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">3+</div>
                <div className="text-sm text-muted-foreground">
                  Projets Réalisés
                </div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">8+</div>
                <div className="text-sm text-muted-foreground">
                  Technologies
                </div>
              </div>
            </div>

            {/* TECHNO ICONS */}
            <div className="pt-6">
              <div className="text-sm text-muted-foreground mb-3">
                Technologies utilisées
              </div>

              <div className="flex flex-wrap gap-4" data-testid="tech-icons">
                {[
                  { icon: SiTypescript, test: "icon-typescript" },
                  { icon: SiJavascript, test: "icon-javascript" },
                  { icon: SiReact, test: "icon-react" },
                  { icon: SiPython, test: "icon-python" },
                  { icon: SiPhp, test: "icon-php" },
                  { icon: SiPostgresql, test: "icon-postgresql" },
                  { icon: SiMysql, test: "icon-mysql" },
                  { icon: SiSharp, test: "icon-csharp" },
                  { icon: SiSymfony, test: "icon-symfony" },
                  { icon: SiFlutter, test: "icon-flutter" },
                  { icon: SiDart, test: "icon-dart" },
                  { icon: SiLua, test: "icon-lua" },
                ].map(({ icon: Icon, test }) => (
                  <div
                    key={test}
                    className="p-3 rounded-lg bg-card border border-border hover:shadow-lg transition"
                    data-testid={test}
                  >
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE / IMAGE */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Espace de travail de développeur moderne"
                className="w-full h-auto"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>

        {/* SCROLL INDICATION */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <div className="text-sm text-muted-foreground text-center">
            <div>Défiler pour explorer</div>
            <div className="mt-2">↓</div>
          </div>
        </div>
      </div>
    </section>
  );
}
