import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, Star, Users, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plataforma completa de e-commerce com dashboard administrativo, sistema de pagamentos, analytics em tempo real e performance otimizada.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
      stats: { users: "50k+", performance: "98%", uptime: "99.9%" },
      highlights: ["PWA", "Real-time", "Mobile-first"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Dashboard inteligente com machine learning para análise preditiva de dados, visualizações interativas e relatórios automatizados.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Python", "TensorFlow", "D3.js", "Docker"],
      stats: { accuracy: "94%", speed: "2x faster", insights: "1000+" },
      highlights: ["AI/ML", "Real-time", "Predictive"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "Microservices Architecture",
      description: "Sistema distribuído com arquitetura de microserviços, API Gateway, service mesh e observabilidade completa.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: ["Go", "Kubernetes", "gRPC", "Istio", "Prometheus"],
      stats: { services: "12", latency: "<100ms", scalability: "Auto" },
      highlights: ["Microservices", "Cloud-native", "Scalable"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Real-time Collaboration Tool",
      description: "Ferramenta de colaboração em tempo real com sincronização multi-usuário, chat integrado e compartilhamento de arquivos.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Socket.io", "Redis", "MongoDB", "WebRTC"],
      stats: { users: "10k+", latency: "<50ms", uptime: "99.8%" },
      highlights: ["Real-time", "Collaborative", "WebRTC"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Projetos em <span className="gradient-text">Destaque</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Seleção dos projetos mais impactantes, demonstrando expertise técnica 
            e resultados mensuráveis
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden border-0 bg-gradient-card hover:shadow-tech transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Play className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Featured Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-tech text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>

                {/* Highlights */}
                <div className="absolute top-4 right-4 flex space-x-1">
                  {project.highlights.map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-semibold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {otherProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-card transition-all duration-300 hover:scale-105 border-0 bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex space-x-1">
                  {project.highlights.map((highlight) => (
                    <Badge key={highlight} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in delay-1000">
          <p className="text-muted-foreground mb-6">
            Veja mais projetos no meu GitHub
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              Ver Todos os Projetos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
