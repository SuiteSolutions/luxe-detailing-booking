import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Sparkles, Car, Palette, Film, Droplets, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import detailingTools from '@/assets/detailing-tools.jpg';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      name: 'Detailing Integral',
      description: 'Servicio completo de limpieza y cuidado exterior e interior. Incluye lavado profundo, descontaminación, pulido ligero y protección.',
      features: [
        'Lavado y descontaminación completa',
        'Pulido y corrección de micro-rayones',
        'Limpieza profunda del interior',
        'Protección de plásticos y cueros',
        'Encerado premium',
        'Limpieza de llantas y neumáticos'
      ],
      duration: '4-6 horas',
      price: 'Desde 299€',
      highlight: true
    },
    {
      icon: Shield,
      name: 'Coating Cerámico',
      description: 'Protección duradera de 2-5 años con recubrimiento cerámico de alta calidad. Brillo espectacular y facilidad de mantenimiento.',
      features: [
        'Preparación completa de la pintura',
        'Aplicación de coating cerámico premium',
        'Protección UV y química',
        'Efecto hidrofóbico',
        'Brillo duradero',
        'Garantía hasta 5 años'
      ],
      duration: '1-2 días',
      price: 'Desde 599€',
      highlight: false
    },
    {
      icon: Palette,
      name: 'Pulido y Corrección',
      description: 'Eliminación de rayones, marcas de remolino y defectos de pintura. Restauramos el brillo original de tu vehículo.',
      features: [
        'Análisis de defectos de pintura',
        'Corrección en múltiples etapas',
        'Eliminación de rayones profundos',
        'Pulido de alta calidad',
        'Restauración del brillo original',
        'Sellado protector'
      ],
      duration: '6-8 horas',
      price: 'Desde 399€',
      highlight: false
    },
    {
      icon: Film,
      name: 'Paint Protection Film (PPF)',
      description: 'Película protectora transparente de última generación para proteger la pintura de impactos, rayones y agentes externos.',
      features: [
        'Película premium transparente',
        'Protección contra impactos',
        'Autorreparación de micro-rayones',
        'Aplicación profesional',
        'Cortes precisos por ordenador',
        'Garantía hasta 10 años'
      ],
      duration: '1-3 días',
      price: 'Desde 1.299€',
      highlight: false
    },
    {
      icon: Car,
      name: 'Restauración Interior',
      description: 'Limpieza profunda y restauración del interior. Cueros, tapicerías, plásticos y todos los detalles internos.',
      features: [
        'Limpieza profunda de tapicerías',
        'Tratamiento de cueros premium',
        'Restauración de plásticos',
        'Limpieza de alfombrillas',
        'Desinfección y eliminación de olores',
        'Protección UV para salpicadero'
      ],
      duration: '3-4 horas',
      price: 'Desde 199€',
      highlight: false
    },
    {
      icon: Sun,
      name: 'Tintado de Lunas',
      description: 'Láminas solares de alta calidad para mayor privacidad, confort térmico y protección UV.',
      features: [
        'Láminas premium de máxima calidad',
        'Reducción del calor hasta 70%',
        'Protección UV 99%',
        'Mayor privacidad',
        'Instalación profesional',
        'Garantía del fabricante'
      ],
      duration: '2-3 horas',
      price: 'Desde 149€',
      highlight: false
    },
    {
      icon: Droplets,
      name: 'Lavado Premium',
      description: 'Lavado exterior completo con productos premium y técnicas seguras para mantener tu coche impecable entre servicios.',
      features: [
        'Lavado con espuma premium',
        'Técnica de dos cubos',
        'Descontaminación química',
        'Secado sin marcas',
        'Encerado rápido',
        'Limpieza de llantas'
      ],
      duration: '1-2 horas',
      price: 'Desde 89€',
      highlight: false
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="hero-title">
                  Servicios de{' '}
                  <span className="text-luxury-gradient">
                    Detailing Premium
                  </span>
                </h1>
                <p className="hero-subtitle">
                  Especialistas en cuidado artesanal para coches de lujo, deportivos y clásicos. 
                  Cada servicio diseñado para la máxima excelencia.
                </p>
              </div>
              
              <Button asChild className="btn-luxury">
                <Link to="/reserva">
                  Reservar Servicio
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src={detailingTools}
                alt="Herramientas profesionales de detailing"
                className="w-full h-auto object-cover rounded-2xl shadow-luxury"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                Nuestros Servicios
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Selecciona el servicio perfecto para tu vehículo premium
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`card-luxury space-y-6 ${service.highlight ? 'ring-2 ring-primary shadow-luxury' : ''}`}
                >
                  {service.highlight && (
                    <div className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full inline-block">
                      Más Popular
                    </div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold">{service.name}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm">Incluye:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div className="space-y-1">
                      <div className="text-lg font-bold text-primary">{service.price}</div>
                      <div className="text-sm text-text-secondary">Duración: {service.duration}</div>
                    </div>
                    <Button asChild className="btn-luxury">
                      <Link to="/reserva">
                        Reservar
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-text-primary-dark">
                Nuestro Proceso
              </h2>
              <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
                Cada servicio sigue un protocolo riguroso para garantizar resultados excepcionales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Evaluación', description: 'Análisis detallado del estado del vehículo' },
                { step: '02', title: 'Preparación', description: 'Lavado y descontaminación previa' },
                { step: '03', title: 'Tratamiento', description: 'Aplicación de técnicas especializadas' },
                { step: '04', title: 'Acabado', description: 'Inspección final y entrega' }
              ].map((process, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="text-4xl font-black text-luxury-blue">{process.step}</div>
                  <h3 className="text-xl font-semibold text-text-primary-dark">{process.title}</h3>
                  <p className="text-text-secondary-dark">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              ¿Necesitas Asesoramiento{' '}
              <span className="text-luxury-gradient">Personalizado</span>?
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Nuestros especialistas te ayudarán a elegir el servicio perfecto para tu vehículo
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="btn-luxury text-lg px-8 py-4">
              <Link to="/reserva">
                Solicitar Presupuesto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="btn-outline-luxury text-lg px-8 py-4">
              <Link to="/contacto">
                Llamar Ahora
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;