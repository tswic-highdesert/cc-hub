import React from 'react';
import { Layout } from '../components/Layout';
import { PageHero } from '../components/PageHero';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { GalleryFilters } from '../components/gallery/GalleryFilters';
import { useGallery } from '../hooks/useGallery';
import type { GalleryFilters as GalleryFiltersType } from '../types/gallery';
import { Button } from '../components/Button';
import { Helmet } from 'react-helmet-async';

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
    <>
      <Helmet>
        <title>Gallery | Co-Create Innovation Hub</title>
        <meta name="description" content="Explore photos of our coworking spaces, meeting rooms, and community events at Co-Create Innovation Hub." />
        <link rel="canonical" href="https://cc-hub.com/gallery" />
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Gallery | Co-Create Innovation Hub" />
        <meta property="og:description" content="Explore photos of our coworking spaces, meeting rooms, and community events at Co-Create Innovation Hub." />
        <meta property="og:image" content="https://images.ctfassets.net/472n3jj0rqks/5DVTh80kNoaqqQtwbyBHCY/3f35fc4e6e8cf22e4d139a08eef2966c/CoCreateInnovHub_Logo.png" />
        <meta property="og:url" content="https://cc-hub.com/gallery" />
        <meta property="og:type" content="website" />
        {/* CollectionPage JSON-LD schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Gallery | Co-Create Innovation Hub",
            "description": "A collection of images showcasing our coworking space, events, and meeting rooms.",
            "url": "https://cc-hub.com/gallery"
          })}
        </script>
      </Helmet>

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
    </>
  );
}
