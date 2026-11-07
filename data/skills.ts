import type { L } from '@/i18n/ui';

export type SkillTone = 'berry' | 'lemon' | 'mulberry' | 'mauve' | 'mink' | 'surface' | 'wine';

/** Competencies and real tools only — no percentage bars. */
export const skillGroups: { key: string; icon: string; tone: SkillTone; title: L; items: L<string[]>; tools: string[] }[] = [
  {
    key: 'pr', icon: 'megaphone', tone: 'berry',
    title: { ru: 'PR и коммуникации', en: 'PR & Communications' },
    items: { ru: ['Media relations и питчинг', 'Пресс- и пост-релизы', 'Кризисные коммуникации', 'Своя база СМИ'], en: ['Media relations & pitching', 'Press and post-releases', 'Crisis communications', 'Own media database'] },
    tools: ['Медиалогия', 'Brand Analytics', 'Pressfeed'],
  },
  {
    key: 'marketing', icon: 'chart', tone: 'lemon',
    title: { ru: 'Маркетинг и стратегия', en: 'Marketing & Strategy' },
    items: { ru: ['Позиционирование', 'Сегментация ЦА', 'Медиапланирование', 'KPI и финплан'], en: ['Positioning', 'Audience segmentation', 'Media planning', 'KPIs and budgeting'] },
    tools: ['Google Sheets', 'Excel'],
  },
  {
    key: 'digital', icon: 'screen', tone: 'mulberry',
    title: { ru: 'Цифровой маркетинг', en: 'Digital Marketing' },
    items: { ru: ['SMM и контент-планы', 'Influencer-маркетинг', 'Таргет и контекст', 'Посевы в Telegram'], en: ['Social media & content plans', 'Influencer marketing', 'Paid social and search', 'Telegram placements'] },
    tools: ['Яндекс.Директ', 'VK Ads', 'TGStat', 'Popsters', 'LiveDune'],
  },
  {
    key: 'creative', icon: 'palette', tone: 'mauve',
    title: { ru: 'Креатив и дизайн', en: 'Creative & Design' },
    items: { ru: ['Визуальные концепции', 'Фирменный стиль', 'Сценарии для видео', 'Презентации'], en: ['Visual concepts', 'Visual identity', 'Video scripts', 'Presentations'] },
    tools: ['Figma', 'ИИ и вайб-кодинг'],
  },
  {
    key: 'events', icon: 'ticket', tone: 'mink',
    title: { ru: 'Ивенты и партнёрства', en: 'Events & Partnerships' },
    items: { ru: ['Организация мероприятий', 'Работа со спикерами и гостями', 'Партнёрские предложения', 'Тест-драйвы'], en: ['Event management', 'Speakers and guests', 'Partnership proposals', 'Test drives'] },
    tools: [],
  },
  {
    key: 'analytics', icon: 'search', tone: 'surface',
    title: { ru: 'Аналитика и исследования', en: 'Analytics & Research' },
    items: { ru: ['Аудит соцсетей и сайтов', 'Конкурентный анализ', 'SWOT', 'Интент-анализ, дашборды'], en: ['Social and website audits', 'Competitor analysis', 'SWOT', 'Intent analysis, dashboards'] },
    tools: ['SimilarWeb', 'Semrush', 'DataLens'],
  },
  {
    key: 'pm', icon: 'board', tone: 'wine',
    title: { ru: 'Управление проектами', en: 'Project Management' },
    items: { ru: ['Команды до 7 человек', 'Постановка задач и контроль', 'Подрядчики', 'Отчётность'], en: ['Teams of up to 7', 'Tasking and control', 'Contractors', 'Reporting'] },
    tools: [],
  },
];
