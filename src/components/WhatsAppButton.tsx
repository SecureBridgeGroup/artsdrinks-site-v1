import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phone = '5592981176994';
  const message = encodeURIComponent(
    'Olá! Gostaria de um orçamento 🍸'
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        hidden md:flex
        fixed bottom-6 right-6 z-50
        bg-green-500 hover:bg-green-600
        text-white
        w-14 h-14
        rounded-full
        items-center justify-center
        shadow-xl
        transition-all
        hover:scale-110
      "
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
