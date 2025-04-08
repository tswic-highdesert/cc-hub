import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { fadeIn } from '../animations';
import { components, typography, effects, animations } from '../styles/theme';

interface VideoCardProps {
  title: string;
  description: string;
  embedUrl: string;
  thumbnailUrl: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  embedUrl,
  thumbnailUrl,
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <motion.div
      variants={fadeIn}
      className={`${components.card.base} ${effects.shadow.DEFAULT}`}
    >
      <div className="relative aspect-video">
        {!isPlaying ? (
          <div className="absolute inset-0 group cursor-pointer" onClick={() => setIsPlaying(true)}>
            <img
              src={thumbnailUrl}
              alt={title}
              className={`w-full h-full object-cover ${animations.scale} group-hover:scale-105`}
            />
            <div className={`absolute inset-0 bg-black/30 group-hover:bg-black/40 ${animations.colors} flex items-center justify-center`}>
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                <Play className="w-8 h-8 text-primary ml-1" />
              </div>
            </div>
          </div>
        ) : (
          <iframe
            src={embedUrl}
            title={title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      <div className="p-6">
        <h3 className={`${typography.h3} mb-2`}>{title}</h3>
        <p className={typography.body.DEFAULT}>{description}</p>
      </div>
    </motion.div>
  );
};
