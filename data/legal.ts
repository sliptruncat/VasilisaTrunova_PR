import type { L } from '@/i18n/ui';
import { contacts } from './site';

export interface LegalSection { h: string; p: string[] }
export interface LegalDoc { title: string; lead: string; updated: string; sections: LegalSection[] }

const email = contacts.email;

export const privacy: L<LegalDoc> = {
  ru: {
    title: 'Политика конфиденциальности',
    lead: 'Как я обрабатываю персональные данные людей, которые пишут мне через форму на этом сайте.',
    updated: 'Редакция от 7 ноября 2026 года',
    sections: [
      { h: '1. Кто обрабатывает данные', p: [
        `Оператор персональных данных — Василиса Трунова (далее — «я», «Оператор»). Связаться со мной по любым вопросам о данных можно по почте ${email}.`,
        'Политика составлена в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и действует для сайта, на котором вы её читаете.',
      ] },
      { h: '2. Какие данные я получаю', p: [
        'Через форму обратной связи: имя, контакт для ответа (ник в Telegram, адрес почты или номер телефона), название компании или проекта (по желанию), текст сообщения и адрес страницы, с которой оно отправлено.',
        'Я не прошу и не собираю паспортные данные, сведения о здоровье, платёжные данные и другие специальные или биометрические данные. Пожалуйста, не указывайте их в сообщении.',
      ] },
      { h: '3. Зачем', p: [
        'Только чтобы ответить на ваше обращение и обсудить возможное сотрудничество. Я не делаю рассылок, не использую данные для рекламы и не передаю их третьим лицам для их собственных целей.',
      ] },
      { h: '4. Основание', p: [
        'Ваше согласие на обработку персональных данных (п. 1 ч. 1 ст. 6 152-ФЗ). Вы даёте его, когда ставите отметку в форме перед отправкой. Текст согласия опубликован отдельной страницей. Без отметки форма не отправляется.',
      ] },
      { h: '5. Что я делаю с данными', p: [
        'Сбор, запись, хранение, использование для ответа и удаление. Обработка смешанная: автоматизированная (через сервисы ниже) и без средств автоматизации.',
      ] },
      { h: '6. Сервисы, через которые проходят данные', p: [
        'Formspree (Formspree, Inc., США) принимает сообщение из формы и пересылает его мне на почту.',
        'Gmail (Google LLC, США) — почтовый ящик, куда приходит сообщение.',
        'GitHub Pages (GitHub, Inc., США) размещает сайт, Google Fonts (Google LLC, США) отдаёт шрифты. Эти сервисы технически получают IP-адрес и сведения о браузере при открытии страниц.',
        'Так как серверы этих сервисов находятся за пределами России, отправка формы означает трансграничную передачу данных. Об этом сказано в тексте согласия.',
      ] },
      { h: '7. Сколько храню', p: [
        'Пока это нужно для переписки по вашему обращению, но не дольше одного года с последнего сообщения. Если вы отзовёте согласие, я удалю ваши данные в течение 30 дней.',
      ] },
      { h: '8. Cookie и хранилище браузера', p: [
        'Сайт не использует рекламные и аналитические cookie и счётчики. В хранилище вашего браузера сохраняется только отметка о том, что вы закрыли уведомление о cookie, чтобы оно не появлялось снова. Её можно удалить в настройках браузера.',
      ] },
      { h: '9. Ваши права', p: [
        `Вы можете узнать, какие ваши данные у меня есть, попросить уточнить или удалить их, а также отозвать согласие. Для этого напишите на ${email}. Я отвечу в течение 10 рабочих дней.`,
        'Если вы считаете, что ваши права нарушены, вы можете обратиться в Роскомнадзор или в суд.',
      ] },
      { h: '10. Защита', p: [
        'Доступ к сообщениям есть только у меня, к почтовому ящику и аккаунту сервиса форм.',
      ] },
      { h: '11. Изменения', p: [
        'Я могу обновлять политику. Актуальная редакция всегда на этой странице, дата редакции указана вверху.',
      ] },
    ],
  },
  en: {
    title: 'Privacy policy',
    lead: 'How I handle the personal data of people who contact me through the form on this site.',
    updated: 'Version of 7 November 2026',
    sections: [
      { h: '1. Who processes the data', p: [
        `The data controller is Vasilisa Trunova ("I"). For any question about your data, email ${email}.`,
        'This policy follows Russian Federal Law No. 152-FZ "On Personal Data".',
      ] },
      { h: '2. What I receive', p: [
        'Through the contact form: your name, a contact for my reply (Telegram handle, email or phone), company or project (optional), your message and the page it was sent from.',
        'I do not ask for passport, health, payment or other sensitive data. Please do not include it in your message.',
      ] },
      { h: '3. Why', p: [
        'Only to reply to you and discuss possible work together. No newsletters, no advertising, no sharing for third parties’ own purposes.',
      ] },
      { h: '4. Legal basis', p: [
        'Your consent. You give it by ticking the box in the form; the consent text is published on a separate page. The form cannot be sent without it.',
      ] },
      { h: '5. Services the data passes through', p: [
        'Formspree (Formspree, Inc., USA) receives the form and forwards it to my inbox; Gmail (Google LLC, USA) hosts the inbox; GitHub Pages (GitHub, Inc., USA) hosts the site and Google Fonts (Google LLC, USA) serves fonts. Hosting and fonts technically receive your IP address and browser details.',
        'These servers are outside Russia, so sending the form involves a cross-border transfer of data.',
      ] },
      { h: '6. Retention', p: [
        'As long as needed for our correspondence, and no longer than one year after the last message. If you withdraw consent, I delete your data within 30 days.',
      ] },
      { h: '7. Cookies and browser storage', p: [
        'No advertising or analytics cookies or counters. Your browser only stores a flag that you closed the cookie notice, so it does not show again.',
      ] },
      { h: '8. Your rights', p: [
        `You can ask what data I hold, have it corrected or deleted, or withdraw consent by emailing ${email}. I reply within 10 working days.`,
      ] },
    ],
  },
};

