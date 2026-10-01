/**
 * Single source of content for the site.
 * Everything here is taken from the resume (Gajendhiran_M.pdf). Framing lines
 * that interpret a resume bullet rather than quote it are listed in CONTENT-NOTES.md.
 */

export const person = {
  name: "Gajendhiran Mohan",
  first: "Gajendhiran",
  last: "Mohan",
  positioning: "Forward Deployed Engineer",
  currentRole: "Chief Product Engineer",
  currentRoleDetail: "Senior Full-Stack Developer",
  company: "Predigle",
  since: "May 2022",
  location: "Chennai, Tamil Nadu",
  certification: "AWS Certified Solutions Architect – Associate (SAA-C03)",
  email: "gajendhiranmohan@gmail.com",
  linkedin: "https://linkedin.com/in/gajendhiran/",
  github: "https://github.com/Gajendhiranm",
};

/** Headline readout: every figure is a resume figure. */
export const readout = [
  { value: "50,000+", label: "users on APIs I designed" },
  { value: "99.9%", label: "uptime across production apps" },
  { value: "200+", label: "medical practices on a platform I modernised" },
  { value: "10,000+", label: "business rules executed daily" },
];

export type Metric = { value: string; label: string };
export type SketchNode = { id: string; label: string; note: string; tier: 0 | 1 | 2 };

export type Work = {
  slug: string;
  title: string;
  kind: string;
  line: string;
  role: string;
  context: string;
  problem: string;
  built: string[];
  decisions: string[];
  challenge: string;
  metrics: Metric[];
  outcome: string;
  stack: string[];
  sketch: SketchNode[];
  /** Visual rhythm of the case-study spread. */
  layout: "metrics" | "system" | "narrative";
};

