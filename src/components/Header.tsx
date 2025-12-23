import { Menu, X} from 'lucide-react';
import { useState } from 'react';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div
          className="
    grid grid-cols-3 items-center md:grid-cols-3
    bg-black backdrop-blur-xl
    px-8 py-0
    rounded-2xl
    shadow-2xl shadow-black/70
    border border-white/5
  "
        >

          {/* LOGO */}
          <div
            onClick={() => scrollToSection('home')}
            className="
    cursor-pointer
    flex justify-center md:justify-start
    md:pl-20
    col-start-2 md:col-start-1
  "
          >
            <img
              src="/assets/logo2_artsdrinks.png"
              alt="Arts Drinks"
              className="
      h-20 md:h-24 lg:h-28
      brightness-110 contrast-125
      drop-shadow-xl transition-all
      duration-300 hover:scale-105
      hover:drop-shadow-[0_0_30px_rgba(220,38,38,0.35)]
    "
            />
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-yellow-400 transition font-medium"
            >
              Início
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-yellow-400 transition font-medium"
            >
              Sobre
            </button>

            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-300 hover:text-yellow-400 transition font-medium"
            >
              Produtos
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="
                bg-yellow-600 text-white px-7 py-2
                rounded-full font-semibold
                hover:bg-yellow-700 hover:shadow-lg
                hover:shadow-yellow-600/40
                transition-all
              "
            >
              Contato
            </button>
          </nav>

          {/* MOBILE ACTIONS */}
          <div className="md:hidden col-start-3 flex justify-end items-center gap-4">

            {/* Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-yellow-400"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>


          {/* MENU MOBILE */}
          {isMenuOpen && (
            <div
              className="
              md:hidden mt-3
              bg-black/95 backdrop-blur-xl
              rounded-2xl p-5
              shadow-xl border border-white/10
              space-y-4
            "
            >
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-300 hover:text-yellow-400"
              >
                Início
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-300 hover:text-yellow-400"
              >
                Sobre
              </button>

              <button
                onClick={() => scrollToSection('products')}
                className="block w-full text-left text-gray-300 hover:text-yellow-400"
              >
                Produtos
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="
                w-full bg-red-600 text-white py-3
                rounded-full font-semibold
                hover:bg-red-700 transition
              "
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
