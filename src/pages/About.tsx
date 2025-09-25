import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Nos comprometemos con la máxima calidad en cada trabajo, sin excepciones.'
    },
    {
      icon: Shield,
      title: 'Confianza',
      description: 'Tu vehículo está en las mejores manos, con el cuidado que merece.'
    },
    {
      icon: Users,
      title: 'Pasión',
      description: 'Amamos lo que hacemos y se nota en cada resultado que entregamos.'
    },
    {
      icon: Clock,
      title: 'Dedicación',
      description: 'El tiempo necesario para lograr la perfección, sin prisas ni atajos.'
    }
  ];

  const team = [
    {
      name: 'Carlos Rodríguez',
      role: 'Fundador & Master Detailer',
      description: 'Más de 8 años especializándose en coches de lujo. Certificado en técnicas avanzadas de corrección de pintura y coating cerámico.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Miguel Santos',
      role: 'Specialist PPF & Tintado',
      description: 'Experto en Paint Protection Film y tintado premium. Formación especializada en aplicaciones de película protectora para superdeportivos.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Ana López',
      role: 'Interior Restoration Expert',
      description: 'Especialista en restauración de interiores de lujo. Experta en tratamientos de cuero, Alcantara y materiales premium.',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 min-h-[60vh] flex flex-col justify-center">
            <div className="space-y-4">
              <h1 className="hero-title">
                Sobre{' '}
                <span className="text-luxury-gradient">Big Coches</span>
              </h1>
              <p className="hero-subtitle max-w-3xl mx-auto">
                Somos especialistas en detailing premium para coches de lujo en Barcelona. 
                Nuestra pasión por la perfección nos convierte en la referencia del sector.
              </p>
            </div>
            
            <Button asChild className="btn-luxury mx-auto">
              <Link to="/reserva">
                Conoce Nuestro Trabajo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-text-secondary">
                <p className="text-lg leading-relaxed">
                  Big Coches nació de una pasión inquebrantable por los coches de lujo y el cuidado artesanal. 
                  En 2021, Carlos Rodríguez fundó la empresa con una visión clara: ofrecer servicios de detailing 
                  de nivel mundial en Barcelona.
                </p>
                <p className="text-lg leading-relaxed">
                  Comenzamos especializándonos exclusivamente en vehículos premium - Porsche, BMW, Mercedes, 
                  Ferrari, Lamborghini - porque entendemos que estos coches requieren un nivel de cuidado excepcional 
                  que va más allá del lavado tradicional.
                </p>
                <p className="text-lg leading-relaxed">
                  Hoy, después de haber cuidado más de 500 vehículos de lujo, nos hemos convertido en la 
                  referencia de confianza para propietarios exigentes que buscan la perfección para sus coches.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-dark rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-black text-luxury-blue">500+</div>
                  <div className="text-xl text-luxury-platinum">Coches Premium Cuidados</div>
                  <div className="text-4xl font-black text-luxury-blue">3+</div>
                  <div className="text-xl text-luxury-platinum">Años de Experiencia</div>
                  <div className="text-4xl font-black text-luxury-blue">5★</div>
                  <div className="text-xl text-luxury-platinum">Valoración Media</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-text-primary-dark">
                Nuestros Valores
              </h2>
              <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
                Los principios que guían cada trabajo que realizamos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-luxury-blue/20 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-luxury-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary-dark">{value.title}</h3>
                  <p className="text-text-secondary-dark">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                Nuestro Equipo
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Especialistas apasionados por el cuidado de coches de lujo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="card-luxury text-center space-y-6">
                  <div className="w-32 h-32 bg-secondary rounded-full mx-auto"></div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-semibold">{member.role}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video bg-card-dark rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-card-foreground-dark">Nuestro Taller</h3>
                  <p className="text-card-foreground-dark">Instalaciones de última generación</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-text-primary-dark">
                Nuestro Enfoque
              </h2>
              <div className="space-y-4 text-text-secondary-dark">
                <p className="text-lg leading-relaxed">
                  En Big Coches, cada vehículo recibe un tratamiento personalizado. No existen procesos estándar 
                  porque cada coche es único y tiene necesidades específicas.
                </p>
                <p className="text-lg leading-relaxed">
                  Utilizamos únicamente productos premium de marcas reconocidas mundialmente como Gtechniq, 
                  XPEL, 3M y Meguiar's Professional. Nuestras instalaciones cuentan con climatización controlada 
                  y iluminación LED especializada para garantizar resultados perfectos.
                </p>
                <p className="text-lg leading-relaxed">
                  La transparencia es fundamental para nosotros. Siempre informamos sobre el estado del vehículo, 
                  los tratamientos recomendados y los tiempos necesarios antes de comenzar cualquier trabajo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              ¿Confiarás en Nosotros con{' '}
              <span className="text-luxury-gradient">Tu Coche Premium</span>?
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Únete a la familia de propietarios que han elegido la excelencia para sus vehículos
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="btn-luxury text-lg px-8 py-4">
              <Link to="/reserva">
                Reservar Cita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="btn-outline-luxury text-lg px-8 py-4">
              <Link to="/galeria">
                Ver Nuestro Trabajo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;