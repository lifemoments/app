export type Attendance = "yes" | "maybe" | "no";

export type Venue = {
  name: string;
  address: string;
  city: string;
  mapQuery: string;
  googleMapsUrl?: string;
  appleMapsUrl?: string;
};

export type WeddingEvent = {
  id: string;
  title: string;
  type: string;
  date: string;
  startTime: string;
  endTime?: string;
  dressCode?: string;
  note?: string;
  venue: Venue;
  image: string;
};

export type MediaItem = {
  id: string;
  type: "photo" | "video" | "youtube";
  title: string;
  src: string;
  poster?: string;
};

export type WeddingConfig = {
  couple: {
    partnerOne: string;
    partnerTwo: string;
    displayNames: string;
    tagline: string;
    story: string;
  };
  weddingDate: string;
  heroImage: string;
  accent: string;
  invitation: {
    greeting: string;
    message: string;
  };
  events: WeddingEvent[];
  gallery: MediaItem[];
  livestream?: {
    title: string;
    youtubeVideoId: string;
    startsAt: string;
  };
  rsvp: {
    deadline: string;
    contactName: string;
    contactPhone: string;
    formEndpoint?: string;
  };
};

export type RsvpSubmission = {
  name: string;
  email: string;
  phone: string;
  attendance: Attendance;
  guests: number;
  selectedEvents: string[];
  message: string;
};
