import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations';
import { Layout } from '../components/Layout';
import { BlogCard } from '../components/BlogCard';
import { useBlogPosts } from '../hooks/useBlog';
import { Button } from '../components/Button';
import { PageTemplate } from '../components/PageTemplate';

export default function Blog() {
  const [page, setPage] = React.useState(1);
  const { posts, loading, error } = useBlogPosts({ limit: page * 6 });

  return (
    <Layout>
      <div className="bg-gradient-to-br from-[#f0f7fc] to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="text-center mb-16"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Blog
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Insights, updates, and stories from our community.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-96 bg-gray-100 animate-pulse rounded-xl" />
                ))}
              </div>
            ) : error ? (
              <div className="text-center text-red-500">
                Error loading blog posts. Please try again later.
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center text-gray-500">
                No blog posts available at this time.
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <BlogCard key={post.id} {...post} />
                  ))}
                </div>
                {posts.length >= page * 6 && (
                  <div className="text-center mt-12">
                    <Button
                      variant="outline"
                      onClick={() => setPage(p => p + 1)}
                    >
                      Load More
                    </Button>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
