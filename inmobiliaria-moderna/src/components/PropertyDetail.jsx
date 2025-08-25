import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Car, 
  Wifi, 
  Dumbbell, 
  Shield, 
  Camera,
  Heart,
  Share2,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import casaLujo1 from '../assets/casa-lujo-1.jpg';
import casaLujo2 from '../assets/casa-lujo-2.jpg';
import casaLujo3 from '../assets/casa-lujo-3.jpg';

const PropertyDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const images = [casaLujo1, casaLujo2, casaLujo3];
  
  const amenities = [
    { icon: Wifi, name: 'WiFi de Alta Velocidad' },
    { icon: Dumbbell, name: 'Gimnasio Privado' },
    { icon: Shield, name: 'Seguridad 24/7' },
    { icon: Car, name: 'Estacionamiento Privado' },
    { icon: Camera, name: 'Sistema de Vigilancia' },
  ];

  const specifications = [
    { label: 'Año de Construcción', value: '2023' },
    { label: 'Tipo de Propiedad', value: 'Villa de Lujo' },
    { label: 'Estado', value: 'Nueva' },
    { label: 'Orientación', value: 'Sur' },
    { label: 'Calefacción', value: 'Central' },
    { label: 'Aire Acondicionado', value: 'Central' },
    { label: 'Pisos', value: 'Mármol y Madera' },
    { label: 'Ventanas', value: 'Doble Vidrio' },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Hero Section with Images */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <AnimatedSection>
              <div className="space-y-4">
                <motion.div 
                  className="relative h-96 rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src={images[selectedImage]} 
                    alt="Propiedad principal"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
                    >
                      <Heart className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
                    >
                      <Share2 className="h-5 w-5" />
                    </motion.button>
                  </div>
                </motion.div>
                
                <div className="grid grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`h-24 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index 
                          ? 'border-blue-500' 
                          : 'border-transparent hover:border-blue-300'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img 
                        src={image} 
                        alt={`Vista ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Property Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">En Venta</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Villa</span>
                  </div>
                  <h1 className="text-4xl font-bold mb-4">Seaside Serenity Villa</h1>
                  <div className="flex items-center text-gray-300 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>Malibu, California</span>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Una impresionante villa frente al mar con vistas panorámicas al océano y acabados de lujo. 
                    Esta propiedad única ofrece la perfecta combinación de elegancia moderna y comodidad costera.
                  </p>
                </div>

                {/* Price and Features */}
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-blue-400 mb-4">$1,250,000</div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <Bed className="h-6 w-6 mx-auto mb-2 text-blue-400" />
                      <div className="font-semibold">4</div>
                      <div className="text-sm text-gray-400">Habitaciones</div>
                    </div>
                    <div className="text-center">
                      <Bath className="h-6 w-6 mx-auto mb-2 text-blue-400" />
                      <div className="font-semibold">3</div>
                      <div className="text-sm text-gray-400">Baños</div>
                    </div>
                    <div className="text-center">
                      <Square className="h-6 w-6 mx-auto mb-2 text-blue-400" />
                      <div className="font-semibold">2,500</div>
                      <div className="text-sm text-gray-400">sq ft</div>
                    </div>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="flex gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button className="w-full btn-primary">
                      <Phone className="h-5 w-5 mr-2" />
                      Llamar Ahora
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-500/10">
                      <Calendar className="h-5 w-5 mr-2" />
                      Agendar Visita
                    </Button>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="section-padding bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">Amenidades y Características</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-800/50 rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <amenity.icon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="font-semibold">{amenity.name}</h3>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-8">Detalles Completos de Precios</h2>
              <div className="bg-gray-800/50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                    <span className="text-lg font-semibold">Precio Base</span>
                    <span className="text-xl font-bold text-blue-400">$1,250,000</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Impuestos de Transferencia</span>
                      <span>$12,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gastos Legales</span>
                      <span>$5,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Inspección</span>
                      <span>$800</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Seguro de Título</span>
                      <span>$2,500</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total Estimado</span>
                      <span className="text-2xl font-bold text-blue-400">$1,270,800</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold mb-8">Especificaciones</h2>
              <div className="bg-gray-800/50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {specifications.map((spec, index) => (
                    <div key={index} className="border-b border-gray-700 pb-3">
                      <div className="text-sm text-gray-400">{spec.label}</div>
                      <div className="font-semibold">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding bg-gray-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Consultar sobre Seaside Serenity Villa</h2>
              <p className="text-gray-300">
                ¿Interesado en esta propiedad? Completa el formulario y nos pondremos en contacto contigo.
              </p>
            </div>

            <motion.div 
              className="bg-gray-800/50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium mb-2">Nombre</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo"
                      className="bg-gray-700/50 border-gray-600"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      className="bg-gray-700/50 border-gray-600"
                    />
                  </motion.div>
                </div>
                
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium mb-2">Teléfono</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Tu número de teléfono"
                    className="bg-gray-700/50 border-gray-600"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tu interés en esta propiedad..."
                    rows={4}
                    className="bg-gray-700/50 border-gray-600"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full btn-primary">
                    <Mail className="h-5 w-5 mr-2" />
                    Enviar Consulta
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetail;

