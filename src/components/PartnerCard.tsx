import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
import { components, typography, effects, animations } from '../styles/theme';
import { Building2, Globe, Users2, MapPin } from 'lucide-react';
import { Button } from './Button';

interface PartnerCardProps {
  name: string;
  type: 'education' | 'corporate' | 'government';
  description: string;
  longDescription?: string;
  logoUrl?: string;
  website?: string;
  location?: string;
  partnerSince?: string;
  benefits?: string[];
  initiatives?: string[];
}

export const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  type,
  description,
  longDescription,
  logoUrl,
  website,
  location,
  partnerSince,
  benefits,
  initiatives,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      variants={fadeIn}
      className={`${components.card.base} ${components.card.bordered} ${effects.shadow.DEFAULT} p-8`}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Logo Section */}
        <div className="md:w-48 flex-shrink-0">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={`${name} logo`}
              className={`w-full aspect-square object-contain ${components.card.base} bg-gray-50 p-4`}
            />
          ) : (
            <div className={`w-full aspect-square bg-primary-light ${components.card.base} flex items-center justify-center`}>
              <Building2 className="w-16 h-16 text-primary" />
            </div>
          )}
          {partnerSince && (
            <div className={`mt-4 text-center ${typography.body.small}`}>
              Partner since {partnerSince}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-grow">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className={typography.h3}>{name}</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-3 py-1 bg-[#f0f7fc] text-[#1f7abc] rounded-full text-sm font-medium">
                  {type.charAt(0).toUpperCase() + type.slice(1)} Partner
                </span>
                {location && (
                  <span className={`flex items-center gap-1 ${typography.body.small}`}>
                    <MapPin className="w-4 h-4" />
                    {location}
                  </span>
                )}
              </div>
            </div>
            {website && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(website, '_blank')}
              >
                <Globe className="w-4 h-4 mr-2" />
                Visit Website
              </Button>
            )}
          </div>

          <p className={`${typography.body.DEFAULT} mb-4`}>{description}</p>

          {(longDescription || benefits || initiatives) && (
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isExpanded ? 'max-h-[1000px]' : 'max-h-0'
              }`}
            >
              {longDescription && (
                <p className={`${typography.body.DEFAULT} mb-4`}>{longDescription}</p>
              )}

              {benefits && (
                <div className="mb-4">
                  <h4 className={`${typography.h4} mb-2`}>
                    Partnership Benefits
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className={`flex items-center gap-2 ${typography.body.DEFAULT}`}
                      >
                        <Users2 className="w-4 h-4 text-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {initiatives && (
                <div>
                  <h4 className={`${typography.h4} mb-2`}>
                    Joint Initiatives
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {initiatives.map((initiative, index) => (
                      <li
                        key={index}
                        className={`flex items-center gap-2 ${typography.body.DEFAULT}`}
                      >
                        <Users2 className="w-4 h-4 text-primary" />
                        {initiative}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {(longDescription || benefits || initiatives) && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`mt-4 font-medium ${typography.link}`}
            >
              {isExpanded ? 'Show Less' : 'Learn More'}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
