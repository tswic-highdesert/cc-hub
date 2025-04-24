import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAccessToken } from '../lib/getAccessToken';
import EventCard from './EventCard';

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

const ArchieEvents: React.FC = () => {
  const [events, setEvents] = useState<ArchieEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  if (loading) return <p>Loading events...</p>;

  if (!loading && events.length === 0) {
    return <p>No events found. Check the API response in console.</p>;
  }

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.slice(0, 3).map((event) => (
              <EventCard key={event.uuid} {...event} hideDescription={true} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400">No upcoming events.</p>
        )}
      </section>
    </div>
  );
};

export default ArchieEvents;
