import React from 'react';
import { CheckCircle, Star, Award, Users, Scissors } from 'lucide-react';

const BrandPage = () => {
  const brandAmbassadors = [
    {
      name: 'Ndegenye',
      title: 'Our Brand Ambassador',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Ndegenye%201.PNG?raw=true'
    },
    {
      name: 'Baba Talisha',
      title: 'Our Brand Ambassador',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Baba%20Talisha.PNG?raw=true'
    },
    {
      name: 'Damaris Wa Dama Spares',
      title: 'Brand Ambassador',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Damaris%20wa%20Dama%20Spares.PNG?raw=true'
    },
    {
      name: 'Trizah Mamake Muraya',
      title: 'Brand Ambassador',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Triza%20Mamake%20Muraya.PNG?raw=true'
    },
    {
      name: 'Uria Wari Cukura wa Nairobi',
      title: 'Brand Ambassador',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Uria%20Wari%20Cukura%20ya%20Nairobi.PNG?raw=true'
    }
  ];

  const partnerLogos = [
    'Juja-Mabati-Factory/public/Dama Spares Logo.PNG',
    'NGCDF',
    'Murang\'a County Government',
    'Kenya Vision 2030',
    'EPZ',
    'LAPSSET',
    'Real Estate of Kenya',
    'Kenya Association of Manufacturers',
    'Kenya Bureau of Standards',
    'Ministry of Housing'
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
            alt="Brand background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-600 bg-opacity-80"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="inline-block animate-bounce-slow">Our</span>{' '}
              <span className="inline-block animate-wiggle">Brand</span>{' '}
              <span className="inline-block animate-pulse">Story</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Discover the journey, values, and commitment that make Juja Mabati Factory 
              Kenya's most trusted roofing manufacturer.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">The Forever Mabati Legacy</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Our journey began with a simple yet powerful vision: to create roofing solutions 
                  that stand the test of time. The name "The Forever Mabati" isn't just a tagline – 
                  it's our promise to every customer who chooses our products.
                </p>
                <p>
                  Founded on the principles of quality, reliability, and innovation, Juja Mabati Factory 
                  has grown from a local manufacturer to Kenya's leading roofing solutions provider. 
                  Our commitment to excellence has earned us the trust of thousands of customers 
                  across the nation.
                </p>
                <p>
                  We believe that a roof is more than just protection – it's the foundation of security, 
                  comfort, and peace of mind for families and businesses. That's why every sheet we 
                  produce is crafted with meticulous attention to detail and backed by our 
                  industry-leading 15-year fade-free warranty.
                </p>
                <p>
                  Today, we continue to innovate, expand, and set new standards in the roofing industry, 
                  always staying true to our core mission: providing forever-lasting roofing solutions 
                  that protect what matters most to our customers.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <img
                src="https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Team%20A.jpg?raw=true"
                alt="Manufacturing excellence"
                className="rounded-xl shadow-2xl w-full h-64 object-cover object-top"
              />
              <img
                src="https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Team.jpg?raw=true"
                alt="Quality products"
                className="rounded-xl shadow-2xl w-full h-48 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Brand Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-100 transition-colors duration-300">
                <CheckCircle className="h-10 w-10 text-red-600 group-hover:text-amber-500 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                Every product undergoes rigorous testing to ensure it meets the highest standards 
                of durability and performance.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-100 transition-colors duration-300">
                <Users className="h-10 w-10 text-red-600 group-hover:text-amber-500 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Our customers are at the heart of everything we do. Their satisfaction and 
                success drive our continuous improvement.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-100 transition-colors duration-300">
                <Award className="h-10 w-10 text-red-600 group-hover:text-amber-500 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We continuously invest in new technologies and processes to deliver 
                cutting-edge roofing solutions.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-100 transition-colors duration-300">
                <Star className="h-10 w-10 text-red-600 group-hover:text-amber-500 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for excellence in every aspect of our business, from 
                manufacturing to customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Ambassadors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Brand Ambassadors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the professionals who trust and recommend Juja Mabati Factory 
              for their projects and clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandAmbassadors.map((ambassador, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-4 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={ambassador.image}
                      alt={ambassador.name}
                      className="w-20 h-20 rounded-full object-cover group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl border-4 border-transparent group-hover:border-amber-400"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">{ambassador.name}</h3>
                      <p className="text-red-600 font-semibold group-hover:text-amber-500 transition-colors duration-300">{ambassador.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed italic group-hover:text-gray-800 transition-colors duration-300">
                    "{ambassador.testimonial}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by leading organizations and institutions across Kenya.
            </p>
          </div>

          {/* Scrolling Partner Logos */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee space-x-12 py-8 hover:pause transform rotate-2">
              {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white rounded-lg shadow-md hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:rotate-1 hover:bg-yellow-50 transition-all duration-300 px-8 py-6 min-w-[200px] text-center"
                >
                  <p className="text-lg font-semibold text-gray-800 hover:text-yellow-600 transition-colors duration-300">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees & Custom Solutions */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <CheckCircle className="h-12 w-12 text-amber-400" />
                  <h3 className="text-3xl font-bold">Customer Satisfaction</h3>
                </div>
                <p className="text-xl font-semibold mb-4">100% Guaranteed</p>
                <p className="leading-relaxed opacity-90">
                  We stand behind every product we manufacture. Our commitment to customer 
                  satisfaction is backed by our comprehensive warranty and dedicated support team.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <Scissors className="h-12 w-12 text-amber-400" />
                  <h3 className="text-3xl font-bold">Custom Solutions</h3>
                </div>
                <p className="text-xl font-semibold mb-4">Personalized Length Cutting</p>
                <p className="leading-relaxed opacity-90">
                  Need specific measurements? We offer personalized length cutting services 
                  to ensure your roofing materials fit perfectly for your unique project requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Join the Forever Mabati Family</h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Experience the difference that quality, reliability, and exceptional service make. 
            Let us be your trusted partner in creating lasting roofing solutions.
          </p>
          <div className="space-x-4">
            <button
              onClick={() => {
                const phoneNumber = '254769600200';
                const message = encodeURIComponent('Hello! I\'m interested in becoming a customer of Juja Mabati Factory. Could you provide more information about your products and services?');
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:rotate-1 shadow-lg inline-block"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandPage;
