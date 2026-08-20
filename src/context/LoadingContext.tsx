import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { LoadingScreen } from '../components/ui/loading-screen';

interface LoadingContextType {
  isLoading: boolean;
  triggerLoading: (onComplete?: () => void, durationMs?: number) => void;
  showLoading: () => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('splash_seen');
    }
    return false;
  });

  const showLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const hideLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const triggerLoading = useCallback((onComplete?: () => void, durationMs = 3000) => {
    setIsLoading(true);
    setTimeout(() => {
      if (onComplete) onComplete();
      setIsLoading(false);
    }, durationMs);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, triggerLoading, showLoading, hideLoading }}>
      {children}
      <LoadingScreen isLoading={isLoading} />
    </LoadingContext.Provider>
  );
};

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
