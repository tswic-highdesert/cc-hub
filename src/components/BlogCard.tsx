import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import { fadeIn } from '../animations';
import { components, typography, effects } from '../styles/theme';

interface BlogCardProps {
  title: string;
  slug: string;
  publishDate: string;
  author: string;
  excerpt: string;
  featuredImage?: string;
  tags?: string[];
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  slug,
  publishDate,
  author,
  excerpt,
  featuredImage,
  tags
}) => {
  const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.article
      variants={fadeIn}
      className={`${components.card.base} ${components.card.bordered} ${effects.shadow.DEFAULT} overflow-hidden`}
    >
      {featuredImage && (
        <Link to={`/blog/${slug}`} className="block aspect-[2/1] overflow-hidden">
          <img
            src={featuredImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </Link>
      )}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center font-semibold">
            {author.charAt(0)}
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-900">
              {author}
            </span>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </div>
          </div>
        </div>

        <h2 className={`${typography.h3} mb-2`}>
          <Link
            to={`/blog/${slug}`}
            className="hover:text-primary transition-colors"
          >
            {title}
          </Link>
        </h2>

        <p className={`${typography.body.DEFAULT} mb-4`}>
          {excerpt}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-gray-400" />
            {tags.map(tag => (
              <Link
                key={tag}
                to={`/blog/tag/${tag}`}
                className="text-sm text-gray-500 hover:text-primary transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};
