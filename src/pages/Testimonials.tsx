import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos M.',
      car: 'Porsche 911 GT3 RS',
      rating: 5,
      comment: 'Increíble trabajo en mi Porsche. El resultado superó completamente mis expectativas. El equipo de Big Coches es extremadamente profesional y cuidadoso con cada detalle.',
      service: 'Detailing Integral',
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Ana R.',
      car: 'BMW M3 Competition',
      rating: 5,
      comment: 'El coating cerámico que aplicaron a mi BMW es espectacular. Después de 6 meses, el coche sigue brillando como el primer día. Volveré sin duda.',
      service: 'Coating Cerámico',
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Miguel S.',
      car: 'Audi RS6 Avant',
      rating: 5,
      comment: 'La corrección de pintura fue perfecta. Eliminaron rayones que pensaba que eran imposibles de quitar. El mejor detailing de Barcelona sin duda.',
      service: 'Corrección de Pintura',
      image: '/api/placeholder/80/80'
    },
    {
      id: 4,
      name: 'Laura G.',
      car: 'Mercedes AMG GT',
      rating: 5,
      comment: 'Servicio excepcional desde el primer contacto. Muy transparentes con los precios y tiempos. Mi Mercedes quedó como recién salido del concesionario.',
      service: 'PPF Frontal',
      image: '/api/placeholder/80/80'
    },
    {
      id: 5,
      name: 'Roberto F.',
      car: 'Ferrari 458 Spider',
      rating: 5,
      comment: 'Confianza total con mi Ferrari. El equipo entiende perfectamente las necesidades de coches de alta gama. Trabajo impecable y cuidado extremo.',
      service: 'Detailing Premium',
      image: '/api/placeholder/80/80'
    },
    {
      id: 6,
      name: 'Sandra L.',
      car: 'Lamborghini Huracán',
      rating: 5,
      comment: 'La restauración del interior de mi Lambo fue perfecta. Los cueros quedaron como nuevos. Atención personalizada y resultados espectaculares.',
      service: 'Restauración Interior',
      image: '/api/placeholder/80/80'
    },
    {
      id: 7,
      name: 'David M.',
      car: 'Range Rover Sport',
      rating: 5,
      comment: 'El tintado de lunas quedó perfecto, sin burbujas ni imperfecciones. Excelente calidad y acabado profesional. Muy recomendable.',
      service: 'Tintado Premium',
      image: '/api/placeholder/80/80'
    },
    {
      id: 8,
      name: 'Elena C.',
      car: 'Porsche Panamera',
      rating: 5,
      comment: 'Big Coches superó todas mis expectativas. El cuidado de mi Panamera fue excepcional. Personal muy cualificado y instalaciones de primera.',
      service: 'Coating + Detailing',
      image: '/api/placeholder/80/80'
    }
  ];

  const stats = [
    { value: '500+', label: 'Clientes Satisfechos' },
    { value: '5.0★', label: 'Valoración Media' },
    { value: '98%', label: 'Recomendación' },
    { value: '3+', label: 'Años de Experiencia' }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 min-h-[60vh] flex flex-col justify-center">
            <div className="space-y-4">
              <h1 className="hero-title">
                Opiniones de{' '}
                <span className="text-luxury-gradient">Nuestros Clientes</span>
              </h1>
              <p className="hero-subtitle max-w-3xl mx-auto">
                La satisfacción de nuestros clientes es nuestro mejor aval. 
                Escucha lo que dicen sobre su experiencia con Big Coches.
              </p>
            </div>
            
            <Button asChild className="btn-luxury mx-auto">
              <Link to="/reserva">
                Únete a Nuestros Clientes
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-dark py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-black text-luxury-blue">{stat.value}</div>
                <div className="text-text-secondary-dark font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                Experiencias Reales
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Historias de clientes que han confiado en nosotros para cuidar sus coches premium
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="card-luxury space-y-6">
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
                    <p className="text-text-secondary italic leading-relaxed pl-4">
                      "{testimonial.comment}"
                    </p>
                  </div>

                  <div className="space-y-2 text-center">
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-luxury-blue font-medium">{testimonial.car}</div>
                    <div className="text-xs text-text-secondary bg-secondary px-3 py-1 rounded-full inline-block">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-text-primary-dark">
                ¿Por Qué Nos Eligen?
              </h2>
              <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
                Los motivos por los que los propietarios de coches premium confían en nosotros
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Experiencia Especializada',
                  description: 'Años de experiencia trabajando exclusivamente con coches de lujo, deportivos y clásicos.'
                },
                {
                  title: 'Productos Premium',
                  description: 'Utilizamos únicamente productos de la más alta calidad de marcas reconocidas mundialmente.'
                },
                {
                  title: 'Atención Personalizada',
                  description: 'Cada cliente y cada vehículo recibe un trato único y personalizado según sus necesidades.'
                }
              ].map((reason, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-luxury-blue/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-luxury-blue">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary-dark">{reason.title}</h3>
                  <p className="text-text-secondary-dark">{reason.description}</p>
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
              ¿Listo para Vivir la{' '}
              <span className="text-luxury-gradient">Experiencia Big Coches</span>?
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Únete a los cientos de clientes satisfechos que han confiado en nosotros
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="btn-luxury text-lg px-8 py-4">
              <Link to="/reserva">
                Reservar Ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="btn-outline-luxury text-lg px-8 py-4">
              <Link to="/contacto">
                Contactar
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;