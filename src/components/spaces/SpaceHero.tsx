import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations';
import { Button } from '../Button';
import { ArrowRight } from 'lucide-react';
import { typography, effects } from '../../styles/theme';

interface SpaceHeroProps {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  ctaText?: string;
}

export const SpaceHero: React.FC<SpaceHeroProps> = ({
  title,
  description,
  imageUrl,
  videoUrl,
  ctaText = "Book Your Tour",
}) => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0">
        {videoUrl ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-[2px]`} />
      </div>

      {/* Content */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="relative text-center text-white px-4 max-w-4xl mx-auto"
      >
        <h1 className={`${typography.h1} mb-6`}>{title}</h1>
        <p className={`${typography.body.lg} text-white/90 mb-8 max-w-2xl mx-auto`}>
          {description}
        </p>
        <Button
          variant="white"
          size="lg"
          onClick={() => window.location.href = '/contact'}
        >
          {ctaText}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>

      {/* Gradient Overlay */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 ${effects.gradient.transparent}`} />
    </div>
  );
};
