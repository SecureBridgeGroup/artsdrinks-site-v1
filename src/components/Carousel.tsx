import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const images = [
  {
    src: '/assets/profissionais1.png',
    title: 'Drinks Artesanais',
    subtitle: 'Experiências únicas para seu evento'
  },
  {
    src: '/assets/bar.png',
    title: 'Bartenders Profissionais',
    subtitle: 'Qualidade e excelência no atendimento'
  },
  {
    src: '/assets/drink_semalcool.png',
    title: 'Drinks sem Álcool',
    subtitle: 'Sabor e sofisticação para todos'
  },
  {
    src: '/assets/evento_memoria.png',
    title: 'Eventos Memoráveis',
    subtitle: 'Transformamos momentos em memórias'
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {/* MOBILE — imagem full cover */}
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[10000ms] scale-100 hover:scale-105 md:hidden"
            style={{ backgroundImage: `url(${image.src})` }}
          />

          {/* DESKTOP — fundo desfocado */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 blur-xl hidden md:block"
            style={{ backgroundImage: `url(${image.src})` }}
          />

          {/* DESKTOP — imagem preservada */}
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat hidden md:block"
            style={{ backgroundImage: `url(${image.src})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-center text-white px-4 transition-all duration-1000 ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
              <h2 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
                {image.title}
              </h2>
              <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
                {image.subtitle}
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-110 shadow-lg"
              >
                Solicite um Orçamento
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </section>
  );
}
