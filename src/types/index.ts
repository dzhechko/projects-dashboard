export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  type: string;
}

export interface FilterState {
  search: string;
  category: string;
}