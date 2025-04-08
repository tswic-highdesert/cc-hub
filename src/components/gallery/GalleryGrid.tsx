import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations';
import type { ProcessedGalleryImage } from '../../types/gallery';
import { components, effects, animations } from '../../styles/theme';

interface GalleryGridProps {
  images: ProcessedGalleryImage[];
  loading: boolean;
  error: Error | null;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  images,
  loading,
  error
}) => {
  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[4/3] bg-gray-100 animate-pulse rounded-xl"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        Error loading gallery images. Please try again later.
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No images found matching your criteria.
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <motion.div
          key={image.id}
          variants={fadeIn}
          className={`${components.card.base} ${effects.shadow.DEFAULT} overflow-hidden group`}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={image.imageUrl}
              alt={image.title}
              width={image.width}
              height={image.height}
              className={`w-full h-full object-cover ${animations.scale} group-hover:scale-105`}
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-2">{image.title}</h3>
            {image.description && (
              <p className="text-sm text-gray-600 mb-2">{image.description}</p>
            )}
            {image.tags && image.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {image.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
