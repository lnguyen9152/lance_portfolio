import React, { useState, useEffect } from 'react';
import { SectionTab, Project } from './types';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { ProjectsList } from './components/ProjectsList';
import { ExperienceSection } from './components/ExperienceSection';
import { WritingSection } from './components/WritingSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { ImageLightbox } from './components/ImageLightbox';
import { ResumeModal } from './components/ResumeModal';
import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  // Theme state: defaults to light mode unless explicitly saved as dark in localStorage
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lance_theme');
      if (saved) return saved === 'dark';
      return false;
    }
    return false;
  });

  // Section navigation state
  const [activeSection, setActiveSection] = useState<SectionTab>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const sec = params.get('section') as SectionTab;
      if (['projects', 'experience', 'writing', 'about', 'contact'].includes(sec)) {
        return sec;
      }
    }
    return 'projects';
  });

  // Selected project modal state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Resume modal state
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Lightbox state
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    images: string[];
    currentIndex: number;
    caption?: string;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  // Apply dark mode class to root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('lance_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('lance_theme', 'light');
    }
  }, [darkMode]);

  // Lock background body scroll when modals or lightbox are active
  useEffect(() => {
    if (selectedProject || lightbox.isOpen || isResumeOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject, lightbox.isOpen, isResumeOpen]);

  // Sync active section to URL query param
  const handleSectionChange = (section: SectionTab) => {
    setActiveSection(section);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('section', section);
      window.history.pushState({}, '', url.toString());
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen to popstate (back/forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const sec = params.get('section') as SectionTab;
      if (['projects', 'experience', 'writing', 'about', 'contact'].includes(sec)) {
        setActiveSection(sec);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openLightbox = (images: string[], index: number, caption?: string) => {
    setLightbox({
      isOpen: true,
      images,
      currentIndex: index,
      caption,
    });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const navigateLightbox = (newIndex: number) => {
    setLightbox((prev) => ({ ...prev, currentIndex: newIndex }));
  };

  return (
    <div className="min-h-screen bg-[#FDFDFB] dark:bg-[#141413] text-[#1A1A1A] dark:text-[#EDEDEC] transition-colors duration-200 selection:bg-[#1A1A1A] selection:text-[#FDFDFB] dark:selection:bg-[#EDEDEC] dark:selection:text-[#141413]">
      {/* Main Editorial Container */}
      <div className="max-w-3xl md:max-w-4xl mx-auto px-6 sm:px-8 md:px-10 pb-24">
        {/* Header with bio & identity */}
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onNavigateSection={handleSectionChange}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Minimalist Editorial Navigation Bar */}
        <Navigation
          activeSection={activeSection}
          setActiveSection={handleSectionChange}
        />

        {/* Section Views */}
        <main className="mt-10">
          {activeSection === 'projects' && (
            <ProjectsList
              onSelectProject={setSelectedProject}
              onOpenLightbox={openLightbox}
            />
          )}

          {activeSection === 'experience' && (
            <ExperienceSection onOpenResume={() => setIsResumeOpen(true)} />
          )}

          {activeSection === 'writing' && <WritingSection />}

          {activeSection === 'about' && <AboutSection />}

          {activeSection === 'contact' && (
            <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
          )}
        </main>

        {/* Editorial Grid Footer */}
        <footer className="mt-24 pt-8 border-t border-[#1A1A1A]/20 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-12 gap-6 items-baseline text-xs">
          <div className="sm:col-span-5">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-40 mb-2 font-mono">
              Engineering Focus
            </h4>
            <p className="text-xs text-[#1A1A1A]/70 dark:text-zinc-400 leading-relaxed font-serif italic text-sm">
              Avionics Test GSE, industrial instrumentation, high-speed DAQ, and embedded firmware.
            </p>
          </div>

          <div className="sm:col-span-4 text-left sm:text-center">
            <p className="text-[10px] uppercase tracking-[0.25em] font-medium opacity-40 font-mono">
              Available for technical inquiries
            </p>
            <p className="text-[11px] opacity-60 font-mono mt-1">
              Lance Nguyen © {new Date().getFullYear()} • Los Angeles, CA
            </p>
          </div>

          <div className="sm:col-span-3 flex sm:justify-end items-center gap-4">
            <button
              type="button"
              onClick={() => setIsResumeOpen(true)}
              className="uppercase tracking-widest text-[11px] font-medium opacity-70 hover:opacity-100 hover:underline underline-offset-4 decoration-[#1A1A1A]/40 dark:decoration-zinc-500 transition-all cursor-pointer font-mono"
            >
              Resume
            </button>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1 uppercase tracking-widest text-[11px] font-medium opacity-70 hover:opacity-100 hover:underline underline-offset-4 decoration-[#1A1A1A]/40 dark:decoration-zinc-500 transition-all cursor-pointer font-mono"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </footer>
      </div>

      {/* Case Study Full Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenLightbox={openLightbox}
      />

      {/* Official Verified Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* High-Resolution Image Lightbox */}
      <ImageLightbox
        isOpen={lightbox.isOpen}
        images={lightbox.images}
        currentIndex={lightbox.currentIndex}
        caption={lightbox.caption}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
      />
    </div>
  );
}
