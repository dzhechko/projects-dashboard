import React from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../utils/translations';

export function EmptyState() {
  const { language } = useApp();
  const t = translations[language];

  return (
    <div className="mt-12 text-center">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        {t.noProjects}
      </h3>
      <p className="mt-1 text-gray-500 dark:text-gray-400">
        {t.tryChanging}
      </p>
    </div>
  );
}