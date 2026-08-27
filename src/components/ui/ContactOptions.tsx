import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContactModal } from '../../context/ContactModalContext';
import { MessageSquare } from 'lucide-react';

interface ContactOptionsProps {
  variant: 'full' | 'compact' | 'hero';
  className?: string;
}

export const ContactOptions: React.FC<ContactOptionsProps> = ({ variant, className = '' }) => {
  const { language } = useLanguage();
  const { openContactModal } = useContactModal();

  const buttonText = language === 'en' ? 'Start a Project' : 'Iniciar Projeto';

  let paddingClass = '';
  if (variant === 'compact') {
    paddingClass = 'px-6 py-2.5 text-sm';
  } else if (variant === 'hero') {
    paddingClass = 'px-[28px] py-[12px] text-[14px]';
  } else {
    paddingClass = 'px-8 py-3.5 text-base';
  }

  return (
    <button
      onClick={openContactModal}
      className={`btn-primary w-full sm:w-auto ${paddingClass} ${className}`}
      aria-label={buttonText}
    >
      <MessageSquare className={variant === 'compact' ? 'w-4 h-4' : 'w-5 h-5'} />
      <span>{buttonText}</span>
    </button>
  );
};
