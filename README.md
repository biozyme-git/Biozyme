# Biozyme Trading Company

Official corporate web application for Biozyme Trading Company, a premier B2B supplier and exporter of high-grade sugarcane molasses sourced from Western Maharashtra's top cooperative and private sugar mills.

---

## Overview

Biozyme Trading Company specializes in bulk procurement, quality testing, and multi-modal logistics for industrial, feed, and aquaculture grade sugarcane molasses across domestic (Pan-India) and international export markets.

This web application serves as the primary digital portal for clients, plant managers, feed manufacturers, and procurement teams to inspect technical specifications, review compliance documentation (such as M-III licensing and MSDS), and submit Requests for Quotation (RFQ).

---

## Key Features

- Corporate B2B Design: Tailored layout utilizing an agro-industrial palette (Forest Green `#1B4332`, Navy Blue `#0F2C59`, and Amber `#D97706`).
- Hardware-Accelerated Hero Visuals: Optimized H.264 video assets pre-composited for fluid 60/120 FPS mobile playback with zero main-thread CPU bottlenecks.
- Comprehensive Product Catalog: Technical parameters including Brix (minimum 80% to 85%), Total Reducing Sugars (TRS), specific gravity, and industrial grading.
- Logistics and Packaging Specifications: Detailed configurations for 20-50 MT bulk tankers, ISO flexitanks for export, 1000-liter IBC totes, and 200-liter HDPE drums.
- Industry Applications: Dedicated coverage for distilleries and ethanol plants, animal and cattle feed, aquaculture and biofloc systems, bio-fertilizers, and foundry casting.
- Direct Procurement Channels: Integrated WhatsApp direct messaging and telephone routing for instant quotation inquiries.
- Fully Responsive and Mobile-Optimized: Accessible layout designed for procurement managers and facility operators on desktop, tablet, and mobile browsers.

---

## Technology Stack

- Framework: React 19 with Vite 8
- Styling: Tailwind CSS v4 with custom brand design tokens
- Animation: Framer Motion for hardware-accelerated transitions
- Icons: Hugeicons React Core
- UI Components: Base UI and custom accessible primitives
- Typography: San Francisco Pro with native system font fallbacks
- Routing: React Router v7 with SPA history support
- Quality and Linting: Oxlint and ESLint

---

## Project Structure

```text
Biozyme/
├── public/
│   ├── fonts/              # SF Pro Display and Text webfonts
│   ├── images/             # Product, packaging, and facility photography
│   └── videos/             # Hardware-accelerated product visual assets
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer, and Floating Action Buttons
│   │   ├── sections/       # Hero, Features, Specifications, and CTA sections
│   │   └── ui/             # Reusable UI components (Buttons, Badges, Cards)
│   ├── pages/              # Application views (Home, About, Products, etc.)
│   ├── utils/              # Helper utilities (WhatsApp URL generator, cn)
│   ├── App.jsx             # Main routing and layout wrapper
│   ├── index.css           # Global Tailwind CSS directives and theme tokens
│   └── main.jsx            # Application entry point
├── vercel.json             # SPA rewrite configuration for Vercel
├── vite.config.js          # Vite build pipeline and path aliases
└── package.json            # Dependencies and npm scripts
```

---

## Getting Started

### Prerequisites

- Node.js (version 20 or higher recommended)
- npm or pnpm package manager

### Installation

Clone the repository and install project dependencies:

```bash
git clone https://github.com/biozyme-git/Biozyme.git
cd Biozyme
npm install
```

### Development Server

Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

### Production Build

Compile and bundle the production-ready assets into the `dist/` folder:

```bash
npm run build
```

### Static Analysis and Linting

Run code analysis using Oxlint:

```bash
npm run lint
```

---

## Deployment

### Vercel Deployment

The repository includes a `vercel.json` file configured with Single Page Application (SPA) URL rewrites to prevent 404 errors on deep linking:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

To deploy:
1. Connect the GitHub repository to the Vercel dashboard.
2. Ensure the Framework Preset is set to **Vite**.
3. Set the build command to `npm run build` and output directory to `dist`.
4. Deploy the project and configure the custom production domain (`biozymesales.com`).

---

## Quality and Compliance Standards

- Authorized M-III License Holder (Government of Maharashtra)
- 100% GST compliant invoicing and delivery challans
- Routine refractometer Brix and TRS laboratory batch testing
- Standard Material Safety Data Sheet (MSDS) and Certificate of Analysis (CoA) availability

---

## Contact and Inquiries

- Business: Biozyme Trading Company
- Sourcing Hub: Western Maharashtra, India
- Inquiries: Direct via the Contact portal or WhatsApp integration
