import React from 'react';
import { PROJECT_CATEGORIES } from '../types/project';
import { useApp } from '../context/AppContext';
import { translations } from '../utils/translations';

interface CategoryFilterProps {
  selected: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  const { language } = useApp();
  const t = translations[language];

  return (
    <div className="flex flex-wrap gap-2">
      {PROJECT_CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            selected === category
              ? 'bg-blue-500 text-white dark:bg-blue-600'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {t.categories[category]}
        </button>
      ))}
    </div>
  );
}