import profileImage from "../assets/cv-img.jpg";
export const personalInfo = {
  name: "Lara Rifai",
  title: "Full-Stack Developer & Project Coordinator",
  email: "rifailara33@gmail.com",
  phone: "+961 70241351",
  location: "Tripoli, Lebanon",
  profileImage: profileImage,
  summary: "Front-End Developer and project coordinator with 2+ years of professional experience in building responsive, user-focused applications using React, WordPress and related technologies."
};

export const skills = {
  wordpress: ["WordPress", "Divi Builder", "Elementor", "Bricks Builder", "WooCommerce", "Weglot","BeBuilder" ,"Custom Themes"],
  frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Next.js", "Angular"],
  backend: ["Node.js", "Express.js", "Nest JS", "MongoDB", "PostgreSQL", "WordPress"],
  tools: ["Git", "REST APIs", "UI/UX Design", "Responsive Design", "Project Management", "Agile Methodologies"]
};

export const projects = [
  {
    id: 1,
    title: "AI Chat Character",
    subtitle: "Casino du Liban Website",
    role: "Prompt Engineer",
    technologies: ["Node.js", "OpenAI", "ChatGPT"],
    description: "Implemented an AI-driven chatbot to enhance user engagement and customer interaction",
    image: "https://d64gsuwffb70l.cloudfront.net/68ff47818ae03d0959ebac87_1761560506770_2674089e.webp",
    highlights: [
      "Designed intelligent prompts and backend integration",
      "Coordinated with stakeholders to ensure business requirements"
    ]
  },
  {
    id: 2,
    title: "Roborotex",
    subtitle: "Trading Platform",
    role: "Front-End Developer",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    description: "Built a responsive trading interface using scalable and modular components",
    image: "https://d64gsuwffb70l.cloudfront.net/68ff47818ae03d0959ebac87_1761560507502_e8c0f207.webp",
    highlights: [
      "Ensured performance across different devices",
      "Implemented real-time trading data visualization"
    ]
  },
  {
    id: 3,
    title: "Autobid Dashboard",
    subtitle: "Online Car Bidding Platform",
    role: "Front-End Developer",
    technologies: ["React", "TypeScript", "CSS"],
    description: "Developed comprehensive dashboards for both admin and dealer user roles",
    image: "https://d64gsuwffb70l.cloudfront.net/68ff47818ae03d0959ebac87_1761560508243_4484c56b.webp",
    highlights: [
      "Implemented admin-level user management system",
      "Built responsive dealer dashboard interface"
    ]
  }
];
