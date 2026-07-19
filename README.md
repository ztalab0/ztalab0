<div align="center">

  <h1>✨ ZTA LAB - Agency Website</h1>

  <p align="center">
    <strong>Modern, Responsive & High-Performance Agency Website built with Next.js 16, React 19, Tailwind CSS v4, and Shadcn UI.</strong>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 16" />
    <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
    <img src="https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
    <img src="https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="Shadcn UI" />
    <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun" />
    <img src="https://img.shields.io/badge/Output-Static__Export-26E09C?style=for-the-badge&logo=vercel&logoColor=051F20" alt="Static Export" />
  </p>

</div>

---

## 📖 Project Overview

This codebase houses the official website for **ZTA LAB**, a top-tier digital engineering lab & creative agency. The application features a rich, responsive dark-teal aesthetic with smooth glassmorphism effects, auto-playing headline sliders, continuous marquees, interactive portfolio modals, and shadcn-powered carousels.

The site is configured for **Static HTML Export** (`output: 'export'` in `next.config.ts`), making it ready for instant deployment on GitHub Pages, Vercel, Netlify, or any static hosting provider.

---

## 🎨 Design System & Theme Palette

The application uses standard **Shadcn CSS design tokens** defined in `src/app/globals.css`, ensuring all components seamlessly share the dark agency teal aesthetic:

- **Base Background** (`--background`): `#051F20` (Deep Dark Teal)
- **Card Surface** (`--card`): `#0B2B26` (Dark Card & Panel Background)
- **Accent Surface** (`--secondary`): `#163832` (Surface & Icon Badge Container)
- **Teal Border** (`--border` / `--input`): `#235347` (Borders & Dividers)
- **Muted Text** (`--muted-foreground`): `#8EB69B` (Soft Mint Subtitles)
- **Primary Accent** (`--primary`): `#26E09C` (Neon Mint Primary Action Buttons & Rings)
- **Primary Text** (`--foreground`): `#FFFFFF` / `#DAF0EE` (High-Contrast Body Text)

---

## 🧩 Key Architecture & Components

```
src/
├── app/
│   ├── globals.css           # Shadcn design tokens & keyframe animations
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Main homepage assembly
├── components/
│   ├── ui/
│   │   ├── button.tsx        # Shadcn button primitive
│   │   └── carousel.tsx      # Official Shadcn/Embla carousel wrapper
│   ├── AboutSection.tsx      # Agency overview & 99.8% retention metric grid
│   ├── BrandMarquee.tsx      # Infinite horizontal collaborator ticker
│   ├── CompletedProjects.tsx # Filterable 2-card portfolio carousel
│   ├── ContactSection.tsx    # Interactive intake form & direct contact sidebar
│   ├── Footer.tsx            # Simplified footer with quick call box & back-to-top
│   ├── Hero.tsx              # Headline slider, stat counters & glowing review frame
│   ├── ImpactStats.tsx       # Numerical key metrics display (25K+ Projects)
│   ├── MouseFollower.tsx     # Custom trailing ring cursor follower
│   ├── Navbar.tsx            # Sticky glass header with dual-icon animated CTA
│   ├── OurServices.tsx       # 3-card services carousel with custom SVG badges
│   ├── ProjectModal.tsx      # Interactive project details drawer
│   ├── TeamSection.tsx       # Team member cards with active online status
│   └── TestimonialsSection.tsx # 5-star client review carousel
└── lib/
    └── utils.ts              # Tailwind class merge utility (cn)
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **[Bun](https://bun.sh)** installed on your machine.

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ztalab0/.github.git
cd .github

# 2. Install dependencies using Bun
bun install
```

### Development Server

Run the development server locally:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### Static Build & Export

To generate the static HTML export bundle:

```bash
bun run build
```

The compiled static site output will be generated in the `./out` directory.

---

## ⚙️ Deployment (GitHub Pages)

This repository includes a pre-configured GitHub Actions workflow located at `.github/workflows/nextjs.yml`. 

Whenever code is pushed to the `master` branch, the workflow will automatically:
1. Setup the Bun runtime environment.
2. Install project dependencies (`bun install`).
3. Compile the static site (`bun run build`).
4. Upload the `./out` artifact and deploy to **GitHub Pages**.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
