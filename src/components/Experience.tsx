import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Users, TrendingUp, Award, Languages } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Polícia Civil",
      position: "Desenvolvedora Fullstack",
      period: "2024 - Presente",
      location: "Belém, PA",
      type: "Projeto Específico",
      description: "Desenvolvi sistema interno completo para gerenciamento de cartas precatórias, garantindo eficiência e segurança no processo judicial. A plataforma centraliza todo o fluxo de trabalho, desde a geração até o rastreamento de protocolos.",
      achievements: [
        "Implementou geração automatizada de protocolos únicos com rastreamento por estado",
        "Desenvolveu sistema de autenticação segura via e-mail institucional",
        "Criou integração de envio direto de protocolos por e-mail",
        "Aplicou Clean Code e princípios SOLID garantindo manutenibilidade do sistema"
      ],
      technologies: ["PHP", "Laravel", "Vue 3", "TypeScript", "PostgreSQL", "RESTful API"],
      companySize: "1000+",
      industry: "Segurança Pública"
    },
    {
      company: "OSM Consultoria e Sistemas",
      position: "Analista de Sistemas",
      period: "2023 - 2024",
      location: "Remoto",
      type: "Tempo Integral",
      description: "Atuei na manutenção e evolução de sistemas legados, garantindo estabilidade e continuidade das operações. Responsável por correção de falhas, implementação de melhorias e suporte técnico especializado.",
      achievements: [
        "Manteve estabilidade de sistemas críticos com 99.9% de uptime",
        "Implementou melhorias que aumentaram performance em 30%",
        "Realizou suporte técnico especializado para clientes e áreas internas",
        "Desenvolveu soluções para sistemas legados com foco em qualidade e eficiência"
      ],
      technologies: ["Caché", "InterSystems", "Sistemas Legados", "Banco de Dados OO", "Suporte Técnico"],
      companySize: "50-100",
      industry: "Consultoria em TI"
    },
    {
      company: "ParáFood",
      position: "Desenvolvedora Fullstack",
      period: "2025 - 2025",
      location: "Belém, PA",
      type: "Projeto Proprietário",
      description: "Desenvolvi o APP ParáFood, uma plataforma completa de delivery para restaurantes, oferecendo ecossistema integrado de gestão para o setor alimentício. O sistema atende gestores e clientes finais com funcionalidades avançadas.",
      achievements: [
        "Criou sistema completo de gestão de colaboradores e operações de restaurante",
        "Implementou dashboard com relatórios e métricas em tempo real",
        "Desenvolveu integração de pagamentos (PIX, cartão e delivery)",
        "Construiu sistema de recebimento e acompanhamento de pedidos em tempo real"
      ],
      technologies: ["PHP", "Laravel", "Vue 3", "TypeScript", "TailwindCSS", "PostgreSQL"],
      companySize: "1-10",
      industry: "FoodTech"
    },
    {
      company: "TaskForce",
      position: "Desenvolvedora Fullstack",
      period: "2025 - 2025",
      location: "Remoto",
      type: "Projeto Proprietário",
      description: "Desenvolvi o TaskForce, um sistema completo de gerenciamento de tarefas com interface moderna e intuitiva. A plataforma oferece funcionalidades avançadas para gerenciar projetos de forma eficiente e colaborativa.",
      achievements: [
        "Implementou sistema drag & drop para gerenciamento intuitivo de tarefas",
        "Desenvolveu notificações em tempo real para colaboração eficiente",
        "Criou integração com Google OAuth para autenticação segura",
        "Construiu interface moderna e responsiva com Vue.js 3 e Inertia.js"
      ],
      technologies: ["Laravel 8.1+", "Vue.js 3", "Inertia.js", "Google OAuth", "MySQL", "Real-time"],
      companySize: "1-10",
      industry: "Productivity Software"
    },
    {
      company: "Angels Academy",
      position: "Desenvolvedora Fullstack",
      period: "2025 - 2025",
      location: "Belém, PA",
      type: "Projeto Específico",
      description: "Desenvolvi plataforma completa de vídeo aulas para escola de inglês usando stack 100% gratuita. Sistema com dashboard do professor para gerenciar alunos e aulas, área do aluno com acesso organizado por módulos, e interface totalmente responsiva.",
      achievements: [
        "Implementou sistema de upload e organização de vídeos via YouTube (gratuito e ilimitado)",
        "Criou dashboard do professor com controle de acesso por níveis (básico, intermediário, avançado)",
        "Desenvolveu área do aluno com marcação de 'aula assistida' e downloads de materiais",
        "Construiu sistema de autenticação e relatórios de progresso dos alunos"
      ],
      technologies: ["React 18", "Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "YouTube API", "NextAuth.js"],
      companySize: "10-50",
      industry: "EdTech"
    },
  ];

  const stats = [
    { label: "Anos de Experiência", value: "4+", icon: Calendar },
    { label: "Projetos Entregues", value: "10+", icon: TrendingUp },
    { label: "Linguagens", value: "2", icon: Languages },
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