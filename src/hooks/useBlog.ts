import { useContentfulEntries, useContentfulEntry } from './useContentful';

interface BlogPost {
  title: string;
  slug: string;
  publishDate: string;
  author: string;
  excerpt: string;
  content: any; // This will be a Rich Text Document
  featuredImage?: {
    fields: {
      file: {
        url: string;
      }
    }
  };
  videoURL?: string;
  tags?: string[];
  featured: boolean;
}

export function useBlogPosts(options: {
  limit?: number;
  tag?: string;
  featured?: boolean;
} = {}) {
  const query = {
    content_type: 'blogPost',
    order: ['-fields.publishDate'],
    limit: options.limit || 6,
    ...(options.tag && { 'fields.tags[all]': [options.tag] }),
    ...(options.featured !== undefined && { 'fields.featured': options.featured })
  };

  const { data, loading, error } = useContentfulEntries<BlogPost>(query);

  const posts = data.map(entry => ({
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    publishDate: entry.fields.publishDate,
    author: entry.fields.author,
    excerpt: entry.fields.excerpt,
    content: entry.fields.content,
    featuredImage: entry.fields.featuredImage?.fields.file.url,
    videoUrl: entry.fields.videoURL,
    tags: entry.fields.tags || [],
    featured: entry.fields.featured
  }));

  return { posts, loading, error };
}

export function useBlogPost(slug: string) {
  const query = {
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1
  };

  const { data, loading, error } = useContentfulEntries<BlogPost>(query);
  const post = data[0];

  // Map the response data to our expected format
  return {
    post: post ? {
      id: post.sys.id,
      title: post.fields.title,
      slug: post.fields.slug,
      publishDate: post.fields.publishDate,
      author: post.fields.author,
      excerpt: post.fields.excerpt,
      content: post.fields.content,
      featuredImage: post.fields.featuredImage?.fields.file.url,
      videoUrl: post.fields.videoURL, // Match the field name from content model
      tags: post.fields.tags || [],
      featured: post.fields.featured
    } : null,
    loading,
    error
  };
}
