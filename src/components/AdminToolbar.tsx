import React, { useState, useRef } from 'react';
import {
  ShieldCheck,
  Plus,
  Download,
  Upload,
  RotateCcw,
  LogOut,
  ChevronUp,
  ChevronDown,
  User,
  Check,
  AlertTriangle,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface AdminToolbarProps {
  onNewProject: () => void;
  onEditProfile: () => void;
}

export const AdminToolbar: React.FC<AdminToolbarProps> = ({ onNewProject, onEditProfile }) => {
  const { isAdmin, logout, resetToDefaults, exportBackup, importBackup } = usePortfolio();
  const [isExpanded, setIsExpanded] = useState(true);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isAdmin) return null;

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const success = importBackup(content);
        if (success) {
          triggerNotification('Data backup imported successfully!');
        } else {
          triggerNotification('Failed to import backup: Invalid format.');
        }
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleReset = () => {
    resetToDefaults();
    setShowResetConfirm(false);
    triggerNotification('All content reset to original defaults.');
  };

  return (
    <aside
      aria-label="Admin Edit Toolbar"
      className="fixed bottom-4 right-4 z-40 max-w-sm rounded-sm bg-[#1A1A1A] dark:bg-zinc-900 text-white shadow-2xl border border-white/20 dark:border-zinc-700 text-xs font-mono transition-all duration-200"
    >
      {/* Top Banner Header */}
      <div className="flex items-center justify-between gap-3 px-3.5 py-2.5 bg-zinc-800/80 dark:bg-zinc-950/80 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium text-[11px] tracking-wider uppercase flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Edit Mode Active</span>
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={isExpanded ? 'Collapse toolbar' : 'Expand toolbar'}
          >
            {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={logout}
            className="p-1 rounded text-red-400 hover:text-red-300 hover:bg-red-950/40 transition-colors cursor-pointer"
            title="Lock Edit Mode & Logout"
            aria-label="Lock Edit Mode & Logout"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="px-3.5 py-1.5 bg-emerald-950/90 text-emerald-300 border-b border-emerald-800/50 text-[10px] flex items-center gap-1.5 animate-in fade-in duration-150">
          <Check className="w-3 h-3 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Expanded Controls */}
      {isExpanded && (
        <div className="p-3 space-y-2">
          <p className="text-[10px] text-zinc-400">
            Click any <span className="text-white font-semibold">Edit</span> button across projects, articles, or bio to modify content.
          </p>

          <div className="grid grid-cols-2 gap-1.5 pt-1">
            <button
              type="button"
              onClick={onNewProject}
              className="px-2.5 py-1.5 rounded-sm bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Plus className="w-3 h-3 text-emerald-400" />
              <span>New Project</span>
            </button>

            <button
              type="button"
              onClick={onEditProfile}
              className="px-2.5 py-1.5 rounded-sm bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
            >
              <User className="w-3 h-3 text-cyan-400" />
              <span>Edit Bio</span>
            </button>

            <button
              type="button"
              onClick={exportBackup}
              className="px-2.5 py-1.5 rounded-sm bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
              title="Download full JSON backup of all edits"
            >
              <Download className="w-3 h-3 text-amber-400" />
              <span>Export JSON</span>
            </button>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-2.5 py-1.5 rounded-sm bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
              title="Import JSON backup file"
            >
              <Upload className="w-3 h-3 text-purple-400" />
              <span>Import JSON</span>
            </button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleImportFile}
            className="hidden"
          />

          {/* Reset Confirmation or Trigger */}
          <div className="pt-1 border-t border-white/10">
            {showResetConfirm ? (
              <div className="p-2 rounded bg-red-950/60 border border-red-800/80 space-y-1.5">
                <div className="flex items-center gap-1 text-[10px] text-red-300 font-semibold">
                  <AlertTriangle className="w-3 h-3 text-red-400" />
                  <span>Revert all changes to defaults?</span>
                </div>
                <div className="flex items-center justify-end gap-1.5 pt-0.5">
                  <button
                    type="button"
                    onClick={() => setShowResetConfirm(false)}
                    className="px-2 py-0.5 rounded text-[9px] text-zinc-300 hover:bg-white/10"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-2 py-0.5 rounded text-[9px] bg-red-600 hover:bg-red-500 text-white font-medium"
                  >
                    Yes, Reset
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-0.5">
                <button
                  type="button"
                  onClick={() => setShowResetConfirm(true)}
                  className="hover:text-red-400 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                  <span>Reset Defaults</span>
                </button>
                <button
                  type="button"
                  onClick={logout}
                  className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <LogOut className="w-2.5 h-2.5" />
                  <span>Exit Mode</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </aside>
  );
};
