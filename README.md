# Project Portfolio Showcase

A modern, responsive web application built with React and TypeScript that showcases a collection of programming projects. The application features a dark/light mode toggle and bilingual support (English/Russian).

## Features

- 🌓 Dark/Light mode support
- 🌐 Bilingual interface (English/Russian)
- 🔍 Real-time search functionality
- 🏷️ Category-based filtering
- 📱 Responsive design
- ⚡ Fast and optimized performance
- 🎨 Modern UI with Tailwind CSS

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (for icons)

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd [project-directory]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/     # React components
├── context/       # React context providers
├── data/          # Project data and mock data
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```

## Customizing Project List

To showcase your own projects, modify the `src/data/projects.ts` file. The file contains an array of project objects with the following structure:

```typescript
interface Project {
  id: string;           // Unique identifier
  title: string;        // Project name
  description: string;  // Project description
  technologies: string[]; // Array of technologies used
  repoUrl: string;      // GitHub repository URL
  type: string;         // Project category
}
```

Example project entry:
```typescript
{
  id: 'my-project',
  title: 'My Awesome Project',
  description: 'A detailed description of what the project does.',
  technologies: ['React', 'TypeScript', 'Node.js'],
  repoUrl: 'https://github.com/username/my-project',
  type: 'Web App'
}
```

The project types are used for filtering and can be customized based on your needs. Current example categories include:
- Web App
- Browser Extension
- AI Tool
- Bot
- Dashboard
- Parser
- Testing

## Features in Detail

### Search Functionality
- Real-time search across project titles, descriptions, and technologies
- Instant results as you type

### Category Filtering
- Filter projects by their type/category
- Combined filtering with search functionality

### Responsive Design
- Optimized for mobile, tablet, and desktop views
- Fluid grid layout that adapts to screen size

### Theme Switching
- Toggle between light and dark modes
- Persistent theme preference storage

### Internationalization
- Support for English and Russian languages
- Easy language switching with persistent preference

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 