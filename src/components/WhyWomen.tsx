import React from 'react';
import { Star, Heart } from 'lucide-react';

const testimonials = [
  {
    quote: "Estou muito Feliz, Fiz R$732 no primeiro dia!",
    name: "Ana Silva",
    location: "São Paulo, SP"
  },
  {
    quote: "Graças a deus encontrei um trabalho que eu mesma defino os meus horários e dias.",
    name: "Maria Santos",
    location: "Rio de Janeiro, RJ"
  },
  {
    quote: "Fiquei tão feliz em receber tudo certinho, hoje em dia é dificil de confiar em alguém na internet",
    name: "Carla Oliveira",
    location: "Belo Horizonte, MG"
  }
];

export default function WhyWomen() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-600 via-red-500 to-pink-700 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 text-3xl opacity-30 animate-float">🍓</div>
        <div className="absolute top-40 right-20 text-2xl opacity-30 animate-float-reverse">💖</div>
        <div className="absolute bottom-32 left-10 text-4xl opacity-30 animate-float">🍬</div>
        <div className="absolute bottom-20 right-16 text-3xl opacity-30 animate-float-reverse">✨</div>
        <Heart className="absolute top-60 left-32 w-6 h-6 text-pink-200 opacity-40 animate-pulse" fill="currentColor" />
        <Heart className="absolute bottom-40 right-40 w-8 h-8 text-pink-200 opacity-40 animate-pulse" fill="currentColor" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Por que tantas mulheres estão entrando no{' '}
            <span className="text-yellow-300">Docinho Express</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group"
              style={{ 
                animation: `slideUpDelay 0.8s ease-out ${index * 0.3}s both` 
              }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-3 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">
                  🍓
                </div>
                
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-lg font-semibold text-gray-800 text-center mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl">👩</span>
                  </div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional stats */}
        <div className="text-center mt-16">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-bold text-white mb-2">
              Mais de 180 mulheres já trabalham com a gente
            </p>
            <p className="text-lg text-pink-100">
              em 15 estados diferentes! 🇧🇷
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-5deg); }
        }
        
        @keyframes slideUpDelay {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
