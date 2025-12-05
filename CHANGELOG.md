# Changelog

All notable changes to the Supra Landing Page project will be documented in this file.

## [v2.0.0] - December 5, 2025

### Complete Rework - Minimal Flowing Menu
- **BREAKING**: Removed all landing page sections
- **NEW**: Pure implementation of [ReactBits Flowing Menu](https://reactbits.dev/components/flowing-menu)
- Single page with centered flowing menu (4 buttons only)
- Minimal, focused design showcasing the animation

### Removed Components
- ❌ Header.tsx
- ❌ Hero.tsx
- ❌ Features.tsx
- ❌ ForRestaurants.tsx
- ❌ About.tsx
- ❌ Contact.tsx
- ❌ Footer.tsx
- ❌ StaggeredMenu.tsx

### Added/Updated
- ✅ FlowingMenu.tsx - Pure flowing menu with layoutId animation
- ✅ Updated app/page.tsx - Minimal centered design
- ✅ 4 buttons: Home, About, Services, Contact

### Technical Details
- Component: `components/FlowingMenu.tsx`
- Features:
  - layoutId="flowingBackground" for smooth background flow
  - Spring physics: stiffness 380, damping 30
  - Scale animations on hover (1.05) and tap (0.95)
  - Dark mode support
- Build Status: ✅ All builds successful, zero errors

## [Initial Release] - December 5, 2025

### Added
- Complete landing page with modern design
- Hero section with gradient backgrounds
- Features grid with 6 key features
- Restaurant benefits section
- About section with statistics
- Contact form
- Footer with navigation
- Dark mode support
- Full TypeScript implementation
- Framer Motion animations throughout
- SEO optimization
- Vercel deployment configuration
- Comprehensive documentation (README, DEPLOYMENT, QUICKSTART, PROJECT_SUMMARY)

### Technology Stack
- Next.js 16.0.7 (App Router with Turbopack)
- React 19.2.0
- TypeScript 5
- Tailwind CSS v4
- Framer Motion 12.23.25
- Vercel hosting
- Domain: supra-booking.com (Hostinger)

---

**Format**: Based on [Keep a Changelog](https://keepachangelog.com/)

