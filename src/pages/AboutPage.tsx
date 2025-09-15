import React from 'react';
import { Shield, Truck, Users, Award, MapPin, Phone, Mail } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Every product undergoes rigorous quality testing to ensure it meets the highest standards. Our 15-year fade-free warranty is a testament to our confidence in product quality.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'With our efficient logistics network, we guarantee nationwide delivery within 48 hours. No matter where you are in Kenya, we\'ll get your order to you quickly and safely.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our skilled professionals bring years of experience in roofing solutions. From consultation to installation, our team provides expert guidance every step of the way.'
    },
    {
      icon: Award,
      title: 'Industry Leadership',
      description: 'As Kenya\'s leading roofing manufacturer, we set industry standards for innovation, quality, and customer service. Our reputation is built on consistent excellence.'
    }
  ];

  const teamMembers = [
    {
      name: 'Gakuru Muraguri',
      position: 'Chief Executive Officer',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Gakuru.jpg?raw=true',
      description: 'With over 15 years of experience in the roofing industry, James has led Juja Mabati Factory to become Kenya\'s premier roofing manufacturer. His vision for innovation and quality has driven the company\'s growth from a small local business to a nationwide leader. Under his leadership, the company has maintained its commitment to excellence while expanding its product range and market reach. James is passionate about sustainable building solutions and delivering quality roofing solutions to every customer.',
    },
    {
      name: 'Mercy',
      position: 'Marketing Manager',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Mercy.jpg?raw=true',
      description: 'Oversees all production processes ensuring quality standards.'
    },
    {
      name: 'Sally',
      position: 'Customer Care Representative',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Sally.jpg?raw=true',
      description: 'Leads our sales team and manages customer relationships nationwide.'
    },
    {
      name: 'Mwangi',
      position: 'Company Driver',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Company%20Driver.jpg?raw=true',
      description: 'Ensures every product meets our strict quality standards.'
    },
    {
      name: 'Daniel & Ochieng',
      position: 'Dispatch Officials',
      image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Dispatch%20Team.jpg?raw=true',
      description: 'Provides technical expertise and product development.'
    },
    {
      name: 'Sarah Akinyi',
      position: 'Dispatch Official',
      image: 'https://images.pexels.com/photos/3727465/pexels-photo-3727465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Ensures exceptional customer service and satisfaction.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
            alt="About us background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-600 bg-opacity-80"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="inline-block animate-float">About</span>{' '}
              <span className="inline-block animate-pulse-slow">Juja</span>{' '}
              <span className="inline-block animate-bounce-slow">Mabati</span>{' '}
              <span className="inline-block animate-wiggle">Factory</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Leading Kenyan roofing manufacturer specializing in durable, reliable, 
              and aesthetically pleasing roofing materials that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  As a leading Kenyan roofing manufacturer, Juja Mabati Factory specializes in durable, 
                  reliable, and aesthetically pleasing roofing materials. We have grown from humble beginnings 
                  to become the nation's most trusted roofing manufacturer, with a simple mission: to provide 
                  high-quality roofing solutions that protect homes and businesses across Kenya.
                </p>
                <p>
                  Over the years, we have invested heavily in cutting-edge technology, skilled personnel, 
                  and sustainable manufacturing processes. This commitment to excellence has enabled us 
                  to produce roofing materials that not only meet international standards but also 
                  withstand Kenya's diverse climate conditions.
                </p>
                <p>
                  Today, we are proud to offer a comprehensive range of roofing products backed by 
                  our industry-leading 15-year fade-free warranty, demonstrating our unwavering 
                  confidence in the quality and durability of our products.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/162360/pexels-photo-162360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Manufacturing facility"
                className="rounded-lg shadow-xl w-full h-96 object-cover hover:scale-110 hover:rotate-2 hover:shadow-2xl transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leading Kenyan roofing manufacturer specializing in durable, reliable, and aesthetically pleasing roofing materials. 
              Here's what makes us your preferred roofing solution provider.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-red-600 group-hover:text-amber-500 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced team of professionals is dedicated to delivering exceptional 
              roofing solutions and outstanding customer service.
            </p>
          </div>

          {/* CEO Section */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <img
                    src="/ceo-image.png"
                    alt={teamMembers[0].name}
                    className="w-80 h-80 rounded-xl object-cover mx-auto shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-2"
                  />
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2 hover:text-red-600 transition-colors duration-300">{teamMembers[0].name}</h3>
                  <p className="text-xl text-red-600 font-semibold mb-6 hover:text-amber-500 transition-colors duration-300">{teamMembers[0].position}</p>
                  <p className="text-gray-600 leading-relaxed text-lg hover:text-gray-800 transition-colors duration-300">{teamMembers[0].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(1).map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl border-4 border-transparent group-hover:border-amber-400"
                />
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3 group-hover:text-red-600 transition-colors duration-300">{member.name}</h3>
                <p className="text-red-600 font-semibold text-center mb-4 group-hover:text-amber-500 transition-colors duration-300">{member.position}</p>
                <p className="text-gray-600 text-sm text-center leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Visit Our Factory</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Come and see our state-of-the-art manufacturing facility and 
              experience our commitment to quality firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-opacity-30 hover:scale-125 hover:rotate-12 transition-all duration-300">
                <MapPin className="h-8 w-8 hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 hover:text-amber-300 hover:scale-105 transition-all duration-300">Location</h3>
              <p className="opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                Kenyatta Road next to Homeway Supermarket<br />
                near Juja Town, Nairobi<br />
                P.O. Box 57920 Nairobi
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-opacity-30 hover:scale-125 hover:rotate-12 transition-all duration-300">
                <Phone className="h-8 w-8 hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 hover:text-amber-300 hover:scale-105 transition-all duration-300">Call Us</h3>
              <p className="opacity-90 text-lg hover:opacity-100 hover:scale-105 transition-all duration-300">0769 600 200</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-opacity-30 hover:scale-125 hover:rotate-12 transition-all duration-300">
                <Mail className="h-8 w-8 hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 hover:text-amber-300 hover:scale-105 transition-all duration-300">Email</h3>
              <p className="opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">jujamabatifactoryltd@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
