import React, { useState, useEffect } from 'react';
import { X, Save, Plus, Trash2, User, Mail, Linkedin, MapPin } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, onClose }) => {
  const { personalInfo, updatePersonalInfo } = usePortfolio();

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [bioShort, setBioShort] = useState('');
  const [bioLong, setBioLong] = useState<string[]>([]);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (personalInfo) {
      setName(personalInfo.name || '');
      setTitle(personalInfo.title || '');
      setTagline(personalInfo.tagline || '');
      setBioShort(personalInfo.bioShort || '');
      setBioLong(personalInfo.bioLong ? [...personalInfo.bioLong] : []);
      setAvatarUrl(personalInfo.avatarUrl || '');
      setEmail(personalInfo.email || '');
      setLinkedin(personalInfo.linkedin || '');
      setLocation(personalInfo.location || '');
      setStatus(personalInfo.status || '');
    }
  }, [personalInfo, isOpen]);

  if (!isOpen) return null;

  const handleUpdateBioPara = (index: number, val: string) => {
    setBioLong((prev) => {
      const next = [...prev];
      next[index] = val;
      return next;
    });
  };

  const handleAddBioPara = () => {
    setBioLong((prev) => [...prev, '']);
  };

  const handleDeleteBioPara = (index: number) => {
    setBioLong((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updatePersonalInfo({
      ...personalInfo,
      name: name.trim(),
      title: title.trim(),
      tagline: tagline.trim(),
      bioShort: bioShort.trim(),
      bioLong: bioLong.map((p) => p.trim()).filter(Boolean),
      avatarUrl: avatarUrl.trim(),
      email: email.trim(),
      linkedin: linkedin.trim(),
      location: location.trim(),
      status: status.trim(),
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-sm bg-[#FDFDFB] dark:bg-[#181816] border border-[#1A1A1A]/20 dark:border-zinc-800 text-[#1A1A1A] dark:text-[#EDEDEC] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A]/15 dark:border-zinc-800 bg-[#EFECE6]/50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-[#1A1A1A] dark:text-white" />
            <h2 className="text-base font-semibold tracking-tight uppercase font-sans">
              Edit Bio & Personal Info
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-[#1A1A1A]/60 hover:text-[#1A1A1A] dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-xs font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 text-xs font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
              Professional Discipline / Role Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 text-xs font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
              Current Engineering Status / Focus
            </label>
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="e.g. Designing Avionics Test GSE & Control Systems"
              className="w-full px-3 py-2 text-xs font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
              Avatar Image URL
            </label>
            <div className="flex gap-3 items-center">
              <input
                type="text"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                className="flex-1 px-3 py-2 text-xs font-mono rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
              />
              {avatarUrl && (
                <img
                  src={avatarUrl}
                  alt="Avatar preview"
                  className="w-10 h-10 rounded-full object-cover border border-[#1A1A1A]/20 dark:border-zinc-700 shrink-0"
                />
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-xs font-mono rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
                LinkedIn Profile URL
              </label>
              <input
                type="text"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                className="w-full px-3 py-2 text-xs font-mono rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
              Tagline (Hero Statement)
            </label>
            <input
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              className="w-full px-3 py-2 text-xs font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
              Bio Summary (Short)
            </label>
            <textarea
              rows={2}
              value={bioShort}
              onChange={(e) => setBioShort(e.target.value)}
              className="w-full px-3 py-2 text-xs leading-relaxed font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
            />
          </div>

          {/* Long Bio Paragraphs */}
          <div className="space-y-2 pt-2 border-t border-[#1A1A1A]/10 dark:border-zinc-800">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
                Detailed Bio Paragraphs (About View)
              </label>
              <button
                type="button"
                onClick={handleAddBioPara}
                className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#EFECE6] dark:bg-zinc-800 hover:bg-[#E2DED0] dark:hover:bg-zinc-700 flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3 h-3" /> Add Paragraph
              </button>
            </div>

            <div className="space-y-3">
              {bioLong.map((para, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <textarea
                    rows={3}
                    value={para}
                    onChange={(e) => handleUpdateBioPara(idx, e.target.value)}
                    className="flex-1 px-3 py-1.5 text-xs leading-relaxed font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteBioPara(idx)}
                    className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded cursor-pointer shrink-0"
                    title="Delete paragraph"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="sticky bottom-0 pt-4 pb-2 bg-[#FDFDFB] dark:bg-[#181816] border-t border-[#1A1A1A]/10 dark:border-zinc-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm text-[#1A1A1A]/70 dark:text-zinc-400 hover:text-[#1A1A1A] dark:hover:text-white hover:bg-[#EFECE6] dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-sm bg-[#1A1A1A] dark:bg-[#EDEDEC] text-[#FDFDFB] dark:text-[#141413] font-semibold hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-2"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Profile Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
