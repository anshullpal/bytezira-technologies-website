import {
  Brain,
  Code2,
  Cloud,
  ShieldCheck,
  Network,
  Compass,
  PenLine,
  type LucideIcon,
} from "lucide-react";

// --------------------------------------------------
// SITE-WIDE BRAND AND CONTACT INFORMATION
// --------------------------------------------------

export const site = {
  name: "ByteZira Technologies",
  url: "https://byteziralabs.online",
  email: "info.bytezira@gmail.com",
  tagline: "Engineering Intelligent Digital Futures.",
  description:
    "ByteZira Technologies is an India-based technology venture focused on AI, software engineering, cloud infrastructure, cybersecurity, networking, technical consulting, and digital content services.",
  location: "India",
  market: "India",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/bytezira-technologies",
    },
  ],
} as const;

// --------------------------------------------------
// NAVIGATION
// --------------------------------------------------

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
] as const;

// --------------------------------------------------
// COMPANY PROFILE
// --------------------------------------------------

export type FounderRecognition = {
  title: string;
  organisation: string;
  year: number;
  description: string;
  url: string;
};

export type Founder = {
  name: string;
  role: string;
  bio: string;
  education?: string;
  profileUrl?: string;
  recognitions: FounderRecognition[];
};

export type Address = {
  lines: string[];
  city: string;
  state: string;
  postalCode: string;
};

export type Udyam = {
  number: string;
  enterpriseName?: string;
  enterpriseType?: string;
  registeredOn?: string;
  verifyUrl?: string;
  /** Keep the registration number hidden unless there is a clear reason to publish it. */
  showNumberPublicly: boolean;
};

export const company = {
  publicBrandName: "ByteZira Technologies",
  // Set only if the legal name has been confirmed from the applicable registration document.
  legalName: undefined as string | undefined,
  businessStructure: "Sole proprietorship",
  businessStatus: "Startup",
  registrationStatus: "Udyam registered",
  location: "Shahjahanpur, India",
  targetCustomers: [
    "Startups",
    "Businesses",
    "Individual developers",
    "Researchers",
  ],
  businessFocus: [
    "Technology services",
    "AI and product development",
    "Software engineering",
    "Cloud and infrastructure",
    "Cybersecurity",
    "Digital services",
  ],
  founders: [
    {
      name: "Anshul Pal",
      role: "Founder & Technical Lead",
      education:
        "Master of Computer Applications (MCA), Dr. Hari Singh Gour Central University, Madhya Pradesh, India.",
      bio:
        "Anshul Pal is a technology entrepreneur and software developer whose work spans artificial intelligence, custom language models, software engineering, cloud infrastructure, and cybersecurity. Through ByteZira Technologies, he aims to foster collaborative leadership, build trusted client relationships, and deliver reliable, customer-focused technology solutions that create lasting value.",
      recognitions: [
        {
          title:
            "Top 50 Global Thought Leaders and Influencers on Quantum Computing",
          organisation: "Thinkers360",
          year: 2025,
          description:
            "Reported ranking at #22 in Thinkers360's 2025 list. Verify the published ranking and exact wording before using this claim in prominent marketing copy.",
          url:
            "https://www.thinkers360.com/top-50-global-thought-leaders-and-influencers-on-quantum-computing-2025/",
        },
      ],
    },
  ] satisfies Founder[],
  udyam: {
    number: "UDYAM-UP-68-0052718",
    // The number is stored for company records but is not rendered publicly by default.
    showNumberPublicly: true,
  } satisfies Udyam,
};

// --------------------------------------------------
// SERVICES
// --------------------------------------------------

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  items: string[];
  note?: string;
  enquiry: string;
};

