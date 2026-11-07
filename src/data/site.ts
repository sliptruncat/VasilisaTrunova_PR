import type { L } from '@/i18n/ui';

export const contacts = {
  email: 'trunova200855@gmail.com',
  telegram: 'sliptruncat',
  vk: 'sliptruncat',
  /** Резюме для кнопки «Резюме PDF» (лежит в public/files). */
  cv: 'files/Trunova_CV_RU.pdf',
  /** Адрес Cloudflare Worker, который пересылает заявки в Telegram (см. README). Пусто — форма открывает чат. */
  formEndpoint: 'https://formspree.io/f/myeeajna',
};

/** Real, verifiable figures only — see Резюме_хронология.md for sources. */
export const stats: { value: number; suffix: string; label: L; tone: 'berry' | 'lemon' | 'surface' | 'mulberry' }[] = [
  { value: 6, suffix: '+', tone: 'berry', label: { ru: 'лет в PR, маркетинге и коммуникациях', en: 'years in PR, marketing & communications' } },
  { value: 200, suffix: '+', tone: 'lemon', label: { ru: 'интеграций с блогерами', en: 'influencer integrations' } },
  { value: 30, suffix: '+', tone: 'surface', label: { ru: 'аудитов коммуникаций брендов', en: 'brand communication audits' } },
  { value: 4, suffix: '', tone: 'mulberry', label: { ru: 'проекта, где я руководила отделом коммуникаций', en: 'projects where I headed communications' } },
];

export const approach = {
  title: { ru: 'Сначала стратегия, потом контент', en: 'Strategy first, content second' },
  steps: [
    { title: { ru: 'Аудит', en: 'Audit' }, text: { ru: 'Изучаю аудиторию, конкурентов, медиаполе и метрики.', en: 'Audience, competitors, media landscape and metrics.' } },
    { title: { ru: 'Стратегия', en: 'Strategy' }, text: { ru: 'Позиционирование, каналы, медиаплан и KPI.', en: 'Positioning, channels, media plan and KPIs.' } },
    { title: { ru: 'Запуск', en: 'Launch' }, text: { ru: 'СМИ, блогеры, контент и мероприятия, сама или с командой.', en: 'Media, influencers, content and events — solo or with a team.' } },
    { title: { ru: 'Оценка', en: 'Review' }, text: { ru: 'Считаю результат и корректирую план.', en: 'I measure the results and adjust the plan.' } },
  ] as { title: L; text: L }[],
};

/** “Teaching & mentoring” block — kept from the first portfolio. */
export const teaching = {
  title: { ru: 'Учу других тому, что делаю сама', en: 'I teach what I do' },
  items: [
    { n: '~200', title: { ru: 'Куратор направления «Веб-дизайн»', en: 'Web design track curator' }, text: { ru: 'Медиашкола Института общественных наук РАНХиГС, 2022. Лекции потоку, проверка работ и обратная связь.', en: 'Media school of the RANEPA Institute of Social Sciences, 2022. Lectures, reviewing student work and feedback.' } },
    { n: '150', title: { ru: 'Лекции по SMM', en: 'Social media lectures' }, text: { ru: '«Создание контент-плана» для студентов РАНХиГС, 2023.', en: '“Building a content plan” for RANEPA students, 2023.' } },
  ] as { n: string; title: L; text: L }[],
  photoCaption: { ru: 'Тест-драйв премии «Топ-5 Авто», ИД «Дискавери»', en: 'Test drive for the Top-5 Auto award, Discovery Publishing' },
};

/** Smaller projects shown as windows under the case folders (no separate case page). */
export const moreWork: { file: string; tag: L; title: L; role: L; text: L; metrics: L<string[]>; details: L<string[]>; accent?: boolean }[] = [
  {
    file: 'audits_2025-2026', accent: true,
    tag: { ru: 'Консалтинг', en: 'Consulting' },
    title: { ru: '30+ аудитов брендов', en: '30+ brand audits' },
    role: { ru: 'Частная практика · сентябрь 2025 — июль 2026', en: 'Independent practice · Sept 2025 — July 2026' },
    text: { ru: 'Бренды одежды, beauty, HoReCa, образовательные и медиапроекты: разбираю коммуникации и даю план, что менять.', en: 'Fashion, beauty, hospitality, education and media brands: I review their communications and give a plan of what to change.' },
    metrics: { ru: ['аудит соцсетей и сайта', 'позиционирование', 'стратегия'], en: ['social & website audit', 'positioning', 'strategy'] },
    details: { ru: ['Анализ аккаунтов, ЦА и конкурентов', 'Рекомендации по контенту и продвижению', 'Стратегия личного бренда для модели и блогера'], en: ['Account, audience and competitor analysis', 'Content and promotion recommendations', 'Personal brand strategy for a model and creator'] },
  },
  {
    file: 'arzu_italy',
    tag: { ru: 'Fashion · Италия', en: 'Fashion · Italy' },
    title: { ru: 'Arzu', en: 'Arzu' },
    role: { ru: 'Руководитель отдела коммуникаций · команда 5 человек · 2025', en: 'Head of communications · team of 5 · 2025' },
    text: { ru: 'Аудит коммуникаций итальянского бренда одежды и новая стратегия соцсетей.', en: 'Communications audit for an Italian clothing brand and a new social media strategy.' },
    metrics: { ru: ['полный аудит', 'стратегия SMM', 'сценарии видео'], en: ['full audit', 'social media strategy', 'video scripts'] },
    details: { ru: ['Аудит аккаунтов и конкурентов', 'Контент-план', 'Сценарии Reels'], en: ['Account and competitor audit', 'Content plan', 'Reels scripts'] },
  },
];

export const hero = {
  eyebrow: { ru: 'Personal portfolio / 2026', en: 'Personal portfolio / 2026' },
  lead: {
    ru: 'PR, маркетинг и креативные коммуникации на стыке стратегии, контента и продакшна.',
    en: 'PR, marketing and creative communications where strategy, content and production meet.',
  },
  note: ['Strategy', 'Marketing', 'PR', 'Creative'],
};

export const intro = {
  title: { ru: 'Строю коммуникации от идеи до результата', en: 'I build communications from idea to results' },
  text: {
    ru: 'Я PR- и маркетинг-специалист с опытом в международном агентстве, in-house и на собственных проектах. Исследую аудиторию и рынок, нахожу позиционирование, пишу стратегию и довожу её до запуска: СМИ, блогеры, контент, мероприятия. Работала с культурой, музыкой, beauty и медициной, fashion, B2B и медиа.',
    en: 'I am a PR and marketing specialist with experience at an international agency, in-house and on my own projects. I research the audience and the market, find the positioning, write the strategy and take it all the way to launch: media, influencers, content and events. I have worked with culture, music, beauty and medicine, fashion, B2B and media.',
  },
};
