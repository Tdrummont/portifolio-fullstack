import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent-purple/30 rounded-full blur-2xl animate-float delay-500"></div>
      </div>

      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-8 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-primary animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-scale-in">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2"></div>
            <span className="text-sm font-medium text-primary">Disponível para projetos</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="block text-foreground">Olá! Eu sou a</span>
            <span className="gradient-text animate-glow">Thalita</span>
          </h1>

          {/* Typing Animation Subtitle */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono h-8 animate-fade-in delay-300">
            <span className="typing-animation">Desenvolvedora Full Stack de Belém, Brasil</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
            Desenvolvedora Full Stack com foco em arquitetura moderna de software, apaixonada por código limpo, automações e boas práticas. 
            Especialista em <span className="text-primary font-semibold">Laravel 12</span>, 
            <span className="text-primary font-semibold"> Vue 3</span>, 
            <span className="text-primary font-semibold"> Vuetify</span>, 
            <span className="text-primary font-semibold"> TailwindCSS</span> e 
            <span className="text-primary font-semibold"> Clean Code</span>. 
            Cofundadora do grupo YggdraCode.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-700">
            <Button 
              size="lg" 
              className="bg-gradient-tech hover:shadow-tech transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg group"
              onClick={() => window.open('https://github.com/Tdrummont', '_blank')}
            >
              <Github className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              Ver Projetos
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg group"
            >
              <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </Button>
          </div>

          {/* Tech Stack Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fade-in delay-1000">
            {[
              { name: "Laravel", level: "Expert" },
              { name: "Vue 3", level: "Expert" },
              { name: "PHP", level: "Expert" },
              { name: "TailwindCSS", level: "Expert" },
            ].map((tech, index) => (
              <div 
                key={tech.name}
                className="text-center group hover:transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-card rounded-xl shadow-card flex items-center justify-center mx-auto mb-3 group-hover:shadow-tech transition-all duration-300">
                  <span className="text-2xl font-bold gradient-text">{tech.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-sm text-foreground">{tech.name}</h3>
                <p className="text-xs text-muted-foreground">{tech.level}</p>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8 animate-fade-in delay-1200">
            {[
              { icon: Github, href: "https://github.com/Tdrummont", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/thalita-s-costa/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:tdrummontt@gmail.com", label: "Email" }
            ].map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-glow transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;