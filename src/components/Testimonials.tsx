import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const testimonials = [
  {
    name: "Juliana Costa",
    location: "Salvador, BA",
    earning: "R$ 1.200",
    period: "primeira semana",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    type: "image"
  },
  {
    name: "Patricia Lima",
    location: "Fortaleza, CE",
    earning: "R$ 850",
    period: "primeiros 3 dias",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    type: "image"
  },
  {
    name: "Fernanda Souza",
    location: "Brasília, DF",
    earning: "R$ 2.100",
    period: "primeiro mês",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    type: "image"
  },
  {
    name: "Camila Rodrigues",
    location: "Porto Alegre, RS",
    earning: "R$ 1.500",
    period: "primeiras 2 semanas",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    type: "video"
  },
  {
    name: "Roberta Alves",
    location: "Recife, PE",
    earning: "R$ 950",
    period: "primeira semana",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    type: "audio"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-10 text-6xl opacity-10 animate-bounce">🍓</div>
      <div className="absolute bottom-10 left-10 text-5xl opacity-10 animate-pulse">💖</div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Depoimentos e <span className="text-pink-600">Resultados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de <span className="font-bold text-pink-600">180 mulheres</span> já trabalham com a gente em{' '}
            <span className="font-bold text-pink-600">15 estados</span> diferentes!
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Profile image */}
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl ring-4 ring-pink-200">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Media type indicator */}
                        {testimonial.type === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-full">
                            <Play className="w-8 h-8 text-white fill-current" />
                          </div>
                        )}
                        {testimonial.type === 'audio' && (
                          <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                          </div>
                        )}
                        
                        {/* Floating elements */}
                        <div className="absolute -top-3 -right-3 text-2xl animate-bounce">✨</div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 mb-4">{testimonial.location}</p>
                        
                        <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-xl p-4 text-white text-center mb-4">
                          <p className="text-3xl font-bold">{testimonial.earning}</p>
                          <p className="text-green-100">na {testimonial.period}</p>
                        </div>
                        
                        <p className="text-gray-700 italic">
                          "Nunca imaginei que seria tão simples e lucrativo. O Docinho Express mudou minha vida!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-pink-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-pink-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-pink-600 w-8' 
                    : 'bg-pink-200 hover:bg-pink-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}