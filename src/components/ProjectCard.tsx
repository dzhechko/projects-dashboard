import React from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';
import type { Project } from '../types/project';
import { getProjectIcon } from '../utils/projectIcons';
import { useApp } from '../context/AppContext';
import { translations } from '../utils/translations';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = getProjectIcon(project.type);
  const { language } = useApp();
  const t = translations[language];

  return (
    <a
      href={project.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block transform transition-all duration-300 hover:-translate-y-1"
    >
      <div className="h-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2">
              <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {language === 'en' ? t.categories[project.type] : project.title}
            </h3>
          </div>
          <ExternalLink className="h-5 w-5 text-gray-400 transition-colors group-hover:text-blue-500 dark:text-gray-500 dark:group-hover:text-blue-400" />
        </div>
        
        <p className="mt-4 line-clamp-2 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-sm text-gray-600 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
          <GitBranch className="mr-2 h-4 w-4" />
          <span>{t.openRepo}</span>
        </div>
      </div>
    </a>
  );
}