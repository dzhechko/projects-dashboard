import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'cian-chrome-plugin',
    title: 'CIAN Расширение для Chrome',
    description: 'Расширение браузера для расширенной функциональности платформы недвижимости CIAN, предоставляющее продвинутые инструменты фильтрации и анализа данных.',
    technologies: ['JavaScript', 'Chrome API', 'HTML', 'CSS'],
    repoUrl: 'https://github.com/dzhechko/cian-chrome-plugin/tree/main',
    type: 'Расширение браузера'
  },
  {
    id: 'gpt-google-docs',
    title: 'GPT Расширение для Google Docs',
    description: 'Расширение с искусственным интеллектом для интеграции с Google Docs, обеспечивающее умную генерацию контента и помощь в редактировании.',
    technologies: ['Google Apps Script', 'OpenAI API', 'JavaScript'],
    repoUrl: 'https://github.com/dzhechko/gpt-google-docs-extension',
    type: 'AI инструмент'
  },
  {
    id: 'gpt-google-sheets',
    title: 'GPT Расширение для Google Sheets',
    description: 'AI-ассистент для Google Sheets, предоставляющий интеллектуальный анализ данных и предложения по формулам.',
    technologies: ['Google Apps Script', 'OpenAI API', 'JavaScript'],
    repoUrl: 'https://github.com/dzhechko/gpt-google-sheets-extension',
    type: 'AI инструмент'
  },
  {
    id: 'google-docs-test',
    title: 'Тестирование плагина Google Docs',
    description: 'Тестовая реализация для плагина Google Docs, обеспечивающая надежную функциональность и интеграцию.',
    technologies: ['Google Apps Script', 'Jest', 'TypeScript'],
    repoUrl: 'https://github.com/dzhechko/dz-google-docs-plugin-test',
    type: 'Тестирование'
  },
  {
    id: 'google-sheets-test',
    title: 'Тестирование Google Sheets',
    description: 'Фреймворк тестирования для интеграции с Google Sheets, обеспечивающий комплексное покрытие тестами функциональности электронных таблиц.',
    technologies: ['Google Apps Script', 'Jest', 'TypeScript'],
    repoUrl: 'https://github.com/dzhechko/dz-google-sheets-test/blob/main/README.md',
    type: 'Тестирование'
  },
  {
    id: 'gpt-telegram-bot',
    title: 'GPT Telegram Бот',
    description: 'Чат-бот с искусственным интеллектом для платформы Telegram, предлагающий интеллектуальные беседы и автоматизированную помощь.',
    technologies: ['Node.js', 'OpenAI API', 'Telegram Bot API'],
    repoUrl: 'https://github.com/dzhechko/pu-gpt-telegram-bot',
    type: 'Бот'
  },
  {
    id: 'finance-dashboard',
    title: 'Финансовый дашборд',
    description: 'Дашборд визуализации и аналитики финансовых данных, предоставляющий комплексные инструменты анализа и отчетности.',
    technologies: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS'],
    repoUrl: 'https://github.com/dzhechko/pu-finance-dashboard',
    type: 'Дашборд'
  },
  {
    id: 'ai-sales-trainer',
    title: 'AI тренер по продажам',
    description: 'Платформа на базе искусственного интеллекта для обучения продажам, с интерактивными сценариями и анализом эффективности.',
    technologies: ['React', 'OpenAI API', 'Node.js', 'MongoDB'],
    repoUrl: 'https://github.com/dzhechko/AI-SALES-TRAINER-bolt/blob/main/README.md',
    type: 'AI инструмент'
  },
  {
    id: '3d-avatar-creator',
    title: 'Создатель 3D аватаров',
    description: 'Инструмент для генерации и настройки 3D аватаров с расширенными возможностями моделирования и кастомизации.',
    technologies: ['Three.js', 'React', 'WebGL', 'TypeScript'],
    repoUrl: 'https://github.com/dzhechko/pu-3d-avatar/blob/main/README-ru.md',
    type: 'AI инструмент'
  },
  {
    id: 'perplexity-clone',
    title: 'Клон Perplexity',
    description: 'Воссоздание интерфейса поиска Perplexity AI с расширенными возможностями поиска и улучшенным пользовательским опытом.',
    technologies: ['React', 'Next.js', 'OpenAI API', 'Tailwind CSS'],
    repoUrl: 'https://github.com/dzhechko/perplexity-clone',
    type: 'AI инструмент'
  },
  {
    id: 'avito-parser',
    title: 'Парсер Avito',
    description: 'Инструмент для извлечения данных с площадки Avito, обеспечивающий автоматизированный сбор и анализ объявлений.',
    technologies: ['Python', 'BeautifulSoup', 'Selenium', 'PostgreSQL'],
    repoUrl: 'https://github.com/dzhechko/avito-parser',
    type: 'Парсер'
  }
];