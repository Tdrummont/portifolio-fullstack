import { Button } from "@/components/ui/button";
import { Calendar, Clock, Sparkles } from "lucide-react";

const BeautyHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gold-elegant/30 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="mb-8">
            <Sparkles className="w-16 h-16 mx-auto text-primary animate-bounce" />
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 leading-tight">
            Bella Vista
            <span className="block text-3xl md:text-5xl mt-2 text-secondary">Salão de Beleza</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforme seu visual com nossos especialistas. Agende seu horário e descubra os melhores produtos de beleza.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="elegant" className="px-8 py-4 text-lg">
              <Calendar className="mr-2 w-5 h-5" />
              Agendar Horário
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg"
            >
              <Clock className="mr-2 w-5 h-5" />
              Ver Disponibilidade
            </Button>
          </div>
          
          {/* Features highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Profissionais Experientes</h3>
              <p className="text-muted-foreground">Equipe qualificada e certificada</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Agendamento Fácil</h3>
              <p className="text-muted-foreground">Sistema online prático e rápido</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gold-elegant/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-gold-elegant" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Horário Flexível</h3>
              <p className="text-muted-foreground">Atendimento adaptado à sua rotina</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautyHero;