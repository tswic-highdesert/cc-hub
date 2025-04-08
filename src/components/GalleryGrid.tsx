import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
import { components, typography, animations } from '../styles/theme';
import { useGalleryImages, GALLERY_TAGS } from '../hooks/useGalleryImages';
import { Button } from './Button';

interface GalleryFiltersProps {
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  className?: string;
}

export const GalleryFilters: React.FC<GalleryFiltersProps> = ({
  selectedTags,
  setSelectedTags,
  className = ''
}) => {
  // Format tag for display
  const formatTag = (tag: string) => {
    return tag.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      <button
        className={`px-4 py-2 rounded-lg transition-colors ${animations.colors} ${
          selectedTags.length === 0
            ? 'bg-primary text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
        onClick={() => setSelectedTags([])}
      >
        All
      </button>
      {GALLERY_TAGS.map((tag) => (
        <button
          key={tag}
          className={`px-4 py-2 rounded-lg transition-colors ${animations.colors} ${
            selectedTags.includes(tag)
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => handleTagSelect(tag)}
        >
          {formatTag(tag)}
        </button>
      ))}
    </div>
  );
};

interface GalleryGridProps {
  selectedTags: string[];
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ selectedTags }) => {
  const { images, loading, error } = useGalleryImages(selectedTags);
  const [visibleCount, setVisibleCount] = React.useState(6);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const visibleImages = images.slice(0, visibleCount);
  const hasMoreImages = visibleCount < images.length;

  React.useEffect(() => {
    setVisibleCount(6); // Reset to initial count when filters change
  }, [selectedTags]);

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-[4/3] bg-gray-100 animate-pulse rounded-xl" />
        ))}
      </div>
    );
  }

  if (error) {
    console.error('Error loading gallery images:', error);
    return (
      <div className="text-center text-red-500">
        Error loading images. Please try again later.
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No images found matching the selected criteria.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleImages.map((image) => (
          <motion.div
            key={image.id}
            variants={fadeIn}
            className="relative overflow-hidden group"
          >
            <div className="aspect-[4/3]">
              <img
                src={image.url}
                alt={image.description || image.title}
                width={image.width}
                height={image.height}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      {hasMoreImages && (
        <div className="text-center">
          <Button
            variant="outline"
            onClick={handleLoadMore}
            className={animations.hover}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};
