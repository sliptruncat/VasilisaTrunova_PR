import type { ImageMetadata } from 'astro';
import type { L } from '@/i18n/ui';

import hall from '@/assets/img/orchestra/hall.jpg';
import violinSolo from '@/assets/img/orchestra/violin-solo.jpg';
import crowdLights from '@/assets/img/orchestra/crowd-lights.jpg';
import celloStage from '@/assets/img/orchestra/cello-stage.jpg';
import ensemble from '@/assets/img/orchestra/ensemble.jpg';
import violins from '@/assets/img/orchestra/violins.jpg';
import crowd from '@/assets/img/orchestra/crowd.jpg';
import filming from '@/assets/img/orchestra/filming.jpg';
import arbatWide from '@/assets/img/bulvar/arbat-wide.jpg';
import stands from '@/assets/img/bulvar/stands-closeup.jpg';
import openingRibbon from '@/assets/img/bulvar/opening-ribbon.jpg';
import winterBoulevard from '@/assets/img/bulvar/winter-boulevard.jpg';
import bulvarMap from '@/assets/img/bulvar/map.jpg';
import bulvarSlide8 from '@/assets/img/bulvar/slide-8.jpg';
import bulvarSlide9 from '@/assets/img/bulvar/slide-9.jpg';
import bulvarSlide10 from '@/assets/img/bulvar/slide-10.jpg';
import heleoTg from '@/assets/img/heleo/tg-stats.jpg';
import heleoSite from '@/assets/img/heleo/site.jpg';
import heleoProducts from '@/assets/img/heleo/products.jpg';
import heleoPost from '@/assets/img/heleo/post.jpg';
import heleoSearch from '@/assets/img/heleo/search.jpg';
import heleoMap from '@/assets/img/heleo/map.jpg';
import auditSlide3 from '@/assets/img/audit/slide-3.jpg';
import auditSlide6 from '@/assets/img/audit/slide-6.jpg';
import auditSlide22 from '@/assets/img/audit/slide-22.jpg';
import auditSlide25 from '@/assets/img/audit/slide-25.jpg';
import bakeryCover from '@/assets/img/bakery/cover.jpg';
import bakeryAssortment from '@/assets/img/bakery/assortment.jpg';
import bakeryTerms from '@/assets/img/bakery/terms.jpg';
import bakeryHow from '@/assets/img/bakery/how-we-work.jpg';
import bakeryEmailPrice from '@/assets/img/bakery/email-price.jpg';
import bakeryPriceMail from '@/assets/img/bakery/price-list-mail.jpg';
import bakerySeasonal from '@/assets/img/bakery/seasonal.jpg';
import bakerySite from '@/assets/img/bakery/site-hero.jpg';
import bakeryVk from '@/assets/img/bakery/vk-posts.jpg';
import bakerySocial from '@/assets/img/bakery/social-grid.jpg';
import bakeryPie from '@/assets/img/bakery/research-pie.jpg';
import bakeryBars from '@/assets/img/bakery/research-bars.jpg';

export const categories = {
  pr: { ru: 'PR и коммуникации', en: 'PR & Communications' },
  marketing: { ru: 'Маркетинг', en: 'Marketing' },
  events: { ru: 'Ивенты', en: 'Events' },
  digital: { ru: 'Цифровое', en: 'Digital' },
  brand: { ru: 'Бренд-стратегия', en: 'Brand Strategy' },
  creative: { ru: 'Креативный продакшн', en: 'Creative Production' },
} satisfies Record<string, L>;
export type Category = keyof typeof categories;

/** Folder colours come from the approved palette (see styles/global.css). */
export type FolderTone = 'berry' | 'wine' | 'mulberry' | 'mauve' | 'mink' | 'lemon';

export interface Media { src: ImageMetadata; alt: L; caption?: L }
export interface DataTable { title: string; file: string; note?: string; head: string[]; rows: { label: string; cells: { text: string; span?: number }[] }[]; highlightCol?: number }
export interface Kpi { value: string; label: L }

export interface Project {
  slug: string;
  number: string;
  title: L;
  client: L;
  industry: L;
  period: L;
  role: L;
  team?: L;
  categories: Category[];
  tone: FolderTone;
  cover?: Media;
  tagline: L;
  context: L;
  challenge: L;
  objectives: L<string[]>;
  strategy: { title: L; text: L }[];
  implementation: L<string[]>;
  materials: Media[];
  materialsCredit?: L;
  /** Optional data table from the research (e.g. competitor audit). */
  table?: L<DataTable>;
  results: Kpi[];
  resultsNote?: L;
  tools: string[];
  takeaways: L<string[]>;
  related: string[];
  /** Optional notes on what is still missing (not shown on the page). */
  todo?: L<string[]>;
}

