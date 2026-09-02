import React from 'react';
import { WORK_EXPERIENCE, RESUME_SKILLS } from '../data/portfolioData';
import { MapPin, Calendar, FileText, Code2, Wrench, ArrowUpRight, Award, Globe } from 'lucide-react';

interface ExperienceSectionProps {
  onOpenResume?: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="experience-section" className="space-y-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1A1A1A]/20 dark:border-zinc-800 pb-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight uppercase font-sans text-[#1A1A1A] dark:text-[#EDEDEC]">
            Professional Experience
          </h2>
          <p className="text-xs md:text-sm text-[#1A1A1A]/60 dark:text-zinc-400 mt-1 font-serif italic">
            Aerospace ground support systems, factory instrumentation DACs, and energy automation.
          </p>
        </div>

        {onOpenResume && (
          <button
            type="button"
            id="view-full-resume-btn"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-mono font-medium bg-[#EFECE6] dark:bg-zinc-800 text-[#1A1A1A] dark:text-[#EDEDEC] border border-[#1A1A1A]/15 dark:border-zinc-700 hover:bg-[#E2DED0] dark:hover:bg-zinc-700 transition-colors cursor-pointer self-start sm:self-auto shrink-0 hover:underline underline-offset-4 decoration-[#1A1A1A]/40"
          >
            <FileText className="w-3.5 h-3.5 opacity-70" />
            <span>View Full Resume</span>
            <ArrowUpRight className="w-3 h-3 opacity-50" />
          </button>
        )}
      </div>

      <div className="space-y-6">
        {WORK_EXPERIENCE.map((exp, idx) => (
          <div
            key={idx}
            id={`exp-${idx}-${exp.company.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
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
                  <div className="flex items-center gap-2 flex-wrap">
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 text-base md:text-lg font-semibold tracking-tight uppercase text-[#1A1A1A] dark:text-[#EDEDEC] hover:underline underline-offset-4 decoration-[#1A1A1A]/40"
                      >
                        <span>{exp.company}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <h3 className="text-base md:text-lg font-semibold tracking-tight uppercase text-[#1A1A1A] dark:text-[#EDEDEC]">
                        {exp.company}
                      </h3>
                    )}
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

      {/* Technical Skills & Capabilities Matrix */}
      <div className="pt-4 space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/50 dark:text-zinc-400 font-semibold flex items-center gap-2">
          <Code2 className="w-4 h-4 text-[#1A1A1A]/70 dark:text-zinc-400" />
          <span>Technical Skills, Certifications & Credentials</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-sm border border-[#1A1A1A]/15 dark:border-zinc-800 bg-[#FDFDFB] dark:bg-[#181816] space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1A1A1A] dark:text-[#EDEDEC] flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-[#3E4E50] dark:text-[#9FB1B3]" />
              <span>Programming & Controls Languages</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {RESUME_SKILLS.programmingLanguages.map((lang, lIdx) => (
                <span
                  key={lIdx}
                  className="text-xs font-mono px-2.5 py-1 rounded-sm bg-[#EFECE6] dark:bg-zinc-800 text-[#1A1A1A] dark:text-zinc-300 border border-[#1A1A1A]/10 dark:border-zinc-700/60"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-sm border border-[#1A1A1A]/15 dark:border-zinc-800 bg-[#FDFDFB] dark:bg-[#181816] space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1A1A1A] dark:text-[#EDEDEC] flex items-center gap-2">
              <Wrench className="w-3.5 h-3.5 text-[#3E4E50] dark:text-[#9FB1B3]" />
              <span>Engineering Systems, Protocols & Methodologies</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {RESUME_SKILLS.technicalSkills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-xs font-mono px-2.5 py-1 rounded-sm bg-[#EFECE6] dark:bg-zinc-800 text-[#1A1A1A] dark:text-zinc-300 border border-[#1A1A1A]/10 dark:border-zinc-700/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {RESUME_SKILLS.certifications && (
            <div className="p-5 rounded-sm border border-[#1A1A1A]/15 dark:border-zinc-800 bg-[#FDFDFB] dark:bg-[#181816] space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1A1A1A] dark:text-[#EDEDEC] flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#3E4E50] dark:text-[#9FB1B3]" />
                <span>Certifications & Safety Qualifications</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#1A1A1A]/80 dark:text-zinc-300 font-sans">
                {RESUME_SKILLS.certifications.map((cert, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2">
                    <span className="text-[#3E4E50] dark:text-[#9FB1B3] font-bold select-none">•</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {RESUME_SKILLS.languages && (
            <div className="p-5 rounded-sm border border-[#1A1A1A]/15 dark:border-zinc-800 bg-[#FDFDFB] dark:bg-[#181816] space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1A1A1A] dark:text-[#EDEDEC] flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#3E4E50] dark:text-[#9FB1B3]" />
                <span>Languages & Honors</span>
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {RESUME_SKILLS.languages.map((lng, lIdx) => (
                    <span
                      key={lIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-sm bg-[#EFECE6] dark:bg-zinc-800 text-[#1A1A1A] dark:text-zinc-300 border border-[#1A1A1A]/10 dark:border-zinc-700/60"
                    >
                      {lng}
                    </span>
                  ))}
                </div>
                {RESUME_SKILLS.honorsAwards && (
                  <div className="pt-2 border-t border-[#1A1A1A]/10 dark:border-zinc-800 text-xs text-[#1A1A1A]/70 dark:text-zinc-400 font-sans">
                    <span className="font-semibold text-[#1A1A1A] dark:text-[#EDEDEC]">Awards: </span>
                    {RESUME_SKILLS.honorsAwards.join(' • ')}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
