import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            À Propos de Moi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionné par la création de solutions élégantes à des problèmes
            complexes
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">
                Je suis un développeur Full Stack de 19 ans, passionné par la création
                d’expériences numériques modernes et efficaces. Je maîtrise le développement
                front-end et back-end afin de concevoir des applications complètes,
                performantes et orientées utilisateur.
              </p>
              <p className="text-foreground leading-relaxed">
                Curieux et motivé, je suis constamment en train d’apprendre pour approfondir mes connaissances et m’adapter aux nouvelles tendances du développement. Ce que j’aime le plus : transformer une idée en un projet concret, utile et esthétiquement abouti.
              </p>
              <p className="text-foreground leading-relaxed">
                Quand je ne code pas, vous me trouverez en train d'explorer de
                nouvelles technologies, de contribuer à des projets open-source,
                ou de partager mes connaissances à travers l'écriture technique
                et le mentorat.
              </p>
            </div>

            <div className="pt-4">
              <div className="text-sm text-muted-foreground">
                Disponible pour des opportunités freelance
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">
                  Ans d'Expérience
                </div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">
                  Projets Réalisés
                </div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">
                  Technologies
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
