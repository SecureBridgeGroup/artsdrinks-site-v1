import { Award, Users, Heart, Sparkles } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Excelência',
      description: 'Bartenders experientes e certificados'
    },
    {
      icon: Users,
      title: 'Eventos',
      description: 'Atendimento personalizado para cada ocasião'
    },
    {
      icon: Heart,
      title: 'Paixão',
      description: 'Amor pelo que fazemos em cada drink'
    },
    {
      icon: Sparkles,
      title: 'Criatividade',
      description: 'Drinks exclusivos e personalizados'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Sobre a <span className="text-red-600">Arts Drinks</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos uma empresa especializada em serviços de bartending profissional em Manaus,
              oferecendo drinks artesanais com e sem álcool para eventos de todos os tipos.
              Nossa missão é transformar cada ocasião em uma experiência memorável através
              de bebidas únicas e atendimento excepcional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              <img
                src="https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bartender preparando drinks"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white font-semibold text-xl p-6">
                  Profissionais Qualificados
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              <img
                src="https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Drinks coloridos"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white font-semibold text-xl p-6">
                  Drinks Artesanais e Exclusivos
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="bg-gradient-to-br from-red-500 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
