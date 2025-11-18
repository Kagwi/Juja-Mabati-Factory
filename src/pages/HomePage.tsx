import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Shield, Truck, Users, Award, Star, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Team.jpg?raw=true',
      title: 'Juja Mabati Team',
      subtitle: 'Durable and aesthetically pleasing roofing solutions'
    },
    {
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Team%205%20.jpg?raw=true',
      title: 'Juja Mabati Entrance',
      subtitle: 'Weather-resistant with superior finish'
    },
    {
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Team%202.jpg?raw=true',
      title: 'Juja Mabati Front Office',
      subtitle: 'Large-scale roofing for commercial projects'
    },
    {
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Team%20.jpg?raw=true',
      title: 'Juja Mabati Front Office Team',
      subtitle: 'Modern aesthetics with unmatched durability'
    },
    {
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Team%20A.jpg?raw=true',
      title: 'Juja Mabati Founders',
      subtitle: 'Classic elegance meets modern engineering'
    },
    {
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Team%206.jpg?raw=true',
      title: 'Juja Mabati',
      subtitle: 'Reliable protection for every project'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Quality Assured',
      description: '15-years fade-free warranty on all products'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Nationwide delivery within 48 hours'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional installation and support'
    },
    {
      icon: Award,
      title: 'Industry Leadership',
      description: 'Leading roofing manufacturer in Kenya'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="pt-24">
      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                  <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    <span className="inline-block animate-bounce">The</span>{' '}
                    <span className="inline-block animate-pulse">Forever</span>{' '}
                    <span className="inline-block animate-wiggle">Mabati</span>
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                    Leading Kenyan roofing manufacturer specializing in durable, reliable, and aesthetically pleasing roofing materials
                  </p>
                  <div className="bg-red-600 text-white py-4 px-8 rounded-lg inline-block mb-8 text-lg font-semibold">
                    All Our Roofs have a 15-years Fade-Free Warranty
                  </div>
                  <div className="space-x-4">
                    <Link
                      to="/products"
                      className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:rotate-1 shadow-lg inline-block"
                    >
                      View Products
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:rotate-1 inline-block"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-amber-500' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Juja Mabati Factory?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are Kenya's leading roofing manufacturer, committed to delivering quality, 
              reliability, and excellence in every sheet we produce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-4 group animate-float"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-100 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <feature.icon className="h-8 w-8 text-red-600 group-hover:text-amber-500 group-hover:scale-125 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Awards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Achievements & Awards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence has been recognized through various prestigious awards 
              and industry acknowledgments.
            </p>
          </div>

          {/* Real Estate Awards Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Real Estate Awards Recognition
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Juja Mabati was recognized by the esteemed Real Estate Awards as the most dependable 
                roofing solutions provider in 2025 - an award showing our commitment to client satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 bg-gray-50 p-4">
                <img
                  src="https://raw.githubusercontent.com/Kagwi/Juja-Mabati-Factory/refs/heads/main/public/Juja%20Mabati%20Awards.PNG"
                  alt="Real Estate Award Recognition"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 bg-gray-50 p-4">
                <img
                  src="https://raw.githubusercontent.com/Kagwi/Juja-Mabati-Factory/refs/heads/main/public/Real%20Estate%20Awards.PNG"
                  alt="Commitment to Client Satisfaction Award"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Starbrands Awards Section */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Starbrands East Africa Awards
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We are proud to announce that Juja Mabati won the prestigious Starbrands East Africa Award 
                for Most Quality and Affordable Seller of Iron Sheets, recognizing our commitment to providing 
                high-quality roofing solutions at accessible prices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 bg-gray-50 p-4">
                <img
                  src="https://raw.githubusercontent.com/Kagwi/Juja-Mabati-Factory/refs/heads/main/S_brands.PNG"
                  alt="Starbrands East Africa Award for Most Quality and Affordable Seller of Iron Sheets"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 bg-gray-50 p-4">
                <img
                  src="https://raw.githubusercontent.com/Kagwi/Juja-Mabati-Factory/refs/heads/main/Sbrands%200.PNG"
                  alt="Starbrands East Africa Excellence Award"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Customer Satisfaction</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust Juja Mabati Factory 
              for their roofing needs across Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm hover:bg-opacity-20 hover:scale-105 hover:-translate-y-2 transition-all duration-500 group">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" style={{transitionDelay: `${i * 50}ms`}} />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                "Exceptional quality and fast delivery. Our warehouse roofing has been 
                perfect for over 3 years now. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="font-bold text-lg">MK</span>
                </div>
                <div>
                  <p className="font-semibold group-hover:text-amber-300 transition-colors duration-300">Michael Kariuki</p>
                  <p className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">Industrial Client</p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm hover:bg-opacity-20 hover:scale-105 hover:-translate-y-2 transition-all duration-500 group">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" style={{transitionDelay: `${i * 50}ms`}} />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                "Professional service from consultation to installation. The team 
                delivered exactly what was promised on time."
              </p>
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="font-bold text-lg">SM</span>
                </div>
                <div>
                  <p className="font-semibold group-hover:text-amber-300 transition-colors duration-300">Sarah Mwangi</p>
                  <p className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">Residential Client</p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm hover:bg-opacity-20 hover:scale-105 hover:-translate-y-2 transition-all duration-500 group">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" style={{transitionDelay: `${i * 50}ms`}} />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                "Value for money and outstanding customer support. The warranty 
                gives us complete peace of mind for our investment."
              </p>
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="font-bold text-lg">DN</span>
                </div>
                <div>
                  <p className="font-semibold group-hover:text-amber-300 transition-colors duration-300">David Njoroge</p>
                  <p className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">Commercial Client</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-white bg-opacity-10 inline-block px-8 py-4 rounded-lg backdrop-blur-sm hover:bg-opacity-20 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-amber-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <span className="text-xl font-semibold group-hover:text-amber-300 transition-colors duration-300">Customer Satisfaction 100% Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-10 leading-relaxed opacity-90">
            Contact us today for a free consultation and quote. 
            Let us help you find the perfect roofing solution for your project.
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:rotate-1 shadow-lg inline-block"
            >
              Get Free Quote
            </Link>
            <Link
              to="/products"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg inline-block"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
