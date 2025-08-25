import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Send,
  Home,
  Building,
  Users,
  FileText
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Inicio': [
      { name: 'Búsqueda de Propiedades', href: '#' },
      { name: 'Nuestros Servicios', href: '#' },
      { name: 'Testimonios', href: '#' },
      { name: 'Nuestro Equipo', href: '#' },
    ],
    'Sobre Nosotros': [
      { name: 'Nuestra Historia', href: '#' },
      { name: 'Nuestros Valores', href: '#' },
      { name: 'Nuestro Equipo', href: '#' },
      { name: 'Nuestros Clientes', href: '#' },
    ],
    'Propiedades': [
      { name: 'Portafolio', href: '#' },
      { name: 'Categorías', href: '#' },
      { name: 'Marketing Estratégico', href: '#' },
      { name: 'Asesoría de Negociación', href: '#' },
    ],
    'Servicios': [
      { name: 'Asesoría de Valuación', href: '#' },
      { name: 'Marketing Estratégico', href: '#' },
      { name: 'Asesoría de Negociación', href: '#' },
      { name: 'Servicios de Cierre', href: '#' },
    ],
    'Contacto': [
      { name: 'Formulario de Contacto', href: '#contacto' },
      { name: 'Nuestras Oficinas', href: '#' },
    ],
  };

  return (
    <footer className="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Comienza Tu Viaje Inmobiliario <span className="gradient-text">Hoy</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tu hogar ideal te está esperando. Suscríbete a nuestro newsletter para recibir 
              las últimas propiedades y consejos inmobiliarios directamente en tu bandeja de entrada.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Ingresa tu email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="btn-primary px-6">
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Al suscribirte, aceptas recibir emails de marketing de Estatein.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-2xl font-bold gradient-text mb-4">Estatein</h2>
                <p className="text-gray-300 leading-relaxed">
                  Tu socio de confianza en bienes raíces. Ayudamos a las personas a encontrar 
                  sus hogares ideales y a los inversionistas a tomar decisiones inteligentes 
                  desde hace más de 16 años.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">info@estatein.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">123 Main Street, Ciudad, País</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h4 className="font-semibold text-white mb-4">Síguenos</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, href: '#' },
                    { icon: Twitter, href: '#' },
                    { icon: Instagram, href: '#' },
                    { icon: Linkedin, href: '#' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 transition-colors"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-4">
              <div className="grid md:grid-cols-5 gap-8">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-white mb-4 flex items-center">
                      {category === 'Inicio' && <Home className="h-4 w-4 mr-2" />}
                      {category === 'Sobre Nosotros' && <Users className="h-4 w-4 mr-2" />}
                      {category === 'Propiedades' && <Building className="h-4 w-4 mr-2" />}
                      {category === 'Servicios' && <FileText className="h-4 w-4 mr-2" />}
                      {category === 'Contacto' && <Phone className="h-4 w-4 mr-2" />}
                      {category}
                    </h4>
                    <ul className="space-y-2">
                      {links.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            className="text-gray-400 hover:text-white transition-colors text-sm"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Estatein. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

