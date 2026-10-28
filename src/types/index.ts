export interface Project {
  id: string;
  num: string;
  title: string;
  category: string;
  role: string;
  stack: string[];
  summary: string;
  highlights: string[];
  featured?: boolean;
  gradient: string;
  icon: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
  emphasis: string[];
  icon: string;
}

export interface Achievement {
  title: string;
  date: string;
  description: string;
}

export interface Milestone {
  title: string;
  description: string;
  icon: string;
}

export interface Article {
  title: string;
  category: string;
  description: string;

  url?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
  resumeUrl: string;
  company: string;
  designation: string;
}
