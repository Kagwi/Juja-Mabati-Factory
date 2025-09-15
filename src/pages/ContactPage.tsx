import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (location.state?.productName) {
      const { productName, variant, price } = location.state;
      setFormData(prev => ({
        ...prev,
        message: `I'm interested in ${productName} - ${variant} @ ${price}. Please provide more information about availability, delivery, and installation services.`
      }));
    }
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '254769600200';
    const message = encodeURIComponent(
      formData.message || 'Hello! I would like to inquire about your roofing products and services.'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
            alt="Contact us background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-600 bg-opacity-80"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="inline-block animate-wiggle">Contact</span>{' '}
              <span className="inline-block animate-bounce">Us</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Get in touch with our expert team for quotes, technical support, 
              or any questions about our roofing solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-amber-400 hover:shadow-md focus:scale-105"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-amber-400 hover:shadow-md focus:scale-105"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-amber-400 hover:shadow-md focus:scale-105"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-amber-400 hover:shadow-md focus:scale-105"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center space-x-2"
                    >
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>WhatsApp Chat</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Company Details */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-amber-100 hover:scale-125 hover:rotate-12 transition-all duration-300">
                      <MapPin className="h-6 w-6 text-red-600 hover:text-amber-500 hover:scale-110 transition-all duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-red-600 hover:scale-105 transition-all duration-300">Our Location</h3>
                      <p className="text-gray-600 leading-relaxed hover:text-gray-800 hover:scale-105 transition-all duration-300">
                        Kenyatta Road next to Homeway Supermarket<br />
                        near Juja Town, Nairobi<br />
                        P.O. Box 57920 Nairobi
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-amber-100 hover:scale-125 hover:rotate-12 transition-all duration-300">
                      <Phone className="h-6 w-6 text-red-600 hover:text-amber-500 hover:scale-110 transition-all duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-red-600 hover:scale-105 transition-all duration-300">Phone</h3>
                      <p className="text-gray-600 text-lg hover:text-gray-800 hover:scale-105 transition-all duration-300">0769 600 200</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-amber-100 hover:scale-125 hover:rotate-12 transition-all duration-300">
                      <Mail className="h-6 w-6 text-red-600 hover:text-amber-500 hover:scale-110 transition-all duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-red-600 hover:scale-105 transition-all duration-300">Email</h3>
                      <p className="text-gray-600 hover:text-gray-800 hover:scale-105 transition-all duration-300">jujamabatifactoryltd@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-amber-100 hover:scale-125 hover:rotate-12 transition-all duration-300">
                      <Clock className="h-6 w-6 text-red-600 hover:text-amber-500 hover:scale-110 transition-all duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-red-600 hover:scale-105 transition-all duration-300">Business Hours</h3>
                      <div className="text-gray-600 hover:text-gray-800 hover:scale-105 transition-all duration-300">
                        <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                        <p>Saturday: 8:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live WhatsApp Chat */}
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-4 hover:text-green-600 hover:scale-105 transition-all duration-300">Live WhatsApp Chat</h3>
                <p className="text-green-700 mb-6 leading-relaxed hover:text-green-600 hover:scale-105 transition-all duration-300">
                  Need immediate assistance? Chat with us directly on WhatsApp 
                  for instant responses to your queries.
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:rotate-1 flex items-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5 hover:scale-110 hover:rotate-12 transition-all duration-300" />
                  <span>Start WhatsApp Chat</span>
                </button>
              </div>

              {/* Response Time */}
              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-amber-800 mb-4 hover:text-amber-600 hover:scale-105 transition-all duration-300">Response Guarantee</h3>
                <div className="space-y-3 text-amber-700">
                  <p className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-amber-600 hover:text-amber-500 hover:scale-125 hover:rotate-12 transition-all duration-300" />
                    <span className="hover:text-amber-600 hover:scale-105 transition-all duration-300">Email responses within 24 hours</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-amber-600 hover:text-amber-500 hover:scale-125 hover:rotate-12 transition-all duration-300" />
                    <span className="hover:text-amber-600 hover:scale-105 transition-all duration-300">WhatsApp responses within 2 hours</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-amber-600 hover:text-amber-500 hover:scale-125 hover:rotate-12 transition-all duration-300" />
                    <span className="hover:text-amber-600 hover:scale-105 transition-all duration-300">Phone calls answered during business hours</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
