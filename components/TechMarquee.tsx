const STACK = [
  "Java",
  "Spring Boot",
  "Angular",
  "React",
  "TypeScript",
  "AWS",
  "Docker",
  "Jenkins",
  "MyBatis",
  "DynamoDB",
  "Watsonx.ai",
  "Playwright",
];

export function TechMarquee() {
  const items = [...STACK, ...STACK];

  return (
    <div className="relative overflow-hidden border-y border-border py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex w-max animate-marquee gap-10">
        {items.map((tech, i) => (
          <span key={`${tech}-${i}`} className="text-sm font-medium text-muted whitespace-nowrap">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
