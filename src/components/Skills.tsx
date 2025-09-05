import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Smartphone, 
  Server, 
  Database, 
  Cloud, 
  Zap,
  Globe,
  GitBranch,
  Shield,
  Cpu
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "React/Next.js", level: 95, years: "5+ anos" },
        { name: "TypeScript", level: 92, years: "4+ anos" },
        { name: "Vue.js", level: 85, years: "3+ anos" },
        { name: "Tailwind CSS", level: 90, years: "3+ anos" }
      ]
    },
    {
      icon: Server,
      title: "Backend",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        { name: "Node.js", level: 94, years: "6+ anos" },
        { name: "Python", level: 88, years: "4+ anos" },
        { name: "Go", level: 80, years: "2+ anos" },
        { name: "GraphQL", level: 87, years: "3+ anos" }
      ]
    },
    {
      icon: Database,
      title: "Database",
      color: "text-accent-purple",
      bgColor: "bg-accent-purple/10",
      skills: [
        { name: "PostgreSQL", level: 90, years: "5+ anos" },
        { name: "MongoDB", level: 88, years: "4+ anos" },
        { name: "Redis", level: 85, years: "3+ anos" },
        { name: "Elasticsearch", level: 80, years: "2+ anos" }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "AWS", level: 92, years: "4+ anos" },
        { name: "Docker", level: 90, years: "4+ anos" },
        { name: "Kubernetes", level: 85, years: "3+ anos" },
        { name: "Terraform", level: 82, years: "2+ anos" }
      ]
    }
  ];

  const tools = [
    "VS Code", "Git", "Docker", "Figma", "Postman", "Slack", 
    "Jira", "Notion", "Linear", "Vercel", "Netlify", "Supabase"
  ];

  const certifications = [
    {
      name: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      badge: "🏆"
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google Cloud",
      year: "2023",
      badge: "☁️"
    },
    {
      name: "Microsoft Azure Developer",
      issuer: "Microsoft",
      year: "2022",
      badge: "🚀"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & <span className="gradient-text">Tecnologias</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Domínio completo do stack moderno, desde interfaces interativas até 
            arquiteturas cloud escaláveis
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="group hover:shadow-tech transition-all duration-500 hover:scale-105 border-0 bg-gradient-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center group-hover:animate-tech-pulse`}>
                      <IconComponent className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <span className="text-xl font-semibold">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <div className="text-right">
                          <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                          <span className="text-xs text-muted-foreground ml-2">{skill.years}</span>
                        </div>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                        style={{
                          animationDelay: `${(index * 0.1) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16 animate-fade-in delay-500">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Ferramentas & Plataformas
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, index) => (
              <Badge 
                key={tool}
                variant="outline"
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-fade-in delay-700">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Certificações
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.name}
                className="text-center hover:shadow-tech transition-all duration-300 hover:scale-105 border-0 bg-gradient-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{cert.badge}</div>
                  <h4 className="font-semibold text-foreground mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-xs text-primary font-medium">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in delay-1000">
          {[
            { icon: Zap, label: "Performance", desc: "Otimização avançada" },
            { icon: Shield, label: "Security", desc: "Práticas seguras" },
            { icon: Globe, label: "Scalable", desc: "Arquitetura escalável" },
            { icon: Cpu, label: "Modern", desc: "Stack moderno" }
          ].map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div 
                key={highlight.label}
                className="text-center group hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-tech rounded-xl shadow-tech flex items-center justify-center mx-auto mb-3 group-hover:animate-glow">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-foreground">{highlight.label}</h4>
                <p className="text-sm text-muted-foreground">{highlight.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;