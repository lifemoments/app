# Life Moments Wedding Site

A configurable wedding website package for ceremonies, RSVP, photos, videos, YouTube livestreams, and venue maps.

## Run it locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173/`.

## Build for production

```bash
npm run build
```

The deployable output is written to `dist/`.

## Customize a wedding

Most wedding-specific content lives in `src/config/wedding.ts`.

Update these fields for each marriage:

- `couple`: names, tagline, and story.
- `weddingDate`: the main date used by the countdown.
- `heroImage`: first-screen background image.
- `events`: add Haldi, Engagement, Wedding, Reception, Cocktail, Sangeet, or any custom event.
- `gallery`: photos, videos, and YouTube embeds.
- `livestream`: YouTube live video id and start time.
- `rsvp`: deadline, contact details, and optional `formEndpoint`.

## RSVP delivery

By default, RSVP submissions are saved in the visitor's browser with `localStorage` so the flow works without a backend.

To collect real submissions, set `rsvp.formEndpoint` in `src/config/wedding.ts` to a POST endpoint from Formspree, Basin, Netlify Forms, your own API, or any compatible service.

## Maps

Each event has a `venue` with a `mapQuery`. The site automatically creates:

- an embedded Google map
- a Google Maps directions link
- an Apple Maps directions link

You can override generated links with `googleMapsUrl` or `appleMapsUrl` per venue.

## Extend the package

The app is organized by reusable sections in `src/components/` and shared data types in `src/types.ts`. Add new wedding concepts by extending `WeddingConfig`, then rendering the new data in a dedicated component.
