# Unbox Korea

A landing page for discovering and sharing Korean culture and stories.

## App structure

- `src/App.jsx` maps browser URLs to page components with React Router.
- `src/components/` contains shared navigation, layout, page intro, and login form components.
- `src/pages/` contains the home, about, information, board, contact, login, privacy, and not-found pages.
- `public/_redirects` preserves the previous `.html` URLs for the about and privacy pages.

The board, contact channel, and authentication are currently presentation-only and are not connected to a backend.

## Getting started

With Node.js and pnpm installed, run:

```bash
pnpm install
pnpm dev
```

Run `pnpm build` to create a production build.

The login, board, and customer inquiry screens are UI previews and are not connected to authentication, posting, or a message service yet.
