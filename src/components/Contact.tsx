import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Send,
  Calendar,
  Coffee,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dev.senior@email.com",
      href: "mailto:dev.senior@email.com",
      description: "Resposta em até 24h"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (11) 99999-9999",
      href: "tel:+5511999999999",
      description: "WhatsApp disponível"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, Brasil",
      href: "#",
      description: "Timezone: UTC-3"
    },
    {
      icon: Calendar,
      label: "Disponibilidade",
      value: "Imediata",
      href: "#",
      description: "Projetos remotos/presenciais"
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      label: "GitHub", 
      href: "https://github.com",
      username: "@devsenior",
      followers: "2.5k"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://linkedin.com",
      username: "@dev-senior",
      followers: "5k+"
    },
    { 
      icon: Twitter, 
      label: "Twitter", 
      href: "https://twitter.com",
      username: "@devsenior",
      followers: "1.2k"
    }
  ];

  const services = [
    {
      icon: Coffee,
      title: "Consultoria Técnica",
      description: "Arquitetura, code review, otimização de performance"
    },
    {
      icon: MessageSquare,
      title: "Desenvolvimento Full-stack",
      description: "Aplicações web modernas do zero até deploy"
    },
    {
      icon: Calendar,
      title: "Mentoria & Treinamento",
      description: "1:1 ou equipes, foco em boas práticas e growth"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar sua ideia em realidade? Entre em contato 
            para discutirmos seu próximo projeto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in">
            <Card className="border-0 shadow-tech bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <Send className="w-6 h-6 text-primary" />
                  <span>Envie sua Mensagem</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e retornarei o contato em breve
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome Completo *
                    </label>
                    <Input 
                      placeholder="Seu nome"
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input 
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Tipo de Projeto
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {["Aplicação Web", "Mobile App", "Consultoria", "Outro"].map((type) => (
                      <Button 
                        key={type}
                        variant="outline" 
                        size="sm"
                        className="justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Orçamento Estimado
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {["< R$ 10k", "R$ 10k - 50k", "R$ 50k - 100k", "> R$ 100k"].map((budget) => (
                      <Button 
                        key={budget}
                        variant="outline" 
                        size="sm"
                        className="justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors text-xs"
                      >
                        {budget}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Descreva seu Projeto *
                  </label>
                  <Textarea 
                    placeholder="Conte-me mais sobre seu projeto, objetivos, timeline e requisitos técnicos..."
                    className="min-h-[120px] bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-tech hover:shadow-tech flex-1 md:flex-none group"
                  >
                    <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Enviar Mensagem
                  </Button>
                  
                  <div className="text-xs text-muted-foreground">
                    Resposta garantida em 24h
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Services */}
          <div className="space-y-8 animate-fade-in delay-300">
            {/* Contact Information */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={contact.label} className="flex items-start space-x-3 group hover:bg-accent/50 p-2 rounded-lg transition-colors">
                      <div className="w-10 h-10 bg-gradient-tech rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{contact.label}</h4>
                        <a 
                          href={contact.href}
                          className="text-primary hover:text-primary-dark transition-colors"
                        >
                          {contact.value}
                        </a>
                        <p className="text-xs text-muted-foreground">{contact.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 hover:bg-accent/50 rounded-lg transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {social.label}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {social.username}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {social.followers}
                      </Badge>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Como Posso Ajudar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div 
                      key={service.title}
                      className="flex items-start space-x-3 p-2 hover:bg-accent/50 rounded-lg transition-colors"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{service.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in delay-700">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>Normalmente respondo em algumas horas</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Prefere uma conversa mais direta? Agende uma call de 30 minutos para 
            discutirmos seu projeto sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;