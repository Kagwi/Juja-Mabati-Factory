import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { MessageCircle, Mail, Shield, Star, Truck, ShoppingCart, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartModal from '../components/CartModal';

const ProductsPage = () => {
  const { addToCart, cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  useEffect(() => {
    // Handle scrolling to specific product based on hash
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, []);

  const products = [
    {
      name: 'Box Profile',
      id: 'box-profile',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Box%20Profile.PNG?raw=true',
      variants: [
        { type: 'Glossy', gauge: 30, price: 475 },
        { type: 'Glossy', gauge: 28, price: 605 },
        { type: 'Matte', gauge: 30, price: 565 },
        { type: 'Matte', gauge: 28, price: 715 }
      ]
    },
    {
      name: 'V Tile',
      id: 'v-tile',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/V%20Tile.PNG?raw=true',
      variants: [
        { type: 'Glossy', gauge: 30, price: 572 },
        { type: 'Glossy', gauge: 28, price: 645 },
        { type: 'Matte', gauge: 30, price: 615 },
        { type: 'Matte', gauge: 28, price: 725 }
      ]
    },
    {
      name: 'Roman Tile',
      id: 'roman-tile',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Roman%20Tile.PNG?raw=true',
      variants: [
        { type: 'Glossy', gauge: 30, price: 572 },
        { type: 'Glossy', gauge: 28, price: 645 },
        { type: 'Matte', gauge: 30, price: 615 },
        { type: 'Matte', gauge: 28, price: 725 }
      ]
    },
    {
      name: 'Euro Tile',
      id: 'euro-tile',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Euro%20Tile.PNG?raw=true',
      variants: [
        { type: 'Glossy', gauge: 30, price: 572 },
        { type: 'Glossy', gauge: 28, price: 645 },
        { type: 'Matte', gauge: 30, price: 615 },
        { type: 'Matte', gauge: 28, price: 725 }
      ]
    },
    {
      name: 'Decra Stone Coated',
      id: 'decra-stone-coated',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Decra.png?raw=true',
      variants: [
        { type: 'Matte', gauge: 26, price: 720 },
        { type: 'Matte', gauge: 28, price: 680 }
      ]
    },
    {
      name: 'Corrugated/Normal Sheets',
      id: 'corrugated-sheets',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Corrugated_Shiny%20Iron%20Sheets_remix_01k5ba7tdmfqh8bh2mqr8843gd.png?raw=true',
      variants: [
        { type: 'Colored', gauge: 30, price: 450 },
        { type: 'Colored', gauge: 28, price: 600 },
        { type: 'Non-Colored', gauge: 32, price: 270 },
        { type: 'Non-Colored', gauge: 30, price: 390 }
      ]
    },
    {
      name: 'Rolltops',
      id: 'rolltops',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Rolltops.png?raw=true',
      variants: [
        { type: 'Standard', gauge: 30, price: 600, unit: 'per piece' },
        { type: 'Glossy', gauge: 30, price: 450, unit: 'per piece' }
      ]
    },
    {
      name: 'Roofing Nails',
      id: 'roofing nails',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Nails.png?raw=true',
      variants: [
        { type: 'Normal Silver', price: 250, unit: 'per kg' },
        { type: 'Colored', price: 600, unit: 'per kg' }
      ]
    },
    {
      name: 'Rubber/Washer',
      id: 'rubber/washer',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Rubber%20Washer.PNG?raw=true',
      variants: [
        { price: 100, unit: 'per packet' }
      ]
    }
  ];

  const handleWhatsAppClick = (productName: string, variant: any) => {
    const phoneNumber = '254769600200';
    const message = encodeURIComponent(
      `Hello! I'm interested in ${productName} - ${variant.type}${variant.gauge ? ` Gauge ${variant.gauge}` : ''} @ KES ${variant.price}${variant.unit || '/m'}. Could you please provide more details?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleAddToCart = (productName: string, variant: any) => {
    addToCart({
      productName,
      variant: `${variant.type}${variant.gauge ? ` Gauge ${variant.gauge}` : ''}`,
      price: `KES ${variant.price.toLocaleString()}${variant.unit || '/m'}`
    });
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
            alt="Products background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-600 bg-opacity-80"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="inline-block animate-bounce">Our</span>{' '}
              <span className="inline-block animate-pulse">Products</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Comprehensive range of premium roofing materials with competitive pricing 
              and guaranteed quality. All products come with our 15-year fade-free warranty.
            </p>
          </div>
        </div>
      </section>

      {/* Cart Button */}
      {cartItemCount > 0 && (
        <div className="fixed top-32 right-6 z-40">
          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative"
          >
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
              {cartItemCount}
            </span>
          </button>
        </div>
      )}

      {/* Features Bar */}
      <section className="bg-amber-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-8 w-8 text-red-600 hover:text-amber-500 hover:scale-125 hover:rotate-12 transition-all duration-300" />
              <span className="font-semibold text-gray-800 hover:text-red-600 hover:scale-105 transition-all duration-300">15-Year Warranty</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Truck className="h-8 w-8 text-red-600 hover:text-amber-500 hover:scale-125 hover:rotate-12 transition-all duration-300" />
              <span className="font-semibold text-gray-800 hover:text-red-600 hover:scale-105 transition-all duration-300">48hr Delivery</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Star className="h-8 w-8 text-red-600 hover:text-amber-500 hover:scale-125 hover:rotate-12 transition-all duration-300" />
              <span className="font-semibold text-gray-800 hover:text-red-600 hover:scale-105 transition-all duration-300">Premium Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                id={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-4 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                    Premium
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-all duration-300 group-hover:scale-105">
                    {product.name}
                  </h3>

                  <div className="space-y-3 mb-6">
                    {product.variants.map((variant, vIndex) => (
                      <div
                        key={vIndex}
                        className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-amber-50 hover:scale-105 hover:shadow-md transition-all duration-300"
                      >
                        <div className="text-sm">
                          <span className="font-medium text-gray-800">
                            {variant.type}
                            {variant.gauge && ` Gauge ${variant.gauge}`}
                          </span>
                        </div>
                        <div className="text-lg font-bold text-red-600 hover:text-amber-500 transition-colors duration-300">
                          KES {variant.price.toLocaleString()}{variant.unit || '/m'}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {product.variants.map((variant, vIndex) => (
                      <div key={vIndex} className="space-y-2">
                        <div className="text-sm font-medium text-gray-700 px-3 py-1 bg-gray-100 rounded">
                          {variant.type}{variant.gauge && ` Gauge ${variant.gauge}`} - KES {variant.price.toLocaleString()}{variant.unit || '/m'}
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                        <button
                          onClick={() => handleAddToCart(product.name, variant)}
                          className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 hover:bg-yellow-400 flex items-center justify-center space-x-1"
                        >
                          <Plus className="h-4 w-4" />
                          <span>Add</span>
                        </button>
                        <Link
                          to="/contact"
                          state={{ 
                            productName: product.name, 
                            variant: `${variant.type}${variant.gauge ? ` Gauge ${variant.gauge}` : ''}`,
                            price: `KES ${variant.price.toLocaleString()}${variant.unit || '/m'}`
                          }}
                          className="bg-red-600 hover:bg-red-700 hover:bg-yellow-400 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center space-x-1 text-center"
                        >
                          <Mail className="h-4 w-4" />
                          <span>Contact</span>
                        </Link>
                        <button
                          onClick={() => handleWhatsAppClick(product.name, variant)}
                          className="bg-green-500 hover:bg-green-600 hover:bg-yellow-400 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center space-x-1"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span>WhatsApp</span>
                        </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Custom Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Custom Solutions Available</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We offer personalized length cutting to meet your specific project requirements. 
            Contact us for custom measurements and specialized solutions.
          </p>
          <div className="bg-amber-100 border-2 border-amber-400 rounded-xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">Personalized Length Cutting</h3>
            <p className="text-amber-700 text-lg">
              Get your roofing materials cut to the exact dimensions you need. 
              No waste, perfect fit, professional results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Get in touch with our sales team for bulk pricing, installation services, 
            and technical support. We're here to help you choose the perfect roofing solution.
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:rotate-1 shadow-lg inline-block"
            >
              Request Quote
            </Link>
            <button
              onClick={() => {
                const phoneNumber = '254769600200';
                const message = encodeURIComponent('Hello! I would like to discuss bulk pricing and installation services for roofing materials.');
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
              }}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:rotate-1 shadow-lg inline-block"
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
