export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  type: ProjectType;
}

export type ProjectType = 'Расширение браузера' | 'AI инструмент' | 'Интеграция' | 'Тестирование' | 'Бот' | 'Дашборд' | 'Парсер';

export const PROJECT_CATEGORIES: (ProjectType | 'Все')[] = [
  'Все',
  'Расширение браузера',
  'AI инструмент',
  'Интеграция',
  'Тестирование',
  'Бот',
  'Дашборд',
  'Парсер'
];