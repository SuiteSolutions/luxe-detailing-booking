import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import beforeAfterImage from '@/assets/before-after-car.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const beforeAfterProjects = [
    {
      id: 1,
      title: 'BMW X5 M - Coating Cerámico',
      description: 'Transformación completa con coating cerámico de 5 años',
      beforeImage: beforeAfterImage,
      afterImage: beforeAfterImage,
      service: 'Coating Cerámico',
      duration: '2 días'
    },
    {
      id: 2,
      title: 'Porsche 911 GT3 - Corrección de Pintura',
      description: 'Eliminación de micro-rayones y restauración del brillo original',
      beforeImage: beforeAfterImage,
      afterImage: beforeAfterImage,
      service: 'Corrección de Pintura',
      duration: '8 horas'
    },
    {
      id: 3,
      title: 'Audi RS6 - Detailing Integral',
      description: 'Servicio completo interior y exterior con protección premium',
      beforeImage: beforeAfterImage,
      afterImage: beforeAfterImage,
      service: 'Detailing Integral',
      duration: '6 horas'
    }
  ];

  const portfolioImages = [
    { id: 1, src: beforeAfterImage, title: 'Mercedes AMG GT', service: 'PPF Completo' },
    { id: 2, src: beforeAfterImage, title: 'Ferrari 458', service: 'Coating Cerámico' },
    { id: 3, src: beforeAfterImage, title: 'Lamborghini Huracán', service: 'Detailing Premium' },
    { id: 4, src: beforeAfterImage, title: 'BMW M4', service: 'Corrección de Pintura' },
    { id: 5, src: beforeAfterImage, title: 'Porsche Panamera', service: 'Restauración Interior' },
    { id: 6, src: beforeAfterImage, title: 'Audi R8', service: 'Tintado Premium' }
  ];

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

      {/* Before & After Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                Antes & Después
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Proyectos destacados que muestran la diferencia que marca nuestro trabajo profesional
              </p>
            </div>

            <div className="space-y-16">
              {beforeAfterProjects.map((project, index) => (
                <div key={project.id} className="card-luxury">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Before/After Comparison */}
                    <div className="before-after-container group">
                      <div className="relative overflow-hidden rounded-xl aspect-video">
                        {/* This would be replaced with an actual before/after slider component */}
                        <div className="absolute inset-0 grid grid-cols-2">
                          <div className="relative overflow-hidden">
                            <img
                              src={project.beforeImage}
                              alt={`${project.title} - Antes`}
                              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Antes
                            </div>
                          </div>
                          <div className="relative overflow-hidden">
                            <img
                              src={project.afterImage}
                              alt={`${project.title} - Después`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                              Después
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-y-0 left-1/2 transform -translate-x-0.5 w-1 bg-white shadow-lg"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <p className="text-text-secondary">{project.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <div className="bg-primary/10 px-4 py-2 rounded-lg">
                          <span className="text-sm font-semibold text-primary">{project.service}</span>
                        </div>
                        <div className="bg-secondary px-4 py-2 rounded-lg">
                          <span className="text-sm font-semibold">Duración: {project.duration}</span>
                        </div>
                      </div>

                      <Button asChild className="btn-luxury">
                        <Link to="/reserva">
                          Solicitar Presupuesto
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-dark py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-text-primary-dark">
                Portfolio de Proyectos
              </h2>
              <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
                Una selección de nuestros trabajos más destacados en Barcelona
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioImages.map((image) => (
                <div key={image.id} className="card-dark group cursor-pointer overflow-hidden">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold text-card-foreground-dark">{image.title}</h3>
                    <p className="text-sm text-luxury-blue">{image.service}</p>
                  </div>
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