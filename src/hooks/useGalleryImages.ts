import React from 'react';
import { client } from '../lib/contentful';
import type { Asset } from '../types/contentful';

interface MediaAsset {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        image?: {
          width: number;
          height: number;
        }
      }
    }
    metadata: {
      tags: Array<{
        sys: {
          id: string;
        }
      }>
    }
  }
  sys: {
    id: string;
  }
}

interface ProcessedImage {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[]; // Changed to string[]
  width?: number;
  height?: number;
}

export const GALLERY_TAGS = [
  'offices',
  'meeting-rooms',
  'construction',
  'events',
  'coworking',
  'amenities'
] as const;

export function useGalleryImages(selectedTags: string[] = []) {
  const [data, setData] = React.useState<MediaAsset[]>([]); // Initialize as an array and provide correct type
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    async function fetchAssets() {
      try {
        const response = await client.getAssets({
          mimetype_group: 'image',
          order: '-sys.createdAt',
          limit: 100,
          ...(selectedTags.length > 0 && {
            'metadata.tags.sys.id[in]': selectedTags.join(',')
          })
        });
        setData(response.items);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch assets'));
        setLoading(false);
      }
    }

    fetchAssets();
  }, [JSON.stringify(selectedTags)]); // More reliable dependency tracking

  const images: ProcessedImage[] = data.map(entry => ({ // Specify the type as an array
    id: entry.sys.id,
    title: entry.fields.title,
    description: entry.fields.description,
    url: entry.fields.file?.url ? `https:${entry.fields.file.url}` : 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    width: entry.fields.file.details.image?.width || undefined,
    height: entry.fields.file.details.image?.height || undefined,
    tags: entry.fields.metadata?.tags?.map(tag => tag.sys.id) || [] // Provide a default empty array
  }));

  return { images, loading, error };
}
