# Devananda — Personal Portfolio Website

A modern, editorial personal portfolio built for **Devananda**, First-Year B.Tech Computer Science & Engineering (Artificial Intelligence) student at **Thejus Engineering College, Thrissur (KTU)**.

Inspired by the clean, minimal aesthetic of the **"Elina"** template — featuring a signature deep navy hero container, off-white editorial typography, contrasting ice-blue accents, smooth inertial scrolling, and rich micro-interactions.

---

## 🚀 Live Demo & Local Server

The development server is running locally:
- **Local URL**: [http://localhost:3000](http://localhost:3000)
- **Production Build**: [http://localhost:4173](http://localhost:4173) (via `npm run preview`)

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with custom navy/ice color palettes & dark mode
- **Smooth Inertial Scrolling**: [Lenis](https://lenis.darkroom.engineering/) with anchor scroll interception
- **Animations & Physics**: [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://gsap.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Celebration Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 📁 Project Structure

```
devananda/
├── index.html                   # HTML entry point, SEO meta tags & Plus Jakarta Sans font
├── package.json                 # Dependencies & build scripts
├── tailwind.config.js           # Signature colors (#020A3A hero navy, #F0F7FF ice, etc.)
├── vite.config.js               # Vite bundler configuration (port 3000)
├── public/
│   ├── favicon.svg              # Brand monogram favicon
│   └── images/
│       ├── portrait.svg         # Hero portrait placeholder (ready for your photo)
│       └── projects/            # Project showcase preview graphics
└── src/
    ├── index.css                # Global Tailwind directives & Lenis smooth scroll styling
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main application structure & theme handling
    ├── data.js                  # ⭐ ALL YOUR CONTENT IS HERE (EASY TO EDIT!)
    ├── hooks/
    │   ├── useLenis.js          # Smooth scroll manager
    │   ├── useTheme.js          # Dark/Light mode toggle with localStorage persistence
    │   └── useReducedMotion.js  # Accessibility hook for reduced motion preference
    └── components/
        ├── common/
        │   ├── CustomCursor.jsx   # Desktop-only magnetic cursor follower
        │   ├── ScrollProgress.jsx # Fixed top scroll progress bar
        │   ├── MagneticButton.jsx # Spring magnetic pull effect
        │   ├── TiltCard.jsx       # 3D interactive tilt for project cards
        │   └── StatCounter.jsx    # Animated number counters
        ├── layout/
        │   ├── Navbar.jsx         # Sticky blur header with mobile drawer
        │   └── Footer.jsx         # Minimalist footer with back-to-top button
        └── sections/
            ├── Hero.jsx           # Signature Elina two-column navy hero
            ├── About.jsx          # Bio, KTU college details & 4 animated stats
            ├── Skills.jsx         # Grouped cards (Languages, AI/ML, Web, Tools)
            ├── Projects.jsx       # 4 featured projects with 3D tilt
            ├── Journey.jsx        # Vertical animated learning timeline
            ├── Blog.jsx           # 3 learning reflection cards with modal reader
            └── Contact.jsx        # Validated form + social links + confetti
```

---

## ✏️ How to Edit Content

All your text, bio, links, and projects are centralized in **a single file**:
📁 [`src/data.js`](src/data.js)

### 1. Update Personal & Social Details
Open [`src/data.js`](src/data.js) and edit the `personalData` object:
```javascript
export const personalData = {
  name: "Devananda",
  email: "your.real.email@gmail.com",       // <-- Change to your actual email
  github: "https://github.com/your-username",// <-- Change to your GitHub URL
  linkedin: "https://linkedin.com/in/your-profile", // <-- Change to your LinkedIn
  college: "Thejus Engineering College, Thrissur",
  resumeUrl: "/Devananda_Resume.pdf",        // <-- Place your PDF in the /public folder
  ...
};
```

### 2. Update Skills or Add New Ones
In [`src/data.js`](src/data.js), modify `skillsData`. You can change percentages, names, or tags.

### 3. Update Projects
In [`src/data.js`](src/data.js), modify `projectsData`:
- `title`: Name of your project
- `description`: What it does
- `tech`: Array of technology badges (e.g. `["Python", "FastAPI", "React"]`)
- `githubUrl`: Link to your GitHub repository
- `liveUrl`: Link to the live hosted demo
- `image`: Path to project screenshot

### 4. Update the Timeline & Learning Journey
In [`src/data.js`](src/data.js), modify `journeyData` to document new semesters, hackathon wins, or internships!

---

## 🖼️ How to Replace Images

### 1. Replace the Hero Portrait Photo
1. Copy your portrait photo (e.g., `my-photo.jpg`) into the `public/images/` folder.
2. In `src/data.js`, update:
   ```javascript
   portraitImage: "/images/my-photo.jpg",
   ```
   *Tip: Use an aspect ratio of roughly 4:5 or 3:4 for the best editorial look!*

### 2. Add Project Screenshots
1. Save your project screenshots into `public/images/projects/` (e.g., `project-1.png`).
2. Update the `image` property for each item in `projectsData` inside `src/data.js`.

### 3. Add your Resume / CV PDF
1. Save your PDF as `Devananda_Resume.pdf` inside the `public/` directory.
2. In `src/data.js`, set `resumeUrl: "/Devananda_Resume.pdf"`.

---

## 📦 How to Deploy

### Option 1: Deploy to Vercel (Recommended)
1. Push this project to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Devananda portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/devananda-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New"** → **"Project"** and import your repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your site will be live on a `*.vercel.app` URL with free SSL!

### Option 2: Deploy to Netlify
1. Build the production package locally:
   ```bash
   npm run build
   ```
2. Log in to [netlify.com](https://netlify.com).
3. Drag and drop the generated `dist` folder into the Netlify "Sites" tab, OR connect your GitHub repository with:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

---

## ⚡ Useful Commands

| Command | Description |
|---|---|
| `npm run dev` | Runs the local Vite development server with Hot Module Reloading (HMR) |
| `npm run build` | Compiles an optimized, minified production build in the `dist` folder |
| `npm run preview` | Locally serves the production `dist` build for testing before deployment |

