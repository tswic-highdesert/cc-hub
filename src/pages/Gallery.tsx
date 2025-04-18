import React from 'react';
import { Layout } from '../components/Layout';
import { PageHero } from '../components/PageHero';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { GalleryFilters } from '../components/gallery/GalleryFilters';
import { useGallery } from '../hooks/useGallery';
import type { GalleryFilters as GalleryFiltersType } from '../types/gallery';
import { Button } from '../components/Button';

export default function Gallery() {
  const [page, setPage] = React.useState(1);
  const [filters, setFilters] = React.useState<GalleryFiltersType>({});

  // Persist filters in URL
  React.useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const urlFilters: GalleryFiltersType = {};
    if (searchParams.has('tags')) {
      urlFilters.tags = searchParams.get('tags')?.split(',');
    }

    setFilters(urlFilters);
  }, []);

  // Update URL when filters change
  React.useEffect(() => {
    const searchParams = new URLSearchParams();

    if (filters.tags?.length) {
      searchParams.set('tags', filters.tags.join(','));
    }

    const newUrl = `${window.location.pathname}${
      searchParams.toString() ? `?${searchParams.toString()}` : ''
    }`;
    window.history.pushState({}, '', newUrl);
  }, [filters]);

  const { images, loading, error, totalPages } = useGallery(filters, page);

  const handleFiltersChange = (newFilters: GalleryFiltersType) => {
    setFilters(newFilters);
    setPage(1); // Reset to first page when filters change
  };

  const loadMore = () => {
    setPage(p => Math.min(p + 1, totalPages));
  };

  return (
    <Layout>
      <PageHero
        slug="gallery"
        title="Our Space Gallery"
        description="Take a visual journey through our modern facilities and historic building."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="bg-gradient-to-br from-[#f0f7fc] to-white py-20">
        <div className="container mx-auto px-4">
          <GalleryFilters
            filters={filters}
            onFiltersChange={handleFiltersChange}
            className="mb-12"
          />
          <GalleryGrid
            images={images}
            loading={loading}
            error={error}
          />
          
          {page < totalPages && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                onClick={loadMore}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Load More'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
