import React from 'react';
import { useApp } from '../context/AppContext';

export function LanguageToggle() {
  const { language, toggleLanguage } = useApp();

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
    >
      {language === 'ru' ? 'EN' : 'RU'}
    </button>
  );
}