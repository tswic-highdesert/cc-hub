import React from 'react';
import { Button } from './Button'; // Import Button component

interface EventCardProps {
  uuid: string;
  title: string;
  description?: string;
  start_date: string;
  end_date: string;
  slug: string;
  cover?: string;
  hideDescription?: boolean;
}

const fallbackCover = 'https://placehold.co/600x300?text=No+Image';

const EventCard: React.FC<EventCardProps> = ({
  uuid,
  title,
  description,
  start_date,
  end_date,
  slug,
  cover,
  hideDescription = false,
}) => {
  const space = import.meta.env.VITE_ARCHIE_SPACE_DOMAIN;
  const eventUrl = `https://archieapp.co/${space}/public/events/${slug}`;
  const coverUrl = cover ? `https://archieapp.co${cover}` : fallbackCover;

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div key={uuid} className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
      <img
        src={coverUrl}
        alt={title}
        className="w-full h-48 object-cover"
        onError={(e) => ((e.target as HTMLImageElement).src = fallbackCover)}
      />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        {!hideDescription && (
          <p className="text-sm text-gray-600 flex-1">{description}</p>
        )}
        <p className="text-sm text-gray-500 mt-2">
          {formatDate(start_date)} — {formatDate(end_date)}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-3"
          onClick={() => window.open(eventUrl, '_blank')}
        >
          View & RSVP
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
