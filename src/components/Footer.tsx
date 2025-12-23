import { Instagram, Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">

        {/* GRID PRINCIPAL */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* LOGO + DESCRIÇÃO */}
          <div>
            <div className="mb-4">
              <img
                src="/assets/logo2_artsdrinks.png"
                alt="Arts Drinks"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando eventos em experiências memoráveis através de drinks artesanais
              e atendimento excepcional.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Início' },
                { id: 'about', label: 'Sobre Nós' },
                { id: 'products', label: 'Produtos' },
                { id: 'contact', label: 'Contato' },
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() =>
                      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-red-500" />
                <span className="text-gray-400">(92) 98117-6994</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-red-500" />
                <span className="text-gray-400">contato@artsdrinks.com.br</span>
              </li>
            </ul>
          </div>

          {/* REDES SOCIAIS */}
          <div>
            <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>

            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/artsdrinksmanaus/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="mailto:contato@artsdrinksmanaus.com.br"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-all hover:scale-110"
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

        {/* RODAPÉ INFERIOR */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Copyright no canto esquerdo */}
            <p className="text-gray-400 text-sm md:flex-1 text-left">
              © {currentYear} Todos os direitos reservados.
            </p>

            {/* Feito com amor centralizado */}
            <p className="text-gray-400 text-sm flex-1 text-center flex items-center justify-center">
              Feito com <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" /> para eventos incríveis
            </p>

            {/* Desenvolvido por SB DevSolutions no canto direito */}
            <p className="text-gray-400 text-sm md:flex-1 text-right">
              Desenvolvido por{' '}
              <a
                href="https://securebridge.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white sb-anim hover:underline"
              >
                SB DevSolutions
              </a>
            </p>

          </div>
        </div>

      </div>
    </footer >
  );
}
