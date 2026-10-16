export const profile = {
  name: 'Jason Christopher',
  title: 'Senior Software Engineer | Full Stack Developer (Angular | React | AWS)',
  email: 'jasonchristopher61@gmail.com',
  phone: '+91 8015212836',
  summary:
    'Results-driven Full Stack Developer with 7+ years of experience designing and delivering scalable, cloud-native applications. Expertise in building high-performance microservices using Java and Spring Boot, along with dynamic, user-centric frontends using Angular and React. Proficient in AWS cloud services, CI/CD pipelines, and containerization. Recently deepened frontend expertise through advanced React training and strengthened AI capabilities through IBM Watsonx training, building a PoC that auto-generates JIRA stories from requirement documents.',
}

// level: 'Expert' (deep, years of hands-on production use) ·
// 'Advanced' (solid working proficiency) · 'Familiar' (used it, still building depth)
export const skills = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'Angular', level: 'Expert' },
      { name: 'React.js', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'JavaScript (ES6+)', level: 'Expert' },
      { name: 'HTML5', level: 'Expert' },
      { name: 'CSS3', level: 'Expert' },
      { name: 'Bootstrap', level: 'Advanced' },
      { name: 'Responsive UI', level: 'Advanced' },
      { name: 'WCAG Accessibility', level: 'Advanced' },
    ],
  },
  {
    category: 'Backend & Microservices',
    items: [
      { name: 'Java 8/11', level: 'Expert' },
      { name: 'Spring Boot', level: 'Expert' },
      { name: 'Microservices', level: 'Expert' },
      { name: 'REST APIs', level: 'Expert' },
      { name: 'JPA', level: 'Advanced' },
      { name: 'MyBatis/iBatis', level: 'Expert' },
      { name: 'Hibernate', level: 'Advanced' },
      { name: 'JWT', level: 'Advanced' },
      { name: 'OAuth', level: 'Advanced' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS (S3, EC2, ECS, DynamoDB, CloudWatch, ECR)', level: 'Advanced' },
      { name: 'Jenkins', level: 'Advanced' },
      { name: 'AWS CodePipeline', level: 'Advanced' },
      { name: 'Docker', level: 'Advanced' },
      { name: 'Kubernetes', level: 'Familiar' },
    ],
  },
  {
    category: 'Data & Storage',
    items: [
      { name: 'MySQL', level: 'Advanced' },
      { name: 'Oracle', level: 'Advanced' },
      { name: 'DB2', level: 'Advanced' },
      { name: 'MongoDB', level: 'Familiar' },
      { name: 'DynamoDB', level: 'Expert' },
    ],
  },
  {
    category: 'Testing & QA',
    items: [
      { name: 'JUnit', level: 'Expert' },
      { name: 'Mockito', level: 'Advanced' },
      { name: 'Playwright', level: 'Advanced' },
      { name: 'Cypress', level: 'Advanced' },
    ],
  },
  {
    category: 'Tools & Practices',
    items: [
      { name: 'Git', level: 'Expert' },
      { name: 'Maven', level: 'Advanced' },
      { name: 'Gradle', level: 'Advanced' },
      { name: 'Postman', level: 'Advanced' },
      { name: 'JIRA', level: 'Expert' },
      { name: 'Agile/Scrum', level: 'Expert' },
    ],
  },
  {
    category: 'AI & Automation',
    items: [
      { name: 'Watsonx.ai Integration', level: 'Advanced' },
      { name: 'Apigee API Gateway', level: 'Advanced' },
      { name: 'Excel/CSV Processing Pipelines', level: 'Expert' },
      { name: 'Performance Optimization', level: 'Expert' },
    ],
  },
]

export const experience = [
  {
    company: 'IBM India Pvt Ltd',
    role: 'Senior Application Developer — Java Full Stack',
    period: 'April 2018 – Present (7 Years)',
    client: 'Client: Prudential Financial',
    location: 'Onsite – United States (June 2022 – Present)',
    highlights: [
      'Designed and built high-performance microservices using Spring Boot, MyBatis, and DynamoDB to support mapping, transformation, validation, and orchestration flows.',
      'Developed dynamic SQL generation, custom formula engines, field transformation rules, and data-validation services; optimized MyBatis queries, reducing response times by 40–60%.',
      'Built end-to-end UI screens in Angular and React for data upload, metadata configuration, dynamic rule selection, mapping/transformation, and result dashboards — ensuring WCAG 2.1 accessibility compliance.',
      'Implemented asynchronous processing using AWS SQS, S3, and ECS; containerized microservices and managed zero-downtime deployments across DEV, QA, and PROD.',
      'Built and optimized CI/CD pipelines using Jenkins and AWS CodePipeline; integrated CloudWatch monitoring, dashboards, and alarms.',
      'Provided technical leadership, code reviews, and mentoring for junior developers; collaborated with Product Owners and BAs on requirement refinement.',
      'Implemented complete unit test coverage with JUnit and Mockito; performed deep RCA on production issues to improve system reliability.',
    ],
  },
]

export const projects = [
  {
    name: 'Mapping Utility — Data Transformation & Mapping Platform',
    description: 'A system enabling users to map custom templates to canonical templates with ML-based intelligent suggestions.',
    achievements: [
      'Integrated an ML-based suggestion service into the UI and microservices.',
      'Designed a rule-based formula processing engine.',
      'Reduced mapping configuration time by 50% for end users.',
      'Improved DynamoDB data access throughput via optimized partitioning.',
    ],
  },
  {
    name: 'DataIn Utility — Pre-processing & Validation Platform',
    description: 'Handles large multi-sheet Excel/CSV uploads (40+ files, 60+ sheets) with dynamic, metadata-driven validation.',
    achievements: [
      'Developed microservices supporting a multi-stage ingestion pipeline.',
      'Built a UI workflow to preview uploaded file structure and track processing state.',
      'Implemented S3-based storage and ECS container orchestration.',
      'Delivered major releases with enhanced stability and performance tuning.',
    ],
  },
  {
    name: 'Proof of Concept — Watsonx.ai JIRA Story Generator',
    description: 'AI-based automation for converting functional requirement documents into JIRA stories.',
    achievements: [
      'Built a Spring Boot service integrated with Watsonx.ai models.',
      'Created a React UI to upload documents and preview generated stories.',
      'Integrated with the JIRA REST API to auto-create epics and stories.',
      'Demonstrated the end-to-end solution to leadership with excellent feedback.',
    ],
  },
]

export const certifications = [
  'AWS Certified Cloud Practitioner (2025)',
  'AWS Certified Solutions Architect – Associate (2025)',
  'IBM Certified Java Full Stack Developer',
  'Microsoft Azure Fundamentals (2021)',
  'SAFe Agile Practitioner (2019)',
  'Docker & Kubernetes – IBM Training',
  'Accessibility Advocate – IBM Training',
  'Python – Codecademy',
]

export const education = {
  degree: 'B.Tech – Information Technology',
  school: 'Prathyusha Engineering College, Tamil Nadu',
  year: '2018',
}

export const languages = ['English', 'Tamil']
