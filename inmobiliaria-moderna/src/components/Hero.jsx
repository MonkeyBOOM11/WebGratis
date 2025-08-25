import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, MapPin, Home, Building2, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import casaLujo1 from '../assets/casa-lujo-1.jpg';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { number: '200+', label: 'Propiedades Vendidas' },
    { number: '10k+', label: 'Clientes Satisfechos' },
    { number: '16+', label: 'Años de Experiencia' },
  ];

  return (
    <section id="inicio" className="hero-section">
      {/* Background with parallax effect */}
      <div 
        className="hero-bg parallax-element"
        style={{
          backgroundImage: `url(${casaLujo1})`,
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-1" />

      <div className="hero-content relative z-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <motion.h1 
                  className="text-5xl lg:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Descubre Tu{' '}
                  <span className="gradient-text">Propiedad</span>{' '}
                  de Ensueño con Estatein
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Tu viaje para encontrar la propiedad perfecta comienza aquí. Explora nuestras ofertas seleccionadas para encontrar el hogar que siempre has soñado.
                </motion.p>
              </div>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection delay={0.7}>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="btn-primary text-lg px-8 py-4">
                    Explorar Propiedades
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-8 py-4 border-white/20 text-white hover:bg-white/10"
                  >
                    Saber Más
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={0.9}>
              <div className="grid grid-cols-3 gap-8 pt-8">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="stats-number">{stat.number}</div>
                    <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content - Search Form */}
          <AnimatedSection delay={0.4} direction="right">
            <div className="lg:ml-auto">
              <motion.div 
                className="glass-effect rounded-2xl p-8 max-w-md"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-center">
                  Encuentra Tu Hogar Ideal
                </h3>
                
                <div className="space-y-4">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                  >
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input 
                      placeholder="Ubicación"
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Home className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-md text-white">
                      <option value="">Tipo de Propiedad</option>
                      <option value="casa">Casa</option>
                      <option value="apartamento">Apartamento</option>
                      <option value="villa">Villa</option>
                    </select>
                  </motion.div>
                  
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                  >
                    <TrendingUp className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-md text-white">
                      <option value="">Rango de Precio</option>
                      <option value="0-100k">$0 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k+">$500,000+</option>
                    </select>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="w-full btn-primary">
                      <Search className="h-5 w-5 mr-2" />
                      Buscar Propiedades
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Services Icons */}
        <AnimatedSection delay={1.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {[
              { icon: Home, title: 'Encuentra Tu Hogar Ideal', desc: 'Descubre propiedades que se adapten a tu estilo de vida' },
              { icon: TrendingUp, title: 'Desbloquea el Valor de la Propiedad', desc: 'Maximiza el potencial de inversión de tu propiedad' },
              { icon: Building2, title: 'Gestión de Propiedades sin Esfuerzo', desc: 'Servicios de gestión integral para propietarios' },
              { icon: Search, title: 'Inversiones Inteligentes', desc: 'Decisiones informadas con nuestro análisis experto' },
            ].map((service, index) => (
              <motion.div 
                key={index} 
                className="service-card glass-effect rounded-xl p-6 text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <service.icon className="service-icon h-12 w-12 mx-auto mb-4 text-blue-400" />
                <h4 className="font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;

