export interface ArticleBlock {
  type: 'paragraph' | 'heading' | 'list-item' | 'figure-caption' | 'image';
  text?: string;
  imageSrc?: string;
  imageAlt?: string;
  caption?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  shortDesc: string;
  heroImage: string;
  featured: boolean;
  year: string;
  organization: string;
  pdfUrl?: string;
  extractedKey?: string;
  paragraphs: string[];
  images: string[];
  articleBlocks?: ArticleBlock[];
}

export type SectionTab = 'projects' | 'experience' | 'writing' | 'about' | 'contact';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  logo: string;
  badge: string;
  url?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  honors?: string;
  details: string[];
  coursework?: string[];
  clubs?: string[];
  logo: string;
  url?: string;
}

export interface PublicationItem {
  title: string;
  type: 'Paper' | 'Case Study' | 'Report' | 'Research';
  description: string;
  date: string;
  url: string;
  isExternal: boolean;
  downloadLabel?: string;
}
