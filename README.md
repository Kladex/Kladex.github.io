# Kant Resume

Live website: https://kladex.github.io/

The original React + TypeScript source is preserved in `kant-app/`.
The root `index.html`, `static/`, and other root assets are the currently deployed website.

## Local development

```sh
cd kant-app
npm ci
npm start
```

To build locally, run `npm run build` inside `kant-app`.

## Deployment caution

The original `npm run deploy` script uses `gh-pages -b main -d build`.
Do not use that script unchanged: it replaces the contents of `main` with build output and can remove the preserved source.
For a future deployment, use a separate publishing branch or GitHub Actions, or update only the root build assets while retaining `kant-app/`.
