# Astro with i18next Example

⚠️ Note: This isn't complete yet.

An opinionated approach to translation with Astro and i18next.

- [![Netlify Status](https://api.netlify.com/api/v1/badges/8dd962b7-a461-4ddd-b602-26c5f4e4d18d/deploy-status)](https://app.netlify.com/sites/astro-example-i18next/deploys) English [astro-example-i18next.netlify.app](https://astro-example-i18next.netlify.app/)
- [![Netlify Status](https://api.netlify.com/api/v1/badges/71bdb037-6e05-4cf4-a586-ef91502df91e/deploy-status)](https://app.netlify.com/sites/astro-example-i18next-es/deploys) Spanish [astro-example-i18next-es.netlify.app/](https://astro-example-i18next-es.netlify.app/)
- [![Netlify Status](https://api.netlify.com/api/v1/badges/c6414a8d-6b12-4577-9f8c-88d86915e5e1/deploy-status)](https://app.netlify.com/sites/astro-example-i18next-fr/deploys) French [astro-example-i18next-fr.netlify.app/](https://astro-example-i18next-fr.netlify.app/)

## Technology overview

- [Astro](https://astro.build/)
- [i18next](https://www.i18next.com/)
- [react-i18next](https://react.i18next.com/)
- [i18next-parser](https://github.com/i18next/i18next-parser)
- Hosted on Netlify

## Translation overview

- Translation is done at build time
- This is a domain (would also work for subdomain) approach for locales. Each language has a different domain
- Each language has a separate site in Netlify
- The `LANGUAGE` env var is used to specify which locale to build for; `LANGUAGE=es yarn build`
- English is the default and fallback language. If a translation is not available in the requested language, we use the English version to avoid blank strings
- When possible, we use the English text as the key for each translation in the locale files. This makes it easier to edit text in pages, components, etc. since it lets us see the text.
