import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const WhatsAppButton = () => {
  const { getCartMessage } = useCart();

  const handleWhatsAppClick = () => {
    const phoneNumber = '254769600200';
    const message = encodeURIComponent(getCartMessage());
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:rotate-12 z-50 animate-pulse hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
    </button>
  );
};

export default WhatsAppButton;