export const works: Work[] = [
  {
    slug: "crewfox",
    title: "CrewFox",
    kind: "Multi-agent AI platform",
    line: "A platform for visually building, configuring and running autonomous multi-agent AI workflows.",
    role: "Designed and built",
    context:
      "Key project alongside my product work at Predigle. The goal was a production-ready system, not a notebook demo: real orchestration, real persistence, real deployment.",
    problem:
      "Multi-agent workflows are hard to build and harder to watch. Each LLM provider has its own API for prompts, models and tools, and a running agent graph is opaque unless you can observe it while it executes.",
    built: [
      "A visual interface for creating, configuring and executing autonomous AI workflows.",
      "A unified abstraction layer for prompt, model and tool management, supporting OpenAI, Gemini and other LLM providers.",
      "Workflow orchestration on LangGraph and FastAPI with persistent memory, real-time execution monitoring, observability and REST APIs.",
      "Containerised services on Docker, deployed to AWS to support concurrent multi-agent executions.",
    ],
    decisions: [
      "Providers sit behind one abstraction, so adding a model vendor is an adapter rather than a rewrite.",
      "LangGraph for orchestration: agent workflows are graphs with state, and the runtime should say so.",
      "Monitoring is part of the execution path, not added after it. Runs are visible while they happen.",
    ],
    challenge:
      "Running several agent workflows at the same time while keeping each one's memory and execution trace intact.",
    metrics: [],
    outcome:
      "A working multi-agent platform from interface to infrastructure: visual builder, provider-agnostic model layer, persistent orchestration and an AWS deployment that handles concurrent runs.",
    stack: ["React", "FastAPI", "LangGraph", "MongoDB", "AWS", "Docker"],
    sketch: [
      { id: "ui", label: "Visual builder", note: "React interface to create, configure and run workflows.", tier: 0 },
      { id: "api", label: "FastAPI · REST", note: "REST APIs that front orchestration and execution.", tier: 1 },
      { id: "graph", label: "LangGraph runtime", note: "Orchestrates agent workflows as stateful graphs.", tier: 1 },
      { id: "monitor", label: "Execution monitor", note: "Real-time monitoring and observability of running workflows.", tier: 1 },
      { id: "providers", label: "Provider layer", note: "One abstraction for prompts, models and tools: OpenAI, Gemini, extensible.", tier: 2 },
      { id: "memory", label: "Persistent memory", note: "Workflow state and memory persisted in MongoDB.", tier: 2 },
      { id: "infra", label: "Docker on AWS", note: "Containerised, deployed for concurrent multi-agent executions.", tier: 2 },
    ],
    layout: "system",
  },
  {
    slug: "rule-engine",
    title: "Rule Execution Engine",
    kind: "Backend system",
    line: "A production rule engine that runs more than 10,000 business rules a day.",
    role: "Designed and implemented",
    context: "Backend system at Predigle that sits behind several of the platform's business workflows.",
    problem:
      "Business rules have to run correctly, quickly and at volume, and when a rule produces an unexpected result someone has to be able to find out why.",
    built: [
      "A production-grade rule execution engine on Node.js and MongoDB.",
      "Comprehensive logging and observability around rule execution.",
    ],
    decisions: [
      "Logging and observability built into the engine from the start, so every execution can be traced.",
      "Node.js and MongoDB, in line with the service stack the engine runs alongside.",
    ],
    challenge: "Raising throughput without losing traceability at 10,000+ rule executions a day.",
    metrics: [
      { value: "10,000+", label: "business rules processed daily" },
      { value: "75%", label: "improvement in system performance" },
    ],
    outcome: "Rules run at volume with a 75% improvement in system performance, and every execution can be inspected.",
    stack: ["Node.js", "MongoDB"],
    sketch: [
      { id: "in", label: "Business rules", note: "10,000+ rules processed daily.", tier: 0 },
      { id: "engine", label: "Execution engine", note: "Node.js service that evaluates and runs rules.", tier: 1 },
      { id: "store", label: "MongoDB", note: "Rule and execution data.", tier: 2 },
      { id: "obs", label: "Logging · observability", note: "Comprehensive logging around every execution.", tier: 2 },
    ],
    layout: "metrics",
  },
  {
    slug: "practice-management",
    title: "Practice Management Modernisation",
    kind: "Healthcare platform",
    line: "Full-stack modernisation of a healthcare practice management platform used by 200+ medical practices.",
    role: "Led full-stack modernisation",
    context:
      "A healthcare practice management platform already running in production for more than 200 medical practices, with more than 50,000 patient records.",
    problem:
      "The platform needed to perform better for the practices that depend on it every day, and the codebase had to be modernised to support that.",
    built: [
      "Led the modernisation across the stack: Angular and TypeScript on the front end, PostgreSQL underneath.",
      "Performance work across the application, with a 70% overall improvement.",
    ],
    decisions: [
      "Modernised in place on Angular, TypeScript and PostgreSQL instead of replacing the platform.",
      "Treated performance as the measure of whether the modernisation worked.",
    ],
    challenge: "Changing a system that practices depend on every day, with 50,000+ patient records in it.",
    metrics: [
      { value: "70%", label: "improvement in application performance" },
      { value: "200+", label: "medical practices served" },
      { value: "50,000+", label: "patient records processed" },
    ],
    outcome: "A faster platform for the same 200+ practices, with application performance up 70%.",
    stack: ["Angular", "TypeScript", "PostgreSQL"],
    sketch: [
      { id: "practices", label: "200+ practices", note: "Medical practices using the platform day to day.", tier: 0 },
      { id: "app", label: "Angular · TypeScript", note: "Modernised application layer.", tier: 1 },
      { id: "db", label: "PostgreSQL", note: "50,000+ patient records.", tier: 2 },
    ],
    layout: "metrics",
  },
  {
    slug: "prior-auth",
    title: "Prior Authorization Platform",
    kind: "Healthcare workflow",
    line: "A prior authorization platform with OCR that takes manual data entry out of a healthcare workflow.",
    role: "Built",
    context: "Healthcare prior authorization handling more than 1,000 requests a month.",
    problem:
      "Prior authorization depended on manual data entry. That was slow, and the time showed up directly in how long each request took.",
    built: [
      "A prior authorization platform with a Python backend and a React front end.",
      "OCR integration that turns documents into data, so staff no longer key it in by hand.",
    ],
    decisions: [
      "Put OCR in the intake path so data is captured once, at the source.",
      "Python for the processing side, React for the people working the requests.",
    ],
    challenge: "Making the automated path dependable at 1,000+ requests a month.",
    metrics: [
      { value: "80%", label: "less manual data entry" },
      { value: "73%", label: "cut in processing time" },
      { value: "1,000+", label: "requests handled monthly" },
    ],
    outcome: "Most of the manual entry is gone, and each request takes 73% less time to process.",
    stack: ["Python", "React", "OCR"],
    sketch: [
      { id: "docs", label: "Incoming requests", note: "1,000+ prior authorization requests a month.", tier: 0 },
      { id: "ocr", label: "OCR · Python", note: "Extracts data instead of manual entry.", tier: 1 },
      { id: "ui", label: "React application", note: "Where requests are worked and tracked.", tier: 2 },
    ],
    layout: "metrics",
  },
  {
    slug: "config-platform",
    title: "SaaS Configuration Platform",
    kind: "Platform product",
    line: "A configuration platform that shortened client onboarding by 40%.",
    role: "Architected and launched",
    context: "SaaS product at Predigle, used to bring new clients onto the platform.",
    problem: "Client onboarding took too long, and the people doing it needed a tool they actually wanted to use.",
    built: [
      "Architected and launched a SaaS configuration platform on React, Angular, Node.js and AWS.",
    ],
    decisions: [
      "Made onboarding a product with its own interface, not a one-off engineering task.",
      "Built on the same React/Angular, Node.js and AWS stack as the rest of the platform.",
    ],
    challenge: "Shipping a platform that is faster to use and that users rate highly.",
    metrics: [
      { value: "40%", label: "faster client onboarding" },
      { value: "95%", label: "user satisfaction" },
    ],
    outcome: "Onboarding takes 40% less time, and 95% of users are satisfied with the platform.",
    stack: ["React", "Angular", "Node.js", "AWS"],
    sketch: [
      { id: "client", label: "New client", note: "Onboarded through configuration.", tier: 0 },
      { id: "ui", label: "React · Angular", note: "Configuration interface.", tier: 1 },
      { id: "svc", label: "Node.js on AWS", note: "Configuration services.", tier: 2 },
    ],
    layout: "narrative",
  },
  {
    slug: "benchmarking",
    title: "Analytics & Benchmarking",
    kind: "Data product",
    line: "Real-time analytics and benchmarking dashboards used by 85% of users.",
    role: "Developed",
    context: "Dashboards for spotting practice optimisation opportunities.",
    problem: "Optimisation opportunities were slow to find without a live view of performance against benchmarks.",
    built: ["Real-time analytics and benchmarking dashboards in React and Chart.js."],
    decisions: ["Real-time data instead of periodic reports, so opportunities show up while they still matter."],
    challenge: "Building something that most users actually open.",
    metrics: [
      { value: "85%", label: "of users use the dashboards" },
      { value: "30%", label: "faster to spot optimisation opportunities" },
    ],
    outcome: "85% of users have adopted the dashboards, and opportunities are found 30% faster.",
    stack: ["React", "Chart.js"],
    sketch: [
      { id: "data", label: "Live data", note: "Real-time analytics.", tier: 0 },
      { id: "dash", label: "React · Chart.js", note: "Benchmarking dashboards.", tier: 1 },
      { id: "user", label: "Practice teams", note: "85% of users.", tier: 2 },
    ],
    layout: "narrative",
  },
  {
    slug: "api-platform",
    title: "APIs & Microservices",
    kind: "Service layer",
    line: "RESTful APIs and microservices behind several production applications.",
    role: "Designed and maintained",
    context: "Shared service layer behind several production applications.",
    problem: "Several products depended on the same services, so those services had to stay up.",
    built: ["RESTful APIs and microservices on Node.js, Express and MongoDB."],
    decisions: ["Microservices, so each product depends on services it can share without being tied to the others."],
    challenge: "Keeping 99.9% uptime across 50,000+ users and several applications.",
    metrics: [
      { value: "99.9%", label: "uptime" },
      { value: "50,000+", label: "users supported" },
    ],
    outcome: "Several production applications run on these services at 99.9% uptime.",
    stack: ["Node.js", "Express", "MongoDB", "REST"],
    sketch: [
      { id: "apps", label: "Production apps", note: "Multiple applications.", tier: 0 },
      { id: "svc", label: "Node.js · Express", note: "RESTful APIs and microservices.", tier: 1 },
      { id: "db", label: "MongoDB", note: "Service data.", tier: 2 },
    ],
    layout: "narrative",
  },
];