export const services: Service[] = [
  {
    slug: "ai-ml",
    title: "AI and Machine Learning",
    icon: Brain,
    enquiry: "AI and Machine Learning",
    summary:
      "Prototype, evaluate and integrate language-model and machine-learning features.",
    items: [
      "Language-model experimentation",
      "AI application integration",
      "Model inference workflows",
      "Evaluation and technical prototyping",
    ],
    note:
      "Research and prototyping are scoped separately from production AI delivery.",
  },
  {
    slug: "software",
    title: "Software Development",
    icon: Code2,
    enquiry: "Software Development",
    summary:
      "Web applications, APIs and integrations designed to be tested and maintained.",
    items: [
      "Web application development",
      "Backend systems and APIs",
      "Database-backed applications",
      "Testing and maintenance",
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud and DevOps",
    icon: Cloud,
    enquiry: "Cloud and DevOps",
    summary:
      "Documented cloud infrastructure and delivery workflows.",
    items: [
      "AWS infrastructure design",
      "Containerisation and deployment",
      "CI/CD pipelines",
      "Monitoring and operational documentation",
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    icon: ShieldCheck,
    enquiry: "Cybersecurity",
    summary:
      "Defensive configuration and secure software development practices.",
    items: [
      "Security-focused configuration",
      "Defensive hardening",
      "Scoped security reviews",
      "Secure development practices",
    ],
    note:
      "Assessments of third-party systems require explicit authorisation. Do not imply formal audit credentials or certifications.",
  },
  {
    slug: "networking",
    title: "Networking and Infrastructure",
    icon: Network,
    enquiry: "Networking and Infrastructure",
    summary:
      "DNS, Linux servers and network infrastructure with clear documentation.",
    items: [
      "DNS architecture and configuration",
      "Linux server administration",
      "Network troubleshooting",
      "Cloud network design",
    ],
  },
  {
    slug: "consulting",
    title: "Technical Consulting",
    icon: Compass,
    enquiry: "Technical Consulting",
    summary:
      "Practical technical guidance before committing to an implementation.",
    items: [
      "Technology selection",
      "Software architecture planning",
      "Infrastructure reviews",
      "Technical feasibility assessments",
    ],
  },
  {
    slug: "content-marketing",
    title: "Content Writing and Digital Marketing",
    icon: PenLine,
    enquiry: "Content Writing and Digital Marketing",
    summary:
      "Clear technical content and thoughtful digital marketing strategy.",
    items: [
      "Technical blog writing",
      "Developer-focused content",
      "Website copywriting",
      "SEO content planning and calendars",
    ],
    note:
      "Strategy and writing only. Paid-campaign and ad-account management are not included unless separately agreed.",
  },
];

// --------------------------------------------------
// PRODUCTS AND ENGINEERING PROJECTS
// --------------------------------------------------

export type Product = {
  name: string;
  slug: string;
  category: string;
  summary: string;
  description: string;
  tech: string[];
  status: string;
  docsUrl?: string;
  repoUrl?: string;
  release?: string;
};

// Confirm specs and status against current project documentation before launch.
export const products: Product[] = [
  {
    name: "ByteZira Vaani-350M",
    slug: "vaani-350m",
    category: "AI and Language Models",
    status: "Experimental research model",
    summary:
      "A custom decoder-only Transformer language-model project.",
    description:
      "ByteZira Vaani-350M is a custom decoder-only Transformer language model. Project documentation has reported approximately 350 million parameters and a training scale of around 3.3 billion tokens; verify these figures against the published model documentation before treating them as final specifications. No benchmark results are claimed here.",
    tech: ["Python", "PyTorch", "Transformer"],
    docsUrl:
      "https://huggingface.co/anshullpal/ByteZira-Vaani-350M-pretrain-base-model",
  },
  {
    name: "ScreenPen",
    slug: "screenpen",
    category: "Software Applications",
    status: "In development",
    summary:
      "A desktop-and-tablet drawing and annotation workflow project.",
    description:
      "ScreenPen explores drawing and annotation across desktop and tablet devices. Its supported features and release status should be confirmed before describing it as a publicly available product.",
    tech: ["Python", "WebSockets", "JavaScript", "Android"],
  },
  {
    name: "ByteZira Labs DNS Infrastructure",
    slug: "dns-infrastructure",
    category: "Infrastructure and Developer Tools",
    status: "Technical demonstration",
    summary:
      "Primary-secondary DNS configuration and cloud networking.",
    description:
      "An infrastructure project demonstrating DNS zone configuration, primary-secondary DNS operation, domain records, and cloud networking. It is an engineering demonstration rather than a production managed DNS service.",
    tech: ["BIND9", "Linux", "AWS", "DNS"],
  },
];

export type ResearchNote = {
  title: string;
  date: string;
  href?: string;
  summary?: string;
};

export const researchNotes: ResearchNote[] = [];

// --------------------------------------------------
// SHARED HELPERS
// --------------------------------------------------

export const formatAddress = (address: Address) => [
  ...address.lines,
  `${address.city}, ${address.state} ${address.postalCode}`,
  "India",
];

export const getPublicUdyamNumber = () =>
  company.udyam.showNumberPublicly ? company.udyam.number : undefined;
