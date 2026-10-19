export interface Service {
  title: string;
  icon: string; // lucide-react icon name
  tagline: string;
  description: string;
  stack: string[];
}

export const services: Service[] = [
  {
    title: "Full-Stack Engineering",
    icon: "Layers",
    tagline: "From database to pixel, built to last.",
    description:
      "I design and ship complete features — not just APIs or just screens. That means data models and REST APIs that hold up under real load, paired with Angular/React front ends that feel fast and stay accessible.",
    stack: ["Java", "Spring Boot", "Angular", "React", "TypeScript", "REST APIs"],
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    tagline: "Ship often, break nothing.",
    description:
      "I build CI/CD pipelines and containerized deployments so releases become routine instead of risky — with monitoring in place so issues surface before customers notice them.",
    stack: ["AWS", "Docker", "Jenkins", "CI/CD", "CloudWatch"],
  },
  {
    title: "Data Engineering & Automation",
    icon: "Workflow",
    tagline: "Turning messy data into dependable workflows.",
    description:
      "A lot of real engineering work is pipelines, not products: ingesting inconsistent files, transforming them against business rules, and making the whole thing observable and maintainable.",
    stack: ["Python", "ETL Pipelines", "Excel/CSV Processing", "Workflow Orchestration"],
  },
  {
    title: "AI & Innovation",
    icon: "Sparkles",
    tagline: "Practical AI, not hype.",
    description:
      "I like finding the one AI integration that actually removes a tedious step for someone — like turning requirement docs into JIRA stories automatically — rather than bolting on AI for its own sake.",
    stack: ["Watsonx.ai", "Generative AI Integrations", "Workflow Automation", "Chatbots"],
  },
  {
    title: "Architecture & Problem Solving",
    icon: "Puzzle",
    tagline: "Finding the root cause, not just the patch.",
    description:
      "Good architecture shows up most when things go wrong. I design systems to be debuggable, do deep root-cause analysis under pressure, and modernize legacy pieces without breaking what already works.",
    stack: ["System Design", "API Integration", "RCA", "Performance Tuning"],
  },
];
