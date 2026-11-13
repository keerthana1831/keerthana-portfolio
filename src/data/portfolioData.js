export const personalInfo = {
  name: "Keerthana S",
  role: "Aspiring Software Developer",
  subtitle: "B.Tech Information Technology Student",
  degree: "B.Tech Information Technology",
  college: "Sri Shakthi Institute of Engineering and Technology",
  duration: "2024–2028",
  careerInterest: "IT / Software Development",
  email: "keerthanas@srishakthi.ac.in",
  personalEmail: "keerthana183107@gmail.com",
  phone: "9025859802",
  phoneFormatted: "+91 90258 59802",
  location: "Coimbatore, Tamil Nadu, India",
  linkedIn: "https://linkedin.com/in/keerthana-s-720426338",
  gitHub: "https://github.com/keerthana1831",
  resumePath: "/RESUME.pdf",
  aboutBio:
    "I am an Information Technology student passionate about software development and web technologies. I enjoy building practical applications, exploring new technologies, and improving my programming skills. I am continuously learning and looking forward to opportunities where I can apply my technical knowledge and contribute to real-world projects.",
  heroSummary:
    "Passionate about software development and building practical, user-centric applications. Looking forward to opportunities where I can apply my technical foundations and create real-world impact.",
};

export const aboutHighlights = [
  {
    title: "Continuous Learning Mindset",
    description: "Constantly expanding proficiency across modern web architectures, algorithms, and cloud technologies.",
  },
  {
    title: "Problem Solving Approach",
    description: "Eager to break down complex challenges into modular, clean, and scalable programmatic solutions.",
  },
  {
    title: "Software Craftsmanship",
    description: "Focused on developing accessible, responsive, and performance-driven applications with clean code.",
  },
];

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code2",
    items: [
      { name: "C", level: "Core Foundations", experience: "Academic & Data Structures" },
      { name: "Java", level: "Intermediate", experience: "OOPs, Collections & Application Logic" },
      { name: "JavaScript", level: "Proficient", experience: "ES6+, Modern Web Logic" },
      { name: "Python", level: "Intermediate", experience: "Scripting & Automation" },
    ],
  },
  {
    category: "Web Technologies",
    icon: "Globe",
    items: [
      { name: "HTML", level: "Advanced", experience: "Semantic UI & Accessibility" },
      { name: "CSS", level: "Advanced", experience: "Responsive, Flexbox/Grid, Tailwind" },
      { name: "React", level: "Intermediate", experience: "Component Architecture & Hooks" },
    ],
  },
  {
    category: "Database",
    icon: "Database",
    items: [
      { name: "MongoDB", level: "Foundational", experience: "NoSQL Collections & Schemas" },
      { name: "SQL Basics", level: "Foundational", experience: "Relational Queries & CRUD" },
    ],
  },
  {
    category: "Tools",
    icon: "Wrench",
    items: [
      { name: "VS Code", level: "Primary IDE", experience: "Extensions & Debugging" },
      { name: "Git", level: "Version Control", experience: "GitHub Repositories & Collaboration" },
      { name: "MS Office", level: "Proficient", experience: "Documentation & Reporting" },
    ],
  },
];