export const projects: Project[] = [
  {
    slug: 'main-strings-orchestra',
    number: '01',
    title: { ru: 'Main Strings Orchestra', en: 'Main Strings Orchestra' },
    client: { ru: 'Main Strings Orchestra', en: 'Main Strings Orchestra' },
    industry: { ru: 'Музыка · концерты · ивенты', en: 'Music · concerts · events' },
    period: { ru: 'Март — октябрь 2025', en: 'March — October 2025' },
    role: { ru: 'Руководитель отдела коммуникаций', en: 'Head of communications' },
    team: { ru: 'Команда из 7 человек', en: 'Team of 7' },
    categories: ['events', 'pr', 'marketing', 'digital'],
    tone: 'berry',
    cover: { src: hall, alt: { ru: 'Концерт Main Strings Orchestra в зале', en: 'Main Strings Orchestra concert hall' } },
    tagline: {
      ru: 'Коммуникационное направление оркестра с нуля: позиционирование, медиаплан, соцсети, СМИ и партнёрства.',
      en: 'The orchestra’s communications built from scratch: positioning, media plan, social media, press and partnerships.',
    },
    context: {
      ru: 'Main Strings Orchestra — коллектив скрипачки Асии Абдрахмановой, который исполняет рок, кино- и поп-хиты в формате симфонического шоу. Оркестр выступает на собственных концертах, фестивалях и корпоративных мероприятиях.',
      en: 'Main Strings Orchestra is a collective founded by violinist Asiya Abdrakhmanova that performs rock, film and pop hits as a symphonic show — at its own concerts, festivals and corporate events.',
    },
    challenge: {
      ru: 'У проекта не было выстроенной системы коммуникаций. Нужно было с нуля сформулировать позиционирование, собрать план продвижения и запустить каналы, которые работают и на продажу концертов, и на заявки от организаторов мероприятий.',
      en: 'The project had no communications system. The task was to define positioning from scratch, build a promotion plan and launch channels that sell concert tickets and bring in requests from event organisers.',
    },
    objectives: {
      ru: ['Продвижение летних концертов', 'Собственное медиаприсутствие: Telegram и VK', 'Партнёрства со СМИ и площадками', 'Заявки от B2B: фестивали, агентства, корпоративные клиенты'],
      en: ['Promote the summer concerts', 'Build owned media: Telegram and VK', 'Partnerships with media and venues', 'B2B requests: festivals, agencies, corporate clients'],
    },
    strategy: [
      {
        title: { ru: 'Аудитория', en: 'Audience' },
        text: {
          ru: '4 сегмента зрителей: «Культурный отдых 30–40», «Молодые пары и светская Москва 20–26», «Фанаты живой музыки и рок-классики 35–50», «Молодёжь, тренды и эстетика 18–25». Отдельно B2B: организаторы фестивалей, ивент-агентства, HR.',
          en: '4 audience segments: “Cultural leisure 30–40”, “Young couples and social Moscow 20–26”, “Live music and classic rock fans 35–50”, “Youth, trends and aesthetics 18–25”. Plus B2B: festival organisers, event agencies, HR teams.',
        },
      },
      {
        title: { ru: 'Позиционирование', en: 'Positioning' },
        text: {
          ru: 'Не просто концерт, а интеллигентная территория эмоционального отдыха: качественное, эстетичное и мощное музыкальное переживание.',
          en: 'Not just a concert but a refined space for emotional rest: a high-quality, aesthetic and powerful musical experience.',
        },
      },
      {
        title: { ru: 'Каналы', en: 'Channels' },
        text: {
          ru: 'Telegram, VK и VK Клипы, Instagram, RUTUBE. Посевы в Telegram-каналах с афишами и у блогеров, медиапартнёрства, контекстная реклама за неделю до концерта.',
          en: 'Telegram, VK and VK Clips, Instagram, RUTUBE. Placements in Telegram listings channels and with creators, media partnerships, search ads a week before each concert.',
        },
      },
      {
        title: { ru: 'Медиаплан и KPI', en: 'Media plan & KPIs' },
        text: {
          ru: 'План на 3 месяца: 11 имидж-статей, 3–4 обзорные статьи в месяц, до 10 интеграций у блогеров и в каналах, ~15 постов в Telegram в месяц. Для каждой рубрики — целевые охват, ER и конверсия в подписчиков.',
          en: 'A 3-month plan: 11 image articles, 3–4 review articles a month, up to 10 creator and channel integrations, ~15 Telegram posts a month. Target reach, ER and follower conversion for every content strand.',
        },
      },
      {
        title: { ru: 'Офлайн', en: 'Offline' },
        text: {
          ru: 'Подбор площадок для выступлений: городская программа «Лето в Москве», рестораны в центре, фестивали.',
          en: 'Venue scouting: the city programme “Summer in Moscow”, restaurants in the centre, festivals.',
        },
      },
    ],
    implementation: {
      ru: [
        'Аудит, позиционирование, портрет ЦА и медиаплан',
        'Контент-план и ведение Telegram и VK',
        'Финансовый план контента и метрики по рубрикам',
        'Яндекс.Директ к концертам',
        'Работа со СМИ и медиапартнёрства',
        'PR записи музыки с Димой Биланом',
        'Постановка задач и координация команды из 7 человек',
      ],
      en: [
        'Audit, positioning, audience profiles and media plan',
        'Content plan and running Telegram and VK',
        'Content budget and metrics per strand',
        'Yandex Direct campaigns for the concerts',
        'Media relations and media partnerships',
        'PR for the recording with Dima Bilan',
        'Managing and coordinating a team of 7',
      ],
    },
    materials: [
      { src: violinSolo, alt: { ru: 'Скрипачка на сцене', en: 'Violinist on stage' } },
      { src: celloStage, alt: { ru: 'Виолончелист и сцена', en: 'Cellist on stage' } },
      { src: crowdLights, alt: { ru: 'Зрители с фонариками', en: 'Audience with phone lights' } },
      { src: ensemble, alt: { ru: 'Оркестр на открытой площадке', en: 'The orchestra on an open-air stage' } },
      { src: violins, alt: { ru: 'Скрипки крупным планом', en: 'Violins close-up' } },
      { src: crowd, alt: { ru: 'Полный зал', en: 'A full hall' } },
      { src: filming, alt: { ru: 'Съёмка контента на концерте', en: 'Filming content at a concert' } },
    ],
    materialsCredit: { ru: 'Фото: Main Strings Orchestra', en: 'Photos: Main Strings Orchestra' },
    results: [
      { value: '+150', label: { ru: 'подписчиков в Telegram за месяц без рекламного бюджета', en: 'Telegram followers in a month with no ad budget' } },
      { value: '2', label: { ru: 'концерта', en: 'concerts' } },
      { value: '7', label: { ru: 'человек в команде', en: 'people on the team' } },
    ],
    resultsNote: {
      ru: 'Выступления на городских площадках Москвы и регионов, медиапартнёрства, запись музыки с Димой Биланом.',
      en: 'Performances at city venues in Moscow and other regions, media partnerships, a recording with Dima Bilan.',
    },
    tools: ['Telegram', 'VK', 'Яндекс.Директ', 'Pressfeed', 'TGStat', 'Figma', 'Google Sheets'],
    takeaways: {
      ru: ['Сегментация аудитории помогла говорить с каждой группой на её языке', 'Органический рост в Telegram даёт контент «изнутри» оркестра и нативные посевы'],
      en: ['Audience segmentation made it possible to speak to each group in its own language', 'Organic Telegram growth comes from behind-the-scenes content and native placements'],
    },
    related: ['bulvar-iskusstv', 'heleo-4'],
  },
  {
    slug: 'bulvar-iskusstv',
    number: '02',
    title: { ru: '«Бульвар искусств»: выставки для бизнеса', en: '“Boulevard of Arts”: exhibitions for business' },
    client: { ru: 'АНО «Центр им. Н. А. Бердяева» · «Бульвар искусств»', en: 'Berdyaev Centre · “Boulevard of Arts”' },
    industry: { ru: 'Культура · B2B-продажи · PR', en: 'Culture · B2B sales · PR' },
    period: { ru: 'Июнь 2025 — сейчас', en: 'June 2025 — present' },
    role: { ru: 'Глава проекта', en: 'Project lead' },
    categories: ['pr', 'marketing', 'brand', 'events'],
    tone: 'mauve',
    cover: { src: arbatWide, alt: { ru: 'Выставочные стенды на Арбате', en: 'Exhibition stands on Arbat' } },
    tagline: {
      ru: 'Как продавать выставку компаниям: пакеты участия, коммерческое предложение, аргументация для КСО и HR-бренда и медиаподдержка как часть ценности для партнёра.',
      en: 'Selling an exhibition to companies: participation packages, a commercial proposal, a case for CSR and employer branding, and media support as part of the partner’s value.',
    },
    context: {
      ru: '«Бульвар искусств» — выставочная платформа в общественных пространствах Москвы: Старый и Новый Арбат, Страстной и Гоголевский бульвары. Это локации с высоким пешеходным трафиком, где экспозиция становится заметной частью городской среды и местом встречи бренда с аудиторией.',
      en: '“Boulevard of Arts” is an exhibition platform in Moscow’s public spaces: Old and New Arbat, Strastnoy and Gogolevsky boulevards. These busy pedestrian locations make an exhibition a visible part of the city and a place where a brand meets its audience.',
    },
    challenge: {
      ru: 'Превратить культурную выставку в понятный продукт для B2B-клиентов: объяснить компаниям, зачем им экспозиция в городской среде, дать варианты участия под разные бюджеты и подтвердить ценность для партнёра.',
      en: 'Turn a cultural exhibition into a clear product for B2B clients: explain why a company needs an exhibition in the city, offer participation options for different budgets and prove the value for the partner.',
    },
    objectives: {
      ru: ['Продуктовая линейка: пакеты участия и дополнительные услуги', 'Коммерческое предложение и презентация для переговоров', 'Аргументация для КСО, HR-бренда и культурной коммуникации', 'Медиаподдержка как часть предложения'],
      en: ['A product line: packages and add-on services', 'A commercial proposal and deck for negotiations', 'A case for CSR, employer branding and cultural communication', 'Media support as part of the offer'],
    },
    strategy: [
      { title: { ru: 'Пакеты участия', en: 'Packages' }, text: { ru: 'Три уровня — «Базовый», «Оптимальный», «Премиум»: число локаций, количество стендов, глубина аналитики и формат кураторской поддержки.', en: 'Three tiers — Basic, Optimal, Premium: number of locations and stands, depth of analytics and level of curator support.' } },
      { title: { ru: 'Дополнительные услуги', en: 'Add-ons' }, text: { ru: 'Публичное открытие с фотографом, публикации в СМИ от PR-кураторов, личный чат с куратором и фотоотчёты, два уровня аналитики.', en: 'A public opening with a photographer, media coverage by PR curators, a personal curator chat with photo reports, two levels of analytics.' } },
      { title: { ru: 'Аргументация для бизнеса', en: 'Business case' }, text: { ru: 'Выставка как инструмент КСО, укрепления HR-бренда и культурной коммуникации компании в городской среде.', en: 'The exhibition as a tool for CSR, employer branding and a company’s cultural communication in the city.' } },
      { title: { ru: 'Аналитика для партнёра', en: 'Partner analytics' }, text: { ru: 'Проходимость, анализ и сегментация аудитории, цифровые показатели каналов и материалов в СМИ, PR-план привлечения стейкхолдеров.', en: 'Footfall, audience analysis and segmentation, digital channel metrics and press coverage, a stakeholder PR plan.' } },
      { title: { ru: 'Упаковка и медиа', en: 'Packaging & media' }, text: { ru: 'Фирменный стиль, презентация и карта локаций; питчи и публикации, которые подтверждают ценность участия.', en: 'Visual identity, a deck and a location map; pitches and coverage that prove the value of taking part.' } },
    ],
    implementation: {
      ru: ['Прайс-лист с тремя пакетами участия', 'Линейка дополнительных услуг: открытие, публикации, кураторство, аналитика', 'Коммерческое предложение и презентация для B2B-клиентов', 'Фирменный стиль и карта локаций', 'Питчи и рассылки по редакциям, сопровождение публикаций'],
      en: ['A price list with three participation packages', 'Add-on services: opening, coverage, curator support, analytics', 'A commercial proposal and deck for B2B clients', 'Visual identity and a location map', 'Media pitches, outreach and coverage follow-up'],
    },
    materials: [
      { src: bulvarSlide10, alt: { ru: 'Слайд презентации: медиаподдержка и СМИ', en: 'Deck slide: media support and outlets' } },
      { src: bulvarSlide9, alt: { ru: 'Слайд презентации: ключевые услуги', en: 'Deck slide: key services' } },
      { src: bulvarSlide8, alt: { ru: 'Слайд презентации: примеры выставок', en: 'Deck slide: exhibition examples' } },
      { src: bulvarMap, alt: { ru: 'Карта бульваров Москвы', en: 'Map of Moscow’s boulevards' } },
      { src: openingRibbon, alt: { ru: 'Открытие выставки', en: 'Exhibition opening' } },
      { src: stands, alt: { ru: 'Стенды выставки крупным планом', en: 'Exhibition stands close-up' } },
      { src: winterBoulevard, alt: { ru: 'Выставка на бульваре зимой', en: 'The exhibition on a boulevard in winter' } },
    ],
    materialsCredit: { ru: 'Слайды и фото из презентации проекта «Бульвар искусств»', en: 'Slides and photos from the “Boulevard of Arts” deck' },
    results: [
      { value: '3', label: { ru: 'пакета участия для B2B-клиентов', en: 'participation packages for B2B clients' } },
      { value: '«Ъ»', label: { ru: 'публикация в «Коммерсанте»', en: 'coverage in Kommersant' } },
    ],
    resultsNote: {
      ru: 'Выставка упакована в продукт для бизнеса: прайс-лист с пакетами, дополнительные услуги, коммерческое предложение и презентация для переговоров. Организована работа с редакциями, есть публикации в «Коммерсанте» и культурных изданиях. Трафик в презентации — характеристика площадок, а не измеренный результат выставки.',
      en: 'The exhibition became a product for business: a price list with packages, add-on services, a commercial proposal and a deck for negotiations. Media work was set up, with coverage in Kommersant and cultural outlets. Traffic figures in the deck describe the venues, not measured results.',
    },
    tools: ['Figma', 'Miro', 'Pressfeed', 'Медиалогия'],
    takeaways: {
      ru: ['Культурный проект продаётся бизнесу, когда у него есть понятные пакеты, измеримая польза для партнёра и медиаподдержка в составе предложения'],
      en: ['A cultural project sells to business when it has clear packages, measurable value for the partner and media support built into the offer'],
    },
    related: ['main-strings-orchestra', 'education-project-audit'],
  },
  {
    slug: 'heleo-4',
    number: '03',
    title: { ru: 'Heleo 4 и NKK Group', en: 'Heleo 4 & NKK Group' },
    client: { ru: 'ABLAB Pro · Heleo 4, NKK Group', en: 'ABLAB Pro · Heleo 4, NKK Group' },
    industry: { ru: 'Beauty · эстетическая медицина', en: 'Beauty · aesthetic medicine' },
    period: { ru: 'Сентябрь 2023 — сентябрь 2024', en: 'September 2023 — September 2024' },
    role: { ru: 'Influencer & PR Manager', en: 'Influencer & PR Manager' },
    categories: ['pr', 'marketing', 'digital'],
    tone: 'mulberry',
    tagline: {
      ru: 'Исследование и рекламная стратегия для Heleo 4 в международном PR-агентстве ABLAB Pro и инфлюенс-кампании для NKK Group.',
      en: 'Research and an advertising strategy for Heleo 4 at the international PR agency ABLAB Pro, plus influencer campaigns for NKK Group.',
    },
    context: {
      ru: 'Heleo 4 — российский бренд эстетической медицины с запатентованной технологией восстановления кожи. NKK Group — группа неинвазивной косметологии. Обе задачи я вела в агентстве ABLAB Pro.',
      en: 'Heleo 4 is a Russian aesthetic medicine brand with a patented skin-restoration technology; NKK Group is a non-invasive cosmetology group. I worked on both at ABLAB Pro.',
    },
    challenge: {
      ru: 'Собрать аналитическую основу для продвижения: понять аудиторию и конкурентное поле, оценить каналы коммуникации и подготовить структуру рекламной стратегии с учётом ресурсов и бюджета.',
      en: 'Build an analytical basis for promotion: understand the audience and competitors, assess communication channels and structure an advertising strategy within resources and budget.',
    },
    objectives: {
      ru: ['Исследование целевой аудитории', 'Конкурентный анализ и SWOT', 'Аудит каналов', 'Базы СМИ и блогеров, финансовый план'],
      en: ['Target audience research', 'Competitor analysis and SWOT', 'Channel audit', 'Media and influencer databases, budget plan'],
    },
    strategy: [
      { title: { ru: 'Аудитория', en: 'Audience' }, text: { ru: 'Анализ аудитории и выделение сегментов, которые определяют сообщения и каналы.', en: 'Audience analysis and the segments that shape messages and channels.' } },
      { title: { ru: 'Конкуренты и SWOT', en: 'Competitors & SWOT' }, text: { ru: 'Сопоставление коммуникационных подходов, возможности и ограничения продвижения.', en: 'Comparing communication approaches; opportunities and constraints.' } },
      { title: { ru: 'Аудит каналов', en: 'Channel audit' }, text: { ru: 'Оценка текущих площадок и инструментов, что усилить в стратегии.', en: 'Assessing current channels and tools, what to strengthen.' } },
      { title: { ru: 'Медиабазы', en: 'Media databases' }, text: { ru: 'Базы СМИ и блогеров для публикаций, размещений и инфлюенс-коммуникаций.', en: 'Media and influencer databases for coverage, placements and influencer work.' } },
      { title: { ru: 'Финансовый план', en: 'Budget' }, text: { ru: 'Распределение ресурсов и связь активностей с бюджетными ограничениями.', en: 'Allocating resources and tying activities to the budget.' } },
    ],
    implementation: {
      ru: ['Исследование ЦА, конкурентов, SWOT и аудит каналов для Heleo 4', 'Базы СМИ и блогеров, финансовый план', 'NKK Group: подбор блогеров по метрикам, переговоры, договоры, оплата', 'Закупка рекламы в Telegram-каналах', 'Статьи для профильных медицинских СМИ'],
      en: ['Audience, competitor, SWOT and channel research for Heleo 4', 'Media and influencer databases, budget plan', 'NKK Group: influencer selection by metrics, negotiation, contracts, payments', 'Telegram channel ad buying', 'Articles for specialist medical media'],
    },
    cover: { src: heleoSite, alt: { ru: 'Сайт Heleo 4: аудит', en: 'Heleo 4 website: audit' } },
    materials: [
      { src: heleoTg, alt: { ru: 'Статистика Telegram-канала бренда', en: 'Brand Telegram channel stats' } },
      { src: heleoProducts, alt: { ru: 'Аудит каталога продукции на сайте', en: 'Product catalogue audit' } },
      { src: heleoPost, alt: { ru: 'Пример поста бренда из аудита каналов', en: 'Brand post from the channel audit' } },
      { src: heleoSearch, alt: { ru: 'Поисковая выдача по бренду', en: 'Branded search results' } },
      { src: heleoMap, alt: { ru: 'Карта точек, где пройти процедуру', en: 'Map of clinics offering the treatment' } },
    ],
    materialsCredit: { ru: 'Скриншоты из исследования Heleo 4', en: 'Screenshots from the Heleo 4 research' },
    table: {
      ru: {
        title: 'Финансовый план рекламной стратегии',
        file: 'финплан.xlsx',
        note: 'Распределение бюджета по каналам, этапам и KPI на горизонте до 18 месяцев. Это план из стратегии, а не фактические расходы.',
        head: ['Статья', 'Бюджет, ₽', 'Этап', 'KPI'],
        rows: [
          { label: 'Публикации в профильных СМИ', cells: [{ text: '500 000' }, { text: 'Запуск, 3–6 мес.' }, { text: 'Упоминания, переходы на сайт' }] },
          { label: 'Интервью с основателем в деловых СМИ', cells: [{ text: '1 000 000' }, { text: 'Запуск, 3–6 мес.' }, { text: 'Упоминания, доверие к бренду' }] },
          { label: 'Подкасты и вебинары', cells: [{ text: '500 000' }, { text: 'Масштабирование, 6–18 мес.' }, { text: 'Охват, повторные упоминания' }] },
          { label: 'Топовые блогеры (100 тыс.+), 3 партнёрства', cells: [{ text: '2 500 000' }, { text: 'Подготовка и запуск' }, { text: 'Охват, вовлечённость, переходы' }] },
          { label: 'Микроблогеры (10–100 тыс.), 10 авторов', cells: [{ text: '1 000 000' }, { text: 'Запуск и масштабирование' }, { text: 'Конверсия, UGC, реферальные ссылки' }] },
          { label: 'Наноблогеры (до 10 тыс.), 30 авторов', cells: [{ text: '500 000' }, { text: 'Масштабирование' }, { text: 'Вовлечённость, рост подписчиков' }] },
          { label: 'Контент-производство для блогеров', cells: [{ text: '500 000' }, { text: 'Все этапы' }, { text: 'Качество контента, вовлечённость' }] },
          { label: 'Реклама в крупных Telegram-каналах', cells: [{ text: '1 500 000' }, { text: 'Запуск, 3–6 мес.' }, { text: 'CPM, клики' }] },
          { label: 'Реклама в нишевых каналах', cells: [{ text: '500 000' }, { text: 'Масштабирование' }, { text: 'CTR, конверсия в регистрацию' }] },
          { label: 'SMM-менеджер: таргет и аналитика', cells: [{ text: '1 000 000' }, { text: 'Все этапы' }, { text: 'Управление бюджетом, оптимизация' }] },
          { label: 'Фото- и видеосъёмки', cells: [{ text: '2 500 000' }, { text: 'Подготовка, 0–3 мес.' }, { text: 'Качество контента, вовлечённость' }] },
          { label: 'Контент для соцсетей', cells: [{ text: '250 000' }, { text: 'Запуск' }, { text: 'Посещаемость, время на странице' }] },
          { label: 'Контент для Telegram', cells: [{ text: '250 000' }, { text: 'Масштабирование' }, { text: 'Открытия, клики по ссылкам' }] },
          { label: 'A/B-тестирование объявлений', cells: [{ text: '1 000 000' }, { text: 'Запуск' }, { text: 'CTR, конверсия' }] },
          { label: 'Мониторинг поведения пользователей', cells: [{ text: '1 000 000' }, { text: 'Масштабирование' }, { text: 'Конверсия, снижение оттока' }] },
          { label: 'Резервный фонд', cells: [{ text: '1 500 000' }, { text: 'Все этапы' }, { text: '6–10% бюджета' }] },
          { label: 'Итого', cells: [{ text: '16 000 000' }, { text: '', span: 2 }] },
        ],
      },
      en: {
        title: 'Advertising strategy budget',
        file: 'budget.xlsx',
        note: 'Budget by channel, stage and KPI over up to 18 months. This is the plan from the strategy, not actual spend.',
        head: ['Item', 'Budget, ₽', 'Stage', 'KPI'],
        rows: [
          { label: 'Coverage in specialist media', cells: [{ text: '500,000' }, { text: 'Launch, 3–6 mo' }, { text: 'Mentions, website visits' }] },
          { label: 'Founder interviews in business media', cells: [{ text: '1,000,000' }, { text: 'Launch, 3–6 mo' }, { text: 'Mentions, brand trust' }] },
          { label: 'Podcasts and webinars', cells: [{ text: '500,000' }, { text: 'Scaling, 6–18 mo' }, { text: 'Reach, repeat mentions' }] },
          { label: 'Top creators (100K+), 3 partnerships', cells: [{ text: '2,500,000' }, { text: 'Prep and launch' }, { text: 'Reach, engagement, clicks' }] },
          { label: 'Micro creators (10–100K), 10 people', cells: [{ text: '1,000,000' }, { text: 'Launch and scaling' }, { text: 'Conversion, UGC, referral links' }] },
          { label: 'Nano creators (under 10K), 30 people', cells: [{ text: '500,000' }, { text: 'Scaling' }, { text: 'Engagement, follower growth' }] },
          { label: 'Content production for creators', cells: [{ text: '500,000' }, { text: 'All stages' }, { text: 'Content quality, engagement' }] },
          { label: 'Ads in large Telegram channels', cells: [{ text: '1,500,000' }, { text: 'Launch, 3–6 mo' }, { text: 'CPM, clicks' }] },
          { label: 'Ads in niche channels', cells: [{ text: '500,000' }, { text: 'Scaling' }, { text: 'CTR, sign-up conversion' }] },
          { label: 'SMM manager: targeting and analytics', cells: [{ text: '1,000,000' }, { text: 'All stages' }, { text: 'Budget management, optimisation' }] },
          { label: 'Photo and video shoots', cells: [{ text: '2,500,000' }, { text: 'Prep, 0–3 mo' }, { text: 'Content quality, engagement' }] },
          { label: 'Social media content', cells: [{ text: '250,000' }, { text: 'Launch' }, { text: 'Visits, time on page' }] },
          { label: 'Telegram content', cells: [{ text: '250,000' }, { text: 'Scaling' }, { text: 'Opens, link clicks' }] },
          { label: 'Ad A/B testing', cells: [{ text: '1,000,000' }, { text: 'Launch' }, { text: 'CTR, conversion' }] },
          { label: 'User behaviour monitoring', cells: [{ text: '1,000,000' }, { text: 'Scaling' }, { text: 'Conversion, lower churn' }] },
          { label: 'Reserve fund', cells: [{ text: '1,500,000' }, { text: 'All stages' }, { text: '6–10% of budget' }] },
          { label: 'Total', cells: [{ text: '16,000,000' }, { text: '', span: 2 }] },
        ],
      },
    },
    results: [{ value: '200+', label: { ru: 'интеграций с блогерами для NKK Group', en: 'influencer integrations for NKK Group' } }],
    resultsNote: {
      ru: 'Для Heleo 4 подготовлена исследовательская база и рекламная стратегия: ЦА, SWOT, конкурентный анализ, аудит каналов, базы СМИ и блогеров, финансовый план. Числовые результаты кампании в материалах не зафиксированы, поэтому здесь их нет.',
      en: 'For Heleo 4: a research base and advertising strategy — audience, SWOT, competitors, channel audit, media and influencer databases, budget. Campaign figures were not recorded, so none are claimed here.',
    },
    tools: ['SimilarWeb', 'TGStat', 'Telegram', 'VK', 'Google Sheets'],
    takeaways: {
      ru: ['Разрозненные данные о рынке, аудитории и коммуникациях можно превратить в рабочую стратегическую основу с понятными каналами и бюджетом'],
      en: ['Scattered market, audience and channel data can become a working strategic basis with clear channels and budget'],
    },
    related: ['education-project-audit', 'bakery-nemesh'],
  },
  {
    slug: 'education-project-audit',
    number: '04',
    title: { ru: 'Пример аудита: образовательный проект', en: 'Audit example: an education project' },
    client: { ru: 'Образовательный проект', en: 'An education project' },
    industry: { ru: 'Образование · аудит · аналитика', en: 'Education · audit · analytics' },
    period: { ru: '2026', en: '2026' },
    role: { ru: 'Аналитик коммуникаций', en: 'Communications analyst' },
    categories: ['brand', 'marketing', 'digital', 'pr'],
    tone: 'wine',
    tagline: {
      ru: 'Комплексный анализ образовательного бренда: аудитории, позиционирование, сайт и поиск, соцсети, СМИ, реклама, офлайн-форматы и конкуренты.',
      en: 'A full analysis of an education brand: audiences, positioning, website and search, social media, press, advertising, offline formats and competitors.',
    },
    context: {
      ru: 'Образовательный проект с онлайн- и офлайн-форматами об искусстве, истории, психологии, философии и кино. Продукты: подписка на библиотеку лекций, отдельные лекции и вебинары, переподготовка, офлайн-лекторий и корпоративные лекции.',
      en: 'An education project with online and offline formats on art, history, psychology, philosophy and film. Products: a lecture library subscription, single lectures and webinars, retraining, an offline lecture hall and corporate lectures.',
    },
    challenge: {
      ru: 'Оценить, насколько коммуникационная система помогает привлекать новую аудиторию, удерживать слушателей и продвигать продукты, и определить точки роста.',
      en: 'Assess how well the communications system attracts new audiences, retains listeners and sells products — and find growth points.',
    },
    objectives: {
      ru: ['Аудитория и позиционирование', 'Сайт и поисковое продвижение', 'Соцсети и контент', 'Медиа, реклама, конкуренты, офлайн', 'Экономика продвижения'],
      en: ['Audience and positioning', 'Website and search', 'Social media and content', 'Press, ads, competitors, offline', 'Promotion economics'],
    },
    strategy: [
      { title: { ru: 'Аудитория', en: 'Audience' }, text: { ru: 'Сегменты: молодые специалисты, взрослые слушатели, студенты-гуманитарии и корпоративные заказчики — мотивы, барьеры, каналы.', en: 'Segments: young professionals, adult learners, humanities students and corporate clients — motives, barriers, channels.' } },
      { title: { ru: 'Сайт и поиск', en: 'Website & search' }, text: { ru: 'Сильное присутствие по брендовым запросам и пространство для небрендового спроса.', en: 'Strong branded search presence and room to grow non-branded demand.' } },
      { title: { ru: 'Соцсети', en: 'Social media' }, text: { ru: 'ВКонтакте и Telegram: частота, охваты, вовлечённость, рубрики; подкаст и маскот как активы бренда.', en: 'VK and Telegram: frequency, reach, engagement, strands; the podcast and mascot as brand assets.' } },
      { title: { ru: 'Медиа и реклама', en: 'Press & ads' }, text: { ru: 'Упоминания в СМИ, рекламные инструменты и практики конкурентов.', en: 'Press mentions, ad tools and competitor practices.' } },
      { title: { ru: 'Экономика', en: 'Economics' }, text: { ru: 'Модель бюджета на 6 месяцев с прогнозными сценариями — это прогноз, а не результат.', en: 'A 6-month budget model with forecast scenarios — a forecast, not a result.' } },
    ],
    implementation: {
      ru: ['Развивать канал в Дзене', 'Подключать лекторов и нишевых авторов', 'Системность публикаций и рубрикатор', 'Реклама на небрендовые запросы', 'Календарь PR-поводов и экспертных комментариев', 'Связать офлайн с подпиской через QR и промокоды', 'Отдельное B2B-предложение для корпоративных лекций'],
      en: ['Grow a Dzen channel', 'Bring in lecturers and niche authors', 'Regular posting and content strands', 'Ads for non-branded queries', 'A calendar of PR hooks and expert comments', 'Link offline events to the subscription via QR and promo codes', 'A separate B2B offer for corporate lectures'],
    },
    cover: { src: auditSlide3, alt: { ru: 'Слайд аудита: четыре сегмента аудитории', en: 'Audit slide: four audience segments' } },
    materials: [
      { src: auditSlide6, alt: { ru: 'Слайд аудита: офлайн-коммуникации', en: 'Audit slide: offline communications' } },
      { src: auditSlide22, alt: { ru: 'Слайд аудита: рекомендации по Telegram', en: 'Audit slide: Telegram recommendations' } },
      { src: auditSlide25, alt: { ru: 'Слайд аудита: от лекции к подписке', en: 'Audit slide: from lecture to subscription' } },
    ],
    materialsCredit: { ru: 'Слайды из презентации аудита', en: 'Slides from the audit deck' },    results: [
      { value: '169K', label: { ru: 'подписчиков ВКонтакте по данным аудита', en: 'VK followers at the time of the audit' } },
      { value: '55K', label: { ru: 'подписчиков Telegram по данным аудита', en: 'Telegram followers at the time of the audit' } },
      { value: '44', label: { ru: 'упоминания в СМИ за 6 месяцев', en: 'press mentions over 6 months' } },
    ],
    resultsNote: {
      ru: 'Это наблюдения аудита, а не результаты продвижения: цифры относятся к срезам сентябрь 2025 — март 2026. Итог — приоритизированная система рекомендаций для плана реализации.',
      en: 'These are audit observations, not promotion results: figures refer to September 2025 — March 2026. The output is a prioritised set of recommendations for an implementation plan.',
    },
    tools: ['TGStat', 'Popsters', 'Медиалогия', 'Яндекс Вордстат', 'Google Sheets'],
    takeaways: {
      ru: ['Важно видеть не отдельные показатели каналов, а связь продукта, аудитории, контента, рекламы, PR и экономики продвижения'],
      en: ['What matters is not single channel metrics but how product, audience, content, ads, PR and economics connect'],
    },
    related: ['bakery-nemesh', 'heleo-4'],
  },
  {
    slug: 'bakery-nemesh',
    number: '05',
    title: { ru: 'Пекарня «Немеш»: коммуникации с нуля', en: 'Nemesh bakery: communications from scratch' },
    client: { ru: 'Хлебопекарное предприятие, Вологодская область', en: 'Bakery, Vologda region' },
    industry: { ru: 'HoReCa · малый бизнес · B2B', en: 'Food · small business · B2B' },
    period: { ru: 'Частная практика', en: 'Independent practice' },
    role: { ru: 'PR- и маркетинг-консультант', en: 'PR & marketing consultant' },
    categories: ['brand', 'marketing', 'digital'],
    tone: 'lemon',
    tagline: {
      ru: 'Основа коммуникационной системы для пекарни: исследование рынка и аудитории, конкуренты, позиционирование и план продвижения.',
      en: 'A communications foundation for a bakery: market and audience research, competitors, positioning and a promotion plan.',
    },
    context: {
      ru: 'Пекарня работает с 2009 года и продаёт хлеб оптом: продуктовым магазинам, небольшим торговым точкам, общепиту и посредникам. Рост держался на рекомендациях, а в интернете у предприятия почти не было присутствия.',
      en: 'The bakery has operated since 2009 and sells wholesale: to grocery stores, small shops, food service and distributors. Growth relied on referrals, and the business had almost no online presence.',
    },
    challenge: {
      ru: 'Сформировать системное присутствие пекарни в интернете, чтобы потенциальные партнёры быстро находили информацию о производстве, ассортименте, условиях и документах.',
      en: 'Build a systematic online presence so that potential partners could quickly find information on production, range, terms and documents.',
    },
    objectives: {
      ru: ['Исследование рынка и конкурентов', 'Анализ B2B-аудитории', 'Коммуникационная инфраструктура', 'Контент и репутация'],
      en: ['Market and competitor research', 'B2B audience analysis', 'Communications infrastructure', 'Content and reputation'],
    },
    strategy: [
      { title: { ru: 'Сайт как проверка надёжности', en: 'Website as a trust check' }, text: { ru: 'Сайт с ассортиментом, условиями поставок, документами и формой заявки — вход для новых B2B-заявок.', en: 'A website with range, delivery terms, documents and an enquiry form — the entry point for new B2B leads.' } },
      { title: { ru: 'Показать производство', en: 'Show production' }, text: { ru: 'Не только продукция, но и производство, команда, процессы и стандарты качества.', en: 'Not just products but production, team, processes and quality standards.' } },
      { title: { ru: 'Сегменты', en: 'Segments' }, text: { ru: 'Разные сообщения для торговых точек, магазинов, HoReCa и оптовых партнёров.', en: 'Different messages for shops, stores, food service and wholesale partners.' } },
      { title: { ru: 'Поиск и локальные площадки', en: 'Search & local' }, text: { ru: 'Поисковое продвижение, карточки на картах и ВКонтакте, чтобы перехватывать спрос.', en: 'Search, map listings and VK to capture existing demand.' } },
      { title: { ru: 'Удержание', en: 'Retention' }, text: { ru: 'Регулярная коммуникация с партнёрами через контент, отзывы и рассылки.', en: 'Regular contact with partners through content, reviews and newsletters.' } },
    ],
    implementation: {
      ru: ['Исследование рынка и конкурентов', 'Сегменты B2B-клиентов и критерии выбора поставщика', 'Структура сайта, карт и сообщества ВКонтакте', 'Контентные направления и работа с отзывами', 'Последовательность внедрения рекомендаций'],
      en: ['Market and competitor research', 'B2B segments and supplier selection criteria', 'Structure for the website, maps and VK', 'Content strands and review management', 'An implementation sequence'],
    },
    cover: { src: bakeryCover, alt: { ru: 'Макет: пекарня для магазинов и партнёров', en: 'Mock-up: a bakery for shops and partners' } },
    materials: [
      { src: bakerySite, alt: { ru: 'Макет первого экрана сайта', en: 'Website hero mock-up' } },
      { src: bakeryAssortment, alt: { ru: 'Макет: ассортимент', en: 'Mock-up: product range' } },
      { src: bakeryTerms, alt: { ru: 'Макет: условия сотрудничества', en: 'Mock-up: partnership terms' } },
      { src: bakeryHow, alt: { ru: 'Макет: как мы работаем', en: 'Mock-up: how we work' } },
      { src: bakeryPriceMail, alt: { ru: 'Макет рассылки: новый прайс-лист', en: 'Newsletter mock-up: new price list' } },
      { src: bakeryEmailPrice, alt: { ru: 'Макет письма с прайсом', en: 'Price email mock-up' } },
      { src: bakerySeasonal, alt: { ru: 'Макет: сезонное предложение', en: 'Mock-up: seasonal offer' } },
      { src: bakeryVk, alt: { ru: 'Посты для ВКонтакте', en: 'VK posts' } },
      { src: bakerySocial, alt: { ru: 'Сетка публикаций', en: 'Social media grid' } },
      { src: bakeryPie, alt: { ru: 'Исследование: каналы, где ищут поставщиков', en: 'Research: where buyers look for suppliers' } },
      { src: bakeryBars, alt: { ru: 'Исследование: что влияет на выбор поставщика', en: 'Research: what drives supplier choice' } },
    ],
    materialsCredit: { ru: 'Макеты и графики из стратегии продвижения', en: 'Mock-ups and charts from the promotion strategy' },
    table: {
      ru: {
        title: 'Аудит конкурентного рынка',
        file: 'конкуренты.xlsx',
        note: 'Сравнение цифрового присутствия розничных пекарен и оптовых производителей региона. Данные — на момент исследования.',
        highlightCol: 7,
        head: ['Параметр', 'Хлебница', 'EvaBakery', 'ПирогБери', 'ЗАО «Вологодский хлебокомбинат»', 'ОАО «Славянский хлеб»', 'ПК «Бабушкинский»', 'Немеш (клиент)'],
        rows: [
          { label: 'Модель', cells: [{ text: 'Розница B2C' }, { text: 'Розница B2C' }, { text: 'Розница B2C' }, { text: 'Опт + розница B2B/B2C' }, { text: 'Опт B2B' }, { text: 'Опт B2B' }, { text: 'Опт B2B' }] },
          { label: 'Брендовые запросы (Вордстат)', cells: [{ text: '~430/мес.' }, { text: '15/мес.' }, { text: 'Есть в выдаче по запросам конкурентов' }, { text: 'Не зафиксированы', span: 4 }] },
          { label: 'Сайт', cells: [{ text: 'Актуален, цен и КБЖУ нет' }, { text: 'Онлайн-заказ, цены, доставка' }, { text: 'Ассортимент, заказ, Метрика' }, { text: 'Каталог, история, вакансии; онлайн-заявки нет' }, { text: 'Последнее обновление в 2017 г.' }, { text: 'Нет', span: 2 }] },
          { label: 'ВКонтакте', cells: [{ text: 'Активно: сотрудники, рецепты, акции' }, { text: 'Активно: розыгрыши, позиции' }, { text: 'Активно' }, { text: 'Нет', span: 4 }] },
          { label: 'Яндекс Карты', cells: [{ text: '4,6 / 201 отзыв, 19 карточек точек' }, { text: 'Карточка, кнопка звонка' }, { text: 'Карточка есть' }, { text: '4,0 / 51 отзыв' }, { text: 'Карточка в 2ГИС' }, { text: 'Нет', span: 2 }] },
          { label: 'Конкурирует за', cells: [{ text: 'Внимание в интернете и ожидания от цифрового присутствия' }, { text: 'Внимание в интернете' }, { text: 'Внимание в интернете' }, { text: 'Тех же B2B-партнёров по области' }, { text: 'Тех же B2B-партнёров' }, { text: 'B2B-партнёров в Бабушкинском районе' }, { text: '—' }] },
          { label: 'Слабость в цифровой среде', cells: [{ text: 'Нет соцсетей у головной структуры, цен онлайн нет' }, { text: 'Слабые соцсети' }, { text: 'Сайт без SEO' }, { text: 'Нет соцсетей и онлайн-заявок, рейтинг 4,0' }, { text: 'Сайт не обновляется с 2017 г., нет соцсетей' }, { text: 'Нет присутствия', span: 2 }] },
        ],
      },
      en: {
        title: 'Competitive market audit',
        file: 'competitors.xlsx',
        note: 'Digital presence of retail bakeries and wholesale producers in the region, at the time of the research.',
        highlightCol: 7,
        head: ['Parameter', 'Khlebnitsa', 'EvaBakery', 'PirogBeri', 'Vologda Bread Plant', 'Slavyansky Khleb', 'Babushkinsky Co-op', 'Nemesh (client)'],
        rows: [
          { label: 'Model', cells: [{ text: 'Retail B2C' }, { text: 'Retail B2C' }, { text: 'Retail B2C' }, { text: 'Wholesale + retail' }, { text: 'Wholesale B2B' }, { text: 'Wholesale B2B' }, { text: 'Wholesale B2B' }] },
          { label: 'Branded searches (Wordstat)', cells: [{ text: '~430/month' }, { text: '15/month' }, { text: 'Shows up for competitor queries' }, { text: 'None recorded', span: 4 }] },
          { label: 'Website', cells: [{ text: 'Up to date, no prices or nutrition' }, { text: 'Online orders, prices, delivery' }, { text: 'Range, orders, analytics' }, { text: 'Catalogue, history, jobs; no online enquiries' }, { text: 'Last updated in 2017' }, { text: 'None', span: 2 }] },
          { label: 'VK', cells: [{ text: 'Active: staff, recipes, offers' }, { text: 'Active: giveaways, products' }, { text: 'Active' }, { text: 'None', span: 4 }] },
          { label: 'Yandex Maps', cells: [{ text: '4.6 / 201 reviews, 19 location cards' }, { text: 'Card with call button' }, { text: 'Card' }, { text: '4.0 / 51 reviews' }, { text: '2GIS card' }, { text: 'None', span: 2 }] },
          { label: 'Competes for', cells: [{ text: 'Online attention and expectations of digital presence' }, { text: 'Online attention' }, { text: 'Online attention' }, { text: 'The same B2B partners in the region' }, { text: 'The same B2B partners' }, { text: 'B2B partners in the Babushkinsky district' }, { text: '—' }] },
          { label: 'Digital weakness', cells: [{ text: 'No social media at HQ level, no prices online' }, { text: 'Weak social media' }, { text: 'Website without SEO' }, { text: 'No social media or online enquiries, 4.0 rating' }, { text: 'Website not updated since 2017, no social media' }, { text: 'No presence', span: 2 }] },
        ],
      },
    },
    results: [],
    resultsNote: {
      ru: 'Подготовлена основа коммуникационной системы с нуля и последовательность внедрения. Прогнозы заявок и трафика из исследования — ориентиры, а не достигнутые результаты.',
      en: 'A communications foundation and implementation sequence were prepared. Lead and traffic forecasts from the research are targets, not achieved results.',
    },
    tools: ['Яндекс Вордстат', 'Яндекс Карты', 'VK', 'Google Sheets'],
    takeaways: {
      ru: ['Традиционный региональный бизнес можно перевести в конкретную систему продвижения: от B2B-аудитории до структуры сайта и каналов'],
      en: ['A traditional regional business can be turned into a concrete promotion system — from B2B audience to website structure and channels'],
    },
    related: ['education-project-audit', 'bulvar-iskusstv'],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const countByCategory = (c: Category) => projects.filter((p) => p.categories.includes(c)).length;
