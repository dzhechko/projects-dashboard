import React, { useState, useMemo } from 'react';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { ProjectGrid } from './components/ProjectGrid';
import { LoadingState } from './components/LoadingState';
import { EmptyState } from './components/EmptyState';
import { Header } from './components/Header';
import { Controls } from './components/Controls';
import { projects } from './data/projects';
import { useApp } from './context/AppContext';
import { translations } from './utils/translations';
import type { FilterState } from './types';

function App() {
  const { language, theme } = useApp();
  const t = translations[language];

  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: 'Все',
  });
  const [isLoading] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = 
        project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filters.search.toLowerCase())
        );
      
      const matchesCategory =
        filters.category === 'Все' || project.type === filters.category;

      return matchesSearch && matchesCategory;
    });
  }, [filters]);

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200`}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-8">
          <Controls />
        </div>
        
        <Header />

        <div className="mb-8 space-y-4 sm:flex sm:items-center sm:justify-between sm:space-y-0">
          <div className="w-full max-w-xs">
            <SearchBar
              value={filters.search}
              onChange={(search) => setFilters((prev) => ({ ...prev, search }))}
              placeholder={t.searchPlaceholder}
            />
          </div>
          <CategoryFilter
            selected={filters.category}
            onChange={(category) =>
              setFilters((prev) => ({ ...prev, category }))
            }
          />
        </div>

        {isLoading ? (
          <LoadingState />
        ) : filteredProjects.length > 0 ? (
          <ProjectGrid projects={filteredProjects} />
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}

export default App;