import React, { useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function Header() {
  useEffect(() => {
    // Adiciona o script da VSL ao carregar o componente
    const scriptId = 'converteai-sdk';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement('script');
      s.src = 'https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js';
      s.async = true;
      s.id = scriptId;
      document.head.appendChild(s);
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
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white rounded-full p-4 shadow-lg">
            <h1 className="text-3xl font-bold text-pink-600 flex items-center gap-2">
              🍓 Docinho Express
            </h1>
          </div>
        </div>

        {/* Main headline */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Vagas abertas para trabalhar de casa com o{' '}
            <span className="text-yellow-300">Docinho Express</span>
          </h2>
          <p className="text-xl md:text-2xl text-pink-100 font-semibold">
            sem experiência, sem vender, sem enrolação!
          </p>
        </div>

        {/* VSL Player */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 animate-slideUp">
          <div
            id="ifr_688917cb8d9ea41a82c2ee13_wrapper"
            style={{ margin: '0 auto', width: '100%' }}
          >
            <div
              id="ifr_688917cb8d9ea41a82c2ee13_aspect"
              style={{ padding: '75% 0 0 0', position: 'relative' }}
            >
              <iframe
                id="ifr_688917cb8d9ea41a82c2ee13"
                frameBorder="0"
                allowFullScreen
                referrerPolicy="origin"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                src="about:blank"
                onLoad={(e) => {
                  const iframe = e.currentTarget;
                  // Atualiza a src após o iframe carregar para evitar problemas de CSP
                  iframe.onload = null;
                  iframe.src =
                    'https://scripts.converteai.net/89404745-c035-4e42-8131-5bb293b01f71/players/688917cb8d9ea41a82c2ee13/v4/embed.html' +
                    (location.search || '?') +
                    '&vl=' +
                    encodeURIComponent(location.href);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out 0.5s both;
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
      `}</style>
    </header>
  );
}
