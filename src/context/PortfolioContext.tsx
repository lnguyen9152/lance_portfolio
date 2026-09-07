import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, ExperienceItem, EducationItem, PublicationItem } from '../types';
import {
  PROJECTS as DEFAULT_PROJECTS,
  PERSONAL_INFO as DEFAULT_PERSONAL_INFO,
  WORK_EXPERIENCE as DEFAULT_EXPERIENCE,
  EDUCATION as DEFAULT_EDUCATION,
  PUBLICATIONS as DEFAULT_PUBLICATIONS,
  RESUME_SKILLS as DEFAULT_RESUME_SKILLS,
} from '../data/portfolioData';
import { verifyPassphrase } from '../utils/authCrypto';

export type PersonalInfoType = typeof DEFAULT_PERSONAL_INFO;
export type ResumeSkillsType = typeof DEFAULT_RESUME_SKILLS;

interface PortfolioContextType {
  isAdmin: boolean;
  login: (passphrase: string) => Promise<boolean>;
  logout: () => void;

  projects: Project[];
  personalInfo: PersonalInfoType;
  experience: ExperienceItem[];
  education: EducationItem[];
  publications: PublicationItem[];

  updateProject: (updated: Project) => void;
  createProject: (newProject: Project) => void;
  deleteProject: (projectId: string) => void;

  updatePersonalInfo: (info: PersonalInfoType) => void;
  updateExperience: (items: ExperienceItem[]) => void;
  updateEducation: (items: EducationItem[]) => void;
  updatePublications: (items: PublicationItem[]) => void;

