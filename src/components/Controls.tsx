import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

export function Controls() {
  return (
    <div className="flex items-center space-x-2">
      <ThemeToggle />
      <LanguageToggle />
    </div>
  );
}