export type Capability = {
  id: string;
  name: string;
  summary: string;
  tech: string[];
  works: string[];
};

export const capabilities: Capability[] = [
  {
    id: "frontend",
    name: "Frontend systems",
    summary: "Large Angular and React applications that people use every day for work.",
    tech: ["React", "Angular (9+)", "Redux", "TypeScript", "Material UI", "Chart.js", "SCSS"],
    works: ["practice-management", "config-platform", "benchmarking", "prior-auth", "crewfox"],
  },
  {
    id: "ai",
    name: "Applied AI & agent systems",
    summary: "Multi-agent orchestration, provider-agnostic model layers, RAG and observability for LLM systems.",
    tech: ["LangGraph", "LangChain", "LLMs", "RAG", "Multi-agent systems", "Chroma", "Prompt engineering", "Model evaluation", "AI observability"],
    works: ["crewfox"],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    summary: "Services, engines and APIs that other products depend on.",
    tech: ["Node.js", "Express", "FastAPI", "REST", "GraphQL", "WebSockets", "JWT", "Microservices"],
    works: ["api-platform", "rule-engine", "crewfox", "prior-auth"],
  },
  {
    id: "cloud",
    name: "Cloud infrastructure",
    summary: "Cloud-native deployment on AWS. Certified Solutions Architect (SAA-C03).",
    tech: ["AWS EC2", "S3", "Lambda", "RDS", "EKS", "ECS", "CloudFormation", "Docker", "Kubernetes", "Jenkins", "CI/CD"],
    works: ["crewfox", "config-platform"],
  },
  {
    id: "data",
    name: "Data & distributed systems",
    summary: "Data modelling and query performance across document and relational stores.",
    tech: ["MongoDB", "PostgreSQL", "MySQL", "DynamoDB", "Data modelling", "Query optimisation"],
    works: ["rule-engine", "practice-management", "api-platform"],
  },
  {
    id: "health",
    name: "Healthcare software",
    summary: "Practice management, prior authorization and benchmarking for medical practices.",
    tech: ["Patient records", "Prior authorization", "OCR", "Practice analytics"],
    works: ["practice-management", "prior-auth", "benchmarking"],
  },
  {
    id: "product",
    name: "Product engineering",
    summary: "Measured by onboarding time, adoption and satisfaction, not only by what shipped.",
    tech: ["System design", "API design", "Performance optimisation", "SOLID", "Scalability"],
    works: ["config-platform", "benchmarking", "practice-management"],
  },
];

