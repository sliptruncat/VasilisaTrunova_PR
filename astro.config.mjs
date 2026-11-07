// @ts-check
import { defineConfig } from 'astro/config';

// SITE и BASE задаются при публикации (см. README):
//   свой домен  → SITE=https://vasilisatrunova.ru  BASE=/
//   GitHub Pages → SITE=https://<логин>.github.io   BASE=/<репозиторий>/
export default defineConfig({
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
