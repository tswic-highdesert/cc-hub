import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { fadeIn } from '../../animations';
import { animations } from '../../styles/theme';
import type { GalleryFilters } from '../../types/gallery';

export const GALLERY_CATEGORIES = {
  'Workspaces': ['workspace', 'common-areas', 'meeting-rooms', 'coworking', 'amenities'],
  'Event Spaces': ['event-spaces'],
  'Exterior': ['ext'],
  'Construction': ['construction']
} as const;

interface GalleryFiltersProps {
  filters: GalleryFilters;
  onFiltersChange: (filters: GalleryFilters) => void;
  className?: string;
}

export const GalleryFilters: React.FC<GalleryFiltersProps> = ({
  filters,
  onFiltersChange,
  className = ''
}) => {
  const handleCategoryClick = (categoryTags: string[]) => {
    const currentTags = filters.tags || [];
    const allTagsSelected = categoryTags.every(tag => currentTags.includes(tag));
    
    if (allTagsSelected) {
      // If all tags in category are selected, remove them
      const newTags = currentTags.filter(tag => !categoryTags.includes(tag));
      onFiltersChange({ ...filters, tags: newTags });
    } else {
      // Add all category tags, removing any that might have been individually selected
      const newTags = [...new Set([
        ...currentTags.filter(tag => !categoryTags.includes(tag)),
        ...categoryTags
      ])];
      onFiltersChange({ ...filters, tags: newTags });
    }
  };

  const clearFilters = () => {
    onFiltersChange({});
  };

  const hasActiveFilters = !!(filters.tags?.length);

  return (
    <motion.div
      variants={fadeIn}
      className={className}
    >
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {Object.entries(GALLERY_CATEGORIES).map(([category, categoryTags]) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(categoryTags)}
            className={`px-8 py-3 rounded-lg font-medium ${animations.colors} ${
              categoryTags.some(tag => filters.tags?.includes(tag))
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors mx-auto"
        >
          <X className="w-4 h-4" />
          Clear Filters
        </button>
      )}
    </motion.div>
  );
};
