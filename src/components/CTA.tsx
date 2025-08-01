import React, { useEffect, useState } from 'react';
import { ArrowRight, Clock, Users } from 'lucide-react';

export default function CTA() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 210000); // 3 minutos e 30 segundos = 210000 ms

    return () => clearTimeout(timer);
  }, []);

  const handleCheckoutClick = () => {
    if (typeof window !== 'undefined' && typeof fbq !== 'undefined') {
      fbq('track', 'InitiateCheckout');
    }
    window.open('https://pagamento.morangolucrativo.app/checkout/191350063:1', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl opacity-20 animate-bounce">🍓</div>
        <div className="absolute top-40 right-20 text-3xl opacity-20 animate-pulse">✨</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-bounce delay-500">🍬</div>
        <div className="absolute bottom-40 right-10 text-3xl opacity-20 animate-pulse delay-300">💖</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Pronta pra <span className="text-yellow-300">começar hoje</span>?
          </h2>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Clique no botão abaixo, garanta sua vaga e mude de vida com a gente.
          </p>
        </div>

        {/* Main CTA Button */}
        {showButton && (
          <div className="text-center mb-12 animate-fadeIn">
            <button
              id="smartplayer-click-event-1"
              className="smartplayer-click-event group inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 text-white font-bold text-xl md:text-2xl px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-pulse-glow"
              onClick={handleCheckoutClick}
            >
              <span className="flex items-center justify-center gap-3">
                QUERO GARANTIR MINHA VAGA AGORA
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>
        )}

        {/* Urgency indicators */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <p className="text-white font-semibold">
                <span className="text-yellow-300 font-bold">Vagas limitadas</span><br />
                Apenas hoje!
              </p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <p className="text-white font-semibold">
                <span className="text-yellow-300 font-bold">+50 mulheres</span><br />
                se cadastraram só hoje
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-30 backdrop-blur-sm rounded-2xl p-8">
              <p className="text-lg md:text-xl text-white mb-2">
                O cadastro custa apenas{' '}
                <span className="text-yellow-300 font-bold text-2xl">R$29,90</span>
              </p>
              <p className="text-green-100">
                e libera seu acesso <span className="font-bold">imediato</span> ao sistema.
              </p>

              <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-green-600 bg-opacity-50 rounded-lg p-3">
                  <span className="font-semibold">✅ Acesso imediato</span>
                </div>
                <div className="bg-green-600 bg-opacity-50 rounded-lg p-3">
                  <span className="font-semibold">✅ Suporte pelo WhatsApp</span>
                </div>
                <div className="bg-green-600 bg-opacity-50 rounded-lg p-3">
                  <span className="font-semibold">✅ Treinamento completo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-green-100 text-sm opacity-80">
            🔒 Pagamento 100% seguro • Mais de 180 mulheres já trabalham conosco
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 255, 0, 0.5), 0 0 40px rgba(255, 255, 0, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 255, 0, 0.8), 0 0 60px rgba(255, 255, 0, 0.5);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
