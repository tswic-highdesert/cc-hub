import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeIn } from '../animations';
import { components, typography, effects, animations } from '../styles/theme';
import { Link } from 'react-router-dom';
import { usePageHero } from '../hooks/usePageHero';

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  href: string;
  buttonURL?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  slug,
  href,
  buttonURL = ''
}) => {
  const { backgroundUrl, loading } = usePageHero(slug);
  const imageUrl = backgroundUrl ? `https:${backgroundUrl}` : '';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (buttonURL) {
      e.preventDefault(); // Prevent the default Link behavior
      window.location.href = buttonURL; // Navigate to the provided buttonURL
    }
  };

  return (
    <Link
      to={href}
      className={`block ${components.card.interactive}`}
      onClick={handleClick}
    >
      <motion.div
        variants={fadeIn}
        className={`flex flex-col ${components.card.base} ${effects.shadow.DEFAULT}`}
      >
        <div className="relative">
          <div className="aspect-[4/3] bg-white">
            {!loading && imageUrl && <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />}
          </div>
          <div className={`absolute inset-0 ${effects.gradient.dark} opacity-0 group-hover:opacity-100 ${animations.fade}`} />
        </div>
        <div className={`flex-1 p-6 ${components.card.base}`}>
          <h3 className={`${typography.h3} mb-2`}>{title}</h3>
          <p className={`${typography.body.DEFAULT} mb-4`}>{description}</p>
          <span className={`inline-flex items-center ${typography.link}`}>
            Learn More
            <ArrowRight className="ml-2 w-4 h-4" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
};
