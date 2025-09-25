import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ES');
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Galería', href: '/galeria' },
    { name: 'Opiniones', href: '/opiniones' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const languages = ['ES', 'EN', 'DE', 'FR', 'IT'];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-black text-foreground">
              Big <span className="text-luxury-gradient">Coches</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <button className="flex items-center space-x-1 px-3 py-1 rounded-md border border-border hover:bg-secondary transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{currentLang}</span>
              </button>
            </div>
            <Button asChild className="btn-luxury">
              <Link to="/reserva">Reservar Detailing</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-secondary hover:text-primary"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-primary bg-secondary'
                      : 'text-text-secondary hover:text-primary hover:bg-secondary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <div className="flex items-center space-x-2 px-3">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{currentLang}</span>
                </div>
                <Button asChild className="btn-luxury w-full">
                  <Link to="/reserva" onClick={() => setIsMenuOpen(false)}>
                    Reservar Detailing
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;