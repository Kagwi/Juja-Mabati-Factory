import React, { useState, useRef, useEffect } from 'react';
import { Play, X } from 'lucide-react';

const PortfolioPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const videoModalRef = useRef<HTMLDivElement>(null);
  const imageModalRef = useRef<HTMLDivElement>(null);

  const videos = [
    {
      id: 1,
      title: 'Box Profile Manufacturing Process',
      thumbnail: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Box%20Profile.PNG?raw=true',
      videoUrl: 'https://raw.githubusercontent.com/Kagwi/Juja-Mabati-Factory/main/public/Boxprofile.mp4',
      description: 'Box-profile roofing sheets production'
    },
    {
      id: 2,
      title: 'Corrugated Roofing Sheets Production',
      thumbnail: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Corrugated%20Sheets.PNG?raw=true',
      videoUrl: 'https://raw.githubusercontent.com/Kagwi/Juja-Mabati-Factory/main/public/Corrugated%20Sheets.mp4',
      description: 'Corrugated roofing sheets production'
    },
    {
      id: 3,
      title: 'Euro Tile Roofing Sheets Production',
      thumbnail: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Euro%20Tile.PNG?raw=true',
      videoUrl: 'https://raw.githubusercontent.com/Kagwi/Juja-Mabati-Factory/main/public/Euro%20Tile.mp4',
      description: 'Euro tile roofing sheets production'
    },
    {
      id: 4,
      title: 'V-Tile Roofing Sheets Production',
      thumbnail: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/V%20Tile.PNG?raw=true',
      videoUrl: 'https://raw.githubusercontent.com/Kagwi/Juja-Mabati-Factory/main/public/V-tile.mp4',
      description: 'Professional v-tile production'
    }
  ];

  const projectImages = [
    { id: 1, title: 'Modern Residential', image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Portfolio%201%20Residential.PNG?raw=true', category: 'Residential' },
    { id: 2, title: 'Offices', image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Portfolio%205%20Commercial.PNG?raw=true', category: 'Commercial' },
    { id: 3, title: 'Industrial Facility', image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Portfolio%2011%20Industrial.PNG?raw=true', category: 'Industrial' },
    { id: 4, title: 'Learning Institution', image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Portfolio%203%20Learning%20Institutions.PNG?raw=true', category: 'Learning Institutions' },
    { id: 5, title: 'Luxury Family Home', image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Portfolio%202%20Residential.PNG?raw=true', category: 'Residential' },
    { id: 6, title: 'Hospital Complex', image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Portfolio%206%20Commercial.PNG?raw=true', category: 'Commercial' },
    { id: 7, title: 'Manufacturing Plant', image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Portfolio%204%20Industrial.PNG?raw=true', category: 'Industrial' },
    { id: 8, title: 'Primary School Buildings', image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Portfolio%208%20Learning%20Institution.PNG?raw=true', category: 'Learning Institutions' },
    { id: 9, title: 'Housing Estate Development', image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Portfolio%2010%20Construction.PNG?raw=true', category: 'Construction' },
    { id: 10, title: 'Retail Business Building', image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Portfolio%209%20Commercial.PNG?raw=true', category: 'Commercial' },
    { id: 11, title: 'Residential Home', image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Portfolio%207%20Residential.PNG?raw=true', category: 'Residential' },
    { id: 12, title: 'Modern Home', image: 'https://github.com/Kagwi/Juja-Mabati-Factory/blob/main/public/Portfolio%20Residential.PNG?raw=true', category: 'Residential' }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Learning Institutions', 'Construction'];

  const filteredImages = selectedCategory === 'All'
    ? projectImages
    : projectImages.filter(img => img.category === selectedCategory);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (videoModalRef.current && !videoModalRef.current.contains(event.target as Node)) {
        setSelectedVideo(null);
      }
      if (imageModalRef.current && !imageModalRef.current.contains(event.target as Node)) {
        setSelectedImage(null);
      }
    };
    if (selectedVideo || selectedImage) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedVideo, selectedImage]);

  const handleVideoClick = (videoUrl: string) => setSelectedVideo(videoUrl);
  const handleImageClick = (imageUrl: string) => setSelectedImage(imageUrl);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
            alt="Portfolio background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-600 bg-opacity-80"></div>
        </div>
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
          <div ref={videoModalRef} className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="bg-white rounded-xl overflow-hidden">
              <video controls className="w-full h-auto">
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div ref={imageModalRef} className="relative max-w-4xl w-full">
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
                const message = encodeURIComponent("Hello! I saw your portfolio and I'm interested in discussing my roofing project. Could we schedule a consultation?");
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
