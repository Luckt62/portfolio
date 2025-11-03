import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

import theSchoolImg from "@/images/theSchool.png";
import towerDefenseImg from "@/images/towerDefense.png";

const projects = [
  {
    id: 1,
    title: "The School RP FR",
    description:
      "Jeu francophone de rôleplay scolaire avec progression, clubs et personnalité de personnage.",
    image: theSchoolImg,
    technologies: ["Lua", "Luau", "DataStore"],
    liveUrl: "https://www.roblox.com/games/88123962653564/The-School-RP-FR",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "Tower Defense",
    status: "development",
    description:
      "Projet Tower Defense : vagues d'ennemis, stratégies de défense, amélioration des tours et pathfinding avancé.",
    image: towerDefenseImg,
    technologies: ["Luau", "TypeScript", "Roblox Studio", "PathfindingService"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
];

export function ProjectsSection() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projets Roblox
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une sélection de mes créations développées sur Roblox Studio
          </p>
        </div>

        {/* ⭐ FEATURED PROJECT */}
        {featuredProject && (
          <Card className="mb-12 overflow-hidden hover-elevate transition-all">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <Badge variant="secondary" className="mb-3">
                    Projet en Vedette
                  </Badge>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl mb-2">
                      {featuredProject.title}
                    </CardTitle>
                    <CardDescription>
                      {featuredProject.description}
                    </CardDescription>
                  </CardHeader>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <CardFooter className="p-0 gap-3">
                  <Button asChild>
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Jouer
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        )}

        {/* AUTRES PROJETS */}
        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover-elevate transition-all group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="aspect-video w-full object-cover group-hover:scale-105 transition-transform"
              />

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>

                {project.status === "development" && (
                  <Badge variant="secondary">🚧 En Développement</Badge>
                )}
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-3">
                {project.liveUrl ? (
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Jouer
                    </a>
                  </Button>
                ) : (
                  <Button size="sm" disabled>
                    🚧 Bientôt disponible
                  </Button>
                )}

                <Button size="sm" variant="outline" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
