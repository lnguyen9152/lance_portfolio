import React, { useState } from 'react';
import { Mail, Linkedin, FileText, Check, ArrowUpRight, Sun, Moon, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onNavigateSection: (section: 'projects' | 'experience' | 'writing' | 'about' | 'contact') => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode, onNavigateSection }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header id="header-section" className="pt-10 md:pt-14 pb-8 border-b border-[#1A1A1A]/20 dark:border-zinc-800">
      {/* Top Masthead: Identity & Controls */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative group shrink-0">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt="Lance Nguyen"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-1 ring-[#1A1A1A]/20 dark:ring-zinc-700 shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <span
              title="Status: Active in Aerospace GSE & Controls"
              className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#FDFDFB] dark:border-[#141413]"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            </span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tighter uppercase font-sans text-[#1A1A1A] dark:text-[#EDEDEC]">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xs sm:text-sm uppercase tracking-widest font-mono text-[#1A1A1A]/60 dark:text-zinc-400 mt-1 font-medium">
              Avionics GSE & Systems Engineer
            </p>
          </div>
        </div>

        {/* Editorial Minimalist Theme Toggle */}
        <button
          type="button"
          id="theme-toggle-btn"
          aria-label="Toggle color theme"
          onClick={() => setDarkMode(!darkMode)}
          className="relative inline-flex items-center p-1 rounded-full bg-[#EAEAE5] dark:bg-zinc-800 ring-1 ring-[#1A1A1A]/10 dark:ring-zinc-700 transition-colors focus:outline-none cursor-pointer"
        >
          <div
            className={`absolute top-1 bottom-1 w-5 h-5 rounded-full bg-[#FDFDFB] dark:bg-zinc-600 shadow-sm transition-all duration-300 ${
              darkMode ? 'left-7' : 'left-1'
            }`}
          />
          <span className="relative z-10 grid w-6 h-6 place-items-center text-[#1A1A1A] dark:text-zinc-400 transition-colors">
            <Sun className="w-3 h-3" />
          </span>
          <span className="relative z-10 grid w-6 h-6 place-items-center text-zinc-400 dark:text-[#EDEDEC] transition-colors">
            <Moon className="w-3 h-3" />
          </span>
        </button>
      </div>

      {/* Editorial Headline Statement */}
      <div className="my-8 py-6 border-y border-[#1A1A1A]/15 dark:border-zinc-800">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.2] tracking-tight font-sans text-[#1A1A1A] dark:text-[#EDEDEC] max-w-2xl">
          Designing resilient systems that bridge the gap between <span className="italic font-serif text-[#3E4E50] dark:text-[#9FB1B3]">complex hardware</span> and <span className="italic font-serif text-[#3E4E50] dark:text-[#9FB1B3]">aerospace reliability</span>.
        </h2>
      </div>

      {/* Narrative Bio */}
      <div className="space-y-3 text-[#1A1A1A]/80 dark:text-zinc-300 text-sm md:text-base leading-relaxed">
        <p>
          Born in Minnesota and raised in Northern Virginia. Currently engineering in the aerospace industry as an{' '}
          <span className="font-semibold text-[#1A1A1A] dark:text-[#EDEDEC]">
            Avionics Test Ground Support Equipment (GSE) Engineer II
          </span>{' '}
          at{' '}
          <a
            href="https://www.relativityspace.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#1A1A1A] dark:text-[#EDEDEC] font-medium underline underline-offset-4 decoration-[#1A1A1A]/30 dark:decoration-zinc-600 hover:decoration-[#1A1A1A] dark:hover:decoration-zinc-100 transition-colors"
          >
            Relativity Space
            <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 opacity-60" />
          </a>
          .
        </p>
        <p>
          Previously delivered critical instrumentation, marine collision avoidance, and DCS modernization projects as an I&C Engineer on offshore assets at{' '}
          <button
            type="button"
            onClick={() => onNavigateSection('experience')}
            className="text-[#1A1A1A] dark:text-[#EDEDEC] font-medium underline underline-offset-4 decoration-[#1A1A1A]/30 dark:decoration-zinc-600 hover:decoration-[#1A1A1A] dark:hover:decoration-zinc-100 transition-colors cursor-pointer"
          >
            BP plc
          </button>
          . Graduated with honors (<span className="italic font-serif">Cum Laude</span>) with a B.S. in Electrical Engineering from{' '}
          <button
            type="button"
            onClick={() => onNavigateSection('about')}
            className="text-[#1A1A1A] dark:text-[#EDEDEC] font-medium underline underline-offset-4 decoration-[#1A1A1A]/30 dark:decoration-zinc-600 hover:decoration-[#1A1A1A] dark:hover:decoration-zinc-100 transition-colors cursor-pointer"
          >
            George Mason University
          </button>
          .
        </p>
      </div>

      {/* Quick Action Links & Location Bar */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          id="copy-email-btn"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-medium bg-[#EFECE6] dark:bg-zinc-800 text-[#1A1A1A] dark:text-[#EDEDEC] hover:bg-[#E2DED0] dark:hover:bg-zinc-700 border border-[#1A1A1A]/10 dark:border-zinc-700 transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>copied email!</span>
            </>
          ) : (
            <>
              <Mail className="w-3.5 h-3.5 opacity-70" />
              <span>{PERSONAL_INFO.email}</span>
            </>
          )}
        </button>

        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          id="linkedin-link-btn"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-medium bg-[#EFECE6] dark:bg-zinc-800 text-[#1A1A1A] dark:text-[#EDEDEC] hover:bg-[#E2DED0] dark:hover:bg-zinc-700 border border-[#1A1A1A]/10 dark:border-zinc-700 transition-colors hover:underline underline-offset-4 decoration-[#1A1A1A]/40 dark:decoration-zinc-500"
        >
          <Linkedin className="w-3.5 h-3.5 opacity-70" />
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3 h-3 opacity-50" />
        </a>

        <a
          href="https://cca90530-5079-40f5-b8c1-5c80ca4ef4e0.filesusr.com/ugd/32e826_15f3552920f14a4a9a46b21633a8968a.pdf"
          target="_blank"
          rel="noopener noreferrer"
          id="bp-report-link-btn"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-medium bg-[#EFECE6] dark:bg-zinc-800 text-[#1A1A1A] dark:text-[#EDEDEC] hover:bg-[#E2DED0] dark:hover:bg-zinc-700 border border-[#1A1A1A]/10 dark:border-zinc-700 transition-colors hover:underline underline-offset-4 decoration-[#1A1A1A]/40 dark:decoration-zinc-500"
        >
          <FileText className="w-3.5 h-3.5 opacity-70" />
          <span>BP Projects Summary (PDF)</span>
          <ArrowUpRight className="w-3 h-3 opacity-50" />
        </a>

        <div className="ml-auto hidden sm:flex items-center gap-1.5 text-xs font-mono text-[#1A1A1A]/50 dark:text-zinc-400">
          <MapPin className="w-3 h-3 opacity-70" />
          <span>{PERSONAL_INFO.location}</span>
        </div>
      </div>
    </header>
  );
};
