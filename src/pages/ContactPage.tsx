import React from 'react';
import { ContactSection } from '../components/ContactSection';

interface ContactPageProps {
  initialService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService }) => {
  return (
    <div className="bg-[#050811]">
      <ContactSection initialService={initialService} />
    </div>
  );
};
