import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAccessToken } from '../lib/getAccessToken';
import EventCard from '../components/EventCard';
import { Layout } from '../components/Layout';

interface ArchieEvent {
  uuid: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  cancelled: boolean;
  slug: string;
  cover?: string;
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
          `https://api.archieapp.co/v1/spaces/${import.meta.env.VITE_ARCHIE_SPACE_DOMAIN}/events`,
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

  if (loading) return <p>Loading events...</p>;

  if (!loading && events.length === 0) {
    return <p>No events found. Check the API response in console.</p>;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Events</h1>
        <section>
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.uuid} {...event} />
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
                <EventCard key={event.uuid} {...event} />
              ))}
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Events;
