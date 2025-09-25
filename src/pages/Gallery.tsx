'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BeforeAfterSlider } from '@/components/ui/before-after-slider';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import bmwBeforeImage from '@/assets/bmw-m4-before-new.png';
import bmwAfterImage from '@/assets/bmw-m4-after-new.png';
import Lenis from '@studio-freight/lenis';

const Gallery = () => {
  React.useEffect(() => {
    const lenis = new Lenis()
   
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const featuredProject = {
    title: "BMW M4 Competition - Coating Cerámico Premium",
    duration: "8 horas",
    date: "Marzo 2024",
    services: [
      "Lavado completo y descontaminación",
      "Corrección de pintura en 2 etapas",
      "Aplicación coating cerámico Gtechniq Crystal Serum Light",
      "Tratamiento de llantas y neumáticos",
      "Acondicionamiento interior premium"
    ],
    description: "Transformación completa de este BMW M4 Competition con nuestro servicio de coating cerámico premium. El resultado: una protección duradera y un brillo espectacular que resalta cada línea de este deportivo alemán."
  };

  const luxuryCarImages = [
    {
      src: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'BMW M4 con coating cerámico brillante',
    },
    {
      src: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Mercedes AMG detallado premium',
    },
    {
      src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Porsche 911 pulido a espejo',
    },
    {
      src: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Audi RS con acabado premium',
    },
    {
      src: 'https://images.unsplash.com/photo-1627454820516-2a05a6c85e8c?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Ferrari detallado a la perfección',
    },
    {
      src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Lamborghini con brillo espectacular',
    },
    {
      src: 'https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'McLaren con acabado premium',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - BMW M4 Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/80 z-10" />
        
        {/* Background with Before/After Slider */}
        <div className="absolute inset-0 w-full h-full">
          <BeforeAfterSlider
            beforeImage={bmwBeforeImage}
            afterImage={bmwAfterImage}
            beforeAlt="BMW M4 antes del detailing"
            afterAlt="BMW M4 después del coating cerámico"
            className="w-full h-full"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <div className="bg-background/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-border/20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up bg-gradient-to-r from-primary to-luxury-blue bg-clip-text text-transparent">
              {featuredProject.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto animate-fade-in-up">
              {featuredProject.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                ⏱️ {featuredProject.duration}
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                📅 {featuredProject.date}
              </div>
            </div>
            <Button 
              size="lg" 
              className="animate-fade-in-up text-lg px-8 py-4 luxury-button-filled"
              onClick={() => window.location.href = '/reserva'}
            >
              Reservar Servicio Premium
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Zoom Parallax Gallery */}
      <section className="relative">
        <div className="text-center py-16 bg-background">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-luxury-blue bg-clip-text text-transparent">
            Galería de Lujo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explora nuestras transformaciones más espectaculares en coches de alta gama
          </p>
        </div>
        <ZoomParallax images={luxuryCarImages} />
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-luxury-blue/10">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para Transformar tu Vehículo?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Únete a cientos de clientes satisfechos que han confiado en Big Coches para el cuidado premium de sus vehículos de lujo.
          </p>
          <Button 
            size="lg" 
            className="luxury-button-filled text-lg px-8 py-4"
            onClick={() => window.location.href = '/reserva'}
          >
            Reservar Servicio Premium
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;