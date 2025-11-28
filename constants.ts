import { Experience, Project, SocialLink } from './types';

export const NAME = "Naman Sharma";
export const ROLE = "Full Stack Developer";
export const BIO = "I build accessible, pixel-perfect, and performant web experiences. Currently looking for Spring/Summer 2025 internships.";

export const EXPERIENCES: Experience[] = [
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "2023 - Present",
    description: "Developed custom web applications for various clients using React, Node.js, and MongoDB. Optimized frontend performance and implemented secure authentication flows."
  },
  {
    company: "Open Source",
    role: "Contributor",
    period: "2022 - Present",
    description: "Actively contributing to various open-source projects in the React ecosystem. Fixed bugs and improved documentation for community-driven libraries."
  }
];

export const PROJECTS: Project[] = [
  {
    title: "EcoTrack",
    description: "A sustainable lifestyle tracking application allowing users to monitor their carbon footprint. Features real-time data visualization and community challenges.",
    tech: ["React", "TypeScript", "Tailwind", "Node.js", "Recharts"],
    link: "https://example.com/ecotrack",
    github: "https://github.com/namansharma/ecotrack",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    title: "DevSync",
    description: "Real-time collaboration tool for developers with code streaming, video chat, and task management integrated into a single dashboard.",
    tech: ["Next.js", "WebRTC", "Socket.io", "Prisma"],
    link: "https://example.com/devsync",
    github: "https://github.com/namansharma/devsync",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    title: "AI Canvas",
    description: "An infinite canvas for brainstorming powered by Generative AI. Users can generate images and text notes directly on the board.",
    tech: ["React", "Gemini API", "Canvas API", "Firebase"],
    link: "https://example.com/aicanvas",
    github: "https://github.com/namansharma/aicanvas",
    image: "https://picsum.photos/600/400?random=3"
  }
];

export const SKILLS = [
  "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", 
  "PostgreSQL", "MongoDB", "Tailwind CSS", "Git", "Docker", "AWS"
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com", icon: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
  { platform: "Twitter", url: "https://twitter.com", icon: "Twitter" },
  { platform: "Email", url: "mailto:hello@example.com", icon: "Mail" }
];

export const SYSTEM_PROMPT = `
You are an AI assistant for Naman Sharma's portfolio website. 
Your goal is to answer questions about Naman's professional background, skills, and projects in a friendly, professional, and concise manner.

Here is Naman's context:
Name: ${NAME}
Role: ${ROLE}
Bio: ${BIO}
Skills: ${SKILLS.join(', ')}

Experience:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.tech.join(', ')})`).join('\n')}

If asked about something not in this context, politely say you don't have that information but can forward a message (suggest emailing).
Keep answers short (under 100 words) unless specifically asked for details.
`;
