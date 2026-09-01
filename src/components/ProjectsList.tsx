import React, { useState, useMemo } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Search, Filter, Cpu, SlidersHorizontal, Sparkles } from 'lucide-react';

interface ProjectsListProps {
  onSelectProject: (project: Project) => void;
  onOpenLightbox: (images: string[], index: number) => void;
}

export const ProjectsList: React.FC<ProjectsListProps> = ({
  onSelectProject,
  onOpenLightbox,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Controls & Marine Systems',
    'Instrumentation & Gas Flow',
    'Distributed Control Systems',
    'Control Systems & Environmental',
    'Aerospace & Embedded Systems',
    'Robotics & Control Systems',
    'Digital Logic & FPGA',
    'Signals & Communications',
    'Automotive & Mechanical Systems',
  ];

  const simplifiedCategories = [
    { id: 'All', label: 'All Projects' },
    { id: 'Aerospace & Controls', label: 'Aerospace & Controls' },
    { id: 'Embedded & Hardware', label: 'Embedded & Hardware' },
    { id: 'Software & Signals', label: 'Software & Signals' },
    { id: 'Automotive & Energy', label: 'Automotive & Energy' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      // Category match
      let matchesCat = true;
      if (selectedCategory === 'Aerospace & Controls') {
        matchesCat =
          proj.category.includes('Aerospace') ||
          proj.category.includes('Control') ||
          proj.category.includes('Marine') ||
          proj.category.includes('Instrumentation') ||
          proj.tags.includes('BP plc') ||
          proj.tags.includes('Relativity Space');
      } else if (selectedCategory === 'Embedded & Hardware') {
        matchesCat =
          proj.category.includes('Embedded') ||
          proj.category.includes('FPGA') ||
          proj.category.includes('Robotics') ||
          proj.category.includes('Digital Logic') ||
          proj.tags.includes('Arduino') ||
          proj.tags.includes('VHDL');
      } else if (selectedCategory === 'Software & Signals') {
        matchesCat =
          proj.category.includes('Signals') ||
          proj.category.includes('Software') ||
          proj.category.includes('Quantitative') ||
          proj.tags.includes('Python') ||
          proj.tags.includes('Java') ||
          proj.tags.includes('MIPS');
      } else if (selectedCategory === 'Automotive & Energy') {
        matchesCat =
          proj.category.includes('Automotive') ||
          proj.category.includes('Energy') ||
          proj.tags.includes('Automotive Engineering') ||
          proj.tags.includes('Renewable Energy');
      }

      // Search match
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inTitle = proj.title.toLowerCase().includes(q);
        const inDesc = proj.shortDesc.toLowerCase().includes(q);
        const inTags = proj.tags.some((t) => t.toLowerCase().includes(q));
        const inOrg = proj.organization.toLowerCase().includes(q);
        matchesSearch = inTitle || inDesc || inTags || inOrg;
      }

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div id="projects-list-section" className="space-y-8 animate-in fade-in duration-300">
      {/* Header & Controls */}
      <div className="space-y-4 border-b border-[#1A1A1A]/20 dark:border-zinc-800 pb-5">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold tracking-tight uppercase font-sans text-[#1A1A1A] dark:text-[#EDEDEC]">
              Engineering Archive & Projects
            </h2>
            <p className="text-xs text-[#1A1A1A]/60 dark:text-zinc-400 mt-1 font-serif italic text-sm">
              Documented technical systems covering avionics ground support, DCS telemetry, high-speed DAQ, and embedded firmware.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-60">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#1A1A1A]/40 dark:text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search archive..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-sm bg-[#EFECE6] dark:bg-zinc-800/80 border border-[#1A1A1A]/15 dark:border-zinc-700/80 text-[#1A1A1A] dark:text-[#EDEDEC] placeholder:text-[#1A1A1A]/40 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] dark:focus:ring-zinc-400 font-mono"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#1A1A1A]/40 hover:text-[#1A1A1A] dark:hover:text-zinc-200 font-mono"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
          {simplifiedCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-sm text-xs font-mono uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? 'bg-[#1A1A1A] dark:bg-[#EDEDEC] text-[#FDFDFB] dark:text-[#141413] font-semibold border-[#1A1A1A] dark:border-[#EDEDEC]'
                    : 'bg-[#EFECE6]/70 dark:bg-zinc-800/50 text-[#1A1A1A]/70 dark:text-zinc-400 border-[#1A1A1A]/10 dark:border-zinc-700 hover:bg-[#E2DED0] dark:hover:bg-zinc-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid/List */}
      {filteredProjects.length === 0 ? (
        <div className="py-12 text-center border border-[#1A1A1A]/15 dark:border-zinc-800 rounded-sm p-8 text-[#1A1A1A]/60 dark:text-zinc-400">
          <p className="text-sm font-mono">No documented projects found matching "{searchQuery}".</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-3 text-xs uppercase tracking-widest font-mono text-[#1A1A1A] dark:text-zinc-200 hover:underline underline-offset-4 decoration-[#1A1A1A]/40 dark:decoration-zinc-500 cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
              onOpenLightbox={onOpenLightbox}
            />
          ))}
        </div>
      )}
    </div>
  );
};
