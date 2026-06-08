import { ExternalLink, MapPinned, Navigation } from "lucide-react";
import type { WeddingEvent, Venue } from "../types";

type VenuesProps = {
  events: WeddingEvent[];
};

type VenueGroup = Venue & {
  events: string[];
};

const getGoogleEmbedUrl = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

const getVenueMapQuery = (venue: Venue) => {
  const configuredQuery = venue.mapQuery?.trim();
  const isPlaceholder = !configuredQuery || configuredQuery.toLowerCase() === "address here";

  return isPlaceholder ? [venue.name, venue.address, venue.city].filter(Boolean).join(", ") : configuredQuery;
};

const getGoogleMapsUrl = (venue: Venue) =>
  venue.googleMapsUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(getVenueMapQuery(venue))}`;

const getAppleMapsUrl = (venue: Venue) =>
  venue.appleMapsUrl ?? `https://maps.apple.com/?q=${encodeURIComponent(getVenueMapQuery(venue))}`;

export function Venues({ events }: VenuesProps) {
  const venues = events.reduce<VenueGroup[]>((groups, event) => {
    const existing = groups.find((venue) => venue.name === event.venue.name && venue.address === event.venue.address);

    if (existing) {
      existing.events.push(event.title);
      return groups;
    }

    return [...groups, { ...event.venue, events: [event.title] }];
  }, []);

  return (
    <section id="venues" className="section venues-section">
      <div className="section-heading">
        <p className="eyebrow">Venues</p>
        <h2>Open directions in Google Maps or Apple Maps.</h2>
      </div>
      <div className="venue-grid">
        {venues.map((venue) => (
          <article className="venue-card" key={`${venue.name}-${venue.address}`}>
            <div className="map-frame">
              <iframe src={getGoogleEmbedUrl(getVenueMapQuery(venue))} title={`${venue.name} map`} loading="lazy" />
            </div>
            <div className="venue-body">
              <p className="event-type">
                <MapPinned size={16} />
                {venue.events.join(" + ")}
              </p>
              <h3>{venue.name}</h3>
              <p>
                {venue.address}
                <br />
                {venue.city}
              </p>
              <div className="venue-actions">
                <a href={getGoogleMapsUrl(venue)} target="_blank" rel="noreferrer">
                  <Navigation size={17} />
                  Google
                  <ExternalLink size={14} />
                </a>
                <a href={getAppleMapsUrl(venue)} target="_blank" rel="noreferrer">
                  <Navigation size={17} />
                  Apple
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
