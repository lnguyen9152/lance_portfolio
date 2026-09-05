import React, { useState, useEffect, useRef } from 'react';
import { Lock, Key, X, CheckCircle2, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isOpen, onClose }) => {
  const { login } = usePortfolio();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setPassword('');
      setError(null);
      setSuccess(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const isAuthorized = login(password);
    if (isAuthorized) {
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 700);
    } else {
      setError('Incorrect passphrase. Verification failed.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-sm bg-[#FDFDFB] dark:bg-[#181816] border border-[#1A1A1A]/20 dark:border-zinc-800 text-[#1A1A1A] dark:text-[#EDEDEC] p-6 shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-sm text-[#1A1A1A]/40 hover:text-[#1A1A1A] dark:text-zinc-500 dark:hover:text-zinc-200 hover:bg-[#EFECE6] dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-[#1A1A1A]/10 dark:border-zinc-800 pb-3">
          <div className="w-8 h-8 rounded-sm bg-[#EFECE6] dark:bg-zinc-800 flex items-center justify-center text-[#1A1A1A] dark:text-[#EDEDEC] border border-[#1A1A1A]/10 dark:border-zinc-700">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-tight uppercase font-sans">
              Administrative Access
            </h3>
            <p className="text-[11px] font-mono text-[#1A1A1A]/60 dark:text-zinc-400">
              Site modification authorization
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label
              htmlFor="admin-passphrase-input"
              className="text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-medium"
            >
              Master Passphrase
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                id="admin-passphrase-input"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="Enter passphrase..."
                className="w-full pl-3 pr-10 py-2 text-xs font-mono rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-[#1A1A1A] dark:text-[#EDEDEC] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] dark:focus:ring-zinc-400 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer p-0.5"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-1.5 text-red-600 dark:text-red-400 text-xs font-mono animate-in fade-in duration-150">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-mono animate-in fade-in duration-150">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Passphrase accepted. Unlocking edit mode...</span>
            </div>
          )}

          <div className="flex items-center justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm text-[#1A1A1A]/70 dark:text-zinc-400 hover:text-[#1A1A1A] dark:hover:text-white hover:bg-[#EFECE6] dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!password || success}
              className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm bg-[#1A1A1A] dark:bg-[#EDEDEC] text-[#FDFDFB] dark:text-[#141413] font-medium hover:opacity-90 disabled:opacity-40 transition-opacity cursor-pointer flex items-center gap-1.5"
            >
              <Key className="w-3 h-3" />
              <span>Authenticate</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
