import React from 'react';
import { UserPlus, PlayCircle, DollarSign, Home } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: "Cadastro",
    description: "Você faz seu cadastro com apenas R$29,90 e recebe acesso imediato."
  },
  {
    icon: <PlayCircle className="w-8 h-8" />,
    title: "Aprenda",
    description: "Aprende tudo com as video aulas simples e práticas."
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Receba",
    description: "Recebe os pedidos e o dinheiro na frente."
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Lucre",
    description: "Produz os morangos, o motoboy busca e você lucra sem sair de casa!"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 text-6xl opacity-20 animate-pulse">🍓</div>
      <div className="absolute bottom-20 left-10 text-5xl opacity-20 animate-bounce">🍬</div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Como funciona o trabalho com o{' '}
            <span className="text-pink-600">Docinho Express</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
              style={{ 
                animation: `slideUpDelay 0.8s ease-out ${index * 0.2}s both` 
              }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-pink-100 hover:border-pink-300">
                {/* Step number */}
                <div className="absolute -top-4 left-6 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="text-pink-600 mb-4">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connecting line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-pink-300 to-red-300 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUpDelay {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
