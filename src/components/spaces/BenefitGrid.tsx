import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations';
import { components, typography, effects } from '../../styles/theme';
import { ContentfulImage } from '../ContentfulImage';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  imageId?: string;
}

interface BenefitGridProps {
  benefits: Benefit[];
}

export const BenefitGrid: React.FC<BenefitGridProps> = ({ benefits }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;
        return (
          <motion.div
            key={index}
            variants={fadeIn}
            className={`relative ${components.card.base} ${effects.shadow.DEFAULT}`}
          >
            {benefit.imageId && (
              <div className="aspect-video">
                <ContentfulImage
                  id={benefit.imageId}
                  alt={benefit.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center text-primary mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className={`${typography.h3} mb-2`}>
                {benefit.title}
              </h3>
              <p className={typography.body.DEFAULT}>{benefit.description}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
