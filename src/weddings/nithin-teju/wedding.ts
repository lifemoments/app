import type { WeddingConfig } from "../../types";

export const nithinTejuWedding: WeddingConfig = {
  slug: "nithin-teju",
  couple: {
    partnerOne: "Nithin",
    partnerTwo: "Tejaswini",
    displayNames: "Nithin & Tejaswini",
    tagline: "Two families, one unforgettable weekend.",
    story:
      "From a coffee that became a tradition to a promise surrounded by the people they love, this celebration is built around warmth, color, music, and every tiny moment in between.",
  },
  weddingDate: "2026-08-29T09:30:00-07:00",
  heroImage:
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=85",
  accent: "#b24b5a",
  invitation: {
    greeting: "With full hearts, we invite you",
    message:
      "Join us for ceremonies, music, food, dancing, blessings, and the people who make this new beginning feel like home.",
  },
  events: [
    {
      id: "haldi",
      title: "Haldi",
      type: "Ceremony",
      date: "2026-08-28",
      startTime: "10:00",
      endTime: "12:00",
      dressCode: "Biege, yellow, or florals",
      note: "Expect turmeric, laughter, and sunlight.",
      image:
        "https://images.unsplash.com/photo-1609151162377-794faf68b02f?auto=format&fit=crop&w=1200&q=80",
      venue: {
        name: "Address here",
        address: "Address here",
        city: "Atlanta, GA",
        mapQuery: "Address here",
      },
    },
    {
      id: "wedding",
      title: "Wedding Ceremony",
      type: "Wedding",
      date: "2026-08-29",
      startTime: "09:30",
      endTime: "12:30",
      dressCode: "Traditional or formal",
      note: "Please arrive 20 minutes early for seating.",
      image:
        "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80",
      venue: {
        name: "Address here",
        address: "Address here",
        city: "Atlanta, GA",
        mapQuery: "Address here",
      },
    },
    {
      id: "reception",
      title: "Reception & Cocktail Party",
      type: "Reception & Cocktail",
      date: "2026-08-29",
      startTime: "18:30",
      endTime: "23:30",
      dressCode: "Black tie optional",
      note: "Dinner, dancing, and a few happy tears.",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      venue: {
        name: "Address here",
        address: "Address here",
        city: "Atlanta, GA",
        mapQuery: "Address here",
      },
    },
  ],
  gallery: [
    {
      id: "engagement-portrait",
      type: "photo",
      title: "Engagement Portrait",
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "proposal",
      type: "photo",
      title: "The Proposal",
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "save-the-date",
      type: "youtube",
      title: "Save the Date Film",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      poster:
        "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  livestream: {
    title: "Wedding Ceremony Live",
    youtubeVideoId: "jfKfPfyJRdk",
    startsAt: "2026-08-29T09:30:00-07:00",
  },
  rsvp: {
    deadline: "2026-08-15",
    contactName: "Yash",
    contactPhone: "+1 469-996-4010",
  },
};
