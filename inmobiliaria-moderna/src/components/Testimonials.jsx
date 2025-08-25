import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Wade Warren',
      role: 'CEO, ABC Corporation',
      rating: 5,
      text: 'Servicio excepcional y profesionalismo incomparable. Nuestro equipo de bienes raíces superó todas las expectativas y nos ayudó a encontrar la propiedad perfecta.',
      avatar: '👨‍💼',
    },
    {
      id: 2,
      name: 'Emelie Thomson',
      role: 'Directora de Marketing',
      rating: 5,
      text: 'Eficiente y confiable. Ilamarca proporcionó un servicio de primera clase que hizo que nuestro proceso de compra fuera fluido y sin estrés.',
      avatar: '👩‍💼',
    },
    {
      id: 3,
      name: 'John Mans',
      role: 'Asesor de Confianza',
      rating: 5,
      text: 'Asesores de confianza. El equipo de Estatein demostró un conocimiento excepcional del mercado y nos guió hacia la mejor decisión de inversión.',
      avatar: '👨‍🏫',
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      role: 'Inversionista Inmobiliaria',
      rating: 5,
      text: 'Experiencia excepcional desde el primer contacto hasta el cierre. Su atención al detalle y dedicación al cliente es verdaderamente impresionante.',
      avatar: '👩‍💻',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Lo Que Dicen Nuestros <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre las experiencias de nuestros clientes satisfechos y cómo hemos transformado 
            sus sueños inmobiliarios en realidad.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="testimonial-card rounded-2xl p-8 md:p-12 mx-4">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                      {/* Quote Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center">
                          <Quote className="h-8 w-8 text-purple-400" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        {/* Stars */}
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex items-center justify-center md:justify-start space-x-4">
                          <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center text-2xl">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <div className="font-semibold text-white">{testimonial.name}</div>
                            <div className="text-gray-400 text-sm">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-purple-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            ¿Listo para unirte a nuestros clientes satisfechos?
          </p>
          <Button size="lg" className="btn-primary">
            Ver Todos los Testimonios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

