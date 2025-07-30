import React from 'react';
import { ChefHat, Utensils, Refrigerator, Heart } from 'lucide-react';

const requirements = [
  {
    icon: <ChefHat className="w-12 h-12" />,
    title: "1 panela",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: <Utensils className="w-12 h-12" />,
    title: "1 colher",
    color: "from-green-400 to-green-600"
  },
  {
    icon: <Refrigerator className="w-12 h-12" />,
    title: "1 geladeira",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Vontade de mudar de vida",
    color: "from-pink-400 to-red-500"
  }
];

export default function Requirements() {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-white relative">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 text-5xl opacity-10 animate-spin-slow">🍓</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-10 animate-bounce">🍬</div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            O que você vai <span className="text-pink-600">precisar</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
          {requirements.map((req, index) => (
            <div 
              key={index}
              className="text-center group"
              style={{ 
                animation: `slideUpDelay 0.6s ease-out ${index * 0.15}s both` 
              }}
            >
              <div className="relative mb-6">
                <div className={`w-24 h-24 bg-gradient-to-br ${req.color} rounded-full mx-auto flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 text-white`}>
                  {req.icon}
                </div>
                {/* Floating sparkle */}
                <div className="absolute -top-2 -right-2 text-xl animate-pulse">✨</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {req.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Info box */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl p-8 shadow-2xl text-center animate-pulse-soft">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <p className="text-xl md:text-2xl font-bold text-white mb-4">
                Não precisa ter experiência. Não precisa vender.
              </p>
              <p className="text-lg text-pink-100">
                Você só produz, e o app faz o resto. 📱✨
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUpDelay {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        
        .animate-pulse-soft {
          animation: pulse-soft 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}