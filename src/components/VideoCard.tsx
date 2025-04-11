import React from 'react';
import VideoEmbed from './VideoEmbed'; // Ensure default import

interface VideoCardProps {
  videoSrc: string;
  videoTitle: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoSrc, videoTitle }) => {
  return (
    <div className="video-card">
      <h2>{videoTitle}</h2>
      <VideoEmbed src={videoSrc} title={videoTitle} />
    </div>
  );
};

export default VideoCard;
