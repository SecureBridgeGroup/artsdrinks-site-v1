import { useState } from 'react';
import { X, ZoomIn, Filter, Award, Calendar, Users } from 'lucide-react';

// Dados mais completos com categorias
const allCases = [
  {
    id: 1,
    category: 'casamento',
    title: 'Casamento Clássico na Praia',
    description: 'Bar de Gin Tônica e Caipirinhas Premium para 300 convidados.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop',
    date: 'Dez 2024'
  },
  {
    id: 2,
    category: 'corporativo',
    title: 'Confraternização Tech',
    description: 'Drinks moleculares e experiência de mixologia ao vivo.',
    image: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=1000&auto=format&fit=crop',
    date: 'Nov 2024'
  },
  {
    id: 3,
    category: 'social',
    title: 'Aniversário 15 Anos Neon',
    description: 'Drinks sem álcool coloridos e brilhantes no escuro.',
    image: 'https://images.unsplash.com/photo-1530103862676-de3c9a59af38?q=80&w=1000&auto=format&fit=crop',
    date: 'Out 2024'
  },
  {
    id: 4,
    category: 'casamento',
    title: 'Mini Wedding Rústico',
    description: 'Cardápio autoral focado em ingredientes regionais.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop',
    date: 'Set 2024'
  },
  {
    id: 5,
    category: 'corporativo',
    title: 'Lançamento de Produto',
    description: 'Coquetéis personalizados com as cores da marca.',
    image: 'https://images.unsplash.com/photo-1561584610-394c8e75b7f1?q=80&w=1000&auto=format&fit=crop',
    date: 'Ago 2024'
  },
  {
    id: 6,
    category: 'social',
    title: 'Sunset Party Privada',
    description: 'Serviço exclusivo de bartender para festa em lancha.',
    image: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?q=80&w=1000&auto=format&fit=crop',
    date: 'Jul 2024'
  }
];

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'casamento', label: 'Casamentos' },
  { id: 'corporativo', label: 'Corporativo' },
  { id: 'social', label: 'Social' }
];

export default function CasesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('todos');

  const filteredCases = activeFilter === 'todos' 
    ? allCases 
    : allCases.filter(c => c.category === activeFilter);

  return (
    <section id="cases" className="bg-black text-white min-h-screen pb-20">
      
      {/* 1. HERO SECTION (Capa da Página) */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2000&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Nosso <span className="text-red-600">Portfólio</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Transformando eventos comuns em memórias extraordinárias através da coquetelaria.
          </p>
        </div>
      </div>

      {/* 2. ESTATÍSTICAS RÁPIDAS */}
      <div className="container mx-auto px-4 -mt-10 relative z-20 mb-16">
        <div className="grid grid-cols-3 bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/10">
          <div className="text-center border-r border-white/10">
            <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <span className="block text-2xl md:text-3xl font-bold text-white">200+</span>
            <span className="text-xs md:text-sm text-gray-400">Eventos Realizados</span>
          </div>
          <div className="text-center border-r border-white/10">
            <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <span className="block text-2xl md:text-3xl font-bold text-white">2k+</span>
            <span className="text-xs md:text-sm text-gray-400">Convidados Servidos</span>
          </div>
          <div className="text-center">
            <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <span className="block text-2xl md:text-3xl font-bold text-white">4</span>
            <span className="text-xs md:text-sm text-gray-400">Anos de História</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* 3. FILTROS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`
                px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2
                ${activeFilter === cat.id 
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105' 
                  : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800'}
              `}
            >
              {activeFilter === cat.id && <Filter className="w-4 h-4" />}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* 4. GALERIA DE FOTOS (Masonry Grid Feel) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-gray-900 shadow-xl cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedImage(item.image)}
            >
              {/* Imagem */}
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              
              {/* Overlay (Fica escuro ao passar o mouse) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                
                <span className="text-red-500 text-xs font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.category} • {item.date}
                </span>
                
                <h3 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 line-clamp-2">
                  {item.description}
                </p>

                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-[-10px] group-hover:translate-y-0">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem se não houver resultados */}
        {filteredCases.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            Nenhum evento encontrado nesta categoria.
          </div>
        )}
      </div>

      {/* 5. CTA FINAL */}
      <div className="mt-20 text-center px-4">
        <h3 className="text-2xl font-bold mb-4">Gostou do que viu?</h3>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Podemos fazer o mesmo pelo seu evento. Entre em contato e vamos criar um menu exclusivo para você.
        </p>
        <button 
          onClick={() => {
            // Como estamos em outra página, o ideal seria navegar para a home e rolar,
            // ou ter um formulário simples aqui. Vou colocar um link direto pro Whats.
            window.open('https://wa.me/5592981176994', '_blank');
          }}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg"
        >
          Quero um Orçamento
        </button>
      </div>

      {/* Modal Lightbox Melhorado */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-red-600 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>
          
          <img
            src={selectedImage}
            alt="Zoom"
            className="max-h-[85vh] max-w-[95vw] object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
}