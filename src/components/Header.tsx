import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function Header() {
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
          <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
            <div id="ifr_688bfbb0f4c94d5d9babc2a6ef63c8c1" className="w-full h-full"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 1s ease-out 0.5s both;
        }
        
        .strawberry-float, .strawberry-float-2 {
          animation: float 3s ease-in-out infinite;
        }
        
        .candy-float, .candy-float-2 {
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