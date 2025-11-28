export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Icon name from lucide-react
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
