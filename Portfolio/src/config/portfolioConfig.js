export const portfolioConfig = {
  // Personal Information
  name: "Louise David Lirio",
  tagline: "Full Stack Developer",
  location: "Caloocan City, Philippines",
  email: "liriolouise234@gmail.com",
  phone: "+63 9478667246",

  bio: "Passionate developer with expertise in modern web technologies. I love creating elegant solutions to complex problems and bringing ideas to life through code.",

  // Social Links
  social: {
    github: "https://github.com/lalalala-rgb",
    linkedin: "https://www.linkedin.com/in/louise-lirio-49165a277/",
    resume: "/pdf/Lirio_Resume.pdf",
  },

  skills: {
    "Frontend Development": ["JavaScript", "HTML5", "CSS3"],
    "Backend Development": [
      "Node.js",
      "Express",
      "C#",
      "Java",
      "PostgreSQL",
      "Microsoft SQL Server",
    ],
    "Tools & Technologies": ["Git", "Postman", "Vercel", "Figma", "VS Code"],
    Frameworks: ["React", "Tailwind CSS"],
  },

  // Completed Projects
  projects: [
    {
      id: 1,
      title: "GLAS - Bank System",
      description:
        "A .NET banking application with user authentication, transaction management, and real-time notifications.",
      technologies: [".NET", "Microsoft SQL Server", "C#", "Windows Forms"],
      image: "/images/bank.png",
      status: "completed",
      featured: true,
      available: false,
      message: "Project only available on Windows Form",
    },
    {
      id: 2,
      title: "2D Game Noli Me Tangere",
      description:
        "A 2D platformer game featuring Maria Clara, with engaging gameplay mechanics and pixel art.",
      technologies: [
        "Godot",
        "GDScript",
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      image: "/images/ibarra.png",
      status: "completed",
      featured: true,
      available: false,
      message: "Project only available on mobile",
    },
    {
      id: 3,
      title: "Learning Management System",
      description:
        "Interactive learning management system with course creation, user management, and progress tracking.",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Express",
        "Tailwind CSS",
      ],
      image: "/images/LMS.png",
      demoUrl:
        "https://learning-management-system-gcgx0fxsb-louise-s-projects-43554a50.vercel.app/",
      status: "In development",
      featured: false,
      featured_message: "Project still in development",
      available: true,
    },
  ],

  ongoingProjects: [
    {
      id: 1,
      title: "Learning Management System",
      description: "Building an interactive learning management system.",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Express",
        "Tailwind CSS",
      ],
      progress: 25,
      expectedCompletion: "2026",
      githubUrl: "https://github.com/yourusername/ai-code-review",
      status: "in-progress",
    },
  ],

  // Theme customization
  theme: {
    primaryColor: "#3B82F6",
    secondaryColor: "#10B981",
    accentColor: "#F59E0B",
    backgroundColor: "#F8FAFC",
    textColor: "#1E293B",
    cardBackground: "#FFFFFF",
  },
};

export default portfolioConfig;
