import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
import { components, typography, effects } from '../styles/theme';
import { Building2, Globe } from 'lucide-react';

interface MemberCardProps {
  name: string;
  description: string;
  logoUrl?: string;
  website?: string;
  industry?: string;
}

export const MemberCard: React.FC<MemberCardProps> = ({
  name,
  description,
  logoUrl,
  website,
  industry,
}) => {
  return (
    <motion.div
      variants={fadeIn}
      className={`${components.card.base} ${components.card.bordered} ${effects.shadow.DEFAULT} p-6`}
    >
      <div className="flex items-center gap-4 mb-4">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={`${name} logo`}
            className="w-16 h-16 object-contain"
          />
        ) : (
          <div className="w-16 h-16 bg-primary-light rounded-lg flex items-center justify-center">
            <Building2 className="w-8 h-8 text-primary" />
          </div>
        )}
        <div>
          <h3 className={typography.h3}>{name}</h3>
          {industry && (
            <p className="text-sm text-primary">{industry}</p>
          )}
        </div>
      </div>
      <p className={`${typography.body.DEFAULT} mb-4`}>{description}</p>
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className={typography.link}
        >
          <Globe className="w-4 h-4 mr-2" />
          Visit Website
        </a>
      )}
    </motion.div>
  );
};
