import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { fadeIn } from '../animations';
import { components, typography, effects } from '../styles/theme';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  const Icon = icon;
  return (
    <motion.div
      variants={fadeIn}
      className={`${components.card.base} ${components.card.bordered} ${effects.shadow.DEFAULT} p-6`}
    >
      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center text-primary mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className={`${typography.h3} mb-2`}>{title}</h3>
      <p className={`${typography.body.small}`}>{description}</p>
    </motion.div>
  );
};
