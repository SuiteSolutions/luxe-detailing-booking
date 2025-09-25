import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-black text-text-primary-dark">
                Big <span className="text-luxury-gradient">Coches</span>
              </span>
            </div>
            <p className="text-text-secondary-dark text-sm leading-relaxed">
              Detailing de lujo para coches premium en Barcelona. 
              Cuidado artesanal y resultados excepcionales para tu vehículo.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary-dark">
              Servicios
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/servicios" className="text-text-secondary-dark hover:text-luxury-blue transition-colors">
                  Detailing Integral
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-text-secondary-dark hover:text-luxury-blue transition-colors">
                  Coating Cerámico
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-text-secondary-dark hover:text-luxury-blue transition-colors">
                  Paint Protection Film
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-text-secondary-dark hover:text-luxury-blue transition-colors">
                  Pulido y Corrección
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary-dark">
              Contacto
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-luxury-blue mt-0.5" />
                <span className="text-text-secondary-dark">
                  Carrer de l'Exemple, 123<br />
                  08001 Barcelona, España
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-luxury-blue" />
                <span className="text-text-secondary-dark">+34 932 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-luxury-blue" />
                <span className="text-text-secondary-dark">hola@bigcoches.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-luxury-blue mt-0.5" />
                <div className="text-text-secondary-dark">
                  <div>Lun - Vie: 9:00 - 18:00</div>
                  <div>Sáb: 9:00 - 14:00</div>
                  <div>Dom: Cerrado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary-dark">
              Enlaces
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre-nosotros" className="text-text-secondary-dark hover:text-luxury-blue transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-text-secondary-dark hover:text-luxury-blue transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link to="/opiniones" className="text-text-secondary-dark hover:text-luxury-blue transition-colors">
                  Opiniones
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-text-secondary-dark hover:text-luxury-blue transition-colors">
                  Cómo Llegar
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-dark pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-text-muted-dark">
              © {currentYear} Big Coches. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/legal/privacidad" className="text-text-muted-dark hover:text-luxury-blue transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/legal/aviso-legal" className="text-text-muted-dark hover:text-luxury-blue transition-colors">
                Aviso Legal
              </Link>
              <Link to="/legal/cookies" className="text-text-muted-dark hover:text-luxury-blue transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;