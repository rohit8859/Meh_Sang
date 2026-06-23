import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mehndiData';
import { GalleryItem } from '../types';
import { ChevronLeft, ChevronRight, X, ZoomIn, Heart } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  // Likes tracking state to simulate engagement
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  const categories = [
    'All',
    'Bridal Mehndi',
    'Arabic Mehndi',
    'Traditional Mehndi',
    'Modern Mehndi',
    'Minimal Mehndi'
  ];

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (likedItems[id]) {
      setLikes(prev => ({ ...prev, [id]: (prev[id] || 0) - 1 }));
      setLikedItems(prev => ({ ...prev, [id]: false }));
    } else {
      setLikes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
      setLikedItems(prev => ({ ...prev, [id]: true }));
    }
  };

  const filteredItems = activeTab === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeTab);

  const openLightbox = (item: GalleryItem) => {
    const originalIndex = GALLERY_ITEMS.findIndex(g => g.id === item.id);
    setSelectedImageIdx(originalIndex);
  };

  const handleNext = () => {
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((selectedImageIdx + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((selectedImageIdx - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-ivory text-deep-brown border-b border-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-gold text-xs font-mono tracking-[0.2em] font-semibold uppercase block">
            VISUAL PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-deep-brown tracking-wide leading-tight">
            Mehndi Art Gallery
          </h2>
          <div className="h-[2px] w-24 bg-gold mx-auto mt-2" />
          <p className="text-sm text-deep-brown/70 font-light leading-relaxed">
            A hand-picked exhibition of our work. Zoom into the symmetry, explore traditional line weights, and find the perfect henna pattern match for your hand size.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              id={`tab-filter-${category.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans uppercase font-semibold tracking-wider transition-all duration-300 ${
                activeTab === category
                  ? 'bg-deep-brown text-white border border-deep-brown shadow-sm'
                  : 'bg-white text-deep-brown border border-beige hover:bg-[#F5EBDD]/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry CSS Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {filteredItems.map((item) => {
            const isLiked = likedItems[item.id] || false;
            const likeCount = (likes[item.id] || 0) + 12; // Static base offset + live state
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="break-inside-avoid relative rounded-[32px] group overflow-hidden bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-zoom-in border border-beige"
              >
                {/* Image element with lazy loading */}
                <img
                  src={`${item.imageUrl}`}
                  alt={`${item.title} - ${item.category}`}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-500 rounded-[32px]"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Hover Reveal Canvas */}
                <div className="absolute inset-0 bg-[#4B2E2E]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white rounded-[32px]">
                  
                  {/* Category Top Stamp */}
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono uppercase bg-gold text-deep-brown px-3 py-1 font-bold tracking-wider rounded-full">
                      {item.category}
                    </span>
                    <button
                      onClick={(e) => handleLike(item.id, e)}
                      className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                        isLiked ? 'bg-[#ff4b5c] text-white' : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                      aria-label="Like Design"
                    >
                      <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Caption & Title */}
                  <div className="space-y-1.5 pt-12">
                    <div className="flex items-center space-x-1.5 text-gold text-xs font-mono">
                      <ZoomIn className="h-3.5 w-3.5" />
                      <span>Zoom In View</span>
                    </div>
                    <h3 className="font-serif font-bold text-base text-ivory tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-beige/85 line-clamp-2 leading-relaxed font-light">
                      {item.description}
                    </p>
                    <div className="pt-2 flex justify-between items-center text-[10px] font-mono text-beige/60">
                      <span>Ref: MEH-{item.id.toUpperCase()}</span>
                      <span>{likeCount} likes</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state when items are empty */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-[#F5EBDD]/20 rounded-[24px] border border-dashed border-beige">
            <p className="text-sm text-[#7D6B5D] italic">No designs present in this subcategory.</p>
          </div>
        )}

      </div>

      {/* Stunning Lightbox Backdrop */}
      {selectedImageIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-between py-6 px-4 animate-fade-in transition-all">
          
          {/* Top Bar controls */}
          <div className="w-full max-w-6xl flex justify-between items-center text-white/80 select-none">
            <span className="text-xs font-mono text-gold font-bold tracking-widest uppercase">
              MEHSANG PREMIUM GALLERY &bull; {GALLERY_ITEMS[selectedImageIdx].category}
            </span>
            <div className="flex items-center space-x-4">
              <span className="text-xs font-mono">{selectedImageIdx + 1} / {GALLERY_ITEMS.length}</span>
              <button
                onClick={() => setSelectedImageIdx(null)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors"
                aria-label="Close Lightbox"
                id="close-lightbox-btn"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Core Interactive Center Frame */}
          <div className="flex items-center justify-between w-full max-w-6xl flex-grow my-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors mr-2 md:mr-8"
              aria-label="Previous Design"
              id="lightbox-prev-btn"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <div className="max-h-[70vh] flex items-center justify-center relative shadow-3xl">
              <img
                src={GALLERY_ITEMS[selectedImageIdx].imageUrl}
                alt={GALLERY_ITEMS[selectedImageIdx].title}
                className="max-h-[70vh] max-w-full md:max-w-2xl object-contain border border-gold/15 select-none rounded-[32px]"
                referrerPolicy="no-referrer"
              />
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors ml-2 md:mr-8"
              aria-label="Next Design"
              id="lightbox-next-btn"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>

          {/* Dynamic Caption Footer bar */}
          <div className="w-full max-w-3xl text-center space-y-2 text-white px-6 py-4 bg-white/5 backdrop-blur-md rounded-[24px] border border-white/10">
            <h4 className="font-serif text-lg font-bold text-gold tracking-wide">
              {GALLERY_ITEMS[selectedImageIdx].title}
            </h4>
            <p className="text-xs text-beige/85 font-light leading-relaxed max-w-2xl mx-auto">
              {GALLERY_ITEMS[selectedImageIdx].description}
            </p>
            <div className="pt-2 flex justify-center space-x-4 text-[10px] font-mono text-beige/40">
              <span>Category: {GALLERY_ITEMS[selectedImageIdx].category}</span>
              <span>•</span>
              <a href="#booking-form-section" onClick={() => setSelectedImageIdx(null)} className="text-gold hover:underline">
                Quote for this design patterns
              </a>
            </div>
          </div>

        </div>
      )}

    </section>
  );
}
