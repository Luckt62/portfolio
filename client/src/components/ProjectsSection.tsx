import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import ecommerceImg from "@assets/generated_images/E-commerce_project_screenshot_096761a5.png";
import taskManagerImg from "@assets/generated_images/Task_manager_project_screenshot_e43e038e.png";
import analyticsImg from "@assets/generated_images/Analytics_dashboard_screenshot_130ca2b5.png";

const projects = [
  {
    id: 1,
    title: "Plateforme E-Commerce",
    description: "Une plateforme e-commerce complète avec gestion des stocks en temps réel, traitement des paiements et tableau de bord analytique avancé.",
    image: ecommerceImg,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "Système de Gestion de Tâches",
    description: "Outil de gestion de tâches collaboratif avec mises à jour en temps réel, fonctionnalités de collaboration d'équipe et suivi de projet avancé.",
    image: taskManagerImg,
    technologies: ["TypeScript", "Next.js", "Prisma", "WebSocket"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 3,
    title: "Tableau de Bord Analytique",
    description: "Plateforme d'analyse en temps réel avec visualisation de données, rapports personnalisés et génération automatique d'insights.",
    image: analyticsImg,
    technologies: ["React", "D3.js", "Express", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

export function ProjectsSection() {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projets en Vedette</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une sélection de mes travaux récents présentant diverses technologies et approches de résolution de problèmes
          </p>
        </div>

        {featuredProject && (
          <Card className="mb-12 overflow-hidden hover-elevate transition-all" data-testid={`card-project-${featuredProject.id}`}>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-video md:aspect-auto">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover"
                  data-testid={`img-project-${featuredProject.id}`}
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="mb-2">
                    <Badge variant="secondary" data-testid={`badge-featured-${featuredProject.id}`}>Projet en Vedette</Badge>
                  </div>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl mb-2">{featuredProject.title}</CardTitle>
                    <CardDescription className="text-base">{featuredProject.description}</CardDescription>
                  </CardHeader>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" data-testid={`badge-tech-${tech}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardFooter className="p-0 gap-3">
                  <Button asChild data-testid={`button-live-${featuredProject.id}`}>
                    <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Démo en Direct
                    </a>
                  </Button>
                  <Button variant="outline" asChild data-testid={`button-github-${featuredProject.id}`}>
                    <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <Github className="h-4 w-4" />
                      Voir le Code
                    </a>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover-elevate transition-all group"
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  data-testid={`img-project-${project.id}`}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" data-testid={`badge-tech-${tech}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-3">
                <Button size="sm" asChild data-testid={`button-live-${project.id}`}>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Démo
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild data-testid={`button-github-${project.id}`}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}