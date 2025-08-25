import React, { useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState([0]); // First item open by default

  const faqs = [
    {
      question: '¿Cómo busco propiedades en Estatein?',
      answer: 'Buscar propiedades en Estatein es fácil. Utiliza nuestra función de búsqueda avanzada en la página principal para filtrar por ubicación, tipo de propiedad, rango de precios y más. También puedes explorar nuestras propiedades destacadas o contactar a nuestros agentes para asistencia personalizada.',
    },
    {
      question: '¿Qué documentos necesito para vender mi propiedad a través de Estatein?',
      answer: 'Para vender tu propiedad necesitarás: escritura de la propiedad, identificación oficial, comprobantes de pago de servicios e impuestos al día, planos arquitectónicos (si están disponibles), y cualquier documentación de mejoras realizadas. Nuestro equipo te guiará a través de todo el proceso.',
    },
    {
      question: '¿Cómo puedo contactar a un agente de Estatein?',
      answer: 'Puedes contactar a nuestros agentes de varias maneras: a través del formulario de contacto en nuestro sitio web, llamando a nuestra línea directa, enviando un email, o visitando nuestras oficinas. También ofrecemos chat en vivo durante horarios de oficina para consultas inmediatas.',
    },
    {
      question: '¿Ofrecen servicios de financiamiento?',
      answer: 'Sí, trabajamos con una red de instituciones financieras confiables para ayudarte a obtener el mejor financiamiento para tu propiedad. Nuestros asesores pueden guiarte a través de las opciones disponibles y ayudarte a encontrar las mejores tasas y términos.',
    },
    {
      question: '¿Cuál es el proceso de compra de una propiedad?',
      answer: 'El proceso incluye: 1) Búsqueda y selección de propiedad, 2) Negociación de precio y términos, 3) Inspección de la propiedad, 4) Obtención de financiamiento, 5) Revisión legal y documentación, 6) Cierre de la transacción. Nuestro equipo te acompañará en cada paso.',
    },
    {
      question: '¿Manejan propiedades de inversión?',
      answer: 'Absolutamente. Tenemos experiencia especializada en propiedades de inversión. Ofrecemos análisis de mercado, evaluación de potencial de retorno, gestión de propiedades de alquiler, y asesoría estratégica para maximizar tu inversión inmobiliaria.',
    },
  ];

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-purple-400" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Preguntas <span className="gradient-text">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Encuentra respuestas a preguntas comunes sobre nuestros servicios, procesos de compra y venta, 
            y cómo podemos ayudarte en tu viaje inmobiliario.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item rounded-xl overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              ¿Aún tienes preguntas?
            </h3>
            <p className="text-gray-300 mb-6">
              Nuestro equipo de expertos está aquí para ayudarte. No dudes en contactarnos 
              para obtener respuestas personalizadas a tus consultas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">
                Contactar Soporte
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Ver Más FAQs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

