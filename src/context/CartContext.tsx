import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  productName: string;
  variant: string;
  price: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'id' | 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getCartMessage: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'id' | 'quantity'>) => {
    const id = `${item.productName}-${item.variant}`;
    const existingItem = cartItems.find(cartItem => cartItem.id === id);

    if (existingItem) {
      updateQuantity(id, existingItem.quantity + 1);
    } else {
      setCartItems(prev => [...prev, { ...item, id, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartMessage = () => {
    if (cartItems.length === 0) {
      return 'Hello! I would like to inquire about your roofing products and services.';
    }

    let message = 'Hello! I\'m interested in the following products:\n\n';
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.productName} - ${item.variant}\n`;
      message += `   Price: ${item.price}\n`;
      message += `   Quantity: ${item.quantity}\n\n`;
    });
    message += 'Could you please provide more information about availability, delivery, and installation services?';
    
    return message;
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartMessage
    }}>
      {children}
    </CartContext.Provider>
  );
};