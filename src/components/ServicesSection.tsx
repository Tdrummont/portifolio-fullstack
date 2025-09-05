import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Palette, Heart, Star } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Cortes & Penteados",
    description: "Cortes modernos, escova, penteados para ocasiões especiais",
    price: "A partir de R$ 50",
    duration: "45min - 2h",
    popular: true
  },
  {
    icon: Palette,
    title: "Coloração & Luzes",
    description: "Coloração completa, mechas, ombré hair, balayage",
    price: "A partir de R$ 120",
    duration: "2h - 4h",
    popular: false
  },
  {
    icon: Heart,
    title: "Tratamentos Capilares",
    description: "Hidratação, reconstrução, cronograma capilar",
    price: "A partir de R$ 80",
    duration: "1h - 1h30",
    popular: false
  },
  {
    icon: Star,
    title: "Manicure & Pedicure",
    description: "Esmaltação comum, gel, nail art, spa para pés",
    price: "A partir de R$ 35",
    duration: "1h - 1h30",
    popular: true
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de beleza com profissionais especializados
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden bg-card border-0 shadow-soft hover:shadow-elegant transform hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-primary text-white text-xs px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  <div className="space-y-2 mb-6">
                    <p className="text-lg font-semibold text-primary">{service.price}</p>
                    <p className="text-sm text-muted-foreground">{service.duration}</p>
                  </div>
                  
                  <Button 
                    variant="elegant"
                    size="sm"
                    className="w-full"
                  >
                    Agendar
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8"
          >
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;