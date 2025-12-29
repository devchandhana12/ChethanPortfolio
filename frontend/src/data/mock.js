// Mock data for Chethan's Space Portfolio

export const personalInfo = {
  name: "Chethan",
  title: "Full Stack AI Engineer",
  tagline: "Building intelligent solutions across the stack",
  bio: "Senior engineer with 6 years of experience, specializing in React and React Native. Started my journey as a frontend developer, building beautiful and performant user interfaces. These days, I'm exploring the exciting world of full-stack development and AI engineering, combining my frontend expertise with backend technologies and machine learning to create intelligent, end-to-end solutions.",
  story: "My journey began 6 years ago as a frontend developer, where I fell in love with React and React Native. Over the years, I've built countless applications, from complex enterprise dashboards to smooth mobile experiences. Recently, I've expanded into full-stack development and AI engineering, completing 2 exciting AI projects and eager to build many more. I believe in writing clean code, creating seamless user experiences, and constantly learning new technologies.",
  location: "Bangalore, India",
  email: "chethan120397@gmail.com",
  github: "github.com/Devchethan12",
  linkedin: "linkedin.com/in/chethan",
  twitter: "twitter.com/chethan",
  yearsOfExperience: 6,
  projectsCompleted: "50+",
  aiProjectsCompleted: 2
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "React Native", level: 85 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Python", level: 95 },
      { name: "FastAPI", level: 90 },
      { name: "Firebase", level: 85 },
      { name: "RESTful APIs", level: 90 }
    ]
  },
  {
    category: "AI/ML",
    items: [
      { name: "NumPy", level: 90 },
      { name: "Pandas", level: 90 },
      { name: "Scikit-Learn", level: 85 },
      { name: "TensorFlow", level: 80 }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "AI Content Generator",
    category: "AI",
    description: "An intelligent content generation platform powered by advanced NLP models. Generates high-quality articles, summaries, and creative content.",
    technologies: ["Python", "FastAPI", "React", "OpenAI", "MongoDB"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Real-time Analytics Dashboard",
    category: "Web",
    description: "A comprehensive analytics platform with real-time data visualization, custom reports, and predictive insights for business intelligence.",
    technologies: ["React", "TypeScript", "D3.js", "WebSocket", "FastAPI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Smart Fitness Tracker",
    category: "Mobile",
    description: "Cross-platform mobile app with AI-powered workout recommendations, progress tracking, and personalized fitness plans.",
    technologies: ["React Native", "Firebase", "TensorFlow Lite", "TypeScript"],
    image: "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?w=800&q=80",
    featured: true
  },
  {
    id: 4,
    title: "Predictive Maintenance System",
    category: "AI",
    description: "Machine learning system for predicting equipment failures using sensor data analysis and pattern recognition.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "FastAPI"],
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&q=80",
    featured: false
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    category: "Web",
    description: "Full-featured e-commerce solution with inventory management, payment integration, and customer analytics.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Social Media App",
    category: "Mobile",
    description: "Feature-rich social networking mobile application with real-time messaging, stories, and content sharing.",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    featured: false
  },
  {
    id: 7,
    title: "Image Recognition API",
    category: "AI",
    description: "RESTful API service for image classification, object detection, and facial recognition using deep learning models.",
    technologies: ["Python", "TensorFlow", "FastAPI", "OpenCV", "Docker"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    featured: false
  },
  {
    id: 8,
    title: "Project Management Tool",
    category: "Web",
    description: "Collaborative project management platform with Kanban boards, time tracking, and team collaboration features.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Zustand"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    featured: false
  },
  {
    id: 9,
    title: "Weather Forecast App",
    category: "Mobile",
    description: "Beautiful weather application with hourly and weekly forecasts, weather alerts, and location-based recommendations.",
    technologies: ["React Native", "TypeScript", "OpenWeather API", "Geolocation"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    year: "2023 - Present",
    title: "Senior Full Stack AI Engineer",
    company: "Tech Innovations Inc",
    description: "Expanding into full-stack development and AI engineering. Built 2 production AI projects integrating machine learning models with React frontends. Leading the architecture of intelligent applications combining modern web technologies with ML capabilities."
  },
  {
    id: 2,
    year: "2020 - 2023",
    title: "Senior Frontend Engineer",
    company: "Digital Solutions Ltd",
    description: "Specialized in React and React Native development. Led a team of 5 developers building complex enterprise applications. Architected and delivered 15+ production applications with focus on performance optimization and user experience."
  },
  {
    id: 3,
    year: "2019 - 2020",
    title: "Frontend Developer",
    company: "StartupHub",
    description: "Focused on building responsive web and mobile applications using React and React Native. Contributed to the development of 10+ projects from concept to deployment."
  },
  {
    id: 4,
    year: "2018 - 2019",
    title: "Junior Frontend Developer",
    company: "WebCraft Agency",
    description: "Started my career building user interfaces with React. Learned the fundamentals of modern web development, component architecture, and state management."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechFlow",
    content: "Chethan's ability to bridge AI and practical application development is exceptional. His work on our ML pipeline increased efficiency by 40%.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager, DataViz Inc",
    content: "Working with Chethan was a game-changer. He delivered a complex analytics dashboard that exceeded all expectations.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder, AppNova",
    content: "Chethan's expertise in React Native helped us launch our mobile app ahead of schedule. His code quality is outstanding.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
  }
];