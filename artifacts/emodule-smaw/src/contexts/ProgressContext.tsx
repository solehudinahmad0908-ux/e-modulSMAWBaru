import React, { createContext, useContext, useEffect, useState } from 'react';

export interface ProgressData {
  completedModules: number[];
  moduleScores: Record<number, number>;
  currentModule: number;
  overallProgress: number;
}

interface ProgressContextType {
  progress: ProgressData;
  completeModule: (moduleId: number, score: number) => void;
  isModuleUnlocked: (moduleId: number) => boolean;
  getModuleScore: (moduleId: number) => number | null;
  resetProgress: () => void;
}

const defaultProgress: ProgressData = {
  completedModules: [],
  moduleScores: {},
  currentModule: 1,
  overallProgress: 0,
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressData>(() => {
    const saved = localStorage.getItem('smaw_progress');
    return saved ? JSON.parse(saved) : defaultProgress;
  });

  useEffect(() => {
    localStorage.setItem('smaw_progress', JSON.stringify(progress));
  }, [progress]);

  const completeModule = (moduleId: number, score: number) => {
    setProgress(prev => {
      const isNewlyCompleted = score >= 75 && !prev.completedModules.includes(moduleId);
      const newCompletedModules = isNewlyCompleted 
        ? [...prev.completedModules, moduleId] 
        : prev.completedModules;
        
      const newOverallProgress = Math.min((newCompletedModules.length / 8) * 100, 100);
      
      const newCurrentModule = isNewlyCompleted ? Math.min(moduleId + 1, 8) : prev.currentModule;

      return {
        ...prev,
        completedModules: newCompletedModules,
        moduleScores: { ...prev.moduleScores, [moduleId]: Math.max(score, prev.moduleScores[moduleId] || 0) },
        currentModule: Math.max(prev.currentModule, newCurrentModule),
        overallProgress: newOverallProgress,
      };
    });
  };

  const isModuleUnlocked = (moduleId: number) => {
    if (moduleId === 1) return true;
    return progress.completedModules.includes(moduleId - 1) && (progress.moduleScores[moduleId - 1] || 0) >= 75;
  };

  const getModuleScore = (moduleId: number) => {
    return progress.moduleScores[moduleId] ?? null;
  };

  const resetProgress = () => {
    setProgress(defaultProgress);
  };

  return (
    <ProgressContext.Provider value={{ progress, completeModule, isModuleUnlocked, getModuleScore, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
