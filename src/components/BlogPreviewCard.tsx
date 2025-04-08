import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { fadeIn } from '../animations';
import { components, typography, effects, animations } from '../styles/theme';

interface BlogPreviewCardProps {
  title: string;
  slug: string;
  publishDate: string;
  excerpt: string;
  featuredImage?: string;
}

export const BlogPreviewCard: React.FC<BlogPreviewCardProps> = ({
  title,
  slug,
  publishDate,
  excerpt,
  featuredImage
}) => {
  const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  const defaultImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800';

  return (
    <motion.article
      variants={fadeIn}
      className={`${components.card.base} ${components.card.bordered} ${effects.shadow.DEFAULT} group overflow-hidden`}
    >
      <Link to={`/blog/${slug}`} className="block aspect-video overflow-hidden">
        <img
          src={featuredImage || defaultImage}
          alt={title}
          className={`w-full h-full object-cover ${animations.scale} group-hover:scale-105`}
        />
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4" />
          {formattedDate}
        </div>
        <h3 className={`${typography.h3} mb-2 line-clamp-2 group-hover:text-primary ${animations.colors}`}>
          <Link to={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>
        <p className={`${typography.body.DEFAULT} mb-4 line-clamp-2`}>
          {excerpt}
        </p>
        <Link
          to={`/blog/${slug}`}
          className={`inline-flex items-center ${typography.link}`}
        >
          Read More
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
};
