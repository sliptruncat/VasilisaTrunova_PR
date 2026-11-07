import type { L } from '@/i18n/ui';

/** Quotes from real recommendation letters (2025). By request: company only, no personal names. */
export const testimonials: { quote: L; company: L }[] = [
  {
    quote: {
      ru: 'Обладает редким сочетанием аналитического мышления и творческого подхода, умеет находить нестандартные решения даже в сложных ситуациях.',
      en: 'A rare combination of analytical thinking and creativity — she finds unconventional solutions even in difficult situations.',
    },
    company: { ru: 'ООО «СпецТрансСтрой»', en: 'SpetsTransStroy' },
  },
  {
    quote: {
      ru: 'Василиса являлась одним из ключевых сотрудников, отвечающих за продвижение премии GOLD STARS Discovery.',
      en: 'Vasilisa was one of the key people responsible for promoting the GOLD STARS Discovery award.',
    },
    company: { ru: 'ООО «ИД „Дискавери“»', en: 'Discovery Publishing House' },
  },
  {
    quote: {
      ru: 'Специалист, сочетающий аналитический подход и креативное мышление.',
      en: 'A specialist who combines an analytical approach with creative thinking.',
    },
    company: { ru: 'АНО «Центр им. Н. А. Бердяева»', en: 'Berdyaev Centre' },
  },
];
