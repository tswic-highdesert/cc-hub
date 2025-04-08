import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations';
import { components, typography, effects, animations, spacing } from '../../styles/theme';
import { Play, Quote } from 'lucide-react';

interface UseCaseProps {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  benefits: string[];
}

export const UseCase: React.FC<UseCaseProps> = ({
  title,
  description,
  imageUrl,
  videoUrl,
  testimonial,
  benefits,
}) => {
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <motion.div
      variants={fadeIn}
      className="grid md:grid-cols-2 gap-8 items-center"
    >
      <div className="space-y-6">
        <h3 className={typography.h3}>{title}</h3>
        <p className={typography.body.DEFAULT}>{description}</p>
        
        {testimonial && (
          <blockquote className="border-l-4 border-primary pl-4 my-6">
            <div className="text-primary mb-2">
              <Quote className="w-6 h-6" />
            </div>
            <p className={`${typography.body.DEFAULT} italic mb-4`}>{testimonial.quote}</p>
            <footer className="text-sm">
              <strong className={typography.h4}>{testimonial.author}</strong>
              <span className={typography.body.small}>
                {' '}— {testimonial.role}, {testimonial.company}
              </span>
            </footer>
          </blockquote>
        )}

        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className={`flex items-center gap-2 ${typography.body.DEFAULT}`}>
              <span className="w-2 h-2 bg-primary rounded-full" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className={`${components.card.base} relative`}>
        {showVideo && videoUrl ? (
          <div className="aspect-[16/9]">
            {videoUrl.includes('vimeo.com') ? (
              <iframe
                src={`${videoUrl.replace('vimeo.com', 'player.vimeo.com/video')}${
                  videoUrl.includes('?') ? '&' : '?'
                }autoplay=1&title=0&byline=0&portrait=0`}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? (
              <iframe
                src={`${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              <video
                src={videoUrl}
                className="w-full h-full object-cover"
                controls
                autoPlay
              />
            )}
          </div>
        ) : (
          <div className={`relative group cursor-pointer ${components.card.interactive}`} onClick={() => videoUrl && setShowVideo(true)}>
            <img
              src={imageUrl}
              alt={title}
              className={`w-full h-full object-cover ${animations.scale} group-hover:scale-110`}
            />
            {videoUrl && (
              <>
                <div className={`absolute inset-0 bg-black/30 group-hover:bg-black/40 ${animations.colors}`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 ${animations.scale}`}>
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};
