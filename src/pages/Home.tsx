import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-porsche.jpg';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Calidad Premium',
      description: 'Productos y técnicas de máxima calidad para coches de lujo'
    },
    {
      icon: Clock,
      title: 'Servicio Profesional',
      description: 'Cuidado artesanal con atención a cada detalle'
    },
    {
      icon: Award,
      title: 'Experiencia Barcelona',
      description: 'Especialistas en detailing de coches premium en Barcelona'
    }
  ];

  const testimonials = [
    {
      name: 'Carlos M.',
      rating: 5,
      comment: 'Increíble trabajo en mi Porsche 911. El resultado superó mis expectativas completamente.',
      car: 'Porsche 911'
    },
    {
      name: 'Ana R.',
      rating: 5,
      comment: 'Profesionalidad máxima. Mi BMW quedó como nuevo después del coating cerámico.',
      car: 'BMW M3'
    },
    {
      name: 'Miguel S.',
      rating: 5,
      comment: 'El mejor detailing de Barcelona sin duda. Volveré seguro.',
      car: 'Audi RS6'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
            {/* Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="hero-title">
                  Mantén Tu{' '}
                  <span className="text-luxury-gradient">
                    Coche Premium
                  </span>{' '}
                  Siempre Perfecto
                </h1>
                <p className="hero-subtitle">
                  Big Coches es la referencia en detailing de lujo en Barcelona. 
                  Cuidado artesanal para coches deportivos, clásicos y SUV premium.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-luxury">
                  <Link to="/reserva">
                    Reservar Detailing
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="btn-outline-luxury">
                  <Link to="/servicios">
                    Ver Servicios
                  </Link>
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center space-y-2">
                    <feature.icon className="w-8 h-8 text-primary mx-auto" />
                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                    <p className="text-xs text-text-secondary">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-scale-in">
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="Porsche 911 GT3 RS - Detailing de lujo en Barcelona"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/5 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-text-primary-dark">
                Basado En{' '}
                <span className="text-luxury-gradient">Experiencia</span>
              </h2>
              <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
                Años perfeccionando el arte del detailing en Barcelona. 
                Cada coche es único, cada trabajo es una obra maestra.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="text-4xl font-black text-luxury-blue">500+</div>
                <div className="text-text-secondary-dark">Coches Premium Detallados</div>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl font-black text-luxury-blue">5★</div>
                <div className="text-text-secondary-dark">Valoración Media Clientes</div>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl font-black text-luxury-blue">98%</div>
                <div className="text-text-secondary-dark">Clientes Satisfechos</div>
              </div>
            </div>

            <Button asChild className="btn-luxury">
              <Link to="/sobre-nosotros">
                Conoce Nuestra Historia
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                Nuestros Servicios
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Servicios especializados para coches de lujo, deportivos y clásicos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Detailing Integral',
                  description: 'Limpieza y cuidado completo exterior e interior',
                  price: 'Desde 299€'
                },
                {
                  title: 'Coating Cerámico',
                  description: 'Protección duradera con brillo espectacular',
                  price: 'Desde 599€'
                },
                {
                  title: 'Paint Protection Film',
                  description: 'Película protectora transparente premium',
                  price: 'Desde 1.299€'
                }
              ].map((service, index) => (
                <div key={index} className="card-luxury text-center space-y-4">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-text-secondary">{service.description}</p>
                  <div className="text-lg font-semibold text-primary">{service.price}</div>
                </div>
              ))}
            </div>

            <Button asChild className="btn-luxury">
              <Link to="/servicios">
                Ver Todos los Servicios
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-text-primary-dark">
                Opiniones de Clientes
              </h2>
              <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
                La satisfacción de nuestros clientes es nuestro mejor aval
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card space-y-4">
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-text-secondary-dark italic">"{testimonial.comment}"</p>
                  <div className="space-y-1">
                    <div className="font-semibold text-text-primary-dark">{testimonial.name}</div>
                    <div className="text-sm text-luxury-blue">{testimonial.car}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="btn-luxury">
              <Link to="/opiniones">
                Ver Más Opiniones
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              ¿Listo para el{' '}
              <span className="text-luxury-gradient">Mejor Detailing</span>{' '}
              de Barcelona?
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Reserva ahora y descubre por qué somos la referencia en cuidado premium para coches de lujo
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

export default Home;