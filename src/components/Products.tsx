import { Wine, Coffee, Star } from 'lucide-react';
import { useState } from 'react';

const products = {
  alcoholic: [
    {
      name: 'Mojito Clássico',
      description: 'Refrescante combinação de rum, limão, hortelã e açúcar',
      image: 'https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true
    },
    {
      name: 'Caipirinha Premium',
      description: 'Cachaça artesanal com frutas frescas',
      image: 'https://images.pexels.com/photos/5947041/pexels-photo-5947041.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true
    },
    {
      name: 'Gin Tropical',
      description: 'Gin premium com frutas tropicais e tônica',
      image: 'https://images.pexels.com/photos/2842876/pexels-photo-2842876.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: false
    },
    {
      name: 'Cosmopolitan',
      description: 'Vodka, triple sec, cranberry e limão',
      image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: false
    },
    {
      name: 'Whisky Sour',
      description: 'Whisky, limão siciliano e xarope de açúcar',
      image: 'https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: false
    },
    {
      name: 'Margarita',
      description: 'Tequila, triple sec e limão com borda de sal',
      image: 'https://images.pexels.com/photos/1566845/pexels-photo-1566845.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true
    }
  ],
  nonAlcoholic: [
    {
      name: 'Virgin Mojito',
      description: 'Limão, hortelã, açúcar e soda',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true
    },
    {
      name: 'Fruit Punch',
      description: 'Mix de frutas tropicais frescas',
      image: 'https://images.pexels.com/photos/1842323/pexels-photo-1842323.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true
    },
    {
      name: 'Limonada Suíça',
      description: 'Limão, leite condensado e gelo',
      image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: false
    },
    {
      name: 'Smoothie Tropical',
      description: 'Frutas tropicais, iogurte e mel',
      image: 'https://images.pexels.com/photos/775030/pexels-photo-775030.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: false
    },
    {
      name: 'Chá Gelado Especial',
      description: 'Chá premium com frutas e especiarias',
      image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: false
    },
    {
      name: 'Mocktail Tropical',
      description: 'Mix exclusivo de sucos e xaropes artesanais',
      image: 'https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true
    }
  ]
};

export default function Products() {
  const [activeTab, setActiveTab] = useState<'alcoholic' | 'nonAlcoholic'>('alcoholic');

  const currentProducts = products[activeTab];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nossos <span className="text-red-600">Produtos</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla variedade de drinks artesanais, preparados com ingredientes
            selecionados e técnicas profissionais
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-2 rounded-full inline-flex shadow-md">
            <button
              onClick={() => setActiveTab('alcoholic')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'alcoholic'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Wine className="w-5 h-5" />
              <span>Com Álcool</span>
            </button>
            <button
              onClick={() => setActiveTab('nonAlcoholic')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'nonAlcoholic'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Coffee className="w-5 h-5" />
              <span>Sem Álcool</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">Popular</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Drinks personalizados disponíveis sob consulta
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Solicite seu Drink Personalizado
          </button>
        </div>
      </div>
    </section>
  );
}
