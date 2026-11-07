import type { L } from '@/i18n/ui';

export const degrees: { title: L; detail: L; period: L }[] = [
  {
    title: { ru: 'РАНХиГС, бакалавриат', en: 'RANEPA, Bachelor’s degree' },
    detail: { ru: 'Реклама и связи с общественностью · диплом с отличием', en: 'Advertising & Public Relations · with honours' },
    period: { ru: '2021 — 2025', en: '2021 — 2025' },
  },
  {
    title: { ru: 'РАНХиГС, магистратура', en: 'RANEPA, Master’s degree' },
    detail: { ru: 'Управление публичными коммуникациями · окончание в 2028', en: 'Public Communications Management · expected 2028' },
    period: { ru: '2026 — 2028', en: '2026 — 2028' },
  },
];

/** RANEPA professional development certificates, 7 May — 7 June 2025 (issued 11.09.2025). */
export const certificates: { title: L; hours: number }[] = [
  { title: { ru: 'Брендинг', en: 'Branding' }, hours: 42 },
  { title: { ru: 'Pro журнал: издательские стратегии и редакторские практики', en: 'Pro Journal: publishing strategies and editorial practice' }, hours: 42 },
  { title: { ru: 'Эффективное управление маркетингом', en: 'Effective marketing management' }, hours: 36 },
  { title: { ru: 'Организация и стратегия бизнеса', en: 'Business organisation and strategy' }, hours: 36 },
  { title: { ru: 'Маркетинг в интернете', en: 'Internet marketing' }, hours: 24 },
  { title: { ru: 'HR-менеджмент организации', en: 'HR management' }, hours: 24 },
];

export const awards: { title: L; year: string }[] = [
  { title: { ru: 'Победитель II степени, VIII Международная олимпиада по рекламе и связям с общественностью', en: '2nd-degree winner, VIII International Olympiad in Advertising & PR' }, year: '2026' },
  { title: { ru: '2 место, XX Международная научно-практическая конференция: статья о PR-продвижении Газпромбанка', en: '2nd place, XX International Research Conference: paper on Gazprombank’s PR' }, year: '2026' },
  { title: { ru: 'Статья «Медиаобраз римско-католического кафедрального собора…», СибАК', en: 'Paper on the media image of the Roman Catholic Cathedral, SibAK' }, year: '2025' },
  { title: { ru: 'X Всероссийская конференция молодых исследователей ИОН РАНХиГС', en: 'X All-Russian Young Researchers Conference, RANEPA IOS' }, year: '2023' },
  { title: { ru: 'Благодарность фонда «Предпринимательство — детям» за экспертизу бизнес-проектов', en: 'Letter of thanks from the Entrepreneurship for Children foundation for project assessment' }, year: '' },
];
