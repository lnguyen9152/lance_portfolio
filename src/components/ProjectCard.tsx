import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, FileText, Calendar, Building2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  onOpenLightbox: (images: string[], index: number) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  onOpenLightbox,
}) => {
  return (
    <article
      id={`project-card-${project.id}`}
      className="group relative rounded-sm border border-[#1A1A1A]/15 dark:border-zinc-800 bg-[#FDFDFB] dark:bg-[#181816] p-5 sm:p-6 transition-all duration-200 hover:border-[#1A1A1A]/50 dark:hover:border-zinc-600 hover:bg-[#F9F9F6] dark:hover:bg-[#1C1C1A]"
    >
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        {/* Left/Top Editorial Aspect Frame */}
        {project.heroImage && (
          <div
            className="w-full sm:w-36 aspect-[4/3] rounded-sm overflow-hidden shrink-0 bg-[#E8E8E4] dark:bg-zinc-800 border border-[#1A1A1A]/10 dark:border-zinc-700 cursor-pointer relative"
            onClick={() => onSelect(project)}
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}

        {/* Content Details */}
        <div className="flex-1 min-w-0 space-y-2">
          {/* Category & Year Header */}
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]/60 dark:text-zinc-400 font-medium">
              {project.category} • {project.organization}
            </span>
            <span className="text-[11px] font-serif italic opacity-60 shrink-0">
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-sm sm:text-base font-semibold uppercase tracking-tight text-[#1A1A1A] dark:text-[#EDEDEC]">
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="text-left group-hover:underline underline-offset-4 decoration-[#1A1A1A]/50 dark:decoration-zinc-400 flex items-center gap-1.5 cursor-pointer"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </h3>

          {/* Short description */}
          <p className="text-xs text-[#1A1A1A]/70 dark:text-zinc-300 line-clamp-2 leading-relaxed font-sans">
            {project.shortDesc}
          </p>

          {/* Tech tags & PDF indicator */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-sm text-[10px] font-mono uppercase tracking-wider bg-[#EFECE6] dark:bg-zinc-800 text-[#1A1A1A]/70 dark:text-zinc-400 border border-[#1A1A1A]/5 dark:border-zinc-700"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-[10px] font-mono text-[#1A1A1A]/40 dark:text-zinc-500 self-center">
                +{project.tags.length - 4}
              </span>
            )}
            {project.pdfUrl && (
              <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-sm bg-[#E8E8E4] dark:bg-zinc-800 text-[#1A1A1A] dark:text-[#EDEDEC] border border-[#1A1A1A]/10 dark:border-zinc-700">
                <FileText className="w-2.5 h-2.5 opacity-70" /> PDF Report
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
