import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ContactModalContextProps {
  isContactModalOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextProps | undefined>(undefined);

export const ContactModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <ContactModalContext.Provider
      value={{ isContactModalOpen, openContactModal, closeContactModal }}
    >
      {children}
    </ContactModalContext.Provider>
  );
};

export const useContactModal = (): ContactModalContextProps => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};
