import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Mensaje enviado",
      description: "Te contactaremos pronto. Gracias por tu interés.",
    });

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 min-h-[60vh] flex flex-col justify-center">
            <div className="space-y-4">
              <h1 className="hero-title">
                Contacta con{' '}
                <span className="text-luxury-gradient">Big Coches</span>
              </h1>
              <p className="hero-subtitle max-w-3xl mx-auto">
                Estamos en el corazón de Barcelona, listos para cuidar tu coche premium. 
                Contáctanos para reservar tu cita o resolver cualquier duda.
              </p>
            </div>
            
            <Button asChild className="btn-luxury mx-auto">
              <Link to="/reserva">
                Reservar Detailing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-6">
              {[
                {
                  icon: MapPin,
                  title: 'Dirección',
                  info: 'Carrer de l\'Exemple, 123\n08001 Barcelona, España',
                  action: 'Ver en Maps'
                },
                {
                  icon: Phone,
                  title: 'Teléfono',
                  info: '+34 932 123 456',
                  action: 'Llamar ahora'
                },
                {
                  icon: Mail,
                  title: 'Email',
                  info: 'hola@bigcoches.com',
                  action: 'Enviar email'
                },
                {
                  icon: Clock,
                  title: 'Horario',
                  info: 'Lun-Vie: 9:00-18:00\nSáb: 9:00-14:00\nDom: Cerrado',
                  action: null
                }
              ].map((contact, index) => (
                <div key={index} className="card-luxury space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <contact.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{contact.title}</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-text-secondary whitespace-pre-line">{contact.info}</p>
                    {contact.action && (
                      <button className="text-primary hover:text-hover font-medium text-sm">
                        {contact.action}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-luxury">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Envíanos un Mensaje</h2>
                    <p className="text-text-secondary">
                      ¿Tienes alguna pregunta? Escríbenos y te responderemos lo antes posible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+34 600 000 000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Cuéntanos qué necesitas o cualquier pregunta que tengas..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" className="btn-luxury w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-text-primary-dark">
                Cómo Llegar
              </h2>
              <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
                Nos encontramos en una ubicación céntrica y accesible en Barcelona
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card-dark border border-border-dark rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-dark flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-luxury-blue mx-auto" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-card-foreground-dark">
                      Big Coches Barcelona
                    </h3>
                    <p className="text-card-foreground-dark">
                      Carrer de l'Exemple, 123<br />
                      08001 Barcelona, España
                    </p>
                    <Button className="btn-luxury mt-4">
                      Ver en Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'En Coche',
                  description: 'Parking privado disponible. Acceso directo desde Ronda de Dalt y Gran Vía.',
                  icon: '🚗'
                },
                {
                  title: 'Transporte Público',
                  description: 'Metro L1/L2 Universidad (5 min). Buses H16, V13, 59, 91.',
                  icon: '🚇'
                },
                {
                  title: 'A Pie',
                  description: 'Céntrico y accesible. A 10 minutos de Plaza Catalunya y Las Ramblas.',
                  icon: '🚶'
                }
              ].map((transport, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="text-4xl">{transport.icon}</div>
                  <h3 className="text-xl font-semibold text-text-primary-dark">{transport.title}</h3>
                  <p className="text-text-secondary-dark">{transport.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                Preguntas Frecuentes
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Resolvemos las dudas más comunes sobre nuestros servicios
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: '¿Cuánto tiempo tarda un detailing integral?',
                  answer: 'Un detailing integral completo tarda entre 4-6 horas, dependiendo del estado y tamaño del vehículo.'
                },
                {
                  question: '¿Ofrecen servicio de recogida y entrega?',
                  answer: 'Sí, ofrecemos servicio de recogida y entrega en Barcelona para mayor comodidad de nuestros clientes.'
                },
                {
                  question: '¿Qué productos utilizan?',
                  answer: 'Utilizamos únicamente productos premium de marcas como Gtechniq, XPEL, 3M y Meguiar\'s Professional.'
                },
                {
                  question: '¿Dan garantía en sus trabajos?',
                  answer: 'Sí, todos nuestros servicios incluyen garantía. El coating cerámico hasta 5 años y PPF hasta 10 años.'
                }
              ].map((faq, index) => (
                <div key={index} className="card-luxury text-left space-y-3">
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-text-primary-dark">
              ¿Listo para{' '}
              <span className="text-luxury-gradient">Reservar tu Cita</span>?
            </h2>
            <p className="text-xl text-text-secondary-dark max-w-2xl mx-auto">
              Contacta con nosotros hoy mismo y descubre por qué somos la referencia en detailing premium
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="btn-luxury text-lg px-8 py-4">
              <Link to="/reserva">
                Reservar Ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button className="btn-outline-luxury text-lg px-8 py-4">
              <Phone className="mr-2 w-5 h-5" />
              +34 932 123 456
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;