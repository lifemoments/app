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

Wedding-specific content lives in separate folders under `src/weddings/`.

Current wedding:

```text
src/weddings/nithin-teju/wedding.ts
```

The older `src/config/wedding.ts` file only re-exports Nithin and Teju's config for compatibility while the project moves to the folder-based structure.

Update these fields for each marriage:

- `couple`: names, tagline, and story.
- `weddingDate`: the main date used by the countdown.
- `heroImage`: first-screen background image.
- `events`: add Haldi, Engagement, Wedding, Reception, Cocktail, Sangeet, or any custom event.
- `gallery`: photos, videos, and YouTube embeds.
- `livestream`: YouTube live video id and start time.
- `rsvp`: deadline, contact details, and optional `formEndpoint`.

## Add another wedding

1. Copy `src/weddings/_template/wedding.ts` into a new folder such as `src/weddings/arya-dev/`.
2. Change `slug` to the folder name, for example `arya-dev`.
3. Update names, dates, events, gallery, livestream, RSVP, and venues.
4. Register the config in `src/weddings/index.ts`.

Example registry entry:

```ts
import { aryaDevWedding } from "./arya-dev/wedding";

export const weddings = {
  [nithinTejuWedding.slug]: nithinTejuWedding,
  [aryaDevWedding.slug]: aryaDevWedding,
};
```

## Vercel hosting

You have two clean options:

- One Vercel project hosting many weddings: use URLs like `/nithin-teju` and `/arya-dev`.
- One Vercel project per wedding: set `VITE_WEDDING_SLUG=nithin-teju` in that project's environment variables.

`vercel.json` rewrites all paths to the React app, so refreshing `/nithin-teju` still works.

## RSVP delivery

By default, RSVP submissions are saved in the visitor's browser with `localStorage` so the flow works without a backend.

To collect real submissions, set `rsvp.formEndpoint` in that wedding's `wedding.ts` file to a POST endpoint from Formspree, Basin, Netlify Forms, your own API, or any compatible service.

## Maps

Each event has a `venue` with a `mapQuery`. The site automatically creates:

- an embedded Google map
- a Google Maps directions link
- an Apple Maps directions link

You can override generated links with `googleMapsUrl` or `appleMapsUrl` per venue.

## Extend the package

The app is organized by reusable sections in `src/components/` and shared data types in `src/types.ts`. Add new wedding concepts by extending `WeddingConfig`, then rendering the new data in a dedicated component.
