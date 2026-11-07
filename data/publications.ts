import type { L } from '@/i18n/ui';

/**
 * Media coverage and publications. To add one: copy a block, fill in outlet, title, date, url and note.
 * Entries with an empty url are shown as “add publication” placeholders.
 */
export const publications: { outlet: string; title: L; date: L; url: string; note: L }[] = [
  {
    outlet: 'РИА Новости',
    title: { ru: 'В Москве вручили награды лауреатам премии имени Фазиля Искандера', en: 'Fazil Iskander Prize winners honoured in Moscow' },
    date: { ru: '21 марта 2026', en: '21 March 2026' },
    url: 'https://ria.ru/20260321/premiya-2082474733.html',
    note: { ru: 'Публикация по моему питчу', en: 'Coverage from my pitch' },
  },
  {
    outlet: 'Forbes Life',
    title: { ru: 'Аппаратное будущее: как искусственный интеллект меняет индустрию косметологии', en: 'The hardware future: how AI is changing cosmetology' },
    date: { ru: 'ABLAB Pro', en: 'ABLAB Pro' },
    url: 'https://www.forbes.ru/forbeslife/502497-apparatnoe-budusee-kak-iskusstvennyj-intellekt-menaet-industriu-kosmetologii',
    note: { ru: 'Пример публикации в рамках работы в агентстве', en: 'An example of agency coverage' },
  },
  {
    outlet: 'Сборник научных трудов «Иннова»',
    title: { ru: 'Пиар-продвижение в банковской среде на примере АО «Газпромбанк»', en: 'PR promotion in banking: the case of Gazprombank' },
    date: { ru: '15 июля 2026 · с. 48', en: '15 July 2026 · p. 48' },
    url: 'https://innova-science.ru/wp-content/uploads/2026/07/sbornik-nauchnyh-trudov-15.07.2026-sni-20.pdf',
    note: { ru: 'Научная публикация, 2 место на конференции', en: 'Research paper, 2nd place at the conference' },
  },
];
