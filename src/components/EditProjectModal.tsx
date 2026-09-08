import React, { useState, useEffect } from 'react';
import {
  X,
  Save,
  Plus,
  Trash2,
  ChevronUp,
  ChevronDown,
  Image as ImageIcon,
  Heading as HeadingIcon,
  AlignLeft,
  Code as CodeIcon,
  MessageSquare,
  List as ListIcon,
  AlertTriangle,
  Check,
  ExternalLink,
  Upload,
} from 'lucide-react';
import { Project, ArticleBlock } from '../types';
import { usePortfolio } from '../context/PortfolioContext';

interface EditProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onSaved?: (updated: Project) => void;
}

export const EditProjectModal: React.FC<EditProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onSaved,
}) => {
  const { updateProject, createProject, deleteProject } = usePortfolio();

  const [activeTab, setActiveTab] = useState<'metadata' | 'article'>('metadata');

  // Metadata form states
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('');
  const [organization, setOrganization] = useState('');
  const [year, setYear] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [heroImage, setHeroImage] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [featured, setFeatured] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');

  // Article blocks state
  const [blocks, setBlocks] = useState<ArticleBlock[]>([]);
  const [confirmDelete, setConfirmDelete] = useState(false);

  // Initialize or reset form when project changes
  useEffect(() => {
    if (project) {
      setTitle(project.title || '');
      setSlug(project.slug || project.id || '');
      setCategory(project.category || '');
      setOrganization(project.organization || '');
      setYear(project.year || new Date().getFullYear().toString());
      setShortDesc(project.shortDesc || '');
      setHeroImage(project.heroImage || '');
      setTagsInput((project.tags || []).join(', '));
      setFeatured(!!project.featured);
      setPdfUrl(project.pdfUrl || '');
      // If project has githubUrl or liveUrl
      setGithubUrl((project as any).githubUrl || '');
      setLiveUrl((project as any).liveUrl || '');

      // Initialize blocks
      if (project.articleBlocks && project.articleBlocks.length > 0) {
        setBlocks(JSON.parse(JSON.stringify(project.articleBlocks)));
      } else if (project.paragraphs && project.paragraphs.length > 0) {
        setBlocks(
          project.paragraphs.map((text) => ({
            type: 'paragraph',
            text,
          }))
        );
      } else {
        setBlocks([{ type: 'paragraph', text: '' }]);
      }
    } else {
      // New project defaults
      setTitle('');
      setSlug('');
      setCategory('Aerospace & Embedded Systems');
      setOrganization('Personal Project');
      setYear(new Date().getFullYear().toString());
      setShortDesc('');
      setHeroImage('');
      setTagsInput('');
      setFeatured(false);
      setPdfUrl('');
      setGithubUrl('');
      setLiveUrl('');
      setBlocks([
        { type: 'heading', text: 'Project Overview' },
        { type: 'paragraph', text: 'Detailed description of the engineering project...' },
      ]);
    }
    setActiveTab('metadata');
    setConfirmDelete(false);
  }, [project, isOpen]);

  if (!isOpen) return null;

  // Block manipulation helpers
  const handleUpdateBlock = (index: number, updatedFields: Partial<ArticleBlock>) => {
    setBlocks((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], ...updatedFields };
      return next;
    });
  };

  const handleMoveBlock = (index: number, direction: 'up' | 'down') => {
    setBlocks((prev) => {
      const next = [...prev];
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= next.length) return prev;
      const temp = next[index];
      next[index] = next[targetIndex];
      next[targetIndex] = temp;
      return next;
    });
  };

  const handleDeleteBlock = (index: number) => {
    setBlocks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddBlock = (type: ArticleBlock['type']) => {
    const newBlock: ArticleBlock = {
      type,
      text: type === 'heading' ? 'New Section' : type === 'paragraph' ? '' : undefined,
      imageSrc: type === 'image' ? '' : undefined,
      caption: type === 'image' ? '' : undefined,
    };
    setBlocks((prev) => [...prev, newBlock]);
  };

  // Submit & Save
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanTags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const generatedSlug = slug.trim() || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const projectId = project ? project.id : generatedSlug || `project-${Date.now()}`;

    // Extract images used in blocks
    const blockImages = blocks
      .filter((b) => b.type === 'image' && b.imageSrc)
      .map((b) => b.imageSrc as string);
    const combinedImages = Array.from(new Set([heroImage, ...blockImages].filter(Boolean)));

    const updatedProject: Project = {
      id: projectId,
      slug: generatedSlug,
      title: title.trim() || 'Untitled Project',
      category: category.trim() || 'Engineering',
      organization: organization.trim() || 'Lance Nguyen',
      year: year.trim() || new Date().getFullYear().toString(),
      shortDesc: shortDesc.trim(),
      heroImage: heroImage.trim(),
      tags: cleanTags,
      featured,
      pdfUrl: pdfUrl.trim() || undefined,
      paragraphs: blocks.filter((b) => b.type === 'paragraph' && b.text).map((b) => b.text as string),
      images: combinedImages,
      articleBlocks: blocks,
      ...(githubUrl.trim() ? { githubUrl: githubUrl.trim() } : {}),
      ...(liveUrl.trim() ? { liveUrl: liveUrl.trim() } : {}),
    } as Project;

    if (project) {
      updateProject(updatedProject);
    } else {
      createProject(updatedProject);
    }

    if (onSaved) {
      onSaved(updatedProject);
    }
    onClose();
  };

  const handleDeleteProject = () => {
    if (!project) return;
    deleteProject(project.id);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-sm bg-[#FDFDFB] dark:bg-[#181816] border border-[#1A1A1A]/20 dark:border-zinc-800 text-[#1A1A1A] dark:text-[#EDEDEC] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A]/15 dark:border-zinc-800 bg-[#EFECE6]/50 dark:bg-zinc-900/50">
          <div>
            <h2 className="text-base font-semibold tracking-tight uppercase font-sans">
              {project ? `Edit: ${project.title}` : 'Create New Project'}
            </h2>
            <p className="text-[11px] font-mono text-[#1A1A1A]/60 dark:text-zinc-400">
              Modify article content, technical specifications, and visual assets
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-[#1A1A1A]/60 hover:text-[#1A1A1A] dark:text-zinc-400 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close editor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#1A1A1A]/10 dark:border-zinc-800 px-6 bg-[#FDFDFB] dark:bg-[#181816] text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab('metadata')}
            className={`py-3 px-4 font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeTab === 'metadata'
                ? 'border-[#1A1A1A] dark:border-white text-[#1A1A1A] dark:text-white'
                : 'border-transparent text-[#1A1A1A]/50 dark:text-zinc-400 hover:text-[#1A1A1A] dark:hover:text-zinc-200'
            }`}
          >
            1. Overview & Metadata
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('article')}
            className={`py-3 px-4 font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'article'
                ? 'border-[#1A1A1A] dark:border-white text-[#1A1A1A] dark:text-white'
                : 'border-transparent text-[#1A1A1A]/50 dark:text-zinc-400 hover:text-[#1A1A1A] dark:hover:text-zinc-200'
            }`}
          >
            <span>2. Article Content Blocks</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-[#1A1A1A]/10 dark:bg-zinc-800">
              {blocks.length}
            </span>
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: METADATA */}
          {activeTab === 'metadata' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Nav-Aid Replacement"
                    className="w-full px-3 py-2 text-xs font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-1 focus:ring-[#1A1A1A] dark:focus:ring-zinc-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
                    Category *
                  </label>
                  <input
                    type="text"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="e.g. Aerospace & Embedded Systems"
                    className="w-full px-3 py-2 text-xs font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-1 focus:ring-[#1A1A1A] dark:focus:ring-zinc-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
                    Organization / Client
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. BP plc, George Mason University"
                    className="w-full px-3 py-2 text-xs font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-1 focus:ring-[#1A1A1A] dark:focus:ring-zinc-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
                    Year
                  </label>
                  <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="e.g. 2023"
                    className="w-full px-3 py-2 text-xs font-mono rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-1 focus:ring-[#1A1A1A] dark:focus:ring-zinc-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
                  Short Summary (Card Abstract) *
                </label>
                <textarea
                  rows={2}
                  required
                  value={shortDesc}
                  onChange={(e) => setShortDesc(e.target.value)}
                  placeholder="One or two sentences highlighting the core engineering deliverable..."
                  className="w-full px-3 py-2 text-xs font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-1 focus:ring-[#1A1A1A] dark:focus:ring-zinc-400 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold flex items-center justify-between">
                  <span>Hero Image (Cover Photo)</span>
                  <span className="text-[10px] text-[#1A1A1A]/50 dark:text-zinc-500 font-normal">Supports /path, URL, or upload from device</span>
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={heroImage}
                    onChange={(e) => setHeroImage(e.target.value)}
                    placeholder="/my_image.png or https://..."
                    className="flex-1 px-3 py-2 text-xs font-mono rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-1 focus:ring-[#1A1A1A] dark:focus:ring-zinc-400 focus:outline-none"
                  />
                  <label className="px-3 py-2 text-xs font-mono rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-[#EFECE6] dark:bg-zinc-800 hover:bg-[#1A1A1A] hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer flex items-center gap-1.5 shrink-0">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (ev) => {
                            if (ev.target?.result) {
                              setHeroImage(ev.target.result as string);
                            }
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                  {heroImage && (
                    <div className="w-12 h-10 rounded-sm overflow-hidden border border-[#1A1A1A]/10 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 shrink-0">
                      <img src={heroImage} alt="Hero preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
                  Technical Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="e.g. Rockwell ControlLogix, P&ID, Modbus, Python"
                  className="w-full px-3 py-2 text-xs font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-1 focus:ring-[#1A1A1A] dark:focus:ring-zinc-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
                    PDF Document URL
                  </label>
                  <input
                    type="text"
                    value={pdfUrl}
                    onChange={(e) => setPdfUrl(e.target.value)}
                    placeholder="/my-report.pdf"
                    className="w-full px-3 py-2 text-xs font-mono rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-1 focus:ring-[#1A1A1A] dark:focus:ring-zinc-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
                    GitHub Repo URL
                  </label>
                  <input
                    type="text"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/..."
                    className="w-full px-3 py-2 text-xs font-mono rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-1 focus:ring-[#1A1A1A] dark:focus:ring-zinc-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 font-semibold">
                    Live Demo / Video URL
                  </label>
                  <input
                    type="text"
                    value={liveUrl}
                    onChange={(e) => setLiveUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3 py-2 text-xs font-mono rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-1 focus:ring-[#1A1A1A] dark:focus:ring-zinc-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="featured-checkbox"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="w-4 h-4 rounded text-black dark:text-white"
                />
                <label
                  htmlFor="featured-checkbox"
                  className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] dark:text-[#EDEDEC] cursor-pointer"
                >
                  Featured Project (highlighted on home page)
                </label>
              </div>
            </div>
          )}

          {/* TAB 2: ARTICLE CONTENT BLOCKS */}
          {activeTab === 'article' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-2 pb-2 border-b border-[#1A1A1A]/10 dark:border-zinc-800">
                <p className="text-xs text-[#1A1A1A]/70 dark:text-zinc-400 font-serif italic">
                  Organize and edit headings, paragraphs, technical diagrams, figures, and code snippets.
                </p>
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="text-[10px] font-mono text-[#1A1A1A]/50 dark:text-zinc-400 mr-1">Add:</span>
                  <button
                    type="button"
                    onClick={() => handleAddBlock('paragraph')}
                    className="px-2 py-1 rounded text-[10px] font-mono bg-[#EFECE6] dark:bg-zinc-800 hover:bg-[#E2DED0] dark:hover:bg-zinc-700 text-[#1A1A1A] dark:text-zinc-200 border border-[#1A1A1A]/10 dark:border-zinc-700 cursor-pointer flex items-center gap-1"
                  >
                    <AlignLeft className="w-3 h-3" /> Paragraph
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAddBlock('heading')}
                    className="px-2 py-1 rounded text-[10px] font-mono bg-[#EFECE6] dark:bg-zinc-800 hover:bg-[#E2DED0] dark:hover:bg-zinc-700 text-[#1A1A1A] dark:text-zinc-200 border border-[#1A1A1A]/10 dark:border-zinc-700 cursor-pointer flex items-center gap-1"
                  >
                    <HeadingIcon className="w-3 h-3" /> Heading
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAddBlock('image')}
                    className="px-2 py-1 rounded text-[10px] font-mono bg-[#EFECE6] dark:bg-zinc-800 hover:bg-[#E2DED0] dark:hover:bg-zinc-700 text-[#1A1A1A] dark:text-zinc-200 border border-[#1A1A1A]/10 dark:border-zinc-700 cursor-pointer flex items-center gap-1"
                  >
                    <ImageIcon className="w-3 h-3" /> Image
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAddBlock('list-item')}
                    className="px-2 py-1 rounded text-[10px] font-mono bg-[#EFECE6] dark:bg-zinc-800 hover:bg-[#E2DED0] dark:hover:bg-zinc-700 text-[#1A1A1A] dark:text-zinc-200 border border-[#1A1A1A]/10 dark:border-zinc-700 cursor-pointer flex items-center gap-1"
                  >
                    <ListIcon className="w-3 h-3" /> List Item
                  </button>
                </div>
              </div>

              {/* Block List */}
              <div className="space-y-4">
                {blocks.map((block, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-sm border border-[#1A1A1A]/15 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 space-y-2.5 relative group hover:border-[#1A1A1A]/40 dark:hover:border-zinc-700 transition-colors"
                  >
                    {/* Block Toolbar */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#1A1A1A]/60 dark:text-zinc-400">
                      <div className="flex items-center gap-1.5 font-semibold uppercase tracking-wider">
                        <span className="w-4 h-4 rounded-full bg-[#1A1A1A]/10 dark:bg-zinc-800 flex items-center justify-center text-[9px]">
                          {idx + 1}
                        </span>
                        <span>{block.type}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          disabled={idx === 0}
                          onClick={() => handleMoveBlock(idx, 'up')}
                          className="p-1 rounded hover:bg-[#EFECE6] dark:hover:bg-zinc-800 disabled:opacity-30 cursor-pointer"
                          title="Move block up"
                        >
                          <ChevronUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          disabled={idx === blocks.length - 1}
                          onClick={() => handleMoveBlock(idx, 'down')}
                          className="p-1 rounded hover:bg-[#EFECE6] dark:hover:bg-zinc-800 disabled:opacity-30 cursor-pointer"
                          title="Move block down"
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteBlock(idx)}
                          className="p-1 rounded text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 cursor-pointer ml-1"
                          title="Delete block"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Block Input Content */}
                    {block.type === 'heading' && (
                      <input
                        type="text"
                        value={block.text || ''}
                        onChange={(e) => handleUpdateBlock(idx, { text: e.target.value })}
                        placeholder="Section Heading Title..."
                        className="w-full px-3 py-1.5 text-xs font-semibold uppercase tracking-tight rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
                      />
                    )}

                    {block.type === 'paragraph' && (
                      <textarea
                        rows={3}
                        value={block.text || ''}
                        onChange={(e) => handleUpdateBlock(idx, { text: e.target.value })}
                        placeholder="Paragraph explanation..."
                        className="w-full px-3 py-1.5 text-xs leading-relaxed font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
                      />
                    )}

                    {block.type === 'list-item' && (
                      <input
                        type="text"
                        value={block.text || ''}
                        onChange={(e) => handleUpdateBlock(idx, { text: e.target.value })}
                        placeholder="List item specification / metric..."
                        className="w-full px-3 py-1.5 text-xs font-sans rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
                      />
                    )}

                    {block.type === 'image' && (
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={block.imageSrc || ''}
                            onChange={(e) => handleUpdateBlock(idx, { imageSrc: e.target.value })}
                            placeholder="Image URL (e.g. /my_figure.jpg or https://...)"
                            className="flex-1 px-3 py-1.5 text-xs font-mono rounded-sm border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
                          />
                          {block.imageSrc && (
                            <div className="w-12 h-8 rounded-sm overflow-hidden border border-[#1A1A1A]/15 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 shrink-0">
                              <img src={block.imageSrc} alt="Preview" className="w-full h-full object-cover" />
                            </div>
                          )}
                        </div>
                        <input
                          type="text"
                          value={block.caption || ''}
                          onChange={(e) => handleUpdateBlock(idx, { caption: e.target.value })}
                          placeholder="Figure caption (e.g. Figure 1. System Schematics and P&ID Loop)"
                          className="w-full px-3 py-1 text-xs font-serif italic rounded-sm border border-[#1A1A1A]/15 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Delete Project Warning */}
          {project && (
            <div className="pt-4 border-t border-[#1A1A1A]/10 dark:border-zinc-800">
              {confirmDelete ? (
                <div className="p-3 rounded-sm bg-red-950/10 dark:bg-red-950/40 border border-red-500/30 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-mono">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Permanently delete this project from portfolio?</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setConfirmDelete(false)}
                      className="px-2.5 py-1 text-xs font-mono rounded-sm hover:bg-black/5 dark:hover:bg-white/5"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleDeleteProject}
                      className="px-3 py-1 text-xs font-mono rounded-sm bg-red-600 hover:bg-red-700 text-white font-semibold"
                    >
                      Confirm Delete
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfirmDelete(true)}
                  className="text-xs font-mono text-red-500 hover:text-red-700 dark:hover:text-red-400 flex items-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete Project</span>
                </button>
              )}
            </div>
          )}

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
              <span>Save Project Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
