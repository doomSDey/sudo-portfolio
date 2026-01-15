# Sudipta Dey - Portfolio

A modern, responsive portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub Integration

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the repository
4. Vercel will automatically detect Next.js and configure the build

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main portfolio page
├── lib/
│   └── data.ts          # Portfolio content and data
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Features

- Responsive design (mobile-first)
- Smooth scroll navigation
- Keyboard shortcuts (W: Work, C: Contact, B: Blog, E: Copy Email)
- Animated sections with Framer Motion
- Dark theme with noise texture overlay
- Stats marquee animation
- Mobile navigation menu

## Customization

Edit the data in `lib/data.ts` to update:
- Navigation links
- Statistics
- Hackathon projects
- Work projects
- Experience timeline
- Tech stack
- Blog posts
- Contact information

## Credits

Designed and built by [Sudipta Dey](https://sudipta-dey.com).

If you fork this project and use it for your own portfolio, please give credit by linking back to the original:

```html
<!-- Add this to your footer or about section -->
<a href="https://github.com/doomSDey/sudo-portfolio">Template by Sudipta Dey</a>
```

## License

MIT License - see [LICENSE](LICENSE) for details.

You are free to use this template for your own portfolio. Attribution is appreciated but not required by the license.
