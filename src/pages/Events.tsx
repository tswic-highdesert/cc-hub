import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAccessToken } from '../lib/getAccessToken';
import EventCard from '../components/EventCard';
import { Layout } from '../components/Layout';
import { Helmet } from 'react-helmet-async';

interface ArchieEvent {
  uuid: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  cancelled: boolean;
  slug: string;
  cover?: string;
  price?: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<ArchieEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showPastEvents, setShowPastEvents] = useState<boolean>(false);

  useEffect(() => {
    const fetchEvents = async () => {
      console.log('[Events] Fetching token...');
      const token = await getAccessToken();
      if (!token) {
        console.warn('[Events] No token retrieved.');
        return;
      }

      console.log('[Events] Fetching events...');
      try {
        const res = await axios.get(
          `https://api.archieapp.co/v1/spaces/${import.meta.env.VITE_ARCHIE_SPACE_DOMAIN}/events?withEnded=true`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const raw = res.data;
        const parsed = Array.isArray(raw) ? raw : raw.data || [];

        console.log('[Events] Parsed Events Array:', parsed);
        setEvents(parsed);
      } catch (err) {
        console.error('[Events] Failed to fetch events:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const now = new Date();

  const upcomingEvents = events.filter(
    (event) => new Date(event.end_date) >= now && !event.cancelled
  );

  const pastEvents = events.filter(
    (event) => new Date(event.end_date) < now && !event.cancelled
  );

  const jsonLdObject = {
    "@context": "https://schema.org",
    "@graph": upcomingEvents.map(event => ({
      "@type": "Event",
      "name": event.title,
      "description": event.description,
      "image": event.cover || "https://images.ctfassets.net/472n3jj0rqks/5DVTh80kNoaqqQtwbyBHCY/3f35fc4e6e8cf22e4d139a08eef2966c/CoCreateInnovHub_Logo.png",
      "startDate": event.start_date,
      "endDate": event.end_date,
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "Co-Create Innovation Hub",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "215 S Arkansas Ave",
          "addressLocality": "Russellville",
          "addressRegion": "AR",
          "postalCode": "72801"
        }
      },
      "organizer": {
        "@type": "Organization",
        "name": "Co-Create Innovation Hub",
        "url": "https://cc-hub.com"
      },
      "offers": {
        "@type": "Offer",
        "url": `https://your-archie-space.archieapp.co/events/${event.slug}`,
        "price": event.price || "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": event.start_date
      }
    }))
  };

  const jsonLdString = JSON.stringify(jsonLdObject);

  if (loading) return <p>Loading events...</p>;

  if (!loading && events.length === 0) {
    return <p>No events found. Check the API response in console.</p>;
  }

  return (
    <>
      <Helmet>
        <title>Events | Co-Create Innovation Hub</title>
        <meta name="description" content="Join upcoming events, workshops, and community gatherings at Co-Create Innovation Hub in Russellville, AR." />
        <link rel="canonical" href="https://cc-hub.com/events" />
        {upcomingEvents.length > 0 && (
          <script type="application/ld+json">
            {jsonLdString}
          </script>
        )}
      </Helmet>

      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Events</h1>
          <section>
            <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
            {upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.uuid} {...event} hideDescription={true} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400">No upcoming events.</p>
            )}
          </section>
          <section className="mt-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Past Events</h2>
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setShowPastEvents(!showPastEvents)}
              >
                {showPastEvents ? 'Hide Past Events' : 'Show Past Events'}
              </button>
            </div>
            {showPastEvents && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event) => (
                  <EventCard key={event.uuid} {...event} hideDescription={true} />
                ))}
              </div>
            )}
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Events;
