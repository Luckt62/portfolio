import { Card } from "@/components/ui/card";
import profileImage from "@assets/generated_images/Professional_developer_headshot_40bce728.png";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À Propos de Moi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionné par la création de solutions élégantes à des problèmes complexes
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">
                Je suis un développeur full-stack passionné par la création d'applications web évolutives 
                qui font la différence. Avec plus de 5 ans d'expérience dans l'industrie, j'ai eu le 
                privilège de travailler avec des startups et des entreprises établies pour donner vie à 
                leurs visions numériques.
              </p>
              <p className="text-foreground leading-relaxed">
                Mon expertise couvre les frameworks JavaScript modernes, l'infrastructure cloud et les 
                pratiques DevOps. Je crois en l'écriture de code propre et maintenable et en suivant les 
                meilleures pratiques pour assurer le succès à long terme des projets.
              </p>
              <p className="text-foreground leading-relaxed">
                Quand je ne code pas, vous me trouverez en train d'explorer de nouvelles technologies, 
                de contribuer à des projets open-source, ou de partager mes connaissances à travers 
                l'écriture technique et le mentorat.
              </p>
            </div>

            <div className="pt-4">
              <div className="text-sm text-muted-foreground">
                Disponible pour des opportunités freelance
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <img
                src={profileImage}
                alt="Photo professionnelle"
                className="w-full rounded-2xl"
                data-testid="img-profile"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Ans d'Expérience</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projets Réalisés</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Client</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}