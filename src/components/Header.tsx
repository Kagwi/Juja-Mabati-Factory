import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/brand', label: 'Brand' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Main Navigation */}
      <nav className="py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-all duration-300 group">
            <img 
              src="/image.png" 
              alt="Juja Mabati Factory Logo" 
              className="h-16 w-auto object-contain group-hover:scale-110 group-hover:rotate-2 transition-all duration-300"
            />
            <div>
              <h1 className="text-2xl font-bold text-red-600 group-hover:text-amber-500 transition-colors duration-300">Juja Mabati Factory</h1>
              <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">The Forever Mabati</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-all duration-300 hover:text-amber-500 hover:scale-110 hover:-translate-y-1 relative ${
                  location.pathname === item.path
                    ? 'text-red-600 border-b-2 border-amber-500'
                    : 'text-gray-700'
                } before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-amber-500 before:transition-all before:duration-300 hover:before:w-full`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-red-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white border-t border-gray-200 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 font-medium transition-colors hover:text-red-600 hover:bg-gray-50 ${
                  location.pathname === item.path ? 'text-red-600 bg-gray-50' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;