import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Modern_developer_hero_illustration_243abf15.png";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Développeur Full-Stack
                <span className="block text-primary">Créant des Applications</span>
                <span className="block">Web Modernes</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Je crée des expériences numériques fluides avec des technologies de pointe. 
                Spécialisé dans le développement TypeScript, React et Node.js.
              </p>
            </div>

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

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">Ans d'Expérience</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Projets Réalisés</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">20+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Espace de travail de développeur moderne"
                className="w-full h-auto"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>

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