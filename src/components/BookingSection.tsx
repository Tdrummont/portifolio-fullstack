import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";

const timeSlots = [
  "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"
];

const BookingSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Agende Seu Horário
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Escolha o melhor horário para você e garante seu atendimento personalizado
            </p>

            <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Agendamento Online
                </CardTitle>
                <CardDescription>
                  Preencha os dados abaixo para agendar seu horário
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Service Selection */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Selecione o Serviço</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Corte", "Coloração", "Manicure", "Tratamento"].map((service) => (
                      <Button 
                        key={service}
                        variant="outline" 
                        size="sm"
                        className="justify-start hover:bg-primary hover:text-primary-foreground"
                      >
                        {service}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Escolha a Data</label>
                  <div className="grid grid-cols-7 gap-1">
                    {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day, index) => (
                      <div key={day} className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">{day}</div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className={`w-full h-10 text-xs ${index === 2 ? 'bg-primary text-primary-foreground' : ''}`}
                        >
                          {15 + index}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Horário Disponível</label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <Button 
                        key={time}
                        variant="outline" 
                        size="sm"
                        className="hover:bg-primary hover:text-primary-foreground"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <Button 
                    size="lg" 
                    variant="elegant"
                    className="w-full"
                  >
                    Confirmar Agendamento
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    *Para confirmar, você precisará fazer login ou se cadastrar
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-muted-foreground">Belém - PA</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-muted-foreground">(91) 98420-1810</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Horário de Funcionamento</p>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 9h às 19h<br />
                      Sábado: 9h às 17h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-gold text-secondary-foreground border-0">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">Primeira vez no salão?</h4>
                <p className="mb-4">Ganhe 20% de desconto no primeiro atendimento!</p>
                <Button variant="secondary" size="sm">
                  Quero o Desconto
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;