import { 
  Chrome, 
  Bot, 
  Brain, 
  TestTube, 
  LayoutDashboard, 
  Puzzle, 
  Database,
  LucideIcon 
} from 'lucide-react';
import type { ProjectType } from '../types/project';

export const getProjectIcon = (type: ProjectType): LucideIcon => {
  const icons: Record<ProjectType, LucideIcon> = {
    'Browser Extension': Chrome,
    'AI Tool': Brain,
    'Integration': Puzzle,
    'Testing': TestTube,
    'Bot': Bot,
    'Dashboard': LayoutDashboard,
    'Parser': Database
  };
  
  return icons[type] || Puzzle;
};