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
import { ArrowUp, Lock, Unlock } from 'lucide-react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AdminToolbar } from './components/AdminToolbar';
import { EditProjectModal } from './components/EditProjectModal';
import { EditProfileModal } from './components/EditProfileModal';
import { EditExperienceModal } from './components/EditExperienceModal';
import { EditEducationModal } from './components/EditEducationModal';
import { EditPublicationsModal } from './components/EditPublicationsModal';

function PortfolioContent() {
  const { isAdmin } = usePortfolio();

  // Theme state: defaults to dark mode
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedV2 = localStorage.getItem('lance_theme_v2');
      if (savedV2) return savedV2 === 'dark';
      return true;
    }
    return true;
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

  // Admin edit modals states
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isEditProjectOpen, setIsEditProjectOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isEditExperienceOpen, setIsEditExperienceOpen] = useState(false);
  const [isEditEducationOpen, setIsEditEducationOpen] = useState(false);
  const [isEditPublicationsOpen, setIsEditPublicationsOpen] = useState(false);

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
      localStorage.setItem('lance_theme_v2', 'dark');
      localStorage.setItem('lance_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('lance_theme_v2', 'light');
      localStorage.setItem('lance_theme', 'light');
    }
  }, [darkMode]);

  // Lock background body scroll when modals or lightbox are active
  useEffect(() => {
    const hasModal =
      selectedProject ||
      lightbox.isOpen ||
      isResumeOpen ||
      isLoginOpen ||
      isEditProjectOpen ||
      isEditProfileOpen ||
      isEditExperienceOpen ||
      isEditEducationOpen ||
      isEditPublicationsOpen;

    if (hasModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [
    selectedProject,
    lightbox.isOpen,
    isResumeOpen,
    isLoginOpen,
    isEditProjectOpen,
    isEditProfileOpen,
    isEditExperienceOpen,
    isEditEducationOpen,
    isEditPublicationsOpen,
  ]);

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

  const handleOpenEditProject = (proj: Project) => {
    setEditingProject(proj);
    setIsEditProjectOpen(true);
  };

  const handleOpenNewProject = () => {
    setEditingProject(null);
    setIsEditProjectOpen(true);
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
          onEditProfile={() => setIsEditProfileOpen(true)}
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
              onEditProject={handleOpenEditProject}
              onNewProject={handleOpenNewProject}
            />
          )}

          {activeSection === 'experience' && (
            <ExperienceSection
              onOpenResume={() => setIsResumeOpen(true)}
              onEditExperience={() => setIsEditExperienceOpen(true)}
            />
          )}

          {activeSection === 'writing' && (
            <WritingSection
              onEditPublications={() => setIsEditPublicationsOpen(true)}
            />
          )}

          {activeSection === 'about' && (
            <AboutSection
              onEditEducation={() => setIsEditEducationOpen(true)}
            />
          )}

          {activeSection === 'contact' && (
            <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
          )}
        </main>

        {/* Editorial Grid Footer */}
        <footer className="mt-24 pt-8 border-t border-[#1A1A1A]/20 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs relative">
          <div className="w-full sm:w-auto invisible hidden sm:block pointer-events-none">
            {/* Invisible spacer balancing the right-side actions for true optical center */}
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-mono">Resume</span>
              <span className="text-[11px] font-mono">Top</span>
            </div>
          </div>

          <div className="text-center mx-auto">
            <p className="text-[10px] uppercase tracking-[0.25em] font-medium opacity-40 font-mono">
              Available for technical inquiries
            </p>
            <p className="text-[11px] opacity-60 font-mono mt-1 flex items-center justify-center gap-1">
              <span>Lance Nguyen © {new Date().getFullYear()} • Los Angeles, CA</span>
              {/* Very small discreet login trigger at the bottom where a casual reader wouldn't notice */}
              <button
                type="button"
                onClick={() => setIsLoginOpen(true)}
                className="opacity-15 hover:opacity-75 transition-opacity text-[10px] font-mono cursor-pointer select-none p-0.5"
                title="Authorization"
                aria-label="Administrative access login"
              >
                {isAdmin ? <Unlock className="w-2.5 h-2.5 inline text-emerald-500" /> : '#'}
              </button>
            </p>
          </div>

          <div className="flex items-center gap-4">
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

      {/* Floating Admin Toolbar when authorized */}
      <AdminToolbar
        onNewProject={handleOpenNewProject}
        onEditProfile={() => setIsEditProfileOpen(true)}
      />

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      {/* Admin Edit Modals (Only mounted when authorized) */}
      {isAdmin && (
        <>
          <EditProjectModal
            project={editingProject}
            isOpen={isEditProjectOpen}
            onClose={() => {
              setIsEditProjectOpen(false);
              setEditingProject(null);
            }}
            onSaved={(updatedProj) => {
              if (selectedProject && selectedProject.id === updatedProj.id) {
                setSelectedProject(updatedProj);
              }
            }}
          />

          <EditProfileModal
            isOpen={isEditProfileOpen}
            onClose={() => setIsEditProfileOpen(false)}
          />

          <EditExperienceModal
            isOpen={isEditExperienceOpen}
            onClose={() => setIsEditExperienceOpen(false)}
          />

          <EditEducationModal
            isOpen={isEditEducationOpen}
            onClose={() => setIsEditEducationOpen(false)}
          />

          <EditPublicationsModal
            isOpen={isEditPublicationsOpen}
            onClose={() => setIsEditPublicationsOpen(false)}
          />
        </>
      )}

      {/* Case Study Full Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenLightbox={openLightbox}
        onEdit={(proj) => {
          handleOpenEditProject(proj);
        }}
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

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
}
