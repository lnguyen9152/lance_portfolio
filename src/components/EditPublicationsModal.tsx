import React, { useState, useEffect } from 'react';
import { X, Save, Plus, Trash2, BookOpen, ChevronUp, ChevronDown } from 'lucide-react';
import { PublicationItem } from '../types';
import { usePortfolio } from '../context/PortfolioContext';

interface EditPublicationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditPublicationsModal: React.FC<EditPublicationsModalProps> = ({ isOpen, onClose }) => {
  const { publications, updatePublications } = usePortfolio();
  const [items, setItems] = useState<PublicationItem[]>([]);

  useEffect(() => {
    if (publications) {
      setItems(JSON.parse(JSON.stringify(publications)));
    }
  }, [publications, isOpen]);

  if (!isOpen) return null;

  const handleUpdateItem = (index: number, fields: Partial<PublicationItem>) => {
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
        title: 'New Technical Publication',
        type: 'Report',
        description: 'Abstract and technical scope summary...',
        date: '2024',
        url: '/report.pdf',
        isExternal: false,
      },
    ]);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updatePublications(items);
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
            <BookOpen className="w-4 h-4" />
            <h2 className="text-base font-semibold tracking-tight uppercase font-sans">
              Edit Publications & Writing
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
              <span>Add Publication</span>
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
                    Publication #{idx + 1}
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

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-mono uppercase text-zinc-500 font-semibold">Title</label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleUpdateItem(idx, { title: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-zinc-500 font-semibold">Type</label>
                    <select
                      value={item.type}
                      onChange={(e) => handleUpdateItem(idx, { type: e.target.value as any })}
                      className="w-full px-2.5 py-1.5 text-xs font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                    >
                      <option value="Report">Report</option>
                      <option value="Case Study">Case Study</option>
                      <option value="Paper">Paper</option>
                      <option value="Research">Research</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-mono uppercase text-zinc-500 font-semibold">Date</label>
                    <input
                      type="text"
                      value={item.date}
                      onChange={(e) => handleUpdateItem(idx, { date: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs font-mono rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-zinc-500 font-semibold">URL / File Path</label>
                    <input
                      type="text"
                      value={item.url}
                      onChange={(e) => handleUpdateItem(idx, { url: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs font-mono rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-zinc-500 font-semibold">Summary</label>
                  <textarea
                    rows={2}
                    value={item.description}
                    onChange={(e) => handleUpdateItem(idx, { description: e.target.value })}
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
              <span>Save Publications</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
