import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { useBlogPosts } from '../hooks/useBlog';

interface RecommendedBlogsProps {
  currentPostId: string;
  tags?: string[];
}

export const RecommendedBlogs: React.FC<RecommendedBlogsProps> = ({
  currentPostId,
  tags = []
}) => {
  // Fetch all posts
  const { posts, loading, error } = useBlogPosts({ 
    limit: 10
  });

  // Filter out current post and limit to 3 posts
  const recommendedPosts = posts
    .filter(post => post.id !== currentPostId)
    .sort(() => Math.random() - 0.5) // Randomize the posts
    .slice(0, 3); 

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 bg-gray-100 animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  if (error || recommendedPosts.length === 0) {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900">More Posts</h3>
        <p className="text-gray-500 italic">No related posts found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">More Posts</h3>
      <div className="space-y-4">
        {recommendedPosts.map((post) => (
          <motion.div
            key={post.id}
            variants={fadeIn}
            className="group"
          >
            <Link
              to={`/blog/${post.slug}`}
              className="flex gap-4 items-start hover:bg-gray-50 p-4 rounded-lg transition-colors"
            >
              {post.featuredImage && (
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                />
              )}
              <div className="flex-grow">
                <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
