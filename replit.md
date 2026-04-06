# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### TechLaunch Academy (`artifacts/techlaunch-academy`)
- **Type**: React Vite web app (frontend-only, no backend)
- **Preview path**: `/`
- **Description**: Multi-page training and placement institute website
- **Tech**: React JSX, React Router DOM, plain CSS
- **Pages**: Home, Courses, CourseDetail, Placements, About, Contact
- **Key features**: StatCounter (IntersectionObserver), marquee animation, domain filter tabs, course search, placement cards, testimonials, WhatsApp floating button

#### File Structure
- `src/App.jsx` — main router (BrowserRouter + React Router DOM routes)
- `src/main.jsx` — entry point
- `src/App.css` — all global styles (no Tailwind)
- `src/data/courses.js` — all hardcoded data (courses, placements, testimonials, hiring partners)
- `src/components/Navbar.jsx` — sticky navbar with hamburger menu
- `src/components/Footer.jsx` — 3-column footer with navy background
- `src/components/CourseCard.jsx` — course card with rating, batch date, enroll button
- `src/components/PlacementCard.jsx` — placed student card with initials avatar
- `src/components/TestimonialCard.jsx` — testimonial with star rating
- `src/components/StatCounter.jsx` — animated count-up (IntersectionObserver)
- `src/components/WhatsAppButton.jsx` — fixed WhatsApp floating button
- `src/pages/HomePage.jsx` — hero, courses, why-choose-us, placements, testimonials, marquee, CTA
- `src/pages/CoursesPage.jsx` — all courses with search + domain filter
- `src/pages/CourseDetailPage.jsx` — syllabus accordion, trainer, enrollment form
- `src/pages/PlacementsPage.jsx` — placement grid, 4-step process timeline, testimonials
- `src/pages/AboutPage.jsx` — mission, team, milestones
- `src/pages/ContactPage.jsx` — contact form + address/map placeholder

#### Design System
- Primary: `#0A2E5C` (dark navy)
- Accent: `#F97316` (orange)
- Card border-radius: 10px, button border-radius: 6px
- Hover: `translateY(-3px)` + box-shadow
