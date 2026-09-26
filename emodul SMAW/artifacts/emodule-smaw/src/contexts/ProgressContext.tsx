import React, { createContext, useContext, useEffect, useState } from 'react';

export interface ProgressData {
  participantName: string;
  completedModules: number[];
  moduleScores: Record<number, number>;
  currentModule: number;
  overallProgress: number;
  evaluasiScore: number | null;
  evaluasiCompleted: boolean;
}

interface ProgressContextType {
  progress: ProgressData;
  setParticipantName: (name: string) => void;
  completeModule: (moduleId: number, score: number) => void;
  isModuleUnlocked: (moduleId: number) => boolean;
  getModuleScore: (moduleId: number) => number | null;
  completeEvaluasi: (score: number) => void;
  resetProgress: () => void;
}

const defaultProgress: ProgressData = {
  participantName: '',
  completedModules: [],
  moduleScores: {},
  currentModule: 1,
  overallProgress: 0,
  evaluasiScore: null,
  evaluasiCompleted: false,
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressData>(() => {
    const saved = localStorage.getItem('smaw_progress');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Merge with defaults to handle older saved data missing new fields
      return { ...defaultProgress, ...parsed };
    }
    return defaultProgress;
  });

  useEffect(() => {
    localStorage.setItem('smaw_progress', JSON.stringify(progress));
  }, [progress]);

  const setParticipantName = (name: string) => {
    setProgress(prev => ({ ...prev, participantName: name }));
  };

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

  const completeEvaluasi = (score: number) => {
    setProgress(prev => ({
      ...prev,
      evaluasiScore: Math.max(score, prev.evaluasiScore ?? 0),
      evaluasiCompleted: prev.evaluasiCompleted || score >= 75,
    }));
  };

  const resetProgress = () => {
    setProgress(prev => ({ ...defaultProgress, participantName: prev.participantName }));
  };

  return (
    <ProgressContext.Provider value={{ progress, setParticipantName, completeModule, isModuleUnlocked, getModuleScore, completeEvaluasi, resetProgress }}>
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
