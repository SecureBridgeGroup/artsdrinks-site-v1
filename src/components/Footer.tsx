import { Wine, Instagram, Facebook, Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wine className="w-8 h-8 text-red-500" />
              <div>
                <h3 className="text-xl font-bold">Arts Drinks</h3>
                <p className="text-xs text-yellow-500">Manaus</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando eventos em experiências memoráveis através de drinks artesanais
              e atendimento excepcional.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-red-500" />
                <span className="text-gray-400">(92) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-red-500" />
                <span className="text-gray-400">contato@artsdrinksmanaus.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/artsdrinksmanaus/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-all transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-all transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@artsdrinksmanaus.com.br"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-all transform hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-400">
                Siga-nos no Instagram para ver nossos drinks e novidades!
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Arts Drinks Manaus. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Feito com <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" /> para eventos incríveis
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