export type Stage = {
  n: string;
  when: string | null;
  title: string;
  role: string;
  context: string;
  built: string;
  learned: string;
  impact: string;
  works: string[];
};

export const stages: Stage[] = [
  {
    n: "01",
    when: "2018 – 2022",
    title: "Foundation",
    role: "B.Sc. Computer Science",
    context: "KSR College of Engineering, Namakkal, Tamil Nadu.",
    built: "The computer science foundation the rest of this page is built on.",
    learned: "Fundamentals, before any production experience.",
    impact: "Graduated with a CGPA of 9.1 / 10.",
    works: [],
  },
  {
    n: "02",
    when: "May 2022",
    title: "Full-stack product engineering",
    role: "Senior Full-Stack Developer, Predigle",
    context: "Joined Predigle in Chennai, working across SaaS and healthcare products.",
    built: "RESTful APIs and microservices on Node.js, Express and MongoDB, shared by several production applications.",
    learned: "Owning the whole path from interface to service to database.",
    impact: "99.9% uptime for 50,000+ users.",
    works: ["api-platform"],
  },
  {
    n: "03",
    when: null,
    title: "Healthcare platforms",
    role: "Led full-stack modernisation",
    context: "Products for medical practices: practice management, prior authorization, benchmarking.",
    built: "Modernised the practice management platform, built prior authorization with OCR, and shipped real-time benchmarking dashboards.",
    learned: "In healthcare, performance and manual work are what people actually feel.",
    impact: "70% faster app for 200+ practices, 80% less manual entry, 85% dashboard adoption.",
    works: ["practice-management", "prior-auth", "benchmarking"],
  },
  {
    n: "04",
    when: null,
    title: "Platform & rules",
    role: "Architect",
    context: "Systems the rest of the platform runs on.",
    built: "Architected the SaaS configuration platform and designed the rule execution engine.",
    learned: "Platform work has to be observable and measured just like product work.",
    impact: "40% faster onboarding, 95% satisfaction, 10,000+ rules a day with a 75% performance gain.",
    works: ["config-platform", "rule-engine"],
  },
  {
    n: "05",
    when: null,
    title: "Cloud architecture",
    role: "AWS Certified Solutions Architect – Associate",
    context: "Formalised cloud architecture practice with SAA-C03.",
    built: "Cloud-native microservices on AWS: EC2, S3, Lambda, RDS, EKS, ECS, CloudFormation.",
    learned: "Designing for scalable, highly available and cost-optimised architectures.",
    impact: "Certified: SAA-C03.",
    works: ["config-platform", "crewfox"],
  },
  {
    n: "06",
    when: "Now",
    title: "AI systems",
    role: "Chief Product Engineer · building CrewFox",
    context: "Bringing production engineering to generative AI.",
    built: "CrewFox: a multi-agent platform with LangGraph orchestration, a provider-agnostic model layer and real-time execution monitoring.",
    learned: "Agent systems need the same discipline as any production system: abstraction, persistence and observability.",
    impact: "A deployed multi-agent platform supporting concurrent executions on AWS.",
    works: ["crewfox"],
  },
];

