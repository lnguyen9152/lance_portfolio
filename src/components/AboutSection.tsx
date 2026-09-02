import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, Award, Book, Wrench, TrendingUp, BookOpen, Check, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="space-y-8 animate-in fade-in duration-300">
      {/* Education Cards */}
      <div className="space-y-6">
        <h3 className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/50 dark:text-zinc-400 font-semibold flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-[#1A1A1A]/70 dark:text-zinc-400" />
          <span>Academic Institutions</span>
        </h3>

        {EDUCATION.map((edu, idx) => (
          <div
            key={idx}
            id={`edu-${idx}`}
            className="rounded-sm border border-[#1A1A1A]/15 dark:border-zinc-800 bg-[#FDFDFB] dark:bg-[#181816] p-5 md:p-6 space-y-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-sm overflow-hidden border border-[#1A1A1A]/10 dark:border-zinc-800 bg-[#EFECE6] dark:bg-zinc-800 p-1 shrink-0 flex items-center justify-center">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  {edu.url ? (
                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-base md:text-lg font-semibold tracking-tight uppercase text-[#1A1A1A] dark:text-[#EDEDEC] hover:underline underline-offset-4 decoration-[#1A1A1A]/40"
                    >
                      <span>{edu.institution}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <h4 className="text-base md:text-lg font-semibold tracking-tight uppercase text-[#1A1A1A] dark:text-[#EDEDEC]">
                      {edu.institution}
                    </h4>
                  )}
                  <div className="text-xs md:text-sm font-mono text-[#1A1A1A]/70 dark:text-zinc-400 mt-0.5">
                    {edu.degree}
                  </div>
                </div>
              </div>
              <div className="text-xs font-serif italic text-[#1A1A1A]/60 dark:text-zinc-400 shrink-0">
                {edu.period}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {edu.honors && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-mono uppercase tracking-wider bg-[#EFECE6] dark:bg-zinc-800 text-[#1A1A1A] dark:text-zinc-200 border border-[#1A1A1A]/15 dark:border-zinc-700">
                  <Award className="w-3.5 h-3.5 text-[#3E4E50] dark:text-[#9FB1B3]" />
                  <span>Honors: {edu.honors}</span>
                </div>
              )}
              {edu.degreeVerificationUrl && (
                <a
                  href={edu.degreeVerificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-mono uppercase tracking-wider bg-[#EFECE6] dark:bg-zinc-800 text-[#1A1A1A] dark:text-zinc-200 border border-[#1A1A1A]/15 dark:border-zinc-700 hover:bg-[#E2DED0] dark:hover:bg-zinc-700 transition-colors"
                >
                  <Award className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Degree (Parchment)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              )}
            </div>

            <ul className="space-y-1.5 text-xs md:text-sm text-[#1A1A1A]/70 dark:text-zinc-300">
              {edu.details.map((detail, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2">
                  <span className="text-[#3E4E50] dark:text-[#9FB1B3] select-none font-bold">—</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {/* Clubs & Activities */}
            {edu.clubs && edu.clubs.length > 0 && (
              <div className="pt-3 border-t border-[#1A1A1A]/10 dark:border-zinc-800">
                <div className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A]/60 dark:text-zinc-400 font-medium mb-2">
                  Clubs & Organizations:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.clubs.map((club, clIdx) => (
                    <span
                      key={clIdx}
                      className="text-[11px] font-mono text-[#1A1A1A]/80 dark:text-zinc-300 bg-[#EFECE6]/70 dark:bg-zinc-800/60 px-2.5 py-0.5 rounded-sm border border-[#1A1A1A]/10 dark:border-zinc-700/60"
                    >
                      {club}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Relevant Coursework Matrix */}
            {edu.coursework && (
              <div className="pt-4 border-t border-[#1A1A1A]/10 dark:border-zinc-800">
                <div className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A]/60 dark:text-zinc-400 font-medium mb-2.5">
                  Core Engineering Coursework:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {edu.coursework.map((course, cIdx) => (
                    <div
                      key={cIdx}
                      className="text-[11px] font-mono text-[#1A1A1A]/80 dark:text-zinc-300 bg-[#EFECE6]/70 dark:bg-zinc-800/60 px-2.5 py-1 rounded-sm border border-[#1A1A1A]/10 dark:border-zinc-700/60 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3E4E50] dark:bg-[#9FB1B3] shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Personal Interests & Passions */}
      <div className="pt-2">
        <h3 className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/50 dark:text-zinc-400 font-semibold mb-4 flex items-center gap-2">
          <Book className="w-4 h-4 text-[#1A1A1A]/70 dark:text-zinc-400" />
          <span>Interests & Reading</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-sm border border-[#1A1A1A]/15 dark:border-zinc-800 bg-[#FDFDFB] dark:bg-[#181816] space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-tight text-[#1A1A1A] dark:text-[#EDEDEC]">
              <TrendingUp className="w-4 h-4 text-[#3E4E50] dark:text-[#9FB1B3]" />
              <span>Quantitative Finance & Markets</span>
            </div>
            <p className="text-xs text-[#1A1A1A]/70 dark:text-zinc-400 leading-relaxed font-sans">
              Studying equities, commodities, and index futures. Favorite literature includes{' '}
              <span className="italic font-serif font-medium text-[#1A1A1A] dark:text-zinc-200">
                Reminiscences of a Stock Operator
              </span>{' '}
              by Edwin Lefèvre and{' '}
              <span className="italic font-serif font-medium text-[#1A1A1A] dark:text-zinc-200">
                Stock Market Wizards
              </span>{' '}
              by Jack D. Schwager.
            </p>
          </div>

          <div className="p-5 rounded-sm border border-[#1A1A1A]/15 dark:border-zinc-800 bg-[#FDFDFB] dark:bg-[#181816] space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-tight text-[#1A1A1A] dark:text-[#EDEDEC]">
              <Wrench className="w-4 h-4 text-[#3E4E50] dark:text-[#9FB1B3]" />
              <span>Automotive Powertrains & Tuning</span>
            </div>
            <p className="text-xs text-[#1A1A1A]/70 dark:text-zinc-400 leading-relaxed font-sans">
              Hands-on mechanical overhaul, engine teardowns, turbocharger fabrication, CAN bus sensor diagnostics, and ECU calibration on BMW straight-six platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
