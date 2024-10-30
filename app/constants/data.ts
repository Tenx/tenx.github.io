export const NEWS_ITEMS = [
  'New paper accepted to ICLR 2024!',
  'Excited to join Stanford as an Assistant Professor in Fall 2024!',
  'New paper accepted to NeurIPS 2023!'
]

export const PROJECTS = [
  {
    imageUrl: "/projects/flexigpt/thumbnail.jpg",
    title: "FlexiGPT - Enterprise AI Assistant Platform",
    description: "Enterprise-grade AI assistant platform with advanced RAG capabilities, enabling seamless knowledge management and custom chatbot deployment with real-time data integration.",
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "GPT-4",
      "RAG",
      "Vector DB",
      "LangChain"
    ],
    projectUrl: "/project/flexigpt",
    gallery: [
      "/projects/flexigpt/thumbnail.jpg",
      "/projects/flexigpt/model.jpg"
    ]
  },
  {
    imageUrl: "/projects/face-recognition/thumbnail.jpg",
    title: "Face Recognition System",
    description: "AI-powered face recognition system with real-time detection and analysis capabilities.",
    techStack: ["Python", "TensorFlow", "OpenCV", "React"],
    projectUrl: "/project/face-recognition",
    gallery: [
      "/projects/face-recognition/demo.jpg",
      "/projects/face-recognition/architecture.jpg"
    ]
  },
  {
    imageUrl: "/projects/chatbot/thumbnail.jpg",
    title: "AI Chatbot Platform",
    description: "Advanced conversational AI platform with natural language understanding.",
    techStack: ["Python", "PyTorch", "FastAPI", "Vue.js"],
    projectUrl: "/project/chatbot",
    gallery: [
      "/projects/chatbot/interface.jpg"
    ]
  },
  {
    imageUrl: "/projects/image-gen/thumbnail.jpg",
    title: "AI Image Generation",
    description: "Text-to-image generation system using state-of-the-art diffusion models.",
    techStack: ["Python", "PyTorch", "Stable Diffusion", "Next.js"],
    projectUrl: "/project/image-generation",
    gallery: [
      "/projects/image-gen/samples.jpg"
    ]
  },
  {
    imageUrl: "/projects/nlp/thumbnail.jpg",
    title: "NLP Research Platform",
    description: "Research platform for natural language processing experiments and model training.",
    techStack: ["Python", "Transformers", "BERT", "Django"],
    projectUrl: "/project/nlp-platform",
    gallery: [
      "/projects/nlp/architecture.jpg"
    ]
  },
  {
    imageUrl: "/projects/robotics/thumbnail.jpg",
    title: "Robotics Control System",
    description: "Real-time control system for robotic manipulation using reinforcement learning.",
    techStack: ["Python", "ROS", "PyTorch", "C++"],
    projectUrl: "/project/robotics",
    gallery: [
      "/projects/robotics/demo.jpg"
    ]
  },
  {
    imageUrl: "/projects/medical/thumbnail.jpg",
    title: "Medical Image Analysis",
    description: "Deep learning system for medical image analysis and disease detection.",
    techStack: ["Python", "TensorFlow", "NumPy", "Flask"],
    projectUrl: "/project/medical-imaging",
    gallery: [
      "/projects/medical/results.jpg"
    ]
  }
]

export const EXPERIENCES = [
  {
    logo: "/media/icons/brands/nvidia.svg",
    title: "Research Scientist",
    company: "NVIDIA Research",
    companyUrl: "https://research.nvidia.com/",
    date: "Dec 2021 – Present",
    location: "Santa Clara, California",
    description: [
      "Leading research on foundation models for general-purpose autonomous agents",
      "Spearheading the <a href='https://minedojo.org' target='_blank' rel='noopener'>MineDojo</a> project for open-ended agent learning",
      "Mentoring graduate interns and collaborating with top universities"
    ]
  }
]

export const SOCIAL_LINKS = {
  email: "pliang@cs.cmu.edu",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  scholar: "https://scholar.google.com/citations?user=yourid"
}
