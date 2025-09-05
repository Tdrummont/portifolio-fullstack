import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Rocket, Users, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "8+ Anos de Experiência",
      description: "Desenvolvimento web e mobile com foco em performance e UX"
    },
    {
      icon: Rocket,
      title: "50+ Projetos Entregues",
      description: "Soluções completas para startups e grandes empresas"
    },
    {
      icon: Users,
      title: "Liderança Técnica",
      description: "Mentoria de equipes e arquitetura de sistemas escaláveis"
    },
    {
      icon: Award,
      title: "Certificações Cloud",
      description: "AWS Solutions Architect e Google Cloud Professional"
    }
  ];

  const values = [
    "Clean Code", "Performance", "Escalabilidade", "Inovação", 
    "Colaboração", "Aprendizado Contínuo", "Qualidade", "Agilidade"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre <span className="gradient-text">Mim</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sou um <strong className="text-foreground">desenvolvedor fullstack senior</strong> apaixonado 
                por criar soluções digitais que fazem a diferença. Com mais de 8 anos de experiência, 
                especializo-me em <strong className="text-primary">arquiteturas escaláveis</strong> e 
                <strong className="text-primary"> experiências de usuário excepcionais</strong>.
              </p>
              
              <p>
                Minha jornada começou com curiosidade sobre como funcionam as aplicações web, 
                e evolui para liderar equipes técnicas em projetos de alta complexidade. 
                Trabalho com as mais modernas tecnologias do mercado, sempre priorizando 
                <strong className="text-secondary"> performance</strong> e 
                <strong className="text-secondary"> qualidade de código</strong>.
              </p>
              
              <p>
                Além do desenvolvimento, sou mentor de novos talentos e contribuo ativamente 
                para a comunidade open source. Acredito que o <strong className="text-primary">
                conhecimento compartilhado</strong> é a base para construirmos um ecossistema 
                tecnológico mais forte e inovador.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Valores & Princípios</h3>
              <div className="flex flex-wrap gap-2">
                {values.map((value, index) => (
                  <Badge 
                    key={value} 
                    variant="secondary" 
                    className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {value}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6 animate-fade-in delay-300">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card 
                  key={highlight.title}
                  className="group hover:shadow-tech transition-all duration-300 hover:scale-105 border-0 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center group-hover:animate-tech-pulse">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:gradient-text transition-all">
                          {highlight.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;