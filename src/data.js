/**
 * ==============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ==============================================================================
 * All content for Devananda's portfolio is centralized here.
 * You can easily update your bio, links, skills, projects, and experiences!
 */

export const personalData = {
  name: "Devananda",
  initials: "D",
  tagline: "Building intelligent things, one line at a time",
  roleItalic: "First-year CSE (AI) Student",
  heroHeadline: "Shape the future with code and curiosity",
  heroDescription:
    "First-year Computer Science & Engineering student specializing in Artificial Intelligence at Thejus Engineering College, Thrissur. Passionate about machine learning, algorithmic problem solving, and crafting high-performance, elegant software.",

  // Contact & Social Details (Replace with your actual URLs)
  email: "devananda.cclab@gmail.com",
  github: "https://github.com/devanandaps16-sys",
  linkedin: "https://linkedin.com/in/devananda-ai",
  location: "Thrissur, Kerala, India",
  college: "Thejus Engineering College, Thrissur",
  university: "APJ Abdul Kalam Technological University (KTU)",
  batch: "2024 — 2028",
  degree: "B.Tech in Computer Science & Engineering (AI Specialization)",
  resumeUrl: "#", // Add link to your CV/Resume PDF in /public or Google Drive
  portraitImage: "/images/portrait.jpg",
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#journey" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export const statsData = [
  {
    value: null,
    suffix: "",
    label: "B.Tech CSE(AI) Student",
    description: "Thejus Engineering College, Thrissur (KTU)",
  },
  {
    value: null,
    suffix: "",
    label: "Languages I Know",
    description: "Python, C++",
  },
  {
    value: null,
    suffix: "",
    label: "Academic Year",
    description: "2026 — 2030",
  },
];

export const aboutData = {
  heading: "About Me",
  subheading: "Curiosity-Driven Engineering",
  intro:
    "I am an enthusiastic first-year B.Tech undergraduate in Computer Science and Engineering with a focused specialization in Artificial Intelligence at Thejus Engineering College, Thrissur (affiliated with KTU).",
  paragraphs: [
    "My journey into technology began with a fascination for how mathematical patterns and algorithms can teach computers to perceive, learn, and solve real-world problems. Today, I balance foundational computer science theory with hands-on development in Python, data science, and modern web architectures.",
    "When I'm not writing code or experimenting with machine learning pipelines, you will find me participating in tech communities, exploring open-source projects, and reading research papers on modern artificial intelligence developments.",
  ],
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering (Artificial Intelligence)",
    college: "Thejus Engineering College",
    location: "Vellarakkad, Thrissur, Kerala",
    university: "APJ Abdul Kalam Technological University (KTU)",
    duration: "2024 — 2028",
    status: "First Year (Semester 1 & 2)",
    coursework: [
      "Problem Solving & Programming in Python",
      "C Programming Fundamentals",
      "Discrete Mathematics & Calculus",
      "Digital Logic Design",
      "Basics of Electrical & Electronics Engineering",
    ],
  },
  highlights: [
    {
      title: "Strong Math & Logic Core",
      desc: "Focusing heavily on linear algebra, discrete math, and algorithm analysis.",
    },
    {
      title: "Hands-on Builder Mindset",
      desc: "Learning by building actual tools, web applications, and exploratory data models.",
    },
    {
      title: "AI Specialization Track",
      desc: "Deep diving early into machine learning, data engineering, and modern neural architectures.",
    },
  ],
};

export const skillsData = [
  {
    category: "Languages",
    description: "Core programming languages for algorithms & applications",
    skills: [
      { name: "Python", level: 90, icon: "Code2", tag: "Primary" },
      { name: "C", level: 85, icon: "Cpu", tag: "Academic" },
      { name: "Java", level: 75, icon: "Coffee", tag: "OOP" },
      { name: "JavaScript (ES6+)", level: 80, icon: "FileCode", tag: "Web" },
      { name: "SQL", level: 70, icon: "Database", tag: "Databases" },
    ],
  },
  {
    category: "AI & Machine Learning",
    description: "Data analysis, scientific computation & ML libraries",
    skills: [
      { name: "NumPy", level: 85, icon: "Binary", tag: "Math" },
      { name: "Pandas", level: 85, icon: "Sheet", tag: "Data Wrangling" },
      { name: "scikit-learn", level: 80, icon: "Brain", tag: "ML Models" },
      { name: "Matplotlib / Seaborn", level: 80, icon: "BarChart3", tag: "Visualization" },
      { name: "TensorFlow Basics", level: 65, icon: "Network", tag: "Deep Learning" },
    ],
  },
  {
    category: "Web Development",
    description: "Responsive, accessible and modern web interfaces",
    skills: [
      { name: "React", level: 82, icon: "Atom", tag: "Frontend" },
      { name: "Tailwind CSS", level: 90, icon: "Palette", tag: "Styling" },
      { name: "HTML5 & Semantic Web", level: 95, icon: "Layout", tag: "Markup" },
      { name: "CSS3 / Modern Layouts", level: 88, icon: "Sparkles", tag: "UI" },
      { name: "Vite", level: 85, icon: "Zap", tag: "Bundler" },
    ],
  },
  {
    category: "Tools & Platforms",
    description: "Productivity, version control and developer environments",
    skills: [
      { name: "Git & GitHub", level: 88, icon: "GitBranch", tag: "VCS" },
      { name: "Visual Studio Code", level: 95, icon: "Terminal", tag: "IDE" },
      { name: "Google Colab & Jupyter", level: 90, icon: "BookOpen", tag: "Notebooks" },
      { name: "Linux / Bash Basics", level: 75, icon: "Shield", tag: "Environment" },
      { name: "Figma", level: 70, icon: "PenTool", tag: "Prototyping" },
    ],
  },
];

