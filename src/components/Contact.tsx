import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/5592000000000?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Fale <span className="text-red-600">Conosco</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Entre em contato para solicitar um orçamento ou tirar suas dúvidas.
              Estamos prontos para tornar seu evento inesquecível!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-red-100 p-3 rounded-full group-hover:bg-red-600 transition-colors">
                    <Phone className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                    <p className="text-gray-600">(92) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-red-100 p-3 rounded-full group-hover:bg-red-600 transition-colors">
                    <Mail className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">contato@artsdrinksmanaus.com.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-red-100 p-3 rounded-full group-hover:bg-red-600 transition-colors">
                    <MapPin className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Localização</h4>
                    <p className="text-gray-600">Manaus - AM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-red-100 p-3 rounded-full group-hover:bg-red-600 transition-colors">
                    <Instagram className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Instagram</h4>
                    <a
                      href="https://www.instagram.com/artsdrinksmanaus/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 font-medium"
                    >
                      @artsdrinksmanaus
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl shadow-xl text-white">
                <h4 className="text-xl font-bold mb-2">Horário de Atendimento</h4>
                <p className="mb-1">Segunda a Sexta: 9h às 18h</p>
                <p className="mb-1">Sábado: 9h às 14h</p>
                <p>Eventos: Horários flexíveis</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie uma Mensagem</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    placeholder="(92) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none"
                    placeholder="Conte-nos sobre seu evento e como podemos ajudar..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
