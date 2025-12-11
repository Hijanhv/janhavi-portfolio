# Janhavi Chavada - Personal Portfolio Website

A production-ready personal developer portfolio website built with Next.js, featuring a **neon brutalism** design aesthetic. Showcases projects, skills, resume, and contact information with a bold, modern, and eye-catching visual style.

![Tech Stack](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwind-css)

## 🚀 Features

- **Neon Brutalism Design**: Bold, chunky cards with neon accent colors (purple, cyan, green, pink) on dark backgrounds
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Dynamic GitHub Integration**: Automatically displays your coding languages, frameworks, and projects
- **4 Main Pages**:
  - **Home**: Hero section with bio, stats, tech stack showcase, and featured projects
  - **Projects**: Comprehensive project gallery with filtering, tech stack tags, and GitHub links
  - **Resume**: Professional resume display with downloadable PDF
  - **Connect**: Social links and contact information
- **TypeScript**: Fully typed for better developer experience and code reliability
- **Easy to Maintain**: Simple data configuration files for updating content
- **Optimized for Vercel**: Ready to deploy with zero configuration

## 📁 Project Structure

```
janhv/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home page (neon brutalism landing)
│   ├── globals.css         # Global styles and neon utilities
│   ├── projects/
│   │   └── page.tsx        # Projects page
│   ├── resume/
│   │   └── page.tsx        # Resume page
│   └── connect/
│       └── page.tsx        # Connect/Contact page
├── components/
│   ├── Header.tsx          # Navigation header
│   └── Footer.tsx          # Footer with links
├── data/
│   ├── projects.ts         # Project data configuration
│   ├── skills.ts           # Skills and tech stack data
│   └── info.ts             # Personal info and social links
├── public/
│   └── Janhavi-Chavada-Resume.pdf  # my resume PDF (add this!)
├── tailwind.config.ts      # Tailwind with neon theme
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Space Mono (monospace for brutalist aesthetic)
- **Deployment**: Vercel

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Step 1: Install Dependencies

```bash
cd /Users/janhv/Desktop/janhv
npm install
```

### Step 2: Add Your Resume PDF

1. Create a file named `Janhavi-Chavada-Resume.pdf` (or your preferred name)
2. Place it in the `/public` folder
3. If you use a different filename, update the download link in `/app/resume/page.tsx`:

```typescript
// Line ~25 in /app/resume/page.tsx
<a href="/Your-Custom-Filename.pdf" download>
```

### Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your site!

## ✏️ Customization Guide

### Updating Your Information

#### Personal Details (`/data/info.ts`)
```typescript
export const personalInfo = {
  name: 'Your Name',
  role: 'Your Role',
  email: 'your.email@example.com',
  // ... update other fields
};

export const socials: Social[] = [
  // Add/remove/edit social links
];
```

#### Projects (`/data/projects.ts`)
```typescript
export const projects: Project[] = [
  {
    id: 'unique-id',
    name: 'Project Name',
    description: 'Project description...',
    techStack: ['React', 'Node.js'],
    category: ['Full-Stack'],
    githubUrl: 'https://github.com/...',
    liveUrl: 'https://...', // optional
    featured: true, // shows on home page
  },
  // Add more projects...
];
```

#### Skills (`/data/skills.ts`)
```typescript
export const skills: Skill[] = [
  {
    name: 'JavaScript',
    category: 'language', // 'language' | 'framework' | 'tool' | 'blockchain'
    color: 'neon-cyan', // 'neon-purple' | 'neon-cyan' | 'neon-green' | 'neon-pink' | 'neon-yellow'
  },
  // Add more skills...
];
```

### Customizing Colors

Neon colors are defined in `/tailwind.config.ts`:

```typescript
colors: {
  neon: {
    purple: '#9D4EDD',
    cyan: '#00F5FF',
    green: '#39FF14',
    pink: '#FF10F0',
    yellow: '#FFFF00',
  },
  // Adjust these hex values to your preference
}
```

## 🚀 Deployment to Vercel

### Option 1: Deploy with Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO)

### Environment Variables (if needed later)

If you add API routes or external services, set environment variables in:
- Vercel Dashboard → Project Settings → Environment Variables

## 📝 Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎨 Design Features

### Neon Brutalism Elements
- **Bold Typography**: Large, chunky headings with uppercase text
- **Neon Borders**: Glowing box-shadows on cards and buttons
- **Dark Background**: `#0A0A0A` for maximum contrast
- **Asymmetric Layouts**: Breaking the grid for visual interest
- **Hover Effects**: Transform translations and color shifts
- **Monospace Font**: Space Mono for that retro-tech feel

### Utility Classes Available
```css
.neon-border-purple     /* Purple glowing border */
.neon-border-cyan       /* Cyan glowing border */
.neon-border-green      /* Green glowing border */
.neon-border-pink       /* Pink glowing border */
.neon-text-purple       /* Purple glowing text */
.neon-text-cyan         /* Cyan glowing text */
.brutalist-card         /* Chunky card with hover effect */
.brutalist-button       /* Chunky button with hover effect */
```

## 🔧 Troubleshooting

### Issue: Resume PDF not downloading
- Ensure the file is in the `/public` folder
- Check the filename matches exactly in the code
- Clear browser cache and try again

### Issue: Colors not showing correctly
- Run `npm run build` to regenerate Tailwind classes
- Check that color names in data files match Tailwind config

### Issue: Build errors on Vercel
- Ensure all TypeScript errors are resolved locally first
- Run `npm run build` locally to test
- Check Vercel build logs for specific errors

## 📄 License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio!

## 🤝 Credits

Built with ❤️ by **Janhavi Chavada**

- GitHub: [@Hijanhv](https://github.com/Hijanhv)
- Linktree: [findjanhv](https://linktr.ee/findjanhv)

---

**Ready to deploy?** Follow the steps above and get your portfolio live on Vercel in minutes! 🚀
