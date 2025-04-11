import React from 'react';
import { logEvent } from '../lib/analytics';

interface VideoEmbedProps {
  src: string;
  title: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ src, title }) => {
  const handlePlay = () => {
    logEvent('Video', 'Play', title);
  };

  const getEmbedUrl = (url: string): string => {
    const youtubeWatchRegex = /https?:\/\/www\.youtube\.com\/watch\?v=([\w-]+)/;
    const match = url.match(youtubeWatchRegex);
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(src);

  return (
    <div className="flex justify-center my-8">
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          src={embedUrl}
          title={title}
          onLoad={handlePlay}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default VideoEmbed;