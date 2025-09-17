import React from 'react'; 
import { X, Plus, Minus, Trash2, ShoppingCart, MessageCircle, Mail } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, getCartMessage } = useCart();

  if (!isOpen) return null;

  const handleWhatsAppClick = () => {
    const phoneNumber = '254769600200';
    const message = encodeURIComponent(getCartMessage());
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    onClose();
  };

  const handleEmailClick = () => {
    const message = getCartMessage();
    const subject = encodeURIComponent('Product Inquiry - Juja Mabati Factory');
    const body = encodeURIComponent(message);

    // Open default email client
    window.location.href = `mailto:jujamabatifactoryltd@gmail.com?subject=${subject}&body=${body}`;

    // Delay closing the modal slightly so it doesn't interfere
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="bg-red-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ShoppingCart className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Product Inquiry Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-red-200 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[50vh]">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Your inquiry cart is empty</p>
              <p className="text-gray-400">Add products to inquire about multiple items at once</p>
            </div>
          ) : (
            <div className="space-y-4 pr-2 overflow-y-auto max-h-[45vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.productName}</h3>
                    <p className="text-sm text-gray-600">{item.variant}</p>
                    <p className="text-lg font-bold text-red-600">{item.price}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-semibold text-gray-900 w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
              
              {/* Message and WhatsApp buttons in cart content */}
              <div className="sticky bottom-0 bg-white pt-4 border-t mt-4">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </button>
                  
                  <button
                    onClick={handleEmailClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Email</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t bg-gray-50 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-gray-900">
                Total Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
              >
                Clear All
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </button>
              
              <button
                onClick={handleEmailClick}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </button>
              
              <Link
                to="/contact"
                onClick={onClose}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Contact Form</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
