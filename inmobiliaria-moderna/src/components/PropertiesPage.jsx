import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Search, 
  Filter, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Heart,
  Eye,
  SlidersHorizontal
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import casaLujo1 from '../assets/casa-lujo-1.jpg';
import casaLujo2 from '../assets/casa-lujo-2.jpg';
import casaLujo3 from '../assets/casa-lujo-3.jpg';

const PropertiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedBedrooms, setSelectedBedrooms] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const properties = [
    {
      id: 1,
      title: 'Seaside Serenity Villa',
      location: 'Malibu, California',
      price: '$1,250,000',
      type: 'Villa',
      status: 'En Venta',
      bedrooms: 4,
      bathrooms: 3,
      area: '2,500 sq ft',
      image: casaLujo1,
      description: 'Una impresionante villa frente al mar con vistas panorámicas al océano y acabados de lujo.'
    },
    {
      id: 2,
      title: 'Metropolitan Haven',
      location: 'Nueva York, NY',
      price: '$850,000',
      type: 'Apartamento',
      status: 'En Venta',
      bedrooms: 3,
      bathrooms: 2,
      area: '1,800 sq ft',
      image: casaLujo2,
      description: 'Moderno apartamento en el corazón de Manhattan con amenidades de clase mundial.'
    },
    {
      id: 3,
      title: 'Rustic Retreat Cottage',
      location: 'Aspen, Colorado',
      price: '$950,000',
      type: 'Casa',
      status: 'En Venta',
      bedrooms: 5,
      bathrooms: 4,
      area: '3,200 sq ft',
      image: casaLujo3,
      description: 'Encantadora cabaña de montaña con arquitectura rústica y vistas espectaculares.'
    },
    {
      id: 4,
      title: 'Urban Loft Paradise',
      location: 'Los Angeles, CA',
      price: '$720,000',
      type: 'Loft',
      status: 'En Venta',
      bedrooms: 2,
      bathrooms: 2,
      area: '1,400 sq ft',
      image: casaLujo1,
      description: 'Loft moderno en el distrito artístico con techos altos y diseño industrial.'
    },
    {
      id: 5,
      title: 'Luxury Penthouse Suite',
      location: 'Miami, Florida',
      price: '$2,100,000',
      type: 'Penthouse',
      status: 'En Venta',
      bedrooms: 4,
      bathrooms: 4,
      area: '3,800 sq ft',
      image: casaLujo2,
      description: 'Penthouse de lujo con terraza privada y vistas panorámicas de la ciudad.'
    },
    {
      id: 6,
      title: 'Countryside Manor',
      location: 'Napa Valley, CA',
      price: '$1,800,000',
      type: 'Mansión',
      status: 'En Venta',
      bedrooms: 6,
      bathrooms: 5,
      area: '5,200 sq ft',
      image: casaLujo3,
      description: 'Elegante mansión en viñedos con arquitectura clásica y jardines extensos.'
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || property.type === selectedType;
    const matchesLocation = selectedLocation === 'all' || property.location.includes(selectedLocation);
    const matchesBedrooms = selectedBedrooms === 'all' || property.bedrooms.toString() === selectedBedrooms;
    
    return matchesSearch && matchesType && matchesLocation && matchesBedrooms;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Encuentra Tu <span className="gradient-text">Propiedad</span> de Ensueño
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Bienvenido a Estatein, donde tu sueño de propiedad se encuentra con nuestra experiencia curada. Explora nuestras ofertas seleccionadas de propiedades, cada una ofreciendo una historia única y la promesa de encontrar tu hogar perfecto.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800/50 rounded-2xl p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="Buscar por ubicación o código"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-gray-700/50 border-gray-600"
                    />
                  </div>
                  
                  <motion.button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SlidersHorizontal className="h-5 w-5" />
                    Filtros
                  </motion.button>
                </div>

                {/* Filters */}
                {showFilters && (
                  <motion.div 
                    className="grid md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-700"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <div>
                      <label className="block text-sm font-medium mb-2">Tipo de Propiedad</label>
                      <select 
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white"
                      >
                        <option value="all">Todos los Tipos</option>
                        <option value="Villa">Villa</option>
                        <option value="Apartamento">Apartamento</option>
                        <option value="Casa">Casa</option>
                        <option value="Loft">Loft</option>
                        <option value="Penthouse">Penthouse</option>
                        <option value="Mansión">Mansión</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Ubicación</label>
                      <select 
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white"
                      >
                        <option value="all">Todas las Ubicaciones</option>
                        <option value="California">California</option>
                        <option value="Nueva York">Nueva York</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Florida">Florida</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Habitaciones</label>
                      <select 
                        value={selectedBedrooms}
                        onChange={(e) => setSelectedBedrooms(e.target.value)}
                        className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white"
                      >
                        <option value="all">Cualquier cantidad</option>
                        <option value="2">2 Habitaciones</option>
                        <option value="3">3 Habitaciones</option>
                        <option value="4">4 Habitaciones</option>
                        <option value="5">5+ Habitaciones</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Rango de Precio</label>
                      <select 
                        value={selectedPrice}
                        onChange={(e) => setSelectedPrice(e.target.value)}
                        className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white"
                      >
                        <option value="all">Cualquier precio</option>
                        <option value="0-500k">$0 - $500,000</option>
                        <option value="500k-1m">$500,000 - $1,000,000</option>
                        <option value="1m-2m">$1,000,000 - $2,000,000</option>
                        <option value="2m+">$2,000,000+</option>
                      </select>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">
                Descubre un Mundo de Posibilidades
              </h2>
              <p className="text-gray-400">
                {filteredProperties.length} de {properties.length} propiedades
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  className="property-card bg-gray-800/50 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="property-image w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                        {property.status}
                      </span>
                      <span className="px-3 py-1 bg-gray-800/80 text-white text-sm rounded-full">
                        {property.type}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
                      >
                        <Heart className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                      <div className="flex items-center text-gray-400 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{property.description}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-y border-gray-700">
                      <div className="text-center">
                        <Bed className="h-5 w-5 mx-auto mb-1 text-blue-400" />
                        <div className="text-sm font-semibold">{property.bedrooms}</div>
                      </div>
                      <div className="text-center">
                        <Bath className="h-5 w-5 mx-auto mb-1 text-blue-400" />
                        <div className="text-sm font-semibold">{property.bathrooms}</div>
                      </div>
                      <div className="text-center">
                        <Square className="h-5 w-5 mx-auto mb-1 text-blue-400" />
                        <div className="text-sm font-semibold">{property.area}</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-2xl font-bold text-blue-400">
                        {property.price}
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button className="btn-primary">
                          <Eye className="h-4 w-4 mr-2" />
                          Ver Detalles
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-semibold mb-4">No se encontraron propiedades</h3>
                <p className="text-gray-400 mb-8">
                  Intenta ajustar tus filtros de búsqueda para encontrar más opciones.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedType('all');
                    setSelectedPrice('all');
                    setSelectedLocation('all');
                    setSelectedBedrooms('all');
                  }}
                  className="btn-primary"
                >
                  Limpiar Filtros
                </Button>
              </div>
            )}

            {/* Load More */}
            {filteredProperties.length > 0 && (
              <div className="text-center mt-12">
                <p className="text-gray-400 mb-6">
                  ¿No encuentras lo que buscas? Tenemos más de 500 propiedades disponibles.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                    Cargar Más Propiedades
                  </Button>
                </motion.div>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;

