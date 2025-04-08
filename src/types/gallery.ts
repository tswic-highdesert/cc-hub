import { Asset } from './contentful';

export interface GalleryImage {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    description?: string;
    tags?: string[];
    image?: {
      fields?: {
        file?: {
          url: string;
          details?: {
            image?: {
              width: number;
              height: number;
            }
          }
        }
      }
    };
    site: string[];
  };
}

export interface GalleryFilters {
  tags?: string[];
}

export interface ProcessedGalleryImage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  width: number;
  height: number;
  tags: string[];
}
