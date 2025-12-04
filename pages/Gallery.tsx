import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { GalleryImage } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const filters = ['All', 'Coffee & Drinks', 'Interior', 'Food', 'Events', 'Outdoor'];
  
  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="pt-24 pb-20 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-serif text-5xl font-bold text-espresso mb-8 text-center">Gallery</h1>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
           {filters.map(f => (
             <button
               key={f}
               onClick={() => setFilter(f)}
               className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                 filter === f 
                   ? 'bg-espresso text-cream' 
                   : 'bg-white text-stone-500 hover:bg-stone-200'
               }`}
             >
               {f}
             </button>
           ))}
        </div>

        {/* Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredImages.map(img => (
            <div 
              key={img.id} 
              className="break-inside-avoid relative group cursor-pointer rounded overflow-hidden shadow-md"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img.src} alt={img.alt} className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-espresso/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-widest text-xs border border-white px-3 py-1">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-espresso/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-amber" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber p-2 hidden md:block" onClick={handlePrev}>
            <ChevronLeft size={48} />
          </button>
          
          <div className="max-w-5xl max-h-[85vh] relative" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-[80vh] shadow-2xl rounded-sm" />
            <div className="bg-white/10 text-cream p-4 mt-4 backdrop-blur-md rounded-sm flex justify-between items-center">
              <span className="font-serif text-lg">{selectedImage.alt}</span>
              <span className="text-xs font-mono text-amber uppercase border border-amber px-2 py-0.5 rounded-full">{selectedImage.category}</span>
            </div>
          </div>

          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber p-2 hidden md:block" onClick={handleNext}>
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;