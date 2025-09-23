import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
          alt="Roofing background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/image.png" 
                  alt="Juja Mabati Factory Logo" 
                  className="h-12 w-auto object-contain hover:scale-110 hover:rotate-2 transition-all duration-300"
                />
                <div>
                  <h3 className="text-xl font-bold">Juja Mabati Factory</h3>
                  <p className="text-amber-500 font-medium">The Forever Mabati</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading Kenyan roofing manufacturer specializing in durable, reliable, 
                and aesthetically pleasing roofing materials with 15-years Fade-Free Warranty.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/PreciseGeotech" className="text-gray-300 hover:text-amber-500 hover:scale-125 hover:rotate-12 hover:-translate-y-1 transition-all duration-300">
                  <Facebook className="h-5 w-5 hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="text-gray-300 hover:text-amber-500 hover:scale-125 hover:rotate-12 hover:-translate-y-1 transition-all duration-300">
                  <Twitter className="h-5 w-5 hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://www.instagram.com/jujamabatifactory/" className="text-gray-300 hover:text-amber-500 hover:scale-125 hover:rotate-12 hover:-translate-y-1 transition-all duration-300">
                  <Instagram className="h-5 w-5 hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="text-gray-300 hover:text-amber-500 hover:scale-125 hover:rotate-12 hover:-translate-y-1 transition-all duration-300">
                  <Linkedin className="h-5 w-5 hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-300 hover:text-amber-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300 inline-block">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-amber-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300 inline-block">About Us</Link></li>
                <li><Link to="/products" className="text-gray-300 hover:text-amber-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300 inline-block">Products</Link></li>
                <li><Link to="/portfolio" className="text-gray-300 hover:text-amber-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300 inline-block">Portfolio</Link></li>
                <li><Link to="/brand" className="text-gray-300 hover:text-amber-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300 inline-block">Brand</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-amber-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300 inline-block">Contact</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Products</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/products#box-profile" className="text-gray-300 hover:text-amber-500 hover:scale-105 transition-all duration-300 inline-block">
                    Box Profile Sheets
                  </Link>
                </li>
                <li>
                  <Link to="/products#v-tile" className="text-gray-300 hover:text-amber-500 hover:scale-105 transition-all duration-300 inline-block">
                    V Tile Roofing
                  </Link>
                </li>
                <li>
                  <Link to="/products#roman-tile" className="text-gray-300 hover:text-amber-500 hover:scale-105 transition-all duration-300 inline-block">
                    Roman Tile
                  </Link>
                </li>
                <li>
                  <Link to="/products#euro-tile" className="text-gray-300 hover:text-amber-500 hover:scale-105 transition-all duration-300 inline-block">
                    Euro Tile
                  </Link>
                </li>
                <li>
                  <Link to="/products#decra-stone-coated" className="text-gray-300 hover:text-amber-500 hover:scale-105 transition-all duration-300 inline-block">
                    Decra Stone Coated
                  </Link>
                </li>
                <li>
                  <Link to="/products#corrugated-sheets" className="text-gray-300 hover:text-amber-500 hover:scale-105 transition-all duration-300 inline-block">
                    Corrugated Sheets
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-red-600 mt-1 flex-shrink-0 hover:text-amber-500 hover:scale-125 hover:rotate-12 transition-all duration-300" />
                  <div className="text-gray-300">
                    <p>Kenyatta Road next to Homeway Supermarket</p>
                    <p>near Juja Town, Nairobi</p>
                    <p>P.O. Box 57920 Nairobi</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-600 hover:text-amber-500 hover:scale-125 hover:rotate-12 transition-all duration-300" />
                  <span className="text-gray-300 hover:text-amber-500 hover:scale-105 transition-all duration-300">0769 600 200</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-red-600 hover:text-amber-500 hover:scale-125 hover:rotate-12 transition-all duration-300" />
                  <span className="text-gray-300 hover:text-amber-500 hover:scale-105 transition-all duration-300">jujamabatifactoryltd@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Juja Mabati Factory Ltd. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a
              href="https://www.neosolcreatives.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-600 transition-colors"
            >
              Powered by Neonsol Creatives
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
