// Knowledge base about Dinuka
export const knowledge = {
  personal: {
    name: "Dinuka Vidushan",
    role: "Computer Engineering Student & Creative Professional",
    company: "DADS Entertainment",
    email: "dinukavidushan23@gmail.com",
    phone: "+94 763859990",
    location: "Colombo, Sri Lanka"
  },
  skills: [
    "Photography",
    "Video Editing",
    "Graphic Design",
    "Event Management",
    "Team Leadership",
    "Problem Solving",
    "Communication",
    "Project Management"
  ],
  services: {
    photography: {
      description: "Professional photography services for all occasions",
      specialties: ["Wedding Photography", "Portrait Sessions", "Event Coverage", "Commercial Shoots"]
    },
    videography: {
      description: "Expert videography and video editing services",
      specialties: ["Wedding Films", "Music Videos", "Corporate Videos", "Event Documentation"]
    },
    eventPlanning: {
      description: "Comprehensive event planning through DADS Entertainment",
      specialties: ["Wedding Planning", "Corporate Events", "Social Gatherings", "Festival Management"]
    }
  },
  achievements: {
    photoProjects: "500+",
    eventsManaged: "200+",
    happyClients: "300+",
    awards: "15+"
  }
};

// Function to find the most relevant response
export const findResponse = (query: string): string => {
  query = query.toLowerCase();
  
  // Common greetings
  if (query.match(/^(hi|hello|hey)/)) {
    return `Hello! I'm the virtual assistant for ${knowledge.personal.name}. How can I help you today?`;
  }

  // Contact information
  if (query.includes("contact") || query.includes("email") || query.includes("phone")) {
    return `You can reach ${knowledge.personal.name} at:\nEmail: ${knowledge.personal.email}\nPhone: ${knowledge.personal.phone}\nLocation: ${knowledge.personal.location}`;
  }

  // Services
  if (query.includes("service")) {
    return `${knowledge.personal.name} offers:\n1. Photography: ${knowledge.services.photography.description}\n2. Videography: ${knowledge.services.videography.description}\n3. Event Planning: ${knowledge.services.eventPlanning.description}`;
  }

  // Photography specific
  if (query.includes("photo")) {
    return `As a professional photographer, ${knowledge.personal.name} specializes in: ${knowledge.services.photography.specialties.join(", ")}`;
  }

  // Video/Videography specific
  if (query.includes("video")) {
    return `For videography services, ${knowledge.personal.name} offers: ${knowledge.services.videography.specialties.join(", ")}`;
  }

  // Events/Planning specific
  if (query.includes("event") || query.includes("planning")) {
    return `Through DADS Entertainment, we provide comprehensive event planning services including: ${knowledge.services.eventPlanning.specialties.join(", ")}`;
  }

  // Experience/Achievements
  if (query.includes("experience") || query.includes("achievement")) {
    return `Professional Achievements:\n• Completed ${knowledge.achievements.photoProjects} photo projects\n• Managed ${knowledge.achievements.eventsManaged} events\n• Served ${knowledge.achievements.happyClients} happy clients\n• Received ${knowledge.achievements.awards} awards`;
  }

  // Skills
  if (query.includes("skill")) {
    return `Key skills include: ${knowledge.skills.join(", ")}`;
  }

  // About/Background
  if (query.includes("about") || query.includes("who")) {
    return `${knowledge.personal.name} is a ${knowledge.personal.role} and the founder of ${knowledge.personal.company}. He combines technical expertise with creative vision, specializing in photography, videography, and event management.`;
  }

  // Default response
  return "I can help you learn about my services, experience, skills, or how to get in touch. What would you like to know?";
};