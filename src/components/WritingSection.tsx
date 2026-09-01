import React from 'react';
import { PUBLICATIONS } from '../data/portfolioData';
import { FileText, ArrowUpRight, BookOpen, Download } from 'lucide-react';

export const WritingSection: React.FC = () => {
  return (
    <section id="writing-section" className="space-y-8 animate-in fade-in duration-300">
      <div className="border-b border-[#1A1A1A]/20 dark:border-zinc-800 pb-4">
        <h2 className="text-xl font-semibold tracking-tight uppercase font-sans text-[#1A1A1A] dark:text-[#EDEDEC]">
          Publications & Technical Writing
        </h2>
        <p className="text-xs md:text-sm text-[#1A1A1A]/60 dark:text-zinc-400 mt-1 font-serif italic">
          Formal engineering technical reports, published instrumentation papers, and academic research.
        </p>
      </div>

      <div className="space-y-6">
        {PUBLICATIONS.map((pub, idx) => (
          <article
            key={idx}
            id={`pub-${idx}`}
            className="group rounded-sm border border-[#1A1A1A]/15 dark:border-zinc-800 bg-[#FDFDFB] dark:bg-[#181816] p-5 md:p-6 hover:border-[#1A1A1A]/50 dark:hover:border-zinc-600 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-sm bg-[#EFECE6] dark:bg-zinc-800 text-[#1A1A1A] dark:text-zinc-300 border border-[#1A1A1A]/10 dark:border-zinc-700">
                    {pub.type}
                  </span>
                  <span className="text-xs font-serif italic text-[#1A1A1A]/60 dark:text-zinc-400">
                    {pub.date}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-semibold tracking-tight uppercase text-[#1A1A1A] dark:text-[#EDEDEC] group-hover:underline underline-offset-4 decoration-[#1A1A1A]/50 dark:decoration-zinc-400 transition-colors">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5"
                  >
                    <span>{pub.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </h3>
              </div>

              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider bg-[#1A1A1A] dark:bg-[#EDEDEC] text-[#FDFDFB] dark:text-[#141413] hover:opacity-85 transition-opacity"
              >
                {pub.url.endsWith('.pdf') ? (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </>
                ) : (
                  <>
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read Paper</span>
                  </>
                )}
              </a>
            </div>

            <p className="text-xs md:text-sm text-[#1A1A1A]/70 dark:text-zinc-300 leading-relaxed font-sans mt-3">
              {pub.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
