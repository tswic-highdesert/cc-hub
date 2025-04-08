import { useContentfulEntries } from './useContentful';

interface Partner {
  name: string;
  type: 'education' | 'corporate' | 'government';
  description: string;
  longDescription?: string;
  logo?: {
    fields: {
      file: {
        url: string;
      }
    }
  };
  website?: string;
  location?: string;
  partnerSince?: string;
  benefits?: string[];
  initiatives?: string[];
  featured: boolean;
  order?: number;
}

export function usePartners() {
  const query = {
    content_type: 'partners',
    order: ['fields.order', 'fields.name'],
    limit: 100
  };

  const { data, loading, error } = useContentfulEntries<Partner>(query);

  const partners = data.map(entry => ({
    name: entry.fields.name,
    type: entry.fields.type,
    description: entry.fields.description,
    longDescription: entry.fields.longDescription,
    logoUrl: entry.fields.logo?.fields.file.url,
    website: entry.fields.website,
    location: entry.fields.location,
    partnerSince: entry.fields.partnerSince,
    benefits: entry.fields.benefits || [],
    initiatives: entry.fields.initiatives || [],
    featured: entry.fields.featured
  }));

  return { partners, loading, error };
}
