import React from 'react';
import { spacing } from '../../styles/theme';
import { VideoCard } from '../VideoCard';
import { Play } from 'lucide-react';

interface ShowcaseImage {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
}

interface SpaceShowcaseProps {
  images?: ShowcaseImage[];
  videoTour?: {
    title: string;
    description: string;
    embedUrl: string;
    thumbnailUrl: string;
  };
}

export const SpaceShowcase: React.FC<SpaceShowcaseProps> = ({ videoTour }) => {
  return (
    <div className={spacing.section.lg}>
      {/* Video Tour */}
      {videoTour && (
        <div className="max-w-4xl mx-auto relative">
          <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden relative">
            <img
              src={videoTour.thumbnailUrl}
              alt={videoTour.title}
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <p className="text-white text-xl font-medium">Video Coming Soon</p>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{videoTour.title}</h3>
            <p className="text-gray-600">{videoTour.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
