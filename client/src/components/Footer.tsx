import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Créer des applications web modernes avec passion et précision.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild data-testid="footer-github">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="footer-linkedin">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="footer-twitter">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="footer-email">
                <a href="mailto:hello@example.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liens Rapides</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-link-about"
              >
                À Propos
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-link-projects"
              >
                Projets
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-link-skills"
              >
                Compétences
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-link-contact"
              >
                Contact
              </button>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Me Contacter</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Vous avez un projet en tête ?</p>
              <p>Travaillons ensemble pour donner vie à vos idées.</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollToSection("contact")}
                data-testid="footer-button-contact"
                className="mt-4"
              >
                Me Contacter
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Fait avec <Heart className="h-4 w-4 text-red-500 fill-red-500" /> par Développeur Full-Stack
            <span className="mx-2">•</span>
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}