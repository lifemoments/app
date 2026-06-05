# Wedding Folders

Each wedding should live in its own folder:

```text
src/weddings/
  nithin-teju/
    wedding.ts
  another-couple/
    wedding.ts
```

The shared website engine reads a `WeddingConfig` object from each folder. To add a new wedding:

1. Copy `src/weddings/_template/wedding.ts` into a new slug folder.
2. Rename the exported constant.
3. Set a unique `slug`.
4. Choose a `theme.name` or add `theme.overrides`.
5. Register it in `src/weddings/index.ts`.

The slug is the public URL segment when hosting multiple weddings from one Vercel project, for example `/nithin-teju`.

For a dedicated Vercel project per wedding, set this environment variable:

```text
VITE_WEDDING_SLUG=nithin-teju
```

## Themes

Available theme presets:

- `rose`
- `emerald`
- `royal`
- `coastal`
- `midnight`

Use a preset for each wedding:

```ts
theme: {
  name: "royal",
}
```

Or override specific tokens:

```ts
theme: {
  name: "midnight",
  overrides: {
    accent: "#c9973d",
    dark: "#151821",
  },
}
```

Theme definitions live in `src/themes.ts`.

## RSVP

For free RSVP collection, use Google Forms. Add the public link and optional embed link to the wedding config:

```ts
rsvp: {
  deadline: "2026-08-15",
  contactName: "Yash",
  contactPhone: "+1 469-996-4010",
  googleFormUrl: "https://forms.gle/your-form-link",
  googleFormEmbedUrl: "https://docs.google.com/forms/d/e/your-form-id/viewform?embedded=true",
}
```

Leave both fields empty only for local demo RSVP behavior.
