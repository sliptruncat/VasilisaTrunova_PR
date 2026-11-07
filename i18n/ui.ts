export const languages = { ru: 'RU', en: 'EN' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ru';

/** A value written in both languages. All site content uses this shape. */
export type L<T = string> = { ru: T; en: T };
export const tr = <T>(v: L<T>, lang: Lang): T => v[lang];

/** Interface strings: navigation, buttons, labels. Page content lives in src/data. */
export const ui = {
  ru: {
    'site.title': 'Василиса Трунова — PR и коммуникации',
    'site.description':
      'Василиса Трунова — PR и маркетинг-специалист: стратегия коммуникаций, работа со СМИ и блогерами, мероприятия, цифровое продвижение и аудит брендов.',
    'nav.work': 'Кейсы',
    'nav.about': 'Обо мне',
    'nav.experience': 'Опыт',
    'nav.skills': 'Навыки',
    'nav.education': 'Образование',
    'nav.services': 'Услуги',
    'nav.faq': 'FAQ',
    'nav.contact': 'Контакты',
    'nav.menu': 'Меню',
    'nav.close': 'Закрыть',
    'status.available': 'Открыта к проектам',
    'cta.cases': 'Смотреть кейсы',
    'cta.about': 'Обо мне',
    'cta.allProjects': 'Все проекты',
    'cta.write': 'Написать',
    'cta.discuss': 'Обсудить проект',
    'cta.more': 'Подробнее',
    'cta.open': 'Открыть',
    'cta.top': 'Наверх',
    'lang.switch': 'English version',
    'footer.rights': 'Сделано с вниманием к деталям',
    'footer.copy': 'Все права защищены',
    'common.projects': 'проектов',
    'common.project': 'проект',
    'common.todo': 'Добавить материал',
  },
  en: {
    'site.title': 'Vasilisa Trunova — PR & Communications',
    'site.description':
      'Vasilisa Trunova — PR and marketing specialist: communications strategy, media and influencer relations, events, digital promotion and brand audits.',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.services': 'Services',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'status.available': 'Available for projects',
    'cta.cases': 'View work',
    'cta.about': 'About me',
    'cta.allProjects': 'All projects',
    'cta.write': 'Write to me',
    'cta.discuss': 'Discuss a project',
    'cta.more': 'Read more',
    'cta.open': 'Open',
    'cta.top': 'Back to top',
    'lang.switch': 'Русская версия',
    'footer.rights': 'Made with attention to detail',
    'footer.copy': 'All rights reserved',
    'common.projects': 'projects',
    'common.project': 'project',
    'common.todo': 'Add material',
  },
} as const;

export type UiKey = keyof (typeof ui)['ru'];
export const useT = (lang: Lang) => (key: UiKey) => ui[lang][key];

/** Builds a site-internal URL for the given language, respecting the deploy base path. */
export function href(path: string, lang: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\/+|\/+$/g, '');
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  const tail = clean ? `/${clean}/` : '/';
  return `${base}${prefix}${tail}`.replace(/\/{2,}/g, '/');
}

/** Same page in the other language (used by the RU/EN switcher). */
export function alternate(pathname: string, to: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let p = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  p = p.replace(/^\/en(\/|$)/, '/');
  return href(p, to);
}
