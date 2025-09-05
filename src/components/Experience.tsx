import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Users, TrendingUp, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Fullstack Developer & Tech Lead",
      period: "2022 - Presente",
      location: "São Paulo, SP (Remoto)",
      type: "Tempo Integral",
      description: "Lidero equipe de 8 desenvolvedores na criação de soluções escaláveis para fintech. Responsável pela arquitetura de microserviços que processa 1M+ transações diárias.",
      achievements: [
        "Reduziu latência da API em 60% otimizando queries e implementando cache Redis",
        "Implementou CI/CD que aumentou deployment frequency em 300%",
        "Mentoreou 5 desenvolvedores júnior, com 100% de promoção interna",
        "Arquitetou sistema que suporta 50k usuários simultâneos"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
      companySize: "200-500",
      industry: "Fintech"
    },
    {
      company: "StartupXYZ",
      position: "Fullstack Developer",
      period: "2020 - 2022",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description: "Desenvolvedor full-stack em startup de crescimento rápido. Participei do crescimento de 0 a 100k usuários, implementando features críticas e otimizações de performance.",
      achievements: [
        "Desenvolveu MVP que gerou $1M em revenue no primeiro ano",
        "Implementou sistema de notificações real-time para 100k+ usuários",
        "Criou dashboard analytics que reduziu churn em 25%",
        "Estabeleceu práticas de code review que reduziram bugs em 40%"
      ],
      technologies: ["Vue.js", "Python", "MongoDB", "Redis", "AWS", "Stripe"],
      companySize: "10-50",
      industry: "SaaS"
    },
    {
      company: "Agência Digital Premium",
      position: "Frontend Developer",
      period: "2018 - 2020",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description: "Desenvolvedor frontend especializado em e-commerce e landing pages de alta conversão. Trabalhei com clientes enterprise criando experiências web premium.",
      achievements: [
        "Desenvolveu 30+ projetos com taxa de conversão média de 15%",
        "Implementou Progressive Web Apps que aumentaram engagement em 80%",
        "Criou sistema de componentes reutilizáveis usado por 20+ projetos",
        "Obteve 99+ scores no Lighthouse em todos os projetos"
      ],
      technologies: ["React", "JavaScript", "Sass", "Webpack", "Figma", "WordPress"],
      companySize: "50-100",
      industry: "Agência Digital"
    },
    {
      company: "FreelanceDev",
      position: "Desenvolvedor Freelancer",
      period: "2016 - 2018",
      location: "Remoto",
      type: "Freelancer",
      description: "Freelancer especializado em soluções web para PMEs. Desenvolvi desde landing pages até sistemas completos de gestão, sempre focando em performance e usabilidade.",
      achievements: [
        "Completei 50+ projetos com 98% de satisfação do cliente",
        "Desenvolveu sistema ERP que aumentou produtividade em 200%",
        "Criou e-commerce que gerou R$2M em vendas no primeiro ano",
        "Construí rede de 20+ clientes recorrentes"
      ],
      technologies: ["JavaScript", "PHP", "MySQL", "jQuery", "Bootstrap", "WordPress"],
      companySize: "1",
      industry: "Diversos"
    }
  ];

  const stats = [
    { label: "Anos de Experiência", value: "8+", icon: Calendar },
    { label: "Projetos Entregues", value: "100+", icon: TrendingUp },
    { label: "Desenvolvedores Mentorados", value: "15+", icon: Users },
    { label: "Certificações", value: "5", icon: Award }
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experiência <span className="gradient-text">Profissional</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Jornada de crescimento técnico e liderança, com impacto mensurável 
            em cada posição
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in delay-300">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center group hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-tech rounded-xl shadow-tech flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary via-secondary to-transparent opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 animate-fade-in ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-tech rounded-full border-4 border-background shadow-glow z-10"></div>

                {/* Content */}
                <div className="flex-1">
                  <Card className="group hover:shadow-tech transition-all duration-500 hover:scale-105 border-0 bg-gradient-card">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:gradient-text transition-all">
                            {exp.position}
                          </h3>
                          <div className="flex items-center space-x-2 text-primary font-medium">
                            <Building className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className="text-right mt-2 sm:mt-0">
                          <div className="flex items-center text-sm text-muted-foreground mb-1">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">{exp.type}</Badge>
                        <Badge variant="outline">{exp.industry}</Badge>
                        <Badge variant="outline">{exp.companySize} funcionários</Badge>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Principais Conquistas:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Tecnologias Utilizadas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in delay-1000">
          <p className="text-muted-foreground mb-6">
            Interessado em saber mais sobre minha jornada profissional?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge 
              variant="outline" 
              className="px-6 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
            >
              📄 Download CV Completo
            </Badge>
            <Badge 
              variant="outline" 
              className="px-6 py-3 text-sm hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-pointer"
            >
              💼 Vamos Conversar
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;