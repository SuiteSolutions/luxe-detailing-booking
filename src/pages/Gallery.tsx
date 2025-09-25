'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
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