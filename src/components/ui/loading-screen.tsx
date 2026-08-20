"use client";

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TextMorph } from './text-morph';
import { useLanguage } from '../../context/LanguageContext';

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const { language } = useLanguage();

  const prefix = language === 'en' ? 'I am' : 'Eu sou';
  const words = language === 'en'
    ? ['a developer', 'an engineer', 'a designer', 'an AI architect']
    : ['desenvolvedor', 'engenheiro', 'designer', 'arquiteto de IA'];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black text-white select-none pointer-events-auto"
        >
          {/* Pure Clean Typography in Center */}
          <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight flex items-center justify-center gap-3">
            <span className="text-zinc-300 font-bold">{prefix}</span>
            <TextMorph
              words={words}
              interval={900}
              className="text-gradient-orange-gold font-black inline-flex"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
