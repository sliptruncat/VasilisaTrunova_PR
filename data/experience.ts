import type { L } from '@/i18n/ui';

export interface Role {
  org: L;
  role: L;
  period: L;
  /** Years the role covers — drives the calendar timeline. */
  years: number[];
  kind: 'work' | 'project' | 'education' | 'teaching';
  points: L<string[]>;
  case?: string;
}

/** Source of truth: Резюме_хронология.md / резюме для HH. */
export const roles: Role[] = [
  {
    org: { ru: 'Частная практика', en: 'Independent practice' },
    role: { ru: 'PR- и маркетинг-консультант', en: 'PR & marketing consultant' },
    period: { ru: 'Январь 2024 — сейчас', en: 'January 2024 — present' },
    years: [2024, 2025, 2026],
    kind: 'work',
    points: {
      ru: ['30+ аудитов коммуникаций брендов за сентябрь 2025 — июль 2026', 'Стратегия личного бренда модели и блогера', 'Консультирование по исследовательским проектам в сфере PR'],
      en: ['30+ brand communication audits, September 2025 — July 2026', 'Personal brand strategy for a model and creator', 'Consulting on PR research projects'],
    },
    case: 'bakery-nemesh',
  },
  {
    org: { ru: 'АНО «Центр им. Н. А. Бердяева»', en: 'Berdyaev Centre' },
    role: { ru: 'Глава проекта', en: 'Project lead' },
    period: { ru: 'Июнь 2025 — сейчас', en: 'June 2025 — present' },
    years: [2025, 2026],
    kind: 'project',
    points: {
      ru: ['«Бульвар искусств»: продажа выставочного формата B2B-клиентам', 'Пакеты участия, коммерческое предложение, публикации в «Коммерсанте»'],
      en: ['“Boulevard of Arts”: selling the exhibition format to B2B clients', 'Participation packages, commercial proposal, coverage in Kommersant'],
    },
    case: 'bulvar-iskusstv',
  },
  {
    org: { ru: 'ООО «ИД „Дискавери“»', en: 'Discovery Publishing House' },
    role: { ru: 'PR-специалист, проектно', en: 'PR specialist, project-based' },
    period: { ru: 'Сентябрь 2024 — январь 2026', en: 'September 2024 — January 2026' },
    years: [2024, 2025, 2026],
    kind: 'project',
    points: {
      ru: ['Продвижение премии GOLD STARS Discovery', 'Питчи, пресс- и пост-релизы, мероприятия и тест-драйвы'],
      en: ['Promotion of the GOLD STARS Discovery award', 'Pitches, press and post-releases, events and test drives'],
    },
  },
  {
    org: { ru: 'Arzu · бренд одежды, Италия', en: 'Arzu · clothing brand, Italy' },
    role: { ru: 'Руководитель отдела коммуникаций', en: 'Head of communications' },
    period: { ru: 'Июнь — ноябрь 2025', en: 'June — November 2025' },
    years: [2025],
    kind: 'project',
    points: { ru: ['Команда из 5 человек', 'Аудит, стратегия соцсетей, контент-план, сценарии'], en: ['Team of 5', 'Audit, social media strategy, content plan, scripts'] },
  },
  {
    org: { ru: 'Main Strings Orchestra', en: 'Main Strings Orchestra' },
    role: { ru: 'Руководитель отдела коммуникаций', en: 'Head of communications' },
    period: { ru: 'Март — октябрь 2025', en: 'March — October 2025' },
    years: [2025],
    kind: 'project',
    points: { ru: ['Команда из 7 человек', '+150 подписчиков в Telegram за месяц без рекламы'], en: ['Team of 7', '+150 Telegram followers in a month, no ads'] },
    case: 'main-strings-orchestra',
  },
  {
    org: { ru: 'ООО «СпецТрансСтрой»', en: 'SpetsTransStroy' },
    role: { ru: 'PR-специалист, удалённо', en: 'PR specialist, remote' },
    period: { ru: 'Сентябрь 2024 — август 2025', en: 'September 2024 — August 2025' },
    years: [2024, 2025],
    kind: 'project',
    points: { ru: ['15+ материалов в СМИ, в том числе «КП Новосибирск»', 'ТВ-интервью, отработка негативного инфоповода'], en: ['15+ media pieces including KP Novosibirsk', 'TV interviews, handling a negative news story'] },
  },
  {
    org: { ru: 'ABLAB Pro · международное PR-агентство', en: 'ABLAB Pro · international PR agency' },
    role: { ru: 'Influencer & PR Manager', en: 'Influencer & PR Manager' },
    period: { ru: 'Сентябрь 2023 — сентябрь 2024', en: 'September 2023 — September 2024' },
    years: [2023, 2024],
    kind: 'work',
    points: { ru: ['NKK Group: 200+ интеграций с блогерами', 'Исследование и стратегия Heleo 4', 'Церемония CRM Rating 2023'], en: ['NKK Group: 200+ influencer integrations', 'Heleo 4 research and strategy', 'CRM Rating 2023 ceremony'] },
    case: 'heleo-4',
  },
  {
    org: { ru: 'АО «Газпромбанк»', en: 'Gazprombank' },
    role: { ru: 'Цифровой аналитик, проект', en: 'Digital analyst, project' },
    period: { ru: '2023', en: '2023' },
    years: [2023],
    kind: 'project',
    points: { ru: ['Аудит сайта и рекомендации по конверсии блоков'], en: ['Website audit and conversion recommendations'] },
  },
  {
    org: { ru: 'Медиашкола ИОН РАНХиГС', en: 'RANEPA IOS Media School' },
    role: { ru: 'Куратор направления «Веб-дизайн», лектор', en: 'Web design track curator, lecturer' },
    period: { ru: '2022 — 2023', en: '2022 — 2023' },
    years: [2022, 2023],
    kind: 'teaching',
    points: { ru: ['Лекции потоку ~200 слушателей', 'Лекции по SMM «Создание контент-плана» для 150 студентов'], en: ['Lectures for ~200 students', 'SMM lectures “Building a content plan” for 150 students'] },
  },
  {
    org: { ru: 'Приёмная комиссия ИОН РАНХиГС', en: 'RANEPA IOS Admissions' },
    role: { ru: 'Специалист', en: 'Admissions specialist' },
    period: { ru: 'Апрель 2022 — сентябрь 2023', en: 'April 2022 — September 2023' },
    years: [2022, 2023],
    kind: 'work',
    points: { ru: ['Рекорд программы: 600+ студентов с заключёнными договорами'], en: ['Programme record: 600+ students signed'] },
  },
  {
    org: { ru: 'Студенческие медиа РАНХиГС', en: 'RANEPA student media' },
    role: { ru: 'SMM-менеджер, руководитель медиаотдела', en: 'SMM manager, media team lead' },
    period: { ru: '2021 — 2022', en: '2021 — 2022' },
    years: [2021, 2022],
    kind: 'project',
    points: { ru: ['SMM в 15+ проектах', 'Выпуск на YouTube ~500 тыс. просмотров'], en: ['SMM for 15+ projects', 'A YouTube episode with ~500K views'] },
  },
  {
    org: { ru: 'VECO · ESG-стартап, Red Bull Basement', en: 'VECO · ESG startup, Red Bull Basement' },
    role: { ru: 'Руководитель отдела коммуникаций', en: 'Head of communications' },
    period: { ru: 'Февраль 2021 — февраль 2022', en: 'February 2021 — February 2022' },
    years: [2021, 2022],
    kind: 'project',
    points: { ru: ['Соцсети и таргет, мерч, партнёры и инвесторы, питчинг СМИ'], en: ['Social media and targeting, merch, partners and investors, media pitching'] },
  },
  {
    org: { ru: 'РАНХиГС, бакалавриат', en: 'RANEPA, Bachelor’s' },
    role: { ru: 'Реклама и связи с общественностью', en: 'Advertising & Public Relations' },
    period: { ru: '2021 — 2025', en: '2021 — 2025' },
    years: [2021, 2022, 2023, 2024, 2025],
    kind: 'education',
    points: { ru: ['Диплом с отличием'], en: ['Graduated with honours'] },
  },
  {
    org: { ru: 'Кофепью', en: 'Kofepyu' },
    role: { ru: 'Event- и SMM-менеджер', en: 'Event & SMM manager' },
    period: { ru: '2019 — 2021', en: '2019 — 2021' },
    years: [2019, 2020, 2021],
    kind: 'work',
    points: { ru: ['15+ мероприятий с Галиной Юзефович и Леонидом Парфёновым'], en: ['15+ events with Galina Yuzefovich and Leonid Parfyonov'] },
  },
  {
    org: { ru: 'РАНХиГС, магистратура', en: 'RANEPA, Master’s' },
    role: { ru: 'Управление публичными коммуникациями', en: 'Public Communications Management' },
    period: { ru: '2026 — 2028', en: '2026 — 2028' },
    years: [2026],
    kind: 'education',
    points: { ru: ['Обучение продолжается'], en: ['In progress'] },
  },
];

export const timelineYears = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