export type Principle = { title: string; body: string; evidence: { label: string; work: string }[] };

export const principles: Principle[] = [
  {
    title: "Measure the delta.",
    body: "A change is done when you can say what moved. Almost every system on this page has a before and an after.",
    evidence: [
      { label: "onboarding −40%", work: "config-platform" },
      { label: "rule engine performance +75%", work: "rule-engine" },
      { label: "app performance +70%", work: "practice-management" },
      { label: "processing time −73%", work: "prior-auth" },
    ],
  },
  {
    title: "Remove the manual step.",
    body: "The best automation removes the work that people do again and again by hand.",
    evidence: [
      { label: "manual data entry −80%", work: "prior-auth" },
      { label: "client onboarding −40%", work: "config-platform" },
    ],
  },
  {
    title: "Production systems explain themselves.",
    body: "Logging, monitoring and observability go in at design time, whether it's a rule engine or an agent graph.",
    evidence: [
      { label: "rule engine observability", work: "rule-engine" },
      { label: "real-time execution monitoring", work: "crewfox" },
    ],
  },
  {
    title: "Abstract at the seam that changes.",
    body: "Put the interface where change is expected: LLM providers, client configuration.",
    evidence: [
      { label: "OpenAI · Gemini · extensible", work: "crewfox" },
      { label: "configuration over custom work", work: "config-platform" },
    ],
  },
  {
    title: "Uptime is a feature.",
    body: "Other teams' products rely on the services I build. Reliability is part of what they're getting.",
    evidence: [{ label: "99.9% uptime · 50,000+ users", work: "api-platform" }],
  },
];

