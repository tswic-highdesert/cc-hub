import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations';
import { usePageHero } from '../hooks/usePageHero';
import { typography, components, spacing } from '../styles/theme';

interface PageHeroProps {
  slug: string;
  title: React.ReactNode;
  description: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  site?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  slug,
  title,
  description,
  backgroundImage: defaultBackground,
  children,
  site = 'cchub'
}) => {
  const { backgroundUrl, loading, error } = usePageHero(slug, site);

  if (site !== 'cchub') {
    console.error('Invalid site configuration');
    return null;
  }

  const displayBackground = backgroundUrl ? `https:${backgroundUrl}` : defaultBackground;

  if (loading) {
    return (
      <div className="relative overflow-hidden min-h-[70vh] flex items-center justify-center bg-gray-100 animate-pulse">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="w-3/4 h-16 bg-gray-200 rounded-lg mx-auto mb-6" />
          <div className="w-1/2 h-8 bg-gray-200 rounded-lg mx-auto" />
        </div>
      </div>
    );
  }

  if (error) {
    console.error('Error loading page hero:', error);
  }

  return (
    <div className="relative overflow-hidden min-h-[70vh] flex items-center justify-center">
      {displayBackground && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${displayBackground})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[1px] z-10" />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-20 relative text-center z-20"
      >
        <motion.h1 
          variants={fadeIn}
          className={`${typography.h1} text-white mb-6`}
        >
          {title}
        </motion.h1>
        <motion.p 
          variants={fadeIn}
          className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
        {children}
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent z-10" />
    </div>
  );
};
