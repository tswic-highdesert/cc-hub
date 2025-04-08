import { useState, useEffect } from 'react';
import { client } from '../lib/contentful';

export function useContentfulEntry<T>(id: string) {
  const [data, setData] = useState<ContentfulEntry<T> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchEntry() {
      try {
        const entry = await client.getEntry<T>(id);
        setData(entry);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch entry'));
        setLoading(false);
      }
    }

    fetchEntry();
  }, [id]);

  return { data, loading, error };
}

interface ContentfulEntry<T> {
  sys: {
    id: string;
  };
  fields: T;
}

export function useContentfulEntries<T>(query?: object) {
  const [data, setData] = useState<ContentfulEntry<T>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchEntries() {
      try {
        if (!query || !query.hasOwnProperty('content_type')) {
          throw new Error('Content type is required for Contentful queries');
        }

        const entries = await client.getEntries<T>(query || {});
        setData(entries.items);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch entries'));
        setLoading(false);
      }
    }

    fetchEntries();
  }, [JSON.stringify(query)]);

  return { data, loading, error };
}
