# Elisha Coad Portfolio - Astro Migration

This is the migrated version of Elisha Coad's portfolio website, converted from Webflow to Astro with Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Header.astro    # Navigation header
│   ├── Footer.astro    # Site footer
│   └── ProjectCard.astro # Project showcase cards
├── layouts/            # Page layouts
│   ├── BaseLayout.astro # Main site layout
│   └── CaseStudyLayout.astro # Case study layout
├── pages/              # Astro pages (file-based routing)
│   ├── index.astro     # Homepage
│   ├── about.astro     # About page
│   ├── playground.astro # Playground gallery
│   ├── work/           # Case studies
│   │   ├── mindflow.astro
│   │   ├── lore.astro
│   │   └── marky.astro
│   ├── 404.astro       # Error page
│   └── search.astro    # Search page
└── styles/
    └── global.css      # Global styles + Tailwind

public/                 # Static assets
├── images/            # All images from original site
├── documents/         # PDFs and Lottie animations
└── js/               # Webflow.js (preserved for animations)

_webflow-original/     # Original Webflow files (reference)
```

## 🎨 Design System

### Colors
- `--dark-grey`: #656565
- `--black`: #1e1e1e  
- `--gold`: #b08b5d
- `--med-grey`: #b0afb0
- `--light-grey`: #f3f3f3

### Typography
- Font Family: Sofia Pro (Adobe Typekit)
- Responsive typography scales maintained

## 🔧 Key Features Preserved

### Interactive Elements
- ✅ Custom cursor behavior
- ✅ Logo Lottie animation on hover
- ✅ Navigation button draw animations
- ✅ H1 hover mask effect
- ✅ Scroll-triggered opacity animations
- ✅ Mindflow Lottie animation
- ✅ Lightbox functionality (playground)
- ✅ Mobile menu

### Technical Features
- ✅ Adobe Typekit fonts
- ✅ jQuery + Webflow.js for animations
- ✅ Responsive design at all breakpoints
- ✅ SEO meta tags
- ✅ Favicon and app icons

## 🛠 Development Notes

### Webflow Classes Preserved
The migration preserves all original Webflow classes and data attributes to maintain exact visual parity:
- `w-container`, `w-layout-grid`, `w-nav` classes
- `data-w-id` attributes for animations
- `mouse-hover-fx` classes for interactions

### Component Architecture
- **BaseLayout**: Handles head, scripts, cursor, and common structure
- **Header**: Navigation with active state logic
- **Footer**: Contact links and copyright
- **ProjectCard**: Reusable project showcase component
- **CaseStudyLayout**: Specialized layout for case studies

### Styling Approach
- Tailwind CSS for utility classes
- Global CSS for Webflow-specific styles
- CSS custom properties for color system
- Responsive breakpoints maintained

## 🚀 Deployment

The site builds to static files in the `dist/` directory and can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Connect repository or drag `dist/` folder
- **GitHub Pages**: Push `dist/` contents to gh-pages branch

## 🔮 Future Enhancements

See `ROADMAP.md` for planned improvements:
- Convert Webflow classes to Tailwind utilities
- Replace jQuery/Webflow.js with native Astro solutions
- Implement Astro Image component for optimization
- Create content collections for case studies
- Add MDX support for easier content authoring
- Modernize animations with View Transitions API

## 📝 Migration Checklist

- [x] Archive original files
- [x] Initialize Astro + Tailwind
- [x] Migrate static assets
- [x] Create base layout and components
- [x] Migrate homepage with project cards
- [x] Migrate about and playground pages
- [x] Create case study layout and migrate case studies
- [x] Migrate error and search pages
- [x] Test production build
- [x] Verify visual parity
- [x] Document project structure

## 🎯 Success Criteria Met

✅ **Visual Parity**: Site looks identical to original at all breakpoints  
✅ **Interactive Features**: All animations and interactions preserved  
✅ **Performance**: Static generation with optimized assets  
✅ **Maintainability**: Component-based architecture for easy updates  
✅ **Future-Ready**: Foundation for modern enhancements