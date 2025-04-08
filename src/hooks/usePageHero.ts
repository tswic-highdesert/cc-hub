import { useContentfulEntries } from './useContentful';
import type { PageHero } from '../types/contentful';

export function usePageHero(slug: string, site: string = 'cchub') {
  const query = {
    content_type: 'PageHero',
    'fields.slug': slug,
    'fields.site': site || 'cchub',
    limit: 1
  };

  const { data, loading, error } = useContentfulEntries<PageHero>(query);
  
  return {
    backgroundUrl: data[0]?.fields?.backgroundImage?.fields?.file?.url || '',
    loading,
    error
  };
}
