export interface Asset {
  title: string;
  description: string;
  url: string;
  width: number;
  height: number;
}

export interface PageHero {
  fields: {
    slug: string;
    backgroundImage: {
      fields: {
        file: {
          url: string;
        }
      }
    }
  }
}

export interface ContentfulImage {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        image: {
          width: number;
          height: number;
        }
      }
    }
  }
}

export interface ContentfulEntry<T> {
  fields: T;
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
}
