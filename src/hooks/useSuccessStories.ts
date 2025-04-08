import React from 'react';
import { useContentfulEntries } from './useContentful';

interface SuccessStory {
  title: string;
  description: string;
  companyName: string;
  industry: string;
  quote?: string;
  authorName?: string;
  authorRole?: string;
  benefits: string[];
  featuredImage: {
    fields: {
      file: {
        url: string;
      }
    }
  };
  videoURL?: string;
  videoThumbnail?: {
    fields: {
      file: {
        url: string;
      }
    }
  };
}

export function useSuccessStories(pageSlug: string) {
  const query = {
    content_type: 'successStory',
    'fields.pageSlugs[in]': pageSlug,
    limit: 2,
    order: '-sys.createdAt'
  };

  const { data, loading, error } = useContentfulEntries<SuccessStory>(query);

  const stories = data.map(entry => ({
    title: entry.fields.title,
    description: entry.fields.description,
    imageUrl: entry.fields.featuredImage?.fields?.file?.url || '',
    videoUrl: entry.fields.videoURL,
    testimonial: entry.fields.quote && entry.fields.authorName ? {
      quote: entry.fields.quote,
      author: entry.fields.authorName,
      role: entry.fields.authorRole || '',
      company: entry.fields.companyName
    } : undefined,
    benefits: entry.fields.benefits || []
  }));

  // Randomly sort the stories
  const randomizedStories = React.useMemo(() => {
    return [...stories].sort(() => Math.random() - 0.5);
  }, [stories]);

  return {
    stories: randomizedStories,
    loading,
    error
  };
}
