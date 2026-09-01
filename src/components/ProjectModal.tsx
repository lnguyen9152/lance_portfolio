import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, FileText, Calendar, Building2, Tag, ZoomIn, ArrowLeft } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenLightbox: (images: string[], index: number) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenLightbox,
}) => {
  // Prevent background body scrolling and handle Escape key
  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Helper to format text with code blocks or bold prefixes
  const formatParagraph = (text: string, idx: number) => {
    // If text looks like a figure title
    if (text.startsWith('Figure ') || text.startsWith('Fig.')) {
      return (
        <p key={idx} className="text-xs font-serif italic text-[#1A1A1A]/60 dark:text-zinc-400 my-2">
          {text}
        </p>
      );
    }

    // If text looks like a code fragment or constraint item
    if (text.startsWith('Constraint ') || text.startsWith('- ') || text.startsWith('• ')) {
      return (
        <li key={idx} className="text-xs md:text-sm text-[#1A1A1A]/80 dark:text-zinc-300 ml-4 list-disc leading-relaxed">
          {text.replace(/^[-•]\s*/, '')}
        </li>
      );
    }

    // Section headers
    if (
      text.length < 50 &&
      (text.endsWith(':') ||
        text.startsWith('Module ') ||
        text.startsWith('Section ') ||
        text.startsWith('Phase ') ||
        text.startsWith('Step '))
    ) {
      return (
        <h4
          key={idx}
          className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#1A1A1A] dark:text-[#EDEDEC] mt-6 mb-2 font-mono"
        >
          {text}
        </h4>
      );
    }

    return (
      <p key={idx} className="text-xs md:text-sm text-[#1A1A1A]/80 dark:text-zinc-300 leading-relaxed my-3 font-sans">
        {text}
      </p>
    );
  };

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/75 backdrop-blur-xs overscroll-contain animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="min-h-full flex items-start justify-center p-3 sm:p-6 md:p-8">
        <div
          id="project-modal-card"
          className="relative w-full max-w-3xl bg-[#FDFDFB] dark:bg-[#181816] rounded-sm shadow-2xl border border-[#1A1A1A]/20 dark:border-zinc-800 text-[#1A1A1A] dark:text-[#EDEDEC] my-4 sm:my-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FDFDFB]/95 dark:bg-[#181816]/95 backdrop-blur-sm border-b border-[#1A1A1A]/10 dark:border-zinc-800">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 hover:text-[#1A1A1A] dark:hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Projects</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-sm text-[#1A1A1A]/60 hover:text-[#1A1A1A] dark:text-zinc-400 dark:hover:text-white hover:bg-[#EFECE6] dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Metadata Row */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-sm text-[10px] font-mono uppercase tracking-wider font-semibold bg-[#EFECE6] dark:bg-zinc-800 text-[#1A1A1A] dark:text-zinc-200 border border-[#1A1A1A]/10 dark:border-zinc-700">
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-serif italic text-[#1A1A1A]/60 dark:text-zinc-400">
                  <Calendar className="w-3 h-3 opacity-60" />
                  {project.year}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#1A1A1A]/60 dark:text-zinc-400">
                  <Building2 className="w-3 h-3 opacity-60" />
                  {project.organization}
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-semibold tracking-tight uppercase text-[#1A1A1A] dark:text-[#EDEDEC] font-sans">
                {project.title}
              </h2>

              <p className="mt-2 text-xs md:text-sm text-[#1A1A1A]/70 dark:text-zinc-300 leading-relaxed font-sans">
                {project.shortDesc}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2 pb-1 border-y border-[#1A1A1A]/10 dark:border-zinc-800">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-sm text-[10px] font-mono uppercase tracking-wider bg-[#EFECE6] dark:bg-zinc-800 text-[#1A1A1A]/70 dark:text-zinc-400 border border-[#1A1A1A]/5 dark:border-zinc-700"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* PDF Download or External Link Banner if present */}
            {project.pdfUrl && (
              <div className="p-4 rounded-sm bg-[#EFECE6]/70 dark:bg-zinc-900/80 border border-[#1A1A1A]/15 dark:border-zinc-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#3E4E50] dark:text-[#9FB1B3] shrink-0" />
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1A1A1A] dark:text-zinc-100">
                      Official Technical Documentation
                    </div>
                    <div className="text-xs text-[#1A1A1A]/60 dark:text-zinc-400">
                      Complete engineering report & schematics available in PDF format.
                    </div>
                  </div>
                </div>

                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-3 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider font-medium bg-[#1A1A1A] dark:bg-[#EDEDEC] text-[#FDFDFB] dark:text-[#141413] hover:opacity-85 transition-opacity inline-flex items-center gap-1.5"
                >
                  <span>Download PDF</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}

            {/* Hero Image with Zoom trigger */}
            {project.heroImage && (
              <div
                className="relative group rounded-sm overflow-hidden border border-[#1A1A1A]/15 dark:border-zinc-800 bg-[#E8E8E4] dark:bg-zinc-900 cursor-zoom-in"
                onClick={() => onOpenLightbox(project.images, 0)}
              >
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full max-h-96 object-contain md:object-cover mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
                />
                <div className="absolute bottom-2 right-2 px-2 py-1 rounded-sm bg-black/80 text-white text-[10px] font-mono flex items-center gap-1 backdrop-blur-xs opacity-80 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3 h-3" />
                  <span>Click to zoom</span>
                </div>
              </div>
            )}

            {/* Preserved Full Post Text Content */}
            <div className="space-y-1">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/50 dark:text-zinc-400 font-semibold mb-3">
                Technical Writeup & Implementation Details
              </h3>
              {project.paragraphs.length > 0 ? (
                <div className="space-y-2">
                  {project.paragraphs.map((p, i) => formatParagraph(p, i))}
                </div>
              ) : (
                <p className="text-xs md:text-sm text-[#1A1A1A]/70 dark:text-zinc-400 italic">
                  {project.shortDesc}
                </p>
              )}
            </div>

            {/* Preserved Gallery Images Grid */}
            {project.images.length > 1 && (
              <div className="pt-6 border-t border-[#1A1A1A]/10 dark:border-zinc-800">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/50 dark:text-zinc-400 font-semibold mb-4">
                  Project Gallery & Schematics ({project.images.length} images)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative group aspect-square rounded-sm overflow-hidden border border-[#1A1A1A]/15 dark:border-zinc-800 bg-[#E8E8E4] dark:bg-zinc-900 cursor-zoom-in"
                      onClick={() => onOpenLightbox(project.images, idx)}
                    >
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#1A1A1A]/10 dark:border-zinc-800 flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 hover:text-[#1A1A1A] dark:hover:text-white transition-colors cursor-pointer"
              >
                ← Back to overview
              </button>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('project-modal-backdrop');
                  if (el) el.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 hover:text-[#1A1A1A] dark:hover:text-white transition-colors cursor-pointer"
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
