import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations';
import { components, typography, spacing } from '../../styles/theme';
import type { LucideIcon } from 'lucide-react';

interface Amenity {
  icon: LucideIcon;
  title: string;
  description: string;
  isPremium?: boolean;
}

interface AmenityGridProps {
  amenities: Amenity[];
}

export const AmenityGrid: React.FC<AmenityGridProps> = ({ amenities }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {amenities.map((amenity, index) => {
        const Icon = amenity.icon;
        return (
          <motion.div
            key={index}
            variants={fadeIn}
            className={`
              flex items-start gap-4 p-4 ${components.card.base}
              ${amenity.isPremium ? 'bg-primary-light' : 'bg-white'}
            `}
          >
            <div className={`
              w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
              ${amenity.isPremium ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}
            `}>
              <Icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className={`${typography.h4} mb-1`}>
                {amenity.title}
                {amenity.isPremium && (
                  <span className="ml-2 text-sm text-primary">Premium</span>
                )}
              </h3>
              <p className={typography.body.small}>{amenity.description}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
