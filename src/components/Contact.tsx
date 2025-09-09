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
  Send,
  Calendar,
  Coffee,
  MessageSquare,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tdrummontt@email.com",
      href: "mailto:tdrummontt@email.com",
      description: "Resposta em até 24h"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+55 (91) 98420-1810",
      href: "https://wa.me/5591984201810?text=Olá! Vim através do seu portfólio e gostaria de conversar sobre um projeto.",
      description: "Resposta em até 2 horas"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Belém - PA",
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
      username: "@Tdrummont",
      followers: "2.5k"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://linkedin.com",
      username: "@thalita-s-costa",
      followers: "741+"
    },
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
          {/* WhatsApp Contact */}
          <div className="lg:col-span-2 animate-fade-in">
            <Card className="border-0 shadow-tech bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                  <span>Vamos Conversar no WhatsApp</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  A forma mais rápida e direta de entrar em contato comigo
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Pronto para começar seu projeto?
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Clique no botão abaixo e vamos conversar diretamente no WhatsApp. 
                    Resposta garantida em poucas horas!
                  </p>
                  
                  <a 
                    href="https://wa.me/5591984201810?text=Olá! Vim através do seu portfólio e gostaria de conversar sobre um projeto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span>Conversar no WhatsApp</span>
                  </a>
                  
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>📱 +55 (91) 98420-1810</p>
                    <p>⏰ Resposta em até 2 horas</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t">
                  <div className="text-center p-4 bg-accent/30 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">🚀 Projetos Rápidos</h4>
                    <p className="text-sm text-muted-foreground">
                      Landing pages, sites institucionais e aplicações simples
                    </p>
                  </div>
                  <div className="text-center p-4 bg-accent/30 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">💼 Projetos Complexos</h4>
                    <p className="text-sm text-muted-foreground">
                      Sistemas completos, e-commerce e aplicações empresariais
                    </p>
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
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Online agora - Resposta em até 2 horas</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Pronto para transformar sua ideia em realidade? Vamos conversar no WhatsApp 
            e discutir seu projeto sem compromisso.
          </p>
          <a 
            href="https://wa.me/5591984201810?text=Olá! Vim através do seu portfólio e gostaria de conversar sobre um projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Iniciar Conversa</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;