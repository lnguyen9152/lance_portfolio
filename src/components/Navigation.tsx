import React from 'react';
import { SectionTab } from '../types';
import { PROJECTS, WORK_EXPERIENCE, PUBLICATIONS } from '../data/portfolioData';

interface NavigationProps {
  activeSection: SectionTab;
  setActiveSection: (section: SectionTab) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const tabs: { id: SectionTab; label: string; count?: number }[] = [
    { id: 'projects', label: 'Projects', count: PROJECTS.length },
    { id: 'experience', label: 'Experience', count: WORK_EXPERIENCE.length },
    { id: 'writing', label: 'Writing', count: PUBLICATIONS.length },
    { id: 'about', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      id="main-nav-bar"
      className="sticky top-0 z-20 py-4 bg-[#FDFDFB]/95 dark:bg-[#141413]/95 backdrop-blur-md border-b border-[#1A1A1A]/15 dark:border-zinc-800"
    >
      <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar py-1 text-xs uppercase tracking-widest font-medium">
        {tabs.map((tab) => {
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              id={`nav-tab-${tab.id}`}
              type="button"
              onClick={() => setActiveSection(tab.id)}
              className={`relative py-1 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 font-mono text-xs ${
                isActive
                  ? 'text-[#1A1A1A] dark:text-[#EDEDEC] font-bold border-b-2 border-[#1A1A1A] dark:border-[#EDEDEC]'
                  : 'text-[#1A1A1A]/60 dark:text-zinc-400 hover:text-[#1A1A1A] dark:hover:text-[#EDEDEC] hover:underline underline-offset-4 decoration-[#1A1A1A]/40 dark:decoration-zinc-500'
              }`}
            >
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span
                  className={`text-[10px] font-mono opacity-60 italic`}
                >
                  ({tab.count})
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
