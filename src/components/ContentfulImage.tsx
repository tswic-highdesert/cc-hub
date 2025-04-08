import React from 'react';
import { client } from '../lib/contentful';
import type { Asset } from '../types/contentful';

interface ContentfulImageProps {
  id: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}

export const ContentfulImage: React.FC<ContentfulImageProps> = ({
  id,
  alt,
  className,
  width,
  height,
}) => {
  const [data, setData] = React.useState<Asset | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    async function fetchAsset() {
      try {
        const asset = await client.getAsset(id);
        setData({
          title: asset.fields.title,
          description: asset.fields.description,
          url: asset.fields.file.url,
          width: asset.fields.file.details.image?.width || 0,
          height: asset.fields.file.details.image?.height || 0,
        });
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch asset'));
        setLoading(false);
      }
    }

    fetchAsset();
  }, [id]);

  if (loading) {
    return <div className={`animate-pulse bg-gray-200 ${className}`} />;
  }

  if (error || !data) {
    console.error('Error loading image:', error);
    return null;
  }

  return (
    <img
      src={`https:${data.url}`}
      alt={alt || data.description || data.title}
      width={width || data.width}
      height={height || data.height}
      className={className}
    />
  );
}
