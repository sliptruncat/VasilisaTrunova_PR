// @ts-check
import { defineConfig } from 'astro/config';

// The project source folders (pages, components, layouts, views, data) live at the repository root.
// GitHub Actions supplies SITE and BASE for the project Pages URL.
export default defineConfig({
  srcDir: './',
  site: process.env.SITE || 'https://sliptruncat.github.io',
  base: process.env.BASE || '/',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  image: { responsiveStyles: true },
  devToolbar: { enabled: false },
});
