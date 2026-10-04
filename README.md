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

## Deployment

GitHub Actions builds `kant-app` and publishes its build artifact when source changes are pushed to `main`.
Set Settings → Pages → Source to **GitHub Actions**.
The workflow preserves source files and does not write build output back to Git.
The root build files are retained as a legacy snapshot; the workflow publishes `kant-app/build`.
