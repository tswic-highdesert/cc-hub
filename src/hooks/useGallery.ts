import { useState, useEffect, useMemo } from 'react';
import { client } from '../lib/contentful';
import type { GalleryImage, GalleryFilters, ProcessedGalleryImage } from '../types/gallery';

const ITEMS_PER_PAGE = 12;

export function useGallery(filters: GalleryFilters = {}, page: number = 1) {
  const [data, setData] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchGallery() {
      try {
        setLoading(true);
        const query: Record<string, any> = {
          content_type: 'galleryImage',
          limit: ITEMS_PER_PAGE,
          skip: (page - 1) * ITEMS_PER_PAGE,
          order: '-sys.createdAt'
        };

        if (filters.tags?.length) {
          query['fields.tags[in]'] = filters.tags.join(',');
        }

        const response = await client.getEntries<GalleryImage>(query);
        if (page === 1) {
          setData(response.items);
        } else {
          setData(prevData => [...prevData, ...response.items]);
        }
        setTotalPages(Math.ceil(response.total / ITEMS_PER_PAGE));
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch gallery'));
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, [filters, page]);

  useEffect(() => {
    setData([]);
  }, [filters]);

  const processedImages = useMemo<ProcessedGalleryImage[]>(() => {
    return data.map(item => ({
      id: item.sys.id,
      title: item.fields.title,
      description: item.fields.description || '',
      imageUrl: `https:${item.fields.image?.fields?.file?.url || ''}`,
      width: item.fields.image?.fields?.file?.details?.image?.width ?? 0,
      height: item.fields.image?.fields?.file?.details?.image?.height ?? 0,
      tags: item.fields.tags || []
    }));
  }, [data]);

  return {
    images: processedImages,
    loading,
    error,
    totalPages
  };
}
