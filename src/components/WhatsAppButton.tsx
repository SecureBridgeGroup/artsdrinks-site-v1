import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phone = '5592981176994';
  const message = encodeURIComponent(
    'Olá! Gostaria de um orçamento para meu evento 🍸'
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed z-50
        bottom-4 right-4
        md:bottom-6 md:right-6

        bg-green-500 hover:bg-green-600
        text-white

        w-14 h-14 md:w-16 md:h-16
        rounded-full

        flex items-center justify-center
        shadow-2xl

        transition-all
        hover:scale-110
        active:scale-95
      "
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
    </a>
  );
}