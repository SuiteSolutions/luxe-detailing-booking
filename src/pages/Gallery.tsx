import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BeforeAfterSlider } from '@/components/ui/before-after-slider';
import bmwBeforeImage from '@/assets/bmw-m4-before.jpg';
import bmwAfterImage from '@/assets/bmw-m4-after.jpg';

const Gallery = () => {
  const featuredProject = {
    title: 'BMW M4 Competition - Coating Cerámico Premium',
    description: 'Transformación completa con coating cerámico de 9H, corrección de pintura en 3 etapas y protección PPF en zonas de impacto. Una obra maestra del detailing profesional.',
    service: 'Coating Cerámico Premium + PPF',
    duration: '3 días',
    features: [
      'Corrección de pintura en 3 etapas',
      'Coating cerámico 9H Gyeon Mohs+',
      'PPF en zonas de impacto',
      'Garantía de 5 años'
    ]
  };

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 min-h-[60vh] flex flex-col justify-center">
            <div className="space-y-4">
              <h1 className="hero-title">
                Galería de{' '}
                <span className="text-luxury-gradient">
                  Transformaciones
                </span>
              </h1>
              <p className="hero-subtitle max-w-3xl mx-auto">
                Descubre el antes y después de nuestros trabajos. 
                Cada proyecto es una demostración de nuestra pasión por la perfección.
              </p>
            </div>
            
            <Button asChild className="btn-luxury mx-auto">
              <Link to="/reserva">
                Transformar Mi Coche
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Before & After Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                Transformación Interactiva
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Desliza para descubrir la increíble diferencia del coating cerámico profesional
              </p>
            </div>

            <div className="card-luxury max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Interactive Slider */}
                <div className="order-2 lg:order-1">
                  <BeforeAfterSlider
                    beforeImage={bmwBeforeImage}
                    afterImage={bmwAfterImage}
                    beforeAlt="BMW M4 antes del detailing"
                    afterAlt="BMW M4 después del coating cerámico"
                    className="shadow-2xl"
                  />
                </div>

                {/* Project Details */}
                <div className="order-1 lg:order-2 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">{featuredProject.title}</h3>
                    <p className="text-text-secondary text-lg leading-relaxed">
                      {featuredProject.description}
                    </p>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">Servicios Incluidos:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {featuredProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-primary/10 px-4 py-2 rounded-lg">
                      <span className="text-sm font-semibold text-primary">{featuredProject.service}</span>
                    </div>
                    <div className="bg-secondary px-4 py-2 rounded-lg">
                      <span className="text-sm font-semibold">Duración: {featuredProject.duration}</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-4">
                    <Button asChild className="btn-luxury w-full sm:w-auto">
                      <Link to="/reserva">
                        Solicitar Este Servicio
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <p className="text-sm text-text-secondary">
                      Presupuesto gratuito en 24h • Garantía de calidad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-text-primary-dark">
                ¿Por Qué Coating Cerámico?
              </h2>
              <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
                La protección definitiva para tu vehículo premium
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Protección 9H',
                  description: 'Dureza superior al vidrio que protege contra rayones y agentes externos',
                  icon: '🛡️'
                },
                {
                  title: 'Efecto Hidrofóbico',
                  description: 'Repele agua y suciedad, facilitando el mantenimiento diario',
                  icon: '💧'
                },
                {
                  title: 'Brillo Permanente',
                  description: 'Acabado espejo que mantiene el brillo como el primer día',
                  icon: '✨'
                },
                {
                  title: 'Garantía 5 Años',
                  description: 'Protección garantizada con mantenimiento profesional incluido',
                  icon: '⏰'
                },
                {
                  title: 'Fácil Limpieza',
                  description: 'Superficie autolimpiante que reduce el tiempo de lavado',
                  icon: '🧽'
                },
                {
                  title: 'Valor del Vehículo',
                  description: 'Preserva y aumenta el valor de reventa de tu coche',
                  icon: '💎'
                }
              ].map((benefit, index) => (
                <div key={index} className="card-dark text-center space-y-4">
                  <div className="text-4xl">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-card-foreground-dark">{benefit.title}</h3>
                  <p className="text-text-secondary-dark">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Showcase */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                Proceso de Trabajo
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Cada detalle cuenta en nuestro meticuloso proceso de detailing premium
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { step: 'Lavado', description: 'Eliminación de suciedad superficial' },
                { step: 'Descontaminación', description: 'Clay bar y descontaminación química' },
                { step: 'Corrección', description: 'Pulido y eliminación de defectos' },
                { step: 'Protección', description: 'Aplicación de coating o cera premium' }
              ].map((process, index) => (
                <div key={index} className="card-luxury text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold">{process.step}</h3>
                  <p className="text-sm text-text-secondary">{process.description}</p>
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
              ¿Quieres Ver Tu Coche{' '}
              <span className="text-luxury-gradient">Transformado</span>?
            </h2>
            <p className="text-xl text-text-secondary-dark max-w-2xl mx-auto">
              Únete a los cientos de propietarios que han confiado en nosotros para cuidar sus coches premium
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
                Ver Más Trabajos
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;