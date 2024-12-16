import React from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../utils/translations';

export function Header() {
  const { language } = useApp();
  const t = translations[language];

  return (
    <div className="mb-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        {t.title}
      </h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
        {language === 'ru' ? 'по курсу' : 'from'}{' '}
        <a
          href="https://productuniversity.ru/cursor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
        >
          {language === 'ru' ? "'Cursor. AI-программирование с нуля'" : "'Cursor. AI Programming from Scratch'"}
        </a>
      </p>
    </div>
  );
}