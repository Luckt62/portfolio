import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["TypeScript", "HTML/CSS", "Dart"],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Python", "SQL", "C#", "API REST"],
  },
  {
    title: "Outils & Autres",
    icon: Wrench,
    skills: ["Git", "VS Code", "Figma", "Postman"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Compétences Techniques
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une boîte à outils complète pour créer des applications modernes et
            évolutives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="hover-elevate transition-all"
                data-testid={`card-skill-${category.title.toLowerCase()}`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        data-testid={`badge-skill-${skill}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
