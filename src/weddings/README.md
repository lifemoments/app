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
4. Register it in `src/weddings/index.ts`.

The slug is the public URL segment when hosting multiple weddings from one Vercel project, for example `/nithin-teju`.

For a dedicated Vercel project per wedding, set this environment variable:

```text
VITE_WEDDING_SLUG=nithin-teju
```
