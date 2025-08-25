import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { 
  Users, 
  Award, 
  TrendingUp, 
  Shield, 
  Heart, 
  Target,
  CheckCircle,
  Star
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutUs = () => {
  const stats = [
    { number: '3+', label: 'Años de Excelencia' },
    { number: '500+', label: 'Clientes Felices' },
    { number: '50+', label: 'Reconocimientos de la Industria' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Confianza',
      description: 'Somos la cara de la confianza y la pasión, y nuestros clientes confían en nosotros.'
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Nos esforzamos por la excelencia en cada proyecto que emprendemos.'
    },
    {
      icon: Heart,
      title: 'Cliente Céntrico',
      description: 'Nuestros clientes están en el centro de todo lo que hacemos.'
    },
    {
      icon: Target,
      title: 'Nuestro Compromiso',
      description: 'Estamos comprometidos con la entrega de resultados excepcionales.'
    }
  ];

  const achievements = [
    {
      title: '3+ Años de Excelencia',
      description: 'Con más de tres años en el mercado, hemos establecido una sólida reputación de excelencia y confiabilidad en el sector inmobiliario.'
    },
    {
      title: 'Clientes Felices',
      description: 'Hemos ayudado a más de 500 familias a encontrar su hogar ideal, construyendo relaciones duraderas basadas en la confianza.'
    },
    {
      title: 'Reconocimiento de la Industria',
      description: 'Nuestro compromiso con la excelencia ha sido reconocido con más de 50 premios y certificaciones de la industria.'
    }
  ];

  const journey = [
    {
      step: '01',
      title: 'Descubre un Mundo de Posibilidades',
      description: 'Tu viaje comienza con la exploración de nuestra extensa cartera de propiedades. Utilizamos tecnología avanzada para ayudarte a descubrir propiedades que se alineen con tus sueños.'
    },
    {
      step: '02',
      title: 'Reduciendo Tus Opciones',
      description: 'Una vez que hayas explorado varias opciones, es hora de reducir tus opciones. Nuestros expertos te guiarán a través del proceso de selección.'
    },
    {
      step: '03',
      title: 'Orientación Personalizada',
      description: 'Nuestros agentes experimentados te brindarán orientación personalizada, respondiendo tus preguntas y abordando cualquier inquietud.'
    },
    {
      step: '04',
      title: 'Ver en Persona',
      description: 'Programa visitas para ver las propiedades en persona. Nuestros agentes te acompañarán, brindando información valiosa sobre cada propiedad.'
    },
    {
      step: '05',
      title: 'Tomando Decisiones Informadas',
      description: 'Armado con toda la información necesaria, estarás listo para tomar una decisión informada. Nuestro equipo te apoyará en cada paso.'
    },
    {
      step: '06',
      title: 'Cerrando el Trato',
      description: 'Una vez que hayas tomado tu decisión, te guiaremos a través del proceso de cierre, asegurándonos de que todo se desarrolle sin problemas.'
    }
  ];

  const team = [
    {
      name: 'Max Mitchell',
      role: 'Fundador',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sarah Johnson',
      role: 'Directora de Propiedades',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'David Brown',
      role: 'Jefe de Ventas',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Turner',
      role: 'Agente Senior',
      image: '/api/placeholder/300/300'
    }
  ];

  const clients = [
    {
      name: 'ABC Corporation',
      category: 'Corporativo',
      description: 'Líder en desarrollo comercial',
      rating: 5
    },
    {
      name: 'GreenTech Enterprises',
      category: 'Tecnología',
      description: 'Empresa de tecnología verde',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Nuestro <span className="gradient-text">Viaje</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Nuestro viaje en bienes raíces comenzó con una simple misión: ayudar a las personas a encontrar sus hogares ideales. A lo largo de los años, hemos evolucionado hasta convertirnos en un equipo de profesionales experimentados comprometidos con brindar un servicio excepcional.
                </p>
                <div className="grid grid-cols-3 gap-8 pt-8">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="stats-number">{stat.number}</div>
                      <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} direction="right">
              <div className="relative">
                <motion.div 
                  className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-2xl flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <Users className="h-32 w-32 text-blue-400" />
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Nuestros Valores</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nuestros valores fundamentales guían cada decisión que tomamos. Nos comprometemos a mantener los más altos estándares de integridad, excelencia y servicio al cliente.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-800/50 rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Nuestros Logros</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A lo largo de nuestro viaje, hemos alcanzado varios hitos que demuestran nuestro compromiso con la excelencia y la satisfacción del cliente.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 rounded-2xl p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Award className="h-12 w-12 text-blue-400 mb-6" />
                  <h3 className="text-xl font-semibold mb-4">{achievement.title}</h3>
                  <p className="text-gray-400">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Journey Process */}
      <section className="section-padding bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Navegando la Experiencia Ilamarca</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                En Ilamarca, hemos diseñado un proceso paso a paso para ayudarte a encontrar y asegurar la propiedad de tus sueños.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {journey.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl font-bold text-blue-400 mb-4">Paso {step.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Conoce al Equipo Ilamarca</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                En Ilamarca, nuestro éxito se basa en el talento excepcional y la dedicación de nuestro equipo. Conoce a las personas que hacen posible que tus sueños inmobiliarios se hagan realidad.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-full flex items-center justify-center">
                    <Users className="h-24 w-24 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-400">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Nuestros Clientes Valorados</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                En Estatein, hemos tenido el privilegio de trabajar con una amplia gama de clientes en diversos sectores. Aquí hay algunos de los clientes valorados que hemos tenido el honor de servir.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 rounded-2xl p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
                      <p className="text-blue-400 mb-2">{client.category}</p>
                      <p className="text-gray-400">{client.description}</p>
                    </div>
                    <div className="flex">
                      {[...Array(client.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Comienza Tu Viaje Inmobiliario Hoy</h2>
            <p className="text-xl text-gray-300 mb-8">
              Tu hogar ideal te está esperando. Permítenos ayudarte a encontrar la propiedad perfecta que se adapte a tus necesidades y presupuesto.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                Explorar Propiedades
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

