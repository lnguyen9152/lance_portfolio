import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
  caption?: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  caption,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length);
      }
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      id="image-lightbox-overlay"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar with Controls */}
      <div
        className="absolute top-4 inset-x-4 flex items-center justify-between z-10 text-zinc-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xs font-mono uppercase tracking-wider bg-zinc-900/90 px-3 py-1.5 rounded-sm border border-zinc-700">
          {currentIndex + 1} / {images.length}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-sm bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-700 transition-colors cursor-pointer"
          aria-label="Close image viewer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[80vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={caption || `Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl border border-zinc-800"
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 p-2.5 rounded-sm bg-zinc-900/90 text-white hover:bg-zinc-800 border border-zinc-700 transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate((currentIndex + 1) % images.length)}
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 p-2.5 rounded-sm bg-zinc-900/90 text-white hover:bg-zinc-800 border border-zinc-700 transition-all cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Caption / Thumbnail row */}
      {caption && (
        <p
          className="mt-4 text-xs font-serif italic text-zinc-400 max-w-xl text-center"
          onClick={(e) => e.stopPropagation()}
        >
          {caption}
        </p>
      )}

      {images.length > 1 && (
        <div
          className="mt-3 flex items-center gap-2 overflow-x-auto max-w-full px-4 py-1"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onNavigate(idx)}
              className={`relative w-12 h-12 rounded-sm overflow-hidden border transition-all shrink-0 cursor-pointer ${
                idx === currentIndex ? 'border-white scale-105' : 'border-zinc-800 opacity-50 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
