import React from 'react';
import { Play } from 'lucide-react';
import { components, typography, effects, animations } from '../styles/theme';

const getVideoId = (url: string): string | null => {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return url.includes('youtu.be')
      ? url.split('youtu.be/')[1]
      : url.split('v=')[1]?.split('&')[0] || null;
  } else if (url.includes('vimeo.com')) {
    return url.split('vimeo.com/')[1]?.split('?')[0] || null;
  }
  return null;
};

const getThumbnailUrl = (url: string): string => {
  const videoId = getVideoId(url);
  if (!videoId) return '';
  
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  } else if (url.includes('vimeo.com')) {
    return `https://vumbnail.com/${videoId}.jpg`;
  }
  return '';
};

interface VideoEmbedProps {
  url: string;
  title: string;
  thumbnailUrl?: string;
}

export const VideoEmbed: React.FC<VideoEmbedProps> = ({
  url,
  title,
  thumbnailUrl
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const defaultThumbnail = getThumbnailUrl(url);

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be')
        ? url.split('youtu.be/')[1]
        : url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } else if (url.includes('vimeo.com')) {
      const videoId = url.split('vimeo.com/')[1];
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
    return url;
  };

  return (
    <div className={`${components.card.base} ${effects.shadow.DEFAULT} overflow-hidden`}>
      <div className="relative aspect-video">
        {!isPlaying ? (
          <button
            className="w-full h-full group cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={thumbnailUrl || defaultThumbnail}
              alt={title}
              className={`w-full h-full object-cover ${animations.scale} group-hover:scale-105`}
            />
            <div className={`absolute inset-0 bg-black/30 group-hover:bg-black/40 ${animations.colors} flex items-center justify-center`}>
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                <Play className="w-8 h-8 text-primary ml-1" />
              </div>
            </div>
          </button>
        ) : (
          <iframe
            src={getEmbedUrl(url)}
            title={title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      {title && (
        <div className="p-4">
          <h3 className={typography.h4}>{title}</h3>
        </div>
      )}
    </div>
  );
};
