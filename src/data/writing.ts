import type { Article } from '../types';

export const articles: Article[] = [
  {
    title: "Scaling Down Before Scaling Up: Why Bigger Servers Don't Fix Bad Architecture",
    category: 'Backend Architecture',
    description:
      'A technical case study covering backend architecture patterns, database connection management, API performance bottlenecks, and how architectural optimization delivers more impact than vertical scaling.',
    url: 'https://geekyants.com/blog/scaling-down-before-scaling-up-why-bigger-servers-dont-fix-bad-architecture',
  },
  {
    title: 'Automate the Obvious, Review the Rest: Designing AI-Powered Content Moderation',
    category: 'AI Engineering',
    description:
      'A technical case study on building an AI-powered content moderation pipeline using automated risk assessment, asynchronous processing queues, and a structured human review workflow for edge cases.',
    url: 'https://geekyants.com/blog/automate-the-obvious-review-the-rest-designing-ai-powered-content-moderation',
  },
];
