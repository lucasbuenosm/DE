import React, { useEffect } from 'react';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import WhyWomen from './components/WhyWomen';
import Requirements from './components/Requirements';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function App() {
  useEffect(() => {
    // Load VSL player script
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    script.async = true;
    document.head.appendChild(script);

    // Configure smartplayer when script loads
    script.onload = () => {
      window.smartplayer = {
        id: "ifr_688bfbb0f4c94d5d9babc2a6ef63c8c1",
        width: "100%",
        height: "auto"
      };
    };

    // Update page title
    document.title = "Docinho Express - Trabalhe de Casa e Ganhe Dinheiro";

    return () => {
      // Cleanup script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HowItWorks />
      <WhyWomen />
      <Requirements />
      <Testimonials />
      <CTA />
      
      {/* Global styles for smooth scrolling and animations */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ec4899, #ef4444);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #db2777, #dc2626);
        }
      `}</style>
    </div>
  );
}

export default App;