export const consent: L<LegalDoc> = {
  ru: {
    title: 'Согласие на обработку персональных данных',
    lead: 'Этот текст вы принимаете, когда ставите отметку в форме обратной связи.',
    updated: 'Редакция от 7 ноября 2026 года',
    sections: [
      { h: 'Кому я даю согласие', p: [
        `Отправляя форму на этом сайте и отмечая согласие, я свободно, своей волей и в своём интересе даю согласие Василисе Труновой (почта для связи: ${email}) на обработку моих персональных данных на условиях ниже.`,
      ] },
      { h: 'Какие данные', p: [
        'Имя; контакт для ответа (ник в Telegram, адрес почты или номер телефона); название компании или проекта, если я его указал(а); текст сообщения; адрес страницы, с которой отправлена форма.',
      ] },
      { h: 'Цель', p: [
        'Ответ на моё обращение и обсуждение возможного сотрудничества.',
      ] },
      { h: 'Действия с данными', p: [
        'Сбор, запись, хранение, использование, удаление и уничтожение, с использованием средств автоматизации и без них.',
      ] },
      { h: 'Трансграничная передача', p: [
        'Я согласен(а), что мои данные передаются через сервис форм Formspree (Formspree, Inc., США) и почтовый сервис Gmail (Google LLC, США), серверы которых находятся за пределами Российской Федерации.',
      ] },
      { h: 'Срок и отзыв', p: [
        `Согласие действует до достижения цели обработки, но не дольше одного года с моего последнего сообщения. Я могу отозвать его в любой момент, написав на ${email}. После отзыва данные удаляются в течение 30 дней.`,
      ] },
      { h: 'Подробнее', p: [
        'Как обрабатываются данные, описано в политике конфиденциальности.',
      ] },
    ],
  },
  en: {
    title: 'Consent to personal data processing',
    lead: 'This is what you agree to when you tick the box in the contact form.',
    updated: 'Version of 7 November 2026',
    sections: [
      { h: 'Who I give consent to', p: [
        `By sending the form and ticking the box, I freely give Vasilisa Trunova (${email}) my consent to process my personal data on the terms below.`,
      ] },
      { h: 'Data', p: ['Name; a contact for the reply; company or project if provided; message text; the page the form was sent from.'] },
      { h: 'Purpose', p: ['Replying to my message and discussing possible work together.'] },
      { h: 'Actions', p: ['Collection, recording, storage, use and deletion, automated and manual.'] },
      { h: 'Cross-border transfer', p: ['I agree that my data passes through Formspree (Formspree, Inc., USA) and Gmail (Google LLC, USA), whose servers are outside Russia.'] },
      { h: 'Term and withdrawal', p: [`Valid until the purpose is met, no longer than one year after my last message. I can withdraw it at any time by emailing ${email}; data is then deleted within 30 days.`] },
      { h: 'More', p: ['See the privacy policy for details.'] },
    ],
  },
};
