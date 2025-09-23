# Potomac Theater Installers Website

A modern, responsive website for Potomac Theater Installers showcasing luxury home theater installation services.

## Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern Image Formats**: Uses AVIF and WebP for optimal performance
- **Service Showcase**: Three main service areas with dedicated sections
- **Contact Integration**: Built-in contact form for customer inquiries
- **Professional Branding**: Elegant design with luxury home theater aesthetics

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for responsive styling
- **Modern Image Formats** (AVIF/WebP with fallbacks)

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd potomac-theater
```

2. Install dependencies:
```bash
pnpm install
```

3. Start development server:
```bash
pnpm dev
```

4. Build for production:
```bash
pnpm build
```

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup GitHub Pages Deployment

1. Push your code to GitHub
2. Go to your repository Settings → Pages
3. Set Source to "GitHub Actions"
4. The site will automatically deploy on every push to the main branch

### Manual Deployment

You can also deploy the `dist` folder to any static hosting service:

```bash
pnpm build
# Upload the contents of the dist/ folder to your hosting provider
```

## Project Structure

```
potomac-theater/
├── src/
│   ├── components/          # React components
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── ...
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utilities
├── public/
│   └── images/             # Static images (AVIF/WebP)
├── .github/
│   └── workflows/          # GitHub Actions
└── dist/                   # Production build output
```

## License

© 2025 Potomac Theater Installers. All rights reserved.