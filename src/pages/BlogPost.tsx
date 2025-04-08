import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { fadeIn, staggerContainer } from '../animations';
import { Layout } from '../components/Layout';
import { useBlogPost } from '../hooks/useBlog';
import { VideoEmbed } from '../components/VideoEmbed';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { RecommendedBlogs } from '../components/RecommendedBlogs';
import { Calendar, Tag } from 'lucide-react';

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="mb-4 text-gray-600 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
      <li className="text-gray-600">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-4">{children}</blockquote>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong className="font-bold">{text}</strong>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <em className="italic">{text}</em>,
    [MARKS.UNDERLINE]: (text: React.ReactNode) => <u>{text}</u>,
    [MARKS.CODE]: (text: React.ReactNode) => (
      <code className="bg-gray-100 rounded px-2 py-1 font-mono text-sm">{text}</code>
    ),
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const { post, loading, error } = useBlogPost(slug || '');

  if (loading) {
    return (
      <Layout>
        <div className="bg-gradient-to-br from-[#f0f7fc] to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="h-64 bg-gray-100 animate-pulse rounded-xl" />
              <div className="space-y-4">
                <div className="h-8 bg-gray-100 animate-pulse rounded w-3/4" />
                <div className="h-4 bg-gray-100 animate-pulse rounded w-1/4" />
                <div className="h-4 bg-gray-100 animate-pulse rounded" />
                <div className="h-4 bg-gray-100 animate-pulse rounded" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="bg-gradient-to-br from-[#f0f7fc] to-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-red-500">
              Error loading blog post. Please try again later.
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="bg-gradient-to-br from-[#f0f7fc] to-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-500">
              Blog post not found.
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Layout>
      <div className="bg-gradient-to-br from-[#f0f7fc] to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr,320px] gap-12 max-w-7xl mx-auto">
            <motion.article
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {post.featuredImage && (
                <motion.div
                  variants={fadeIn}
                  className="aspect-[21/9] rounded-xl overflow-hidden mb-8"
                >
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}

              <motion.div variants={fadeIn} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-light text-primary flex items-center justify-center font-semibold text-lg">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <span className="block font-medium text-gray-900">
                      {post.author}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {formattedDate}
                    </div>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {post.title}
                </h1>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-4 h-4 text-gray-400" />
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-sm text-gray-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="prose prose-lg max-w-none">
                  {post.content ? documentToReactComponents(post.content, richTextOptions) : (
                    <p className="text-gray-600">No content available.</p>
                  )}
                </div>

                {post.videoUrl && (
                  <div className="mt-8">
                    <VideoEmbed
                      url={post.videoUrl}
                      title={post.title}
                    />
                  </div>
                )}
              </motion.div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 space-y-8 h-fit">
              <RecommendedBlogs
                currentPostId={post.id}
                tags={post.tags}
              />
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
}
