import { createClient } from 'contentful';
import { contentfulConfig } from '../config/contentful';
import type { Asset, ContentfulImage } from '../types/contentful';

console.log('Contentful config:', {
  space: contentfulConfig.space,
  accessTokenLength: contentfulConfig.accessToken?.length || 0
});

const client = createClient({
  space: contentfulConfig.space,
  accessToken: contentfulConfig.accessToken,
});

export async function getAsset(id: string): Promise<Asset | null> {
  try {
    const asset = await client.getAsset(id);
    return {
      title: asset.fields.title,
      description: asset.fields.description,
      url: `https:${asset.fields.file.url}`,
      width: asset.fields.file.details.image?.width || 0,
      height: asset.fields.file.details.image?.height || 0,
    };
  } catch (error) {
    console.error('Error fetching asset:', error);
    return null;
  }
}

export function parseContentfulImage(image: ContentfulImage): Asset {
  return {
    title: image.fields.title,
    description: image.fields.description,
    url: `https:${image.fields.file.url}`,
    width: image.fields.file.details.image.width,
    height: image.fields.file.details.image.height,
  };
}

export { client };
