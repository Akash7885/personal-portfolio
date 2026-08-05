# Akash Dabhi — Developer Portfolio

A cinematic, dark-mode portfolio site built with React, Vite, Tailwind CSS, and
Framer Motion. Every piece of personal content — name, education, internship
experience, skills, and projects — is data-driven from a single file, sourced
directly from Akash's resume.

**Live demo:** <https://akash-portfolio-woad-eight.vercel.app/>

---

## ✨ Features

- **Animated loader** with progress bar and smooth fade-out
- **Sticky glass navbar** with scroll-spy active states and a mobile menu
- **Cinematic hero section** — animated gradient blobs, starfield, grid overlay,
  a self-typing "code editor" glass panel, floating tech badges, a typewriter
  role headline, and animated stat counters
- **Glassmorphism throughout** — cards, borders, and blur consistent with a
  single design system (see `tailwind.config.js`)
- **Scroll-reveal animations** (fade, slide, stagger, tilt) via Framer Motion
- **Custom magnetic cursor** (auto-disabled on touch devices)
- **Lenis smooth scrolling**
- **Contact form** wired to EmailJS with client-side validation, loading, and
  success/error states
- **Fully responsive**, semantic HTML, keyboard-navigable, `prefers-reduced-motion`
  aware

## 🧱 Tech Stack

| Layer        | Tools |
|--------------|-------|
| Framework    | React 18 + Vite |
| Styling      | Tailwind CSS |
| Animation    | Framer Motion |
| Smooth scroll| Lenis |
| Icons        | Lucide React |
| Email        | EmailJS |
| Utilities    | clsx, react-intersection-observer |

## 🚀 Getting Started

### 1. Install dependencies

```bash
cd portfolio
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

### 3. Configure the contact form (EmailJS)

The Contact section calls [EmailJS](https://www.emailjs.com/) but needs your
own credentials before it will actually send mail:

1. Create a free EmailJS account and set up an email service + template.
2. Open `src/data/portfolioData.js` and fill in:
   ```js
   export const emailjsConfig = {
     serviceId: 'YOUR_EMAILJS_SERVICE_ID',
     templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
     publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
   }
   ```
3. Your EmailJS template should expect these variables: `from_name`,
   `from_email`, `subject`, `message`.

Until this is filled in, submitting the form will show the error state.

### 4. Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

Output lands in `dist/` — deploy that folder to Vercel, Netlify, GitHub
Pages, or any static host.

## 📁 Project structure

```
portfolio/
├── public/
│   ├── Akash_Dabhi_Resume.pdf   → linked from "Download Resume" buttons
│   ├── favicon.svg
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── components/
    │   ├── layout/    → Navbar, Footer, Loader, CustomCursor, SmoothScroll
    │   ├── ui/        → GlassCard, AnimatedButton, SectionHeading, CodeShowcase
    │   ├── cards/     → SkillCard, ProjectCard, TimelineCard
    │   └── sections/  → Hero, About, Skills, Experience, Projects, Education, Resume, Contact
    ├── hooks/         → useScrollSpy, useTiltEffect
    ├── animations/    → variants.js (shared Framer Motion variants)
    ├── constants/     → navigation.js (shared nav/section ids)
    ├── data/          → portfolioData.js (single source of truth for content)
    ├── utils/         → iconMap.js, scroll.js
    ├── App.jsx
    └── main.jsx
```

## 🎨 Design system

Colors, fonts, and animation keyframes are centralized in
`tailwind.config.js` — change them there to re-theme the entire site
consistently:

- **Background:** `#050816` · **Secondary:** `#0F172A` · **Card:** `#111827`
- **Accent (blue):** `#3B82F6` · **Accent (purple):** `#8B5CF6`
- **Fonts:** Sora (display) / Poppins (body)

Dark mode only, by design.

## ♿ Accessibility & performance notes

- Semantic landmarks and ARIA labels on interactive controls
- Full keyboard navigation (nav links, mobile menu, buttons, form fields)
- `prefers-reduced-motion` disables animation globally (see `src/index.css`)
- Custom cursor and magnetic hover effects auto-disable on touch devices
- Heavy card lists (skills, projects) are memoized with `React.memo`

## 📄 License

Personal project — feel free to fork the structure for your own portfolio,
but please swap in your own resume data and content before publishing.
