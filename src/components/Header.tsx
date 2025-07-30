import React, { useEffect } from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

export default function App() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    s.async = true;
    document.head.appendChild(s);

    const playerHTML = `
      <div id="ifr_688917cb8d9ea41a82c2ee13_wrapper"
           style="margin: 30px auto; width: 100%; max-width: 600px; border-radius: 20px; overflow: hidden;
                  border: 4px solid #ff69b4; background: #fff0fa; box-shadow: 0 8px 18px rgba(255, 105, 180, 0.3);">
        <div style="padding: 75% 0 0 0; position: relative;" id="ifr_688917cb8d9ea41a82c2ee13_aspect">
          <iframe frameborder="0"
                  allowfullscreen
                  src="about:blank"
                  id="ifr_688917cb8d9ea41a82c2ee13"
                  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
                  referrerpolicy="origin"
                  onload="this.onload=null; this.src='https://scripts.converteai.net/89404745-c035-4e42-8131-5bb293b01f71/players/688917cb8d9ea41a82c2ee13/v4/embed.html' + (location.search || '?') + '&vl=' + encodeURIComponent(location.href)">
          </iframe>
        </div>
      </div>
    `;
    const container = document.getElementById('player-container');
    if (container) {
      container.innerHTML = playerHTML;
    }
  }, []);

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-pink-500 via-red-400 to-pink-600 overflow-hidden">
      {/* Floating animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="strawberry-float absolute top-20 left-10 text-4xl animate-bounce">🍓</div>
        <div className="candy-float absolute top-32 right-16 text-3xl animate-pulse">🍬</div>
        <div className="heart-float absolute top-48 right-32 text-pink-200">
          <Heart className="w-6 h-6 animate-pulse" fill="currentColor" />
        </div>
        <div className="sparkle-float absolute top-64 left-20 text-yellow-200">
          <Sparkles className="w-5 h-5 animate-spin" />
        </div>
        <div className="strawberry-float-2 absolute bottom-40 right-12 text-3xl animate-bounce delay-500">🍓</div>
        <div className="candy-float-2 absolute bottom-60 left-8 text-2xl animate-pulse delay-300">🍭</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
       {/* Logo otimizado e proporcional */}
<div className="text-center mb-8">
  <div className="inline-block bg-white rounded-full p-3 shadow-lg max-w-[90px] w-full mx-auto">
    <img 
      src="https://123pagebuilder.s3.us-east-1.amazonaws.com/123tapronto1753887397682-Design+sem+nome+%2859%29.png?w=200&auto=compress&fit=max" 
      alt="Docinho Express Logo"
      className="w-full h-auto object-contain"
    />
  </div>
</div>



        {/* Headline */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Vagas abertas para trabalhar de casa com o{' '}
            <span className="text-yellow-300">Docinho Express</span>
          </h2>
          <p className="text-xl md:text-2xl text-pink-100 font-semibold">
            sem experiência, sem vender, sem enrolação!
          </p>
        </div>

        {/* VSL Container */}
        <div id="player-container" className="animate-fadeIn mb-12"></div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <button className="group bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-pulse-glow">
            <span className="flex items-center justify-center gap-2">
              QUERO GARANTIR MINHA VAGA AGORA
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .strawberry-float,
        .strawberry-float-2 {
          animation: float 3s ease-in-out infinite;
        }
        .candy-float,
        .candy-float-2 {
          animation: float 2.5s ease-in-out infinite reverse;
        }
        .heart-float {
          animation: float 2s ease-in-out infinite;
        }
        .sparkle-float {
          animation: float 3.5s ease-in-out infinite;
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
    </header>
  );
}