export const loop = ["Problem", "Constraints", "Architecture", "Implementation", "Observe", "Iterate"];

export const direction = {
  building: {
    head: "CrewFox",
    body: "Multi-agent workflows on LangGraph and FastAPI, with persistent memory and real-time execution monitoring. Alongside: product systems at Predigle as Chief Product Engineer.",
  },
  learning: {
    head: "Making LLM systems measurable",
    body: "Model evaluation, AI observability, and retrieval (RAG) over vector stores such as Chroma. Bringing the measure-the-delta habit to systems that don't always give the same answer.",
  },
  next: {
    head: "Forward-deployed engineering",
    body: "Taking AI-native systems all the way into a customer's environment: interface, services, cloud architecture and agent orchestration, owned end to end. Going further into distributed systems and system design.",
  },
};

export const stack: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript (ES6+)", "Python"] },
  { group: "Frontend", items: ["React", "Angular (9+)", "Redux", "Material UI", "HTML5", "CSS3 / SCSS"] },
  { group: "Backend", items: ["Node.js", "Express", "FastAPI", "REST", "GraphQL", "WebSockets", "JWT", "Microservices"] },
  { group: "AI", items: ["LLMs", "LangGraph", "LangChain", "RAG", "AI agents", "Multi-agent systems", "Chroma", "Prompt engineering", "Model evaluation", "AI observability"] },
  { group: "Cloud", items: ["AWS EC2", "S3", "Lambda", "RDS", "EKS", "ECS", "CloudFormation"] },
  { group: "Infrastructure", items: ["Docker", "Kubernetes", "Jenkins", "CI/CD"] },
  { group: "Data", items: ["MongoDB", "PostgreSQL", "MySQL", "DynamoDB", "Data modelling", "Query optimisation"] },
  { group: "Practice", items: ["System design", "Distributed systems", "API design", "SOLID", "Scalability", "Performance optimisation"] },
];

export type LogEntry = { n: string; tag: "shipped" | "certified" | "building" | "notes"; text: string; work?: string };

/** Engineering log. Add new entries at the top; keep them factual. */
export const log: LogEntry[] = [
  { n: "007", tag: "building", text: "CrewFox: concurrent multi-agent execution on Docker / AWS.", work: "crewfox" },
  { n: "006", tag: "shipped", text: "CrewFox: one prompt/model/tool layer across OpenAI and Gemini, open to more providers.", work: "crewfox" },
  { n: "005", tag: "shipped", text: "CrewFox: LangGraph orchestration with persistent memory and live execution monitoring.", work: "crewfox" },
  { n: "004", tag: "certified", text: "AWS Certified Solutions Architect – Associate (SAA-C03)." },
  { n: "003", tag: "shipped", text: "Rule engine: logging and observability around 10,000+ daily executions.", work: "rule-engine" },
  { n: "002", tag: "shipped", text: "Prior authorization: OCR in the intake path; manual entry down 80%.", work: "prior-auth" },
  { n: "001", tag: "shipped", text: "Practice management: full-stack modernisation; performance up 70%.", work: "practice-management" },
];

export const sections = [
  { id: "intro", n: "01", label: "Identity" },
  { id: "build", n: "02", label: "What I build" },
  { id: "career", n: "03", label: "Career as a system" },
  { id: "work", n: "04", label: "Selected work" },
  { id: "thinking", n: "05", label: "How I think" },
  { id: "direction", n: "06", label: "Current direction" },
  { id: "stack", n: "07", label: "Engineering stack" },
  { id: "log", n: "08", label: "Engineering log" },
  { id: "contact", n: "09", label: "Contact" },
];

export const workBySlug = Object.fromEntries(works.map((w) => [w.slug, w]));