export const projectsData = [
  {
    id: "smartedu-ai",
    title: "SmartEdu AI Tutor",
    subtitle: "Adaptive Learning Assistant & Quiz Generator",
    description:
      "An intelligent educational helper designed for engineering students. Synthesizes complex syllabus modules into intuitive micro-summaries and generates interactive self-assessment quizzes using NLP techniques.",
    tech: ["Python", "FastAPI", "React", "scikit-learn", "Tailwind CSS"],
    category: "AI / Education",
    image: "/images/projects/project-1.svg",
    githubUrl: "https://github.com/devanandaps16-sys/smartedu-ai-tutor",
    liveUrl: "https://smartedu-demo.vercel.app",
    featured: true,
    stats: "Over 40+ engineering concepts indexed",
  },
  {
    id: "visionpulse-xray",
    title: "VisionPulse Medical Screening",
    subtitle: "Computer Vision Abnormality Detection",
    description:
      "A preliminary diagnostic assistant applying convolutional neural network pipelines to classify medical chest radiograph anomalies with saliency map visual feedback for clinical transparency.",
    tech: ["Python", "OpenCV", "TensorFlow", "NumPy", "Matplotlib"],
    category: "Computer Vision",
    image: "/images/projects/project-2.svg",
    githubUrl: "https://github.com/devanandaps16-sys/visionpulse-medical",
    liveUrl: "https://visionpulse.demo.app",
    featured: true,
    stats: "89.4% cross-validation accuracy",
  },
  {
    id: "campusflow-portal",
    title: "CampusFlow KTU Assistant",
    subtitle: "Student Attendance & Internal Marks Calculator",
    description:
      "A fast, modern student dashboard tailored specifically for KTU engineering students to track modular syllabus coverage, predict internal marks, and verify minimum 75% attendance thresholds.",
    tech: ["React", "Vite", "Tailwind CSS", "LocalStorage", "Lucide"],
    category: "Web Application",
    image: "/images/projects/project-3.svg",
    githubUrl: "https://github.com/devanandaps16-sys/campusflow-ktu",
    liveUrl: "https://campusflow.vercel.app",
    featured: true,
    stats: "Used by 150+ classmates",
  },
  {
    id: "neuralnotes-nlp",
    title: "NeuralNotes Summary Engine",
    subtitle: "Automated Lecture & Slide Keypoint Extractor",
    description:
      "Text processing pipeline utilizing TF-IDF and keyphrase extraction algorithms to transform bulky PDF lecture notes and academic papers into concise revision flashcards.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Streamlit", "NLTK"],
    category: "NLP & Data Science",
    image: "/images/projects/project-4.svg",
    githubUrl: "https://github.com/devanandaps16-sys/neuralnotes-extractor",
    liveUrl: "https://neuralnotes.demo.app",
    featured: false,
    stats: "Reduces reading time by 60%",
  },
];

export const journeyData = [
  {
    year: "2024",
    period: "Mid 2024",
    title: "Admitted to B.Tech in CSE (AI)",
    institution: "Thejus Engineering College, Thrissur (KTU)",
    description:
      "Secured admission into the specialized Computer Science and Engineering program with Artificial Intelligence focus, eager to bridge mathematics with computational intelligence.",
    badge: "Milestone",
  },
  {
    year: "2024",
    period: "Late 2024",
    title: "Mastering Core Foundations: Python & C",
    institution: "KTU S1 Curriculum & Self-Directed Labs",
    description:
      "Deepened foundational problem-solving abilities, algorithm complexity analysis, and pointer arithmetic in C, paired with rapid application development in Python.",
    badge: "Foundation",
  },
  {
    year: "2024 — 2025",
    period: "Early 2025",
    title: "Venturing into Data Science & Machine Learning",
    institution: "Online Certifications & Independent Projects",
    description:
      "Built intuition for linear regression, clustering, decision trees, and exploratory data analysis using NumPy, Pandas, and scikit-learn on real-world datasets.",
    badge: "Specialization",
  },
  {
    year: "2025",
    period: "Mid 2025",
    title: "Modern Web Engineering with React & Tailwind",
    institution: "Fullstack Exploration",
    description:
      "Recognized that powerful AI models require intuitive interfaces. Mastered component-driven frontend architecture, responsive design, and smooth animations.",
    badge: "Frontend & UI",
  },
  {
    year: "Present",
    period: "Ongoing",
    title: "Building Intelligent Autonomous Systems",
    institution: "Academic & Open Source Endeavors",
    description:
      "Exploring neural network architectures, participating in hackathons, and developing intelligent software tools that assist students and communities.",
    badge: "Current Focus",
  },
];

export const blogData = [
  {
    id: "ktu-cse-ai-reflections",
    title: "Why I Chose CSE with AI Specialization in KTU: My First Semester Reflections",
    excerpt:
      "Navigating college life, balancing rigorous university coursework with hands-on open-source building, and why early domain specialization matters.",
    date: "Jan 2025",
    readTime: "4 min read",
    category: "Campus & Career",
    tags: ["KTU", "College Life", "Computer Science"],
  },
];

export const contactInfo = {
  heading: "Let's Build Something Meaningful",
  subheading: "Have a project in mind, an internship opportunity, or just want to chat about AI?",
  email: "devananda.cclab@gmail.com",
  phone: "+91 98765 43210", // Placeholder
  location: "Thrissur, Kerala, India",
  college: "Thejus Engineering College, KTU",
  socials: [
    { name: "GitHub", href: "https://github.com/devanandaps16-sys", icon: "Github" },
    { name: "LinkedIn", href: "https://linkedin.com/in/devananda-ai", icon: "Linkedin" },
    { name: "Email", href: "mailto:devananda.cclab@gmail.com", icon: "Mail" },
  ],
};