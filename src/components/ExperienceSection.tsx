import React from 'react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience-section" className="space-y-8 animate-in fade-in duration-300">
      <div className="border-b border-[#1A1A1A]/20 dark:border-zinc-800 pb-4">
        <h2 className="text-xl font-semibold tracking-tight uppercase font-sans text-[#1A1A1A] dark:text-[#EDEDEC]">
          Professional Experience
        </h2>
        <p className="text-xs md:text-sm text-[#1A1A1A]/60 dark:text-zinc-400 mt-1 font-serif italic">
          Aerospace ground support systems, industrial process automation, and software engineering.
        </p>
      </div>

      <div className="space-y-6">
        {WORK_EXPERIENCE.map((exp, idx) => (
          <div
            key={idx}
            id={`exp-${exp.company.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            className="rounded-sm border border-[#1A1A1A]/15 dark:border-zinc-800 bg-[#FDFDFB] dark:bg-[#181816] p-5 md:p-6 space-y-4 hover:border-[#1A1A1A]/50 dark:hover:border-zinc-600 transition-colors"
          >
            {/* Top Row: Logo, Company, Role, Badge, Period */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-sm overflow-hidden border border-[#1A1A1A]/10 dark:border-zinc-800 bg-[#EFECE6] dark:bg-zinc-800 p-1 shrink-0 flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base md:text-lg font-semibold tracking-tight uppercase text-[#1A1A1A] dark:text-[#EDEDEC]">
                      {exp.company}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-sm bg-[#EFECE6] dark:bg-zinc-800 text-[#1A1A1A] dark:text-zinc-300 font-medium border border-[#1A1A1A]/5 dark:border-zinc-700">
                      {exp.badge}
                    </span>
                  </div>
                  <div className="text-xs md:text-sm font-medium text-[#1A1A1A]/70 dark:text-zinc-400 font-mono mt-0.5">
                    {exp.role}
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="inline-flex items-center gap-1 text-xs font-serif italic text-[#1A1A1A]/70 dark:text-zinc-400">
                  <Calendar className="w-3 h-3 opacity-60" />
                  {exp.period}
                </div>
                <div className="flex items-center justify-end gap-1 text-[11px] font-mono text-[#1A1A1A]/50 dark:text-zinc-500 mt-0.5">
                  <MapPin className="w-3 h-3 opacity-60" />
                  {exp.location}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs md:text-sm text-[#1A1A1A]/80 dark:text-zinc-300 leading-relaxed font-sans">
              {exp.description}
            </p>

            {/* Highlights List */}
            <ul className="space-y-2 pt-3 border-t border-[#1A1A1A]/10 dark:border-zinc-800">
              {exp.highlights.map((h, hIdx) => (
                <li
                  key={hIdx}
                  className="flex items-start gap-2.5 text-xs md:text-sm text-[#1A1A1A]/70 dark:text-zinc-300 leading-relaxed"
                >
                  <span className="text-[#3E4E50] dark:text-[#9FB1B3] font-bold select-none mt-0.5">—</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
