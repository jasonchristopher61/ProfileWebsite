export interface JourneyEntry {
  date: string;
  title: string;
  description: string;
  type: "role" | "certification" | "milestone" | "learning";
}

// Derived from resume.ts (experience, certifications) — ordered oldest to newest.
export const journey: JourneyEntry[] = [
  {
    date: "2018",
    title: "B.Tech, Information Technology",
    description: "Graduated from Prathyusha Engineering College, Tamil Nadu.",
    type: "milestone",
  },
  {
    date: "April 2018",
    title: "Joined IBM India as Application Developer",
    description: "Started as a Java Full Stack Developer on the Prudential Financial account, building microservices and Angular/React UIs.",
    type: "role",
  },
  {
    date: "2019",
    title: "SAFe Agile Practitioner",
    description: "Certified in scaled agile practices for cross-team delivery.",
    type: "certification",
  },
  {
    date: "2021",
    title: "Microsoft Azure Fundamentals",
    description: "Broadened cloud knowledge beyond AWS with Azure fundamentals certification.",
    type: "certification",
  },
  {
    date: "June 2022",
    title: "Moved Onsite to the United States",
    description: "Relocated onsite to work directly with the Prudential Financial client team in the U.S.",
    type: "milestone",
  },
  {
    date: "2022–2024",
    title: "Senior Application Developer",
    description: "Took on technical leadership for the Mapping Utility and DataIn Utility platforms — mentoring developers, optimizing performance by up to 60%, and owning CI/CD.",
    type: "role",
  },
  {
    date: "2025",
    title: "AWS Certified Cloud Practitioner & Solutions Architect – Associate",
    description: "Deepened AWS expertise with two certifications in the same year.",
    type: "certification",
  },
  {
    date: "2025",
    title: "Watsonx.ai + Generative AI Training",
    description: "Completed IBM Watsonx.ai training and built a working PoC that auto-generates JIRA stories from requirement documents using generative AI.",
    type: "learning",
  },
  {
    date: "2025",
    title: "Advanced React Training",
    description: "Completed \"React – The Complete Guide (2025 Edition)\" to deepen modern React/hooks expertise alongside years of Angular experience.",
    type: "learning",
  },
  {
    date: "Present",
    title: "Exploring Test Automation & Beyond",
    description: "Currently expanding into Playwright and Cypress for end-to-end testing, on top of ongoing production engineering work.",
    type: "learning",
  },
];
