# Gustavo Galvão — Developer & Digital Growth

A premium portfolio and service-offering website showcasing full-stack development, AI automation, and digital growth services. Built with a modern, high-performance tech stack focused on aesthetics, smooth animations, and solid SEO.

![Premium Dark Theme](https://img.shields.io/badge/Theme-Dark_Premium-050505?style=flat-square)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css)

## 🌟 Key Features

- **Apple Premium Glassmorphism:** Custom frosted glass effects with dynamic gradient glows and interactive tilts for a high-end UI experience.
- **Advanced Animations:** Integration of **GSAP** (scroll reveals, custom timelines) and **Framer Motion** (page transitions, interactive components, floating elements).
- **Internationalization (i18n):** Native support for Portuguese (PT) and English (EN), with instant toggle functionality preserving state across the app.
- **Unified Contact Flow:** A bespoke modal system that captures user details and dynamically routes them to WhatsApp (pre-filled), Email, or a Meeting Scheduler.
- **Responsive Architecture:** Fully optimized for mobile, tablet, and ultra-wide desktop displays without sacrificing complex animations.
- **SEO Ready:** Helmet-powered meta tags, structured `robots.txt`, and canonical sitemaps.

## 🛠 Tech Stack

- **Framework:** React 18 (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS (Apple-style glass utility classes)
- **Animation:** GSAP, Framer Motion, React-Spring
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Meta/SEO:** React Helmet Async

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. **Clone the repository** (if not already local)
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```
   *The built files will be output to the `dist` directory, optimized and minified.*

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components & Sections (Hero, Plan, Process)
│   └── ui/              # Specialized interactive components (Modals, Kinetic Grids)
├── context/             # Global states (Language, Modals, Loading logic)
├── data/                # Static data (Project showcases, metadata)
├── hooks/               # Custom React Hooks (useGsapReveal, etc)
├── i18n/                # Translation dictionaries (EN/PT)
├── lib/                 # Utility functions (cn class merger)
├── pages/               # Legal & Standalone pages (Privacy, Terms, Portfolio)
├── App.tsx              # Main application router and layout
└── index.css            # Global CSS variables, fonts, and Glassmorphism layer
```

## 🎨 Design Philosophy

This project avoids generic template structures. Every element is designed to feel alive:
- **Kinetic Grids:** Backgrounds react subtly to cursor movement.
- **Text Morphing:** Headlines organically transition between core value propositions.
- **Gooey Filters:** SVG filters applied to CSS blobs to create liquid-like background ambient lighting.

## 🤝 Contact
- **Website:** [gustavogalvao.dev](https://gustavogalvao.dev)
- **LinkedIn:** [gustavojgalvaoo](https://www.linkedin.com/in/gustavojgalvaoo/)
- **Email:** gustavojezler@gmail.com
