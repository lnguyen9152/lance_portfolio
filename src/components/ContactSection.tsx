import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Copy, Check, Send, MapPin, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    // Construct mailto as direct bridge
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  return (
    <section id="contact-section" className="space-y-8 animate-in fade-in duration-300">
      <div className="border-b border-[#1A1A1A]/20 dark:border-zinc-800 pb-4">
        <h2 className="text-xl font-semibold tracking-tight uppercase font-sans text-[#1A1A1A] dark:text-[#EDEDEC]">
          Contact & Collaboration
        </h2>
        <p className="text-xs md:text-sm text-[#1A1A1A]/60 dark:text-zinc-400 mt-1 font-serif italic">
          Inquiries regarding aerospace avionics, industrial instrumentation, or technical consulting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Direct Channels */}
        <div className="space-y-4">
          <div className="p-5 md:p-6 rounded-sm border border-[#1A1A1A]/15 dark:border-zinc-800 bg-[#FDFDFB] dark:bg-[#181816] space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/50 dark:text-zinc-400 font-semibold">
              Direct Channels
            </h3>

            <div className="space-y-3">
              {/* Email Row */}
              <div className="flex items-center justify-between p-3 rounded-sm bg-[#EFECE6]/60 dark:bg-zinc-800/50 border border-[#1A1A1A]/10 dark:border-zinc-700/60">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-[#3E4E50] dark:text-[#9FB1B3] shrink-0" />
                  <span className="text-xs md:text-sm font-mono truncate text-[#1A1A1A] dark:text-[#EDEDEC]">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-sm text-[#1A1A1A]/70 dark:text-zinc-400 hover:text-[#1A1A1A] dark:hover:text-white hover:bg-[#E2DED0] dark:hover:bg-zinc-700 transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn Link */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-sm bg-[#EFECE6]/60 dark:bg-zinc-800/50 border border-[#1A1A1A]/10 dark:border-zinc-700/60 hover:border-[#1A1A1A]/40 dark:hover:border-zinc-600 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-[#3E4E50] dark:text-[#9FB1B3] shrink-0" />
                  <span className="text-xs md:text-sm font-mono text-[#1A1A1A] dark:text-[#EDEDEC] group-hover:underline underline-offset-4 decoration-[#1A1A1A]/40 dark:decoration-zinc-500">
                    linkedin.com/in/lance-nguyen
                  </span>
                </div>
                <span className="text-xs font-mono text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] dark:group-hover:text-zinc-200 transition-colors">
                  ↗
                </span>
              </a>

              {/* Location Badge */}
              <div className="flex items-center gap-2.5 p-3 rounded-sm bg-[#EFECE6]/60 dark:bg-zinc-800/50 border border-[#1A1A1A]/10 dark:border-zinc-700/60 text-xs font-mono text-[#1A1A1A]/70 dark:text-zinc-400">
                <MapPin className="w-4 h-4 text-[#3E4E50] dark:text-[#9FB1B3] shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="p-5 md:p-6 rounded-sm border border-[#1A1A1A]/15 dark:border-zinc-800 bg-[#FDFDFB] dark:bg-[#181816] space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/50 dark:text-zinc-400 font-semibold">
            Send a Direct Note
          </h3>

          {formSent ? (
            <div className="p-6 rounded-sm bg-[#EFECE6] dark:bg-emerald-950/20 border border-[#1A1A1A]/15 dark:border-emerald-900/50 text-center space-y-2">
              <Check className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
              <div className="text-sm font-semibold uppercase tracking-tight text-[#1A1A1A] dark:text-[#EDEDEC]">
                Message Dispatched
              </div>
              <p className="text-xs text-[#1A1A1A]/70 dark:text-zinc-400">
                Your email client has been prepared with your message for {PERSONAL_INFO.email}.
              </p>
              <button
                type="button"
                onClick={() => setFormSent(false)}
                className="mt-2 text-xs font-mono uppercase tracking-wider underline text-[#1A1A1A] dark:text-zinc-300 cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSendMessage} className="space-y-3">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/60 dark:text-zinc-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Connor"
                  className="w-full px-3 py-2 text-xs md:text-sm rounded-sm bg-[#EFECE6]/60 dark:bg-zinc-800/90 border border-[#1A1A1A]/15 dark:border-zinc-700 text-[#1A1A1A] dark:text-[#EDEDEC] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] dark:focus:ring-zinc-400 font-sans"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/60 dark:text-zinc-400 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full px-3 py-2 text-xs md:text-sm rounded-sm bg-[#EFECE6]/60 dark:bg-zinc-800/90 border border-[#1A1A1A]/15 dark:border-zinc-700 text-[#1A1A1A] dark:text-[#EDEDEC] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] dark:focus:ring-zinc-400 font-sans"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/60 dark:text-zinc-400 mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write message..."
                  className="w-full px-3 py-2 text-xs md:text-sm rounded-sm bg-[#EFECE6]/60 dark:bg-zinc-800/90 border border-[#1A1A1A]/15 dark:border-zinc-700 text-[#1A1A1A] dark:text-[#EDEDEC] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] dark:focus:ring-zinc-400 font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                id="submit-contact-btn"
                className="w-full py-2.5 px-4 rounded-sm text-xs font-mono uppercase tracking-widest font-semibold bg-[#1A1A1A] dark:bg-[#EDEDEC] text-[#FDFDFB] dark:text-[#141413] hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Note</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
