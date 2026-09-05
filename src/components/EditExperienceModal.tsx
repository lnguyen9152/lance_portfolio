import React, { useState, useEffect } from 'react';
import { X, Save, Plus, Trash2, Briefcase, ChevronUp, ChevronDown } from 'lucide-react';
import { ExperienceItem } from '../types';
import { usePortfolio } from '../context/PortfolioContext';

interface EditExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditExperienceModal: React.FC<EditExperienceModalProps> = ({ isOpen, onClose }) => {
  const { experience, updateExperience } = usePortfolio();
  const [items, setItems] = useState<ExperienceItem[]>([]);

  useEffect(() => {
    if (experience) {
      setItems(JSON.parse(JSON.stringify(experience)));
    }
  }, [experience, isOpen]);

  if (!isOpen) return null;

  const handleUpdateItem = (index: number, fields: Partial<ExperienceItem>) => {
    setItems((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], ...fields };
      return next;
    });
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    setItems((prev) => {
      const next = [...prev];
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= next.length) return prev;
      const temp = next[index];
      next[index] = next[targetIndex];
      next[targetIndex] = temp;
      return next;
    });
  };

  const handleDelete = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    setItems((prev) => [
      ...prev,
      {
        company: 'New Company',
        role: 'Engineer',
        period: '2024 - Present',
        location: 'Los Angeles, CA',
        description: 'Key engineering responsibilities...',
        highlights: ['Engineered key telemetry systems and automation loops.'],
        logo: '/favicon.ico',
        badge: 'Aerospace',
      },
    ]);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateExperience(items);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-sm bg-[#FDFDFB] dark:bg-[#181816] border border-[#1A1A1A]/20 dark:border-zinc-800 text-[#1A1A1A] dark:text-[#EDEDEC] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A]/15 dark:border-zinc-800 bg-[#EFECE6]/50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <h2 className="text-base font-semibold tracking-tight uppercase font-sans">
              Edit Work Experience
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-[#1A1A1A]/60 hover:text-[#1A1A1A] dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleAdd}
              className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded bg-[#1A1A1A] text-white dark:bg-zinc-200 dark:text-zinc-900 hover:opacity-90 flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Role</span>
            </button>
          </div>

          <div className="space-y-4">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-sm border border-[#1A1A1A]/15 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-zinc-500">
                    Role #{idx + 1}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      disabled={idx === 0}
                      onClick={() => handleMove(idx, 'up')}
                      className="p-1 text-zinc-400 hover:text-black dark:hover:text-white disabled:opacity-30 cursor-pointer"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      disabled={idx === items.length - 1}
                      onClick={() => handleMove(idx, 'down')}
                      className="p-1 text-zinc-400 hover:text-black dark:hover:text-white disabled:opacity-30 cursor-pointer"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(idx)}
                      className="p-1 text-red-500 hover:text-red-700 cursor-pointer ml-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-mono uppercase text-zinc-500 font-semibold">Company</label>
                    <input
                      type="text"
                      value={item.company}
                      onChange={(e) => handleUpdateItem(idx, { company: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-zinc-500 font-semibold">Role Title</label>
                    <input
                      type="text"
                      value={item.role}
                      onChange={(e) => handleUpdateItem(idx, { role: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-zinc-500 font-semibold">Time Period</label>
                    <input
                      type="text"
                      value={item.period}
                      onChange={(e) => handleUpdateItem(idx, { period: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs font-mono rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-zinc-500 font-semibold">Location</label>
                    <input
                      type="text"
                      value={item.location}
                      onChange={(e) => handleUpdateItem(idx, { location: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-zinc-500 font-semibold">Executive Summary</label>
                  <textarea
                    rows={2}
                    value={item.description}
                    onChange={(e) => handleUpdateItem(idx, { description: e.target.value })}
                    className="w-full px-2.5 py-1.5 text-xs leading-relaxed font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-zinc-500 font-semibold">
                    Highlights / Bullets (One per line)
                  </label>
                  <textarea
                    rows={3}
                    value={(item.highlights || []).join('\n')}
                    onChange={(e) =>
                      handleUpdateItem(idx, {
                        highlights: e.target.value.split('\n').filter(Boolean),
                      })
                    }
                    className="w-full px-2.5 py-1.5 text-xs leading-relaxed font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="sticky bottom-0 pt-4 pb-2 bg-[#FDFDFB] dark:bg-[#181816] border-t border-[#1A1A1A]/10 dark:border-zinc-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm text-zinc-500 hover:text-black dark:hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-sm bg-[#1A1A1A] dark:bg-[#EDEDEC] text-white dark:text-black font-semibold flex items-center gap-2"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Experience</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
