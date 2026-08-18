import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { projectsData, type ProjectDetail } from '../data/projectsData';
import { ProjectDetailModal } from '../components/ui/project-detail-modal';
import { useLanguage } from './LanguageContext';

interface ProjectModalContextType {
  openProjectModal: (projectId: string) => void;
  closeProjectModal: () => void;
  selectedProject: ProjectDetail | null;
  isOpen: boolean;
}

const ProjectModalContext = createContext<ProjectModalContextType | undefined>(undefined);

export const ProjectModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { language } = useLanguage();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openProjectModal = useCallback((projectId: string) => {
    setSelectedProjectId(projectId);
    setIsOpen(true);
  }, []);

  const closeProjectModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Compute selected project based on current language
  const langKey = language === 'en' ? 'en' : 'pt';
  const selectedProject: ProjectDetail | null = selectedProjectId
    ? projectsData[langKey][selectedProjectId] || projectsData['pt'][selectedProjectId] || null
    : null;

  return (
    <ProjectModalContext.Provider
      value={{
        openProjectModal,
        closeProjectModal,
        selectedProject,
        isOpen,
      }}
    >
      {children}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isOpen}
        onClose={closeProjectModal}
      />
    </ProjectModalContext.Provider>
  );
};

export const useProjectModal = (): ProjectModalContextType => {
  const context = useContext(ProjectModalContext);
  if (!context) {
    throw new Error('useProjectModal must be used within a ProjectModalProvider');
  }
  return context;
};
