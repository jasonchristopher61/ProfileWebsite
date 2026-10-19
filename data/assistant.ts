export interface AssistantTopic {
  keywords: string[];
  answer: string;
}

// Demo-mode canned responses, matched by keyword. No network calls, no API
// keys. See components/Assistant.tsx for the matching logic — swap
// `getAssistantReply` there for a real server-side API call later.
export const assistantTopics: AssistantTopic[] = [
  {
    keywords: ["experience", "work", "job", "career", "ibm"],
    answer:
      "Jason has 7+ years at IBM India as a Senior Application Developer on the Prudential Financial account, building Java/Spring Boot microservices and Angular/React front ends. He's been onsite in the U.S. since June 2022.",
  },
  {
    keywords: ["skill", "stack", "tech", "technology", "language"],
    answer:
      "Jason's core stack is Java, Spring Boot, and Microservices on the backend, Angular and React on the frontend, plus AWS, Docker, and Jenkins for cloud/DevOps. He's also expanding into Playwright and Cypress for test automation. Check the Skills section for proficiency levels on everything.",
  },
  {
    keywords: ["project", "built", "portfolio", "work sample"],
    answer:
      "Featured work includes a data Mapping Utility with ML-assisted suggestions, a DataIn Utility for large multi-sheet file ingestion, and a Watsonx.ai-powered tool that turns requirement docs into JIRA stories. See the Projects section for the full case studies.",
  },
  {
    keywords: ["certification", "cert", "aws certified", "certified"],
    answer:
      "Jason holds AWS Certified Cloud Practitioner and AWS Certified Solutions Architect – Associate (both 2025), IBM Certified Java Full Stack Developer, Microsoft Azure Fundamentals, and SAFe Agile Practitioner, among others.",
  },
  {
    keywords: ["creative", "music", "film", "photo", "game", "hobby", "hobbies"],
    answer:
      "Outside of engineering, Jason's into music, filmmaking, photography, and game development. Check out the \"Beyond Code\" section — he's still filling it in with real work.",
  },
  {
    keywords: ["contact", "email", "reach", "hire", "linkedin", "github"],
    answer: "Best way to reach Jason is by email at jasonchristopher61@gmail.com — there's also a contact form down in the Contact section.",
  },
];

export const assistantFallback =
  "I don't have a canned answer for that yet — this is demo mode, so I only know the topics above (experience, skills, projects, certifications, creative work, contact). Try asking about one of those!";