export const projectsData = [
  {
    id: "vaultiq",
    title: "VaultIQ",
    tagline: "AI-Powered Personal Document Management Application",
    description:
      "An AI-powered personal document management application that helps users securely organize, summarize, and instantly access their digital files with intelligent contextual search.",
    isFeatured: true,
    badge: "Featured Project",
    technologies: ["React", "Python / OCR", "AI Summarization", "MongoDB", "Node.js", "Tailwind CSS"],
    features: [
      "Upload and manage PDFs, images, and notes securely in one workspace.",
      "Intelligent document search with semantic keyword discovery.",
      "Automated PDF summarization for quick reading and review.",
      "OCR-based text extraction from scans and physical document snapshots.",
      "AI-powered interactive document assistance and question-answering.",
    ],
    githubUrl: "https://github.com/keerthana1831/vaultiq", // Placeholder
    accentColor: "lemon",
  },
  {
    id: "buywise",
    title: "BuyWise",
    tagline: "E-Commerce & Smart Inventory Management System",
    description:
      "A comprehensive e-commerce management application designed to simplify product purchasing and streamline end-to-end inventory tracking for merchants and shoppers alike.",
    isFeatured: false,
    badge: "E-Commerce",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: [
      "Seamless product browsing, category filtering, and cart checkout.",
      "Retailer product catalog and dynamic stock inventory management.",
      "Employee role-based stock monitoring and quantity adjustments.",
      "Automated expiry tracking and intelligent discount management rules.",
    ],
    githubUrl: "https://github.com/keerthana1831/buywise", // Placeholder
    accentColor: "heather",
  },
  {
    id: "legalease",
    title: "LegalEase",
    tagline: "Smart Contract Simplification & Risk Identification",
    description:
      "A contract simplification application that empowers everyday users to understand dense, complex legal agreements in plain, digestible English.",
    isFeatured: false,
    badge: "Legal Tech",
    technologies: ["React", "Python", "NLP / AI APIs", "Tailwind CSS"],
    features: [
      "Upload and parse standard contract documents (PDF/DOCX).",
      "Generate clear, simplified summaries in everyday English.",
      "Highlight critical clauses, liabilities, and obligations.",
      "Proactively identify potential risks and unusual terms.",
    ],
    githubUrl: "https://github.com/keerthana1831/legalease", // Placeholder
    accentColor: "heather",
  },
];

export const certificationsData = [
  {
    title: "Python Programming",
    issuer: "Hazhtech Institution",
    category: "Programming & Logic",
    description: "In-depth training on Python fundamentals, object-oriented principles, data structures, and script automation.",
    credentialStatus: "Verified Certificate",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    category: "Cloud Infrastructure",
    description: "Comprehensive coursework covering cloud virtualization, distributed systems, architecture models, and security.",
    credentialStatus: "Verified Certificate",
  },
  {
    title: "MERN Stack",
    issuer: "Udemy",
    category: "Full-Stack Web Development",
    description: "Hands-on full-stack development mastering MongoDB, Express.js, React, and Node.js for modern web applications.",
    credentialStatus: "Verified Certificate",
  },
];

export const educationData = [
  {
    degree: "B.Tech Information Technology",
    institution: "Sri Shakthi Institute of Engineering and Technology",
    duration: "2024–2028",
    score: "CGPA: 8.5*",
    scoreLabel: "Current Academic Standing",
    status: "Currently Pursuing (First Year)",
    description:
      "Curriculum focused on computer science fundamentals, data structures, programming methodologies, database systems, and web technologies.",
    highlights: ["Active participant in technical symposiums", "Focus on practical software engineering labs"],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Kongu Vellalar Matric Hr Sec School",
    duration: "2024",
    score: "85%",
    scoreLabel: "Board Examination",
    status: "Completed",
    description:
      "Completed higher secondary education with strong quantitative foundations in Mathematics, Physics, Chemistry, and Computer Science.",
    highlights: ["Academic excellence in Mathematics & Computer Science"],
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Kongu Vellalar Matric Hr Sec School",
    duration: "2022",
    score: "93%",
    scoreLabel: "Board Examination",
    status: "Completed",
    description:
      "Comprehensive secondary school education with distinction across all core academic disciplines.",
    highlights: ["Distinction grade with 93% aggregate"],
  },
];

export const strengthsData = [
  {
    name: "Problem Solving",
    icon: "Lightbulb",
    detail: "Analytical thinking to deconstruct complex technical requirements into logical modules.",
  },
  {
    name: "Team Collaboration",
    icon: "Users",
    detail: "Effective communication and supportive team dynamics in group projects and code reviews.",
  },
  {
    name: "Quick Learning",
    icon: "Zap",
    detail: "Rapid assimilation of new frameworks, programming languages, and engineering concepts.",
  },
  {
    name: "Time Management",
    icon: "Clock",
    detail: "Organized task prioritization balancing coursework, hands-on projects, and technical certifications.",
  },
  {
    name: "Adaptability",
    icon: "Shuffle",
    detail: "Flexible approach to evolving project scopes, tech stacks, and team environments.",
  },
  {
    name: "Continuous Learning",
    icon: "Compass",
    detail: "Inherent drive to self-study emerging software methodologies and modern developer tools.",
  },
];
