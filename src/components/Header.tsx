import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (targetId: string) => {
    setIsMenuOpen(false);

    // 1. SE CLICAR EM CASES -> VAI PARA A OUTRA PÁGINA
    if (targetId === 'cases') {
      navigate('/cases');
      return;
    }

    // 2. SE CLICAR NOS OUTROS BOTÕES...
    if (location.pathname !== '/') {
      // Se não estiver na Home, vai para a Home primeiro
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Se já estiver na Home, só rola até a seção
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-3 items-center md:grid-cols-3 bg-black backdrop-blur-xl px-8 py-0 rounded-2xl shadow-2xl shadow-black/70 border border-white/5">

          {/* LOGO */}
          <div
            onClick={() => handleNavigation('home')}
            className="cursor-pointer flex justify-center md:justify-start md:pl-20 col-start-2 md:col-start-1"
          >
            <img
              src="/assets/logo2_artsdrinks.png"
              alt="Arts Drinks"
              className="h-20 md:h-24 lg:h-28 brightness-110 contrast-125 drop-shadow-xl transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_30px_rgba(220,38,38,0.35)]"
            />
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigation('home')}
              className="text-gray-300 hover:text-yellow-400 transition font-medium"
            >
              Início
            </button>
            <button
              onClick={() => handleNavigation('about')}
              className="text-gray-300 hover:text-yellow-400 transition font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => handleNavigation('products')}
              className="text-gray-300 hover:text-yellow-400 transition font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => handleNavigation('cases')}
              className="text-gray-300 hover:text-yellow-400 transition font-medium"
            >
              Cases
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className="bg-yellow-600 text-white px-7 py-2 rounded-full font-semibold hover:bg-yellow-700 hover:shadow-lg hover:shadow-yellow-600/40 transition-all"
            >
              Contato
            </button>
          </nav>

          {/* MOBILE ACTIONS */}
          <div className="md:hidden col-start-3 flex justify-end items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-yellow-400"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* MENU MOBILE */}
          {isMenuOpen && (
            <div className="md:hidden mt-3 bg-black/95 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-white/10 space-y-4">
              <button
                onClick={() => handleNavigation('home')}
                className="block w-full text-left text-gray-300 hover:text-yellow-400"
              >
                Início
              </button>
              <button
                onClick={() => handleNavigation('about')}
                className="block w-full text-left text-gray-300 hover:text-yellow-400"
              >
                Sobre
              </button>
              <button
                onClick={() => handleNavigation('products')}
                className="block w-full text-left text-gray-300 hover:text-yellow-400"
              >
                Produtos
              </button>
              <button
                onClick={() => handleNavigation('cases')}
                className="block w-full text-left text-gray-300 hover:text-yellow-400"
              >
                Cases
              </button>
              <button
                onClick={() => handleNavigation('contact')}
                className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition"
              >
                Contato
              </button>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}