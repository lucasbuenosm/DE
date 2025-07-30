import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const testimonials = [
  {
    name: "Juliana Costa",
    location: "Salvador, BA",
    earning: "R$ 8.590",
    period: "3 primeiras semanas",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    type: "image",
    quote: "Eu nunca imaginei que seria tão fácil começar e ganhar tão bem logo no começo!"
  },
  {
    name: "Patricia Lima",
    location: "Fortaleza, CE",
    earning: "R$ 7.850",
    period: "Primeiros 15 dias",
    image: "https://images.pexels.com/photos/8171191/pexels-photo-8171191.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    type: "image",
    quote: "Confesso que achei que era complicado... Mas foi tudo tão simples que fiquei surpresa."
  },
  {
    name: "Fernanda Souza",
    location: "Brasília, DF",
    earning: "R$ 10.200",
    period: "Primeiro mês",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    type: "image",
    quote: "Achei que precisava ter experiência, mas mesmo sem saber nada eu já comecei ganhando."
  },
  {
    name: "Camila Rodrigues",
    location: "Porto Alegre, RS",
    earning: "R$ 3.230",
    period: "Primeiros 7 dias",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    type: "video",
    quote: "Me surpreendi com a facilidade. Em poucos dias já estava recebendo pedidos."
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
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl ring-4 ring-pink-200">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {testimonial.type === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-full">
                            <Play className="w-8 h-8 text-white fill-current" />
                          </div>
                        )}
                        <div className="absolute -top-3 -right-3 text-2xl animate-bounce">✨</div>
                      </div>

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
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
