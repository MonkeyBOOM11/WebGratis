import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Bed, Bath, Square, MapPin, Heart, Eye } from 'lucide-react';
import casaLujo1 from '../assets/casa-lujo-1.jpg';
import casaLujo2 from '../assets/casa-lujo-2.jpg';
import casaLujo3 from '../assets/casa-lujo-3.jpg';

const FeaturedProperties = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.property-card-animate');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const properties = [
    {
      id: 1,
      title: 'Seaside Serenity Villa',
      location: 'Malibu, California',
      price: '$1,250,000',
      image: casaLujo1,
      beds: 4,
      baths: 3,
      area: '2,500',
      type: 'Villa',
      status: 'En Venta',
      description: 'Una impresionante villa frente al mar con vistas panorámicas al océano y acabados de lujo.',
    },
    {
      id: 2,
      title: 'Metropolitan Haven',
      location: 'Nueva York, NY',
      price: '$850,000',
      image: casaLujo2,
      beds: 3,
      baths: 2,
      area: '1,800',
      type: 'Apartamento',
      status: 'En Venta',
      description: 'Moderno apartamento en el corazón de Manhattan con amenidades de clase mundial.',
    },
    {
      id: 3,
      title: 'Rustic Retreat Cottage',
      location: 'Aspen, Colorado',
      price: '$950,000',
      image: casaLujo3,
      beds: 5,
      baths: 4,
      area: '3,200',
      type: 'Casa',
      status: 'En Venta',
      description: 'Encantadora cabaña de montaña con arquitectura rústica y vistas espectaculares.',
    },
  ];

  return (
    <section id="propiedades" className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Propiedades <span className="gradient-text">Destacadas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explora nuestras propiedades cuidadosamente seleccionadas que ofrecen lo mejor en lujo, 
            comodidad y ubicación privilegiada.
          </p>
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
              Ver Todas las Propiedades
            </Button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              data-index={index}
              className={`property-card property-card-animate rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 ${
                visibleCards.includes(index.toString()) ? 'fade-in-up visible' : 'fade-in-up'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="property-image w-full h-64 object-cover"
                />
                
                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver Detalles
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-600 text-white">
                    {property.status}
                  </Badge>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-black/50 text-white">
                    {property.type}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Price */}
                <div className="text-2xl font-bold gradient-text mb-2">
                  {property.price}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {property.title}
                </h3>

                {/* Location */}
                <div className="flex items-center text-gray-400 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{property.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {property.description}
                </p>

                {/* Property Details */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.baths}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.area} sq ft</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full btn-primary">
                  Ver Detalles de la Propiedad
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            ¿No encuentras lo que buscas? Tenemos más de 500 propiedades disponibles.
          </p>
          <Button size="lg" className="btn-primary">
            Explorar Todas las Propiedades
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;

