import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { fadeIn } from '../animations';
import { components, typography, effects, animations } from '../styles/theme';

interface SelectableFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export const SelectableFeatureCard: React.FC<SelectableFeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  selected,
  onClick,
}) => {
  return (
    <motion.button
      variants={fadeIn}
      onClick={onClick}
      type="button" // Add this to prevent form submission
      className={`w-full text-left ${animations.hover} ${
        selected
          ? 'bg-primary text-white shadow-lg scale-[1.02]'
          : `${components.card.base} ${effects.shadow.sm}`
      } p-6 border-2 border-transparent hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
    >
      <div className="flex items-start gap-4">
        <div className={`
          w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0
          ${selected ? 'bg-white/20' : 'bg-primary-light'}
        `}>
          <Icon className={`w-6 h-6 ${selected ? 'text-white' : 'text-primary'}`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className={typography.h3}>{title}</h3>
            <div className={`
              w-6 h-6 rounded-full border-2 flex items-center justify-center
              ${selected
                ? 'border-white bg-white/20'
                : 'border-gray-300'
              }
            `}>
              {selected && <Check className={`w-4 h-4 ${selected ? 'text-white' : 'text-primary'}`} />}
            </div>
          </div>
          <p className={`text-sm ${selected ? 'text-white/90' : typography.body.DEFAULT}`}>
            {description}
          </p>
        </div>
      </div>
    </motion.button>
  );
};