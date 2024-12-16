import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useApp } from '../context/AppContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useApp();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label={theme === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему'}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
      ) : (
        <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
      )}
    </button>
  );
}