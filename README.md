# Portfolio

Muhammad Hassaan Bin Saqib's personal portfolio website built with Angular.

## Prerequisites

- **Node.js** (v18 or later recommended)
- **npm** (comes with Node.js)

## Dependencies

### Core Framework
| Package | Version |
|---------|---------|
| @angular/core | 21.2.0 |
| @angular/common | 21.2.0 |
| @angular/compiler | 21.2.0 |
| @angular/platform-browser | 21.2.0 |
| @angular/platform-browser-dynamic | 21.2.0 |
| @angular/router | 21.2.0 |
| @angular/forms | 21.2.0 |
| @angular/animations | 21.2.0 |

### Build & Dev Tools
| Package | Version |
|---------|---------|
| @angular-devkit/build-angular | ^21.2.0 |
| @angular/build | ^21.2.0 |
| @angular/cli | ^21.2.0 |
| @angular/compiler-cli | 21.2.0 |
| typescript | ~5.9.0 |

### Utilities
| Package | Version | Purpose |
|---------|---------|---------|
| rxjs | ^7.8.2 | Reactive programming |
| zone.js | ~0.15.0 | Angular change detection |
| tslib | ^2.6.2 | TypeScript helper functions |
| motion | ^12.38.0 | Animations |
| tailwindcss | CDN | Utility-first CSS framework |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

or

```bash
npm start
```

The app will be available at `http://localhost:4200`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm start` | Start development server (alias) |
| `npm run build` | Build for production |
| `npm run watch` | Build with watch mode for development |
| `npm test` | Run unit tests |
| `npm run ng` | Run Angular CLI commands |

## Project Structure

```
src/
  ├── components/       # Reusable UI components
  │   ├── navbar/       # Navigation dock
  │   └── footer/       # Site footer
  ├── pages/            # Page components
  │   ├── home/         # Landing page
  │   ├── career/       # Career & education timeline
  │   ├── credentials/  # Certifications, skills, badges
  │   ├── projects/     # Research & projects showcase
  │   └── contact/      # Contact information
  ├── app.component.ts  # Root component
  ├── app.routes.ts     # Route configuration
  ├── styles.css        # Global styles
  └── index.html        # Entry HTML file
```
