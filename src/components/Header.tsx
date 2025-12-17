import { Menu, X, Wine } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Wine className="w-8 h-8 text-red-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Arts Drinks</h1>
              <p className="text-xs text-yellow-600">Manaus</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Produtos
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all transform hover:scale-105 font-medium">
              Contato
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3 animate-fadeIn">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">
              Sobre
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">
              Produtos
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors font-medium text-center">
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
