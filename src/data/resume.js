export const profile = {
  name: 'Jason Christopher',
  title: 'Senior Software Engineer | Full Stack Developer (Angular | React | AWS)',
  email: 'jasonchristopher61@gmail.com',
  phone: '+91 8015212836',
  summary:
    'Results-driven Full Stack Developer with 7+ years of experience designing and delivering scalable, cloud-native applications. Expertise in building high-performance microservices using Java and Spring Boot, along with dynamic, user-centric frontends using Angular and React. Proficient in AWS cloud services, CI/CD pipelines, and containerization. Recently deepened frontend expertise through advanced React training and strengthened AI capabilities through IBM Watsonx training, building a PoC that auto-generates JIRA stories from requirement documents.',
}

export const skills = [
  {
    category: 'Frontend Development',
    items: ['Angular', 'React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive UI', 'WCAG Accessibility'],
  },
  {
    category: 'Backend & Microservices',
    items: ['Java 8/11', 'Spring Boot', 'Microservices', 'REST APIs', 'JPA', 'MyBatis/iBatis', 'Hibernate', 'JWT', 'OAuth'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (S3, EC2, ECS, DynamoDB, CloudWatch, ECR)', 'Jenkins', 'AWS CodePipeline', 'Docker', 'Kubernetes'],
  },
  {
    category: 'Data & Storage',
    items: ['MySQL', 'Oracle', 'DB2', 'MongoDB', 'DynamoDB'],
  },
  {
    category: 'Tools & Practices',
    items: ['Git', 'Maven', 'Gradle', 'Postman', 'JIRA', 'Agile/Scrum', 'JUnit', 'Mockito'],
  },
  {
    category: 'AI & Automation',
    items: ['Watsonx.ai Integration', 'Apigee API Gateway', 'Excel/CSV Processing Pipelines', 'Performance Optimization'],
  },
]

export const experience = [
  {
    company: 'IBM India Pvt Ltd',
    role: 'Senior Application Developer — Java Full Stack',
    period: 'April 2018 – Present (7 Years)',
    client: 'Client: Prudential Financial',
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