  resetToDefaults: () => void;
  exportBackup: () => void;
  importBackup: (jsonContent: string) => boolean;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const STORAGE_KEYS = {
  AUTH: 'lance_portfolio_admin_auth',
  PROJECTS: 'lance_portfolio_projects',
  PERSONAL_INFO: 'lance_portfolio_personal_info',
  EXPERIENCE: 'lance_portfolio_experience',
  EDUCATION: 'lance_portfolio_education',
  PUBLICATIONS: 'lance_portfolio_publications',
};

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Admin Authentication state
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
    }
    return false;
  });

  // Projects state
  const [projects, setProjects] = useState<Project[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            // Update any existing default project with current code definitions if not locally edited
            const defaultMap = new Map(DEFAULT_PROJECTS.map((p) => [p.id, p]));
            const merged = parsed.map((p: Project) => {
              if (p.id === 'relativity-tlc-structural-test-stand' && defaultMap.has(p.id)) {
                return defaultMap.get(p.id)!;
              }
              return p;
            });
            const parsedIds = new Set(merged.map((p: Project) => p.id));
            const newDefaults = DEFAULT_PROJECTS.filter((p) => !parsedIds.has(p.id));
            const finalProjects = [...newDefaults, ...merged];
            localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(finalProjects));
            return finalProjects;
          }
        }
      } catch (e) {
        console.error('Failed to parse saved projects:', e);
      }
    }
    return DEFAULT_PROJECTS;
  });

  // Personal Info state
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoType>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEYS.PERSONAL_INFO);
        if (saved) {
          const parsed = JSON.parse(saved);
          parsed.title = DEFAULT_PERSONAL_INFO.title;
          if (parsed.tagline?.includes('Former Instrumentation, Controls')) {
            parsed.tagline = 'Simple systems designed to solve complex challenges.';
          }
          if (parsed.bioShort?.includes('working in the aerospace industry on rocket avionics')) {
            parsed.bioShort = 'Now based in Los Angeles, CA. I work in the aerospace industry as an Avionics Test Ground Support Equipment (GSE) Engineer II at Relativity Space.';
            if (Array.isArray(parsed.bioLong) && parsed.bioLong.length >= 2) {
              parsed.bioLong[0] = 'Now based in Los Angeles, CA. I work in the aerospace industry as an Avionics Test Ground Support Equipment (GSE) Engineer II at Relativity Space.';
              parsed.bioLong[1] = 'Previously, I engineered critical instrumentation, alarm optimization, and PLC/HMI control systems as an Instrumentation, Controls, and Electrical Engineer at British Petroleum. I hold a B.S. in Electrical Engineering from George Mason University.';
            }
          }
          if (parsed.avatarUrl === '/lance_profile_photo.jpg') {
            parsed.avatarUrl = DEFAULT_PERSONAL_INFO.avatarUrl;
          }
          localStorage.setItem(STORAGE_KEYS.PERSONAL_INFO, JSON.stringify(parsed));
          return parsed;
        }
      } catch (e) {
        console.error('Failed to parse saved personal info:', e);
      }
    }
    return DEFAULT_PERSONAL_INFO;
  });

  // Experience state
  const [experience, setExperience] = useState<ExperienceItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEYS.EXPERIENCE);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const updated = parsed.map((item: ExperienceItem) => {
              if (item.company?.includes('Relativity Space') && item.role?.includes('Avionics Test GSE Engineer II')) {
                const highlights = Array.isArray(item.highlights) ? [...item.highlights] : [];
                if (highlights.length > 0) {
                  highlights[0] = "Lead engineer for the design, integration, and ongoing development of high-reliability ground support systems, ensuring mission readiness and supporting Terran R’s integration, test, and launch phases.";
                }
                return { ...item, highlights };
              }
              if (item.company?.includes('George Mason University') && item.logo?.includes('cbbf386a3d934bbbb9c57d81966a3d82')) {
                return { ...item, logo: '/gmu_logo.jpg' };
              }
              if (item.company?.includes('DMV-BMW') && item.logo?.includes('9762744883f34551a0215b497b76a0d0')) {
                return { ...item, logo: '/dmv_bmw_logo.png' };
              }
              if (item.company?.toLowerCase().includes('vrealm')) {
                return { ...item, logo: '/vrealm_logo.svg' };
              }
              return item;
            });
            localStorage.setItem(STORAGE_KEYS.EXPERIENCE, JSON.stringify(updated));
            return updated;
          }
        }
      } catch (e) {
        console.error('Failed to parse saved experience:', e);
      }
    }
    return DEFAULT_EXPERIENCE;
  });

  // Education state
  const [education, setEducation] = useState<EducationItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEYS.EDUCATION);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) {
        console.error('Failed to parse saved education:', e);
      }
    }
    return DEFAULT_EDUCATION;
  });

  // Publications state
  const [publications, setPublications] = useState<PublicationItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEYS.PUBLICATIONS);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) {
        console.error('Failed to parse saved publications:', e);
      }
    }
    return DEFAULT_PUBLICATIONS;
  });

  // Persist admin auth
  useEffect(() => {
    if (isAdmin) {
      localStorage.setItem(STORAGE_KEYS.AUTH, 'true');
    } else {
      localStorage.removeItem(STORAGE_KEYS.AUTH);
    }
  }, [isAdmin]);

  // Synchronize Relativity structural test stand project with code definitions
  useEffect(() => {
    setProjects((prev) => {
      const target = DEFAULT_PROJECTS.find((p) => p.id === 'relativity-tlc-structural-test-stand');
      if (!target) return prev;
      const current = prev.find((p) => p.id === target.id);
      if (
        !current ||
        current.heroImage !== target.heroImage ||
        JSON.stringify(current.images) !== JSON.stringify(target.images) ||
        JSON.stringify(current.articleBlocks) !== JSON.stringify(target.articleBlocks)
      ) {
        const next = prev.map((p) => (p.id === target.id ? { ...p, ...target } : p));
        if (!prev.some((p) => p.id === target.id)) {
          next.unshift(target);
        }
        localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(next));
        return next;
      }
      return prev;
    });
  }, []);

  // Synchronize projects with code definition updates
  useEffect(() => {
    setProjects((prev) => {
      let changed = false;
      let next = [...prev];

      // Ensure all default projects exist
      for (const defProj of DEFAULT_PROJECTS) {
        const existingIndex = next.findIndex((p) => p.id === defProj.id);
        if (existingIndex === -1) {
          next = [defProj, ...next];
          changed = true;
        } else {
          // If code definitions have updated articleBlocks or details, keep code in sync
          const existing = next[existingIndex];
          if (
            defProj.id === 'relativity-vehicle-support-racks' ||
            defProj.id === 'relativity-tlc-structural-test-stand'
          ) {
            if (
              existing.heroImage !== defProj.heroImage ||
              existing.title !== defProj.title ||
              JSON.stringify(existing.articleBlocks) !== JSON.stringify(defProj.articleBlocks) ||
              JSON.stringify(existing.images) !== JSON.stringify(defProj.images)
            ) {
              next[existingIndex] = { ...existing, ...defProj };
              changed = true;
            }
          }
        }
      }

      if (changed) {
        localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(next));
        return next;
      }
      return prev;
    });
  }, []);

  // Synchronize personalInfo with code definition updates
  useEffect(() => {
    setPersonalInfo((prev) => {
      if (prev.title !== DEFAULT_PERSONAL_INFO.title) {
        const next = { ...prev, title: DEFAULT_PERSONAL_INFO.title };
        localStorage.setItem(STORAGE_KEYS.PERSONAL_INFO, JSON.stringify(next));
        return next;
      }
      return prev;
    });
  }, []);

  // Cryptographic login handler using salted SHA-256
  const login = async (passphrase: string): Promise<boolean> => {
    const isAuthorized = await verifyPassphrase(passphrase);
    if (isAuthorized) {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  // Logout handler
  const logout = () => {
    setIsAdmin(false);
  };

  // Update a single project
  const updateProject = (updated: Project) => {
    setProjects((prev) => {
      const next = prev.map((p) => (p.id === updated.id ? updated : p));
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(next));
      return next;
    });
  };

  // Create a new project
  const createProject = (newProject: Project) => {
    setProjects((prev) => {
      const next = [newProject, ...prev];
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(next));
      return next;
    });
  };

  // Delete a project
  const deleteProject = (projectId: string) => {
    setProjects((prev) => {
      const next = prev.filter((p) => p.id !== projectId);
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(next));
      return next;
    });
  };

  // Update Personal Info
  const updatePersonalInfo = (info: PersonalInfoType) => {
    setPersonalInfo(info);
    localStorage.setItem(STORAGE_KEYS.PERSONAL_INFO, JSON.stringify(info));
  };

  // Update Experience
  const updateExperience = (items: ExperienceItem[]) => {
    setExperience(items);
    localStorage.setItem(STORAGE_KEYS.EXPERIENCE, JSON.stringify(items));
  };

  // Update Education
  const updateEducation = (items: EducationItem[]) => {
    setEducation(items);
    localStorage.setItem(STORAGE_KEYS.EDUCATION, JSON.stringify(items));
  };

  // Update Publications
  const updatePublications = (items: PublicationItem[]) => {
    setPublications(items);
    localStorage.setItem(STORAGE_KEYS.PUBLICATIONS, JSON.stringify(items));
  };

  // Reset to original default data
  const resetToDefaults = () => {
    setProjects(DEFAULT_PROJECTS);
    setPersonalInfo(DEFAULT_PERSONAL_INFO);
    setExperience(DEFAULT_EXPERIENCE);
    setEducation(DEFAULT_EDUCATION);
    setPublications(DEFAULT_PUBLICATIONS);

    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
    localStorage.removeItem(STORAGE_KEYS.PERSONAL_INFO);
    localStorage.removeItem(STORAGE_KEYS.EXPERIENCE);
    localStorage.removeItem(STORAGE_KEYS.EDUCATION);
    localStorage.removeItem(STORAGE_KEYS.PUBLICATIONS);
  };

  // Export data as JSON file download
  const exportBackup = () => {
    const data = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      personalInfo,
      projects,
      experience,
      education,
      publications,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Import JSON backup
  const importBackup = (jsonContent: string): boolean => {
    try {
      const data = JSON.parse(jsonContent);
      if (data.projects && Array.isArray(data.projects)) {
        setProjects(data.projects);
        localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(data.projects));
      }
      if (data.personalInfo) {
        setPersonalInfo(data.personalInfo);
        localStorage.setItem(STORAGE_KEYS.PERSONAL_INFO, JSON.stringify(data.personalInfo));
      }
      if (data.experience && Array.isArray(data.experience)) {
        setExperience(data.experience);
        localStorage.setItem(STORAGE_KEYS.EXPERIENCE, JSON.stringify(data.experience));
      }
      if (data.education && Array.isArray(data.education)) {
        setEducation(data.education);
        localStorage.setItem(STORAGE_KEYS.EDUCATION, JSON.stringify(data.education));
      }
      if (data.publications && Array.isArray(data.publications)) {
        setPublications(data.publications);
        localStorage.setItem(STORAGE_KEYS.PUBLICATIONS, JSON.stringify(data.publications));
      }
      return true;
    } catch (e) {
      console.error('Failed to import backup:', e);
      return false;
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        isAdmin,
        login,
        logout,
        projects,
        personalInfo,
        experience,
        education,
        publications,
        updateProject,
        createProject,
        deleteProject,
        updatePersonalInfo,
        updateExperience,
        updateEducation,
        updatePublications,
        resetToDefaults,
        exportBackup,
        importBackup,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
