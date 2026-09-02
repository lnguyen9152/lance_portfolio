import React, { useState, useMemo } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Search, Briefcase, Wrench } from 'lucide-react';

interface ProjectsListProps {
  onSelectProject: (project: Project) => void;
  onOpenLightbox: (images: string[], index: number) => void;
}

export type ProjectSectionType = 'work' | 'personal';

// All BP ones and TradersAI are work related
export const isWorkProject = (proj: Project): boolean => {
  const org = (proj.organization || '').toLowerCase();
  const id = proj.id.toLowerCase();
  const title = proj.title.toLowerCase();
  const tags = (proj.tags || []).map((t) => t.toLowerCase());

  return (
    id === 'nav-aid-replacement' ||
    id === 'ultrasonics-upgrade' ||
    id === 'dcs-upgrade' ||
    id === 'pressure-differential-indicator-controller' ||
    id === 'tradersai-python' ||
    org.includes('bp') ||
    org.includes('british petroleum') ||
    org.includes('tradersai') ||
    org.includes('relativity') ||
    tags.some((t) => t.includes('bp') || t.includes('tradersai') || t.includes('relativity')) ||
    title.includes('tradersai')
  );
};

export const ProjectsList: React.FC<ProjectsListProps> = ({
  onSelectProject,
  onOpenLightbox,
}) => {
  const [activeTab, setActiveTab] = useState<ProjectSectionType>('work');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const matchesSearch = (proj: Project, q: string): boolean => {
    if (!q) return true;
    const query = q.toLowerCase();
    return (
      proj.title.toLowerCase().includes(query) ||
      proj.shortDesc.toLowerCase().includes(query) ||
      proj.tags.some((t) => t.toLowerCase().includes(query)) ||
      proj.organization.toLowerCase().includes(query) ||
      proj.category.toLowerCase().includes(query)
    );
  };

  const { workProjects, personalProjects } = useMemo(() => {
    const q = searchQuery.trim();
    const work: Project[] = [];
    const personal: Project[] = [];

    PROJECTS.forEach((proj) => {
      if (matchesSearch(proj, q)) {
        if (isWorkProject(proj)) {
          work.push(proj);
        } else {
          personal.push(proj);
        }
      }
    });

    return { workProjects: work, personalProjects: personal };
  }, [searchQuery]);

  const displayedProjects = activeTab === 'work' ? workProjects : personalProjects;

  return (
    <div id="projects-list-section" className="space-y-8 animate-in fade-in duration-300">
      {/* Top Header & Search Bar */}
      <div className="space-y-5 border-b border-[#1A1A1A]/20 dark:border-zinc-800 pb-5">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold tracking-tight uppercase font-sans text-[#1A1A1A] dark:text-[#EDEDEC]">
              Engineering Projects & Archive
            </h2>
            <p className="text-xs text-[#1A1A1A]/60 dark:text-zinc-400 mt-1 font-serif italic text-sm">
              Documented technical systems spanning professional industry deployments and independent engineering projects.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-60">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#1A1A1A]/40 dark:text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-sm bg-[#EFECE6] dark:bg-zinc-800/80 border border-[#1A1A1A]/15 dark:border-zinc-700/80 text-[#1A1A1A] dark:text-[#EDEDEC] placeholder:text-[#1A1A1A]/40 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] dark:focus:ring-zinc-400 font-mono"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#1A1A1A]/40 hover:text-[#1A1A1A] dark:hover:text-zinc-200 font-mono cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Two Selector Pills: Work Projects & Personal Projects */}
        <div className="flex items-center gap-2 pt-1">
          <button
            type="button"
            onClick={() => setActiveTab('work')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-all cursor-pointer ${
              activeTab === 'work'
                ? 'bg-[#1A1A1A] text-white dark:bg-[#EDEDEC] dark:text-[#121212] font-semibold shadow-sm'
                : 'bg-[#1A1A1A]/5 dark:bg-zinc-800/80 text-[#1A1A1A]/70 dark:text-zinc-400 hover:bg-[#1A1A1A]/10 dark:hover:bg-zinc-700'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work Projects</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              activeTab === 'work'
                ? 'bg-white/20 text-white dark:bg-black/20 dark:text-black'
                : 'bg-black/5 dark:bg-white/10 text-[#1A1A1A]/60 dark:text-zinc-400'
            }`}>
              {workProjects.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('personal')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-all cursor-pointer ${
              activeTab === 'personal'
                ? 'bg-[#1A1A1A] text-white dark:bg-[#EDEDEC] dark:text-[#121212] font-semibold shadow-sm'
                : 'bg-[#1A1A1A]/5 dark:bg-zinc-800/80 text-[#1A1A1A]/70 dark:text-zinc-400 hover:bg-[#1A1A1A]/10 dark:hover:bg-zinc-700'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Personal Projects</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              activeTab === 'personal'
                ? 'bg-white/20 text-white dark:bg-black/20 dark:text-black'
                : 'bg-black/5 dark:bg-white/10 text-[#1A1A1A]/60 dark:text-zinc-400'
            }`}>
              {personalProjects.length}
            </span>
          </button>
        </div>
      </div>

      {/* Projects Display */}
      {displayedProjects.length === 0 ? (
        <div className="py-12 text-center border border-[#1A1A1A]/15 dark:border-zinc-800 rounded-sm p-8 text-[#1A1A1A]/60 dark:text-zinc-400">
          <p className="text-sm font-mono">
            No {activeTab === 'work' ? 'work' : 'personal'} projects found
            {searchQuery ? ` matching "${searchQuery}"` : ''}.
          </p>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs uppercase tracking-widest font-mono text-[#1A1A1A] dark:text-zinc-200 hover:underline underline-offset-4 decoration-[#1A1A1A]/40 dark:decoration-zinc-500 cursor-pointer"
            >
              Clear Search
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-5 animate-in fade-in duration-200">
          {displayedProjects.map((project) => (
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
