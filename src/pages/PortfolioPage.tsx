import React, { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const videos = [
    {
      id: 1,
      title: 'Box Profile Manufacturing Process',
      thumbnail: 'https://images.pexels.com/photos/162360/pexels-photo-162360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      videoUrl: 'https://github.com/Kagwi/Juja-Mabati-Factory/raw/refs/heads/main/public/Corrugated%20Sheets.mp4', // In a real app, this would be the actual video URL
      description: 'Behind-the-scenes look at our state-of-the-art box profile manufacturing process'
    },
    {
      id: 2,
      title: 'Stone Coated Roofing Production',
      thumbnail: 'https://images.pexels.com/photos/1396119/pexels-photo-1396119.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      videoUrl: '#',
      description: 'Detailed overview of our premium stone coated roofing production line'
    },
    {
      id: 3,
      title: 'Quality Control & Testing',
      thumbnail: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      videoUrl: '#',
      description: 'Our rigorous quality control processes ensuring 15-year warranty standards'
    },
    {
      id: 4,
      title: 'Installation Training Workshop',
      thumbnail: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      videoUrl: '#',
      description: 'Professional installation techniques and best practices training session'
    }
  ];

  const projectImages = [
    {
      id: 1,
      title: 'Modern Residential Villa',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Residential'
    },
    {
      id: 2,
      title: 'Commercial Shopping Complex',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Commercial'
    },
    {
      id: 3,
      title: 'Industrial Warehouse Facility',
      image: 'https://images.pexels.com/photos/162360/pexels-photo-162360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Industrial'
    },
    {
      id: 4,
      title: 'University Administration Block',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Learning Institutions'
    },
    {
      id: 5,
      title: 'Luxury Family Home',
      image: 'https://images.pexels.com/photos/1396119/pexels-photo-1396119.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Residential'
    },
    {
      id: 6,
      title: 'Office Complex Downtown',
      image: 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Commercial'
    },
    {
      id: 7,
      title: 'Manufacturing Plant',
      image: 'https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Industrial'
    },
    {
      id: 8,
      title: 'Primary School Buildings',
      image: 'https://images.pexels.com/photos/1396121/pexels-photo-1396121.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Learning Institutions'
    },
    {
      id: 9,
      title: 'Housing Estate Development',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Construction'
    },
    {
      id: 10,
      title: 'Retail Shopping Mall',
      image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Commercial'
    },
    {
      id: 11,
      title: 'Technical College Campus',
      image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Learning Institutions'
    },
    {
      id: 12,
      title: 'Mixed-Use Development',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Construction'
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Learning Institutions', 'Construction'];

  const filteredImages = selectedCategory === 'All' 
    ? projectImages 
    : projectImages.filter(img => img.category === selectedCategory);

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
            alt="Portfolio background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-600 bg-opacity-80"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="inline-block animate-float">Our</span>{' '}
              <span className="inline-block animate-pulse-slow">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Explore our extensive portfolio of completed projects and production processes 
              showcasing our commitment to quality and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Production Videos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Production Videos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get an inside look at our state-of-the-art manufacturing processes 
              and quality control procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-4 group cursor-pointer"
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover group-hover:scale-125 group-hover:rotate-1 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-60 transition-all duration-300">
                    <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-125 group-hover:bg-amber-500 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-all duration-300 group-hover:scale-105">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Completed Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our diverse portfolio of successfully delivered roofing projects 
              across various sectors in Kenya.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 group cursor-pointer"
                onClick={() => handleImageClick(project.image)}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                    {project.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-all duration-300 group-hover:scale-105">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <p className="text-white text-lg">Video Player Would Go Here</p>
                <Play className="h-16 w-16 text-white ml-4" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Project"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Join our growing list of satisfied clients. Let us help you achieve 
            the same level of quality and excellence in your roofing project.
          </p>
          <div className="space-x-4">
            <button
              onClick={() => {
                const phoneNumber = '254769600200';
                const message = encodeURIComponent('Hello! I saw your portfolio and I\'m interested in discussing my roofing project. Could we schedule a consultation?');
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
              }}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:rotate-1 shadow-lg inline-block"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
