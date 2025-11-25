# Disrupt Website

A modern, dynamic website for Disrupt, a builders club and hacker house in St. Louis.

## Features

- **Typewriter Effects**: Hero section and quote animate with typewriter effect on first load
- **Smooth Animations**: Framer Motion animations throughout for smooth transitions
- **Expandable Sections**: Timeline items and other sections can expand/collapse for detail
- **Responsive Design**: Fully responsive and mobile-friendly
- **Accessibility**: Keyboard accessible, screen reader friendly, high contrast
- **Interactive Elements**: Hover effects, animated cards, modal for CTA

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
disrupt/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── components/
│   ├── Hero.tsx        # Hero section with typewriter
│   ├── Typewriter.tsx  # Typewriter effect component
│   ├── Timeline.tsx    # Expandable timeline
│   ├── VisionCard.tsx  # Animated vision cards
│   ├── ExpandableSection.tsx # Reusable expandable component
│   └── CTA.tsx         # Call-to-action with modal
└── public/
    └── fig1.png        # Innovation flywheel image
```

## Key Components

### Hero
- Typewriter effect for quote
- Smooth fade-in animations
- Responsive typography

### Timeline
- Expandable/collapsible items
- Scroll-triggered animations
- Intersection Observer for performance

### Vision Cards
- Pop-in animations on scroll
- Hover effects
- Staggered entrance

### CTA
- Modal popup for application
- Smooth animations
- Accessible keyboard navigation

## Customization

All content matches the original HTML structure. To update:
- Edit `app/page.tsx` for main content
- Modify components in `components/` directory
- Update styles in `app/globals.css`

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- High contrast colors
- Screen reader friendly

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge)
