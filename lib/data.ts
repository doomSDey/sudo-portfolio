export const HERO_BG_IMAGE = "/hero-bg.png";

export const NAV_LINKS = [
  { name: 'Work', key: 'work' },
  { name: 'Experience', key: 'experience' },
  { name: 'Blog', key: 'blog' },
  { name: 'About', key: 'about' },
  { name: 'Contact', key: 'contact' },
] as const;

export const STATS = [
  "Two AI systems in daily client use in ~7 weeks",
  "100M+ annual label uploads",
  "~190K daily LLM completions",
  "100K+ app downloads",
  "20K+ monthly active users",
  "30% lower compute costs",
  "5× deployment velocity",
  "8 engineers hired and mentored",
];

interface HackathonLinks {
  demo?: string;
  video?: string;
  github?: string;
}

interface Hackathon {
  id: number;
  title: string;
  badge: string;
  event: string;
  description: string;
  stack: string[];
  links: HackathonLinks;
  imagePrompt: string;
  image?: string;
  designer?: string;
}

export const HACKATHONS: Hackathon[] = [
  {
    id: 1,
    title: "Mentation",
    badge: "Best Use of Amazon Bedrock",
    event: "MongoDB AI Hackathon (5,000+ participants)",
    description: "AI-powered mental health companion with journaling, emotion tracking, and personalized support. Built to make therapy accessible in India.",
    stack: ["AWS Bedrock", "SageMaker", "Next.js", "MongoDB", "Cognito"],
    links: { demo: "https://devpost.com/software/mentation", video: "https://www.youtube.com/watch?v=rzHxRyzxdCk" },
    imagePrompt: "Retro UI of a chat interface with soothing colors, pixelated text, dithered gradient background",
    designer: "Mrinmoyee Banerjee"
  },
  {
    id: 2,
    title: "Pathsure",
    badge: "Best PHI & PII Solution",
    event: "OpenText Hacknosis Hackathon (Top 3% of 1968 teams)",
    description: "Secure medical document management system. Enables patients to control medical history sharing and helps doctors extract relevant info for faster diagnoses.",
    stack: ["OpenText APIs", "Android", "Web App", "Security"],
    links: { demo: "https://www.behance.net/gallery/197229293/Pathsure" },
    imagePrompt: "Pixel art medical folder icon with a lock, green matrix digital rain background, cyberpunk style",
    image: "/pathsure-hero.png",
    designer: "Mrinmoyee Banerjee"
  }
];

export const PROJECTS = [
  {
    id: 5,
    title: "Move Onn",
    category: "Side Project",
    description: "Launched an AI breakup-recovery app for iPhone and iPad with 700 customers and $200 in monthly recurring revenue.",
    stats: "700 customers",
    stack: ["iOS", "AI chat", "Voice"],
    links: { appStore: "https://apps.apple.com/in/app/move-onn-breakup-recovery/id6756257090" },
    image: "/move-onn.webp",
  },
  {
    id: 1,
    title: "Trott",
    category: "Side Project",
    description: "Built semantic search and retrieval-augmented chat for a short-video organizer. Find saved reels and shorts by the places, recipes, and products they mention. Built for RevenueCat Shipathon 2025.",
    stats: "250+ users",
    stack: ["Flutter", "FastAPI", "GCP", "LLMs"],
    links: {
      live: "https://trott.hattimatimlabs.in",
      appStore: "https://apps.apple.com/in/app/trott/id6751728352",
      playStore: "https://play.google.com/store/apps/details?id=in.hattimatimlabs.trott&hl=en_IN",
      devpost: "https://devpost.com/software/trott"
    },
    video: "https://www.youtube.com/watch?v=VfxmRVMc1Q8",
    imagePrompt: "Pixelated mobile app interface map view with travel pins, dark mode, vibrant blue accents",
    designer: "Mrinmoyee Banerjee"
  },
  {
    id: 2,
    title: "Capywarz",
    category: "Game Dev",
    description: "Multiplayer game built solo in Unity in 30 days. Complete game loop with mechanics and progression.",
    stats: "Solo Dev",
    stack: ["Unity", "C#", "Game Networking"],
    links: {
      github: "https://github.com/doomSDey/Project-CP",
      article: "https://builder.aws.com/content/2rbgYlmzSHXfq8b4e86i62apzKf/capywarz-a-quirky-bullet-hell-adventure-in-the-human-heart?trk=db22a1cc-3925-4660-b03b-76ae662f8606&sc_channel=el",
      devpost: "https://devpost.com/software/capiwarz"
    },
    image: "/capywarz.png",
    imagePrompt: "2D top-down shooter game screenshot, pixel art capybara character, chaotic battlefield, retro console style"
  },
  {
    id: 3,
    title: "Distributed Label Pipeline",
    category: "Checko",
    description: "Built a distributed pipeline for product authentication labels with computer vision, two-stage human review, and cloud sync. Cut processing time for 10 million images from 1–4 days to 30 minutes.",
    stats: "10M images in 30 min",
    stack: ["Python", "FastAPI", "GCP Cloud Run", "PostgreSQL", "CV"],
    links: { private: true },
    image: "/pipeline.png",
    imagePrompt: "Abstract server rack data flow visualization, green code rain, wireframe globe, dithered monochromatic"
  },
  {
    id: 4,
    title: "Checko App",
    category: "Checko",
    description: "Scaled consumer apps to 100K+ downloads and 20K+ monthly active users across four countries.",
    stats: "100K+ Downloads",
    stack: ["Kotlin", "Android", "Firebase", "Optimization"],
    links: {
      appStore: "https://apps.apple.com/in/app/checko/id1582830516",
      playStore: "https://play.google.com/store/apps/details?id=co.transpacks.checko&hl=en_IN"
    },
    image: "/checko.png",
    imagePrompt: "Isometric pixel art smartphones showing app screens, network connections, global map background"
  }
];

interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location?: string;
  details?: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Methodic Labs (Deployly)",
    role: "Staff Engineer",
    period: "Sep 2026 – Present",
    details: [
      "Led architecture and delivery for **two AI systems** that reached daily client use in about **seven weeks**.",
      "Built a Twilio/LiveKit agent that confirms appointments for two pediatric therapy clinics and writes results back to Raintree. Added a deploy gate that blocks releases during live calls and **450+ backend tests**.",
      "Built a Next.js, PostgreSQL, and Claude platform that turns research briefs into questionnaires and Decipher survey XML, with deterministic logic checks and an **$8 model budget per study**.",
      "Built Anderson’s Salesforce Lightning intake for land trusts and deeds with sandbox-verified prefill. Backtested an AI validation prototype on **300 historical cases**.",
    ],
  },
  {
    company: "Checko (Transpacks Technologies Pvt Ltd)",
    role: "Founding Engineer",
    period: "Apr 2021 – Present",
    location: "Hyderabad, India",
    details: [
      "Built a product authentication platform handling **100M+ annual label uploads**. Cut processing time for 10 million images from 1–4 days to **30 minutes** with a distributed pipeline.",
      "Scaled consumer apps to **100K+ downloads** and **20K+ monthly active users** across four countries.",
      "Cut compute costs by **30%** and halved technology spend through autoscaling and usage-based policies. Helped raise gross margin by **5 percentage points**.",
      "Hired and mentored **eight engineers**. Increased deployment velocity **5×** with trunk-based CI/CD.",
    ]
  },
  {
    company: "Creed",
    role: "Staff Engineer",
    period: "Nov 2025 – Aug 2026",
    details: [
      "Architected a multi-provider LLM layer for chat, voice, and memory. Production logs show **~190K daily completions** and **~6K recovered** by automatic failover.",
      "Rebuilt a Celery and Vertex Gemini pipeline handling **~700K daily pushes**. Streamed inputs to prevent memory failures and gated stale chats to cut **~130K daily model requests** without reducing sends.",
      "Improved mem0 and pgvector retrieval to surface **24% more memories** in a 30-user sample. Cut worst-case conversation compaction from **44s to 0.5s** across 113 million messages.",
    ],
  },
  {
    company: "NCFlexE, IIT Kanpur",
    role: "Project Associate and Summer Intern",
    period: "Jun 2020 – Mar 2021",
    location: "Kanpur, India",
    details: [
      "Delivered **4+ R&D projects** across ML, automation, and backend.",
      "Built Android apps with **OpenCV, TensorFlow, and ML Kit**.",
      "Managed GCP/AWS services for datasets with **100K+ records**."
    ]
  },
  {
    company: "Boston Scientific",
    role: "Software Development Engineer Intern",
    period: "Jan 2020 – Jun 2020",
    location: "Gurugram, India",
    details: [
      "Developed internal web apps using PrimeFaces and ThingWorx.",
      "Integrated Windchill data via Swagger REST APIs."
    ]
  },
  {
    company: "The Sparks Foundation",
    role: "Project Intern",
    period: "May 2019 – Aug 2019",
  },
  {
    company: "Manipal Institute of Technology",
    role: "Summer Intern",
    period: "May 2019 – Aug 2019",
  },
  {
    company: "Startup Consulting",
    role: "Technical Consultant",
    period: "Ongoing",
    location: "US / Singapore / India",
    details: [
      "Consulting for startups ranging from **pre-seed to mid-sized** stages.",
      "Advising on **technical architecture, scalability**, and engineering practices for distributed teams.",
      "Helping founders navigate **0-to-1 engineering** challenges and MVP launches."
    ]
  },
];

export const TECH_STACK = {
  Languages: ["Python", "Kotlin", "TypeScript"],
  Backend: ["FastAPI", "Next.js", "Celery", "gRPC", "PostgreSQL", "pgvector", "MongoDB"],
  "AI and Voice": ["Claude", "Vertex AI", "LiveKit", "Twilio"],
  Cloud: ["GCP Cloud Run", "AWS", "Knative", "Docker"],
  DevOps: ["GitHub Actions", "Prometheus", "Grafana"],
  Mobile: ["React Native", "Android SDK", "Flutter", "Firebase"]
};

export const BLOG_POSTS = [
  {
    title: "The Most Expensive UPDATE Statement I’ve Ever Written",
    excerpt: "A Google Cloud Community postmortem on a PostgreSQL migration involving 350 million rows and what it taught me about updates, autovacuum, and Cloud SQL.",
    date: "May 20, 2026",
    readTime: "15 min read",
    tags: ["PostgreSQL", "Cloud SQL"],
    slug: "https://medium.com/google-cloud/the-most-expensive-update-statement-ive-ever-written-16b29876dadb",
  },
  {
    title: "How I Hired Myself Out of a Job (and Why You Should Too)",
    excerpt: "From solo developer to scaling a team that outperformed me — lessons in letting go, mentoring, and building systems that outlast you.",
    date: "Jul 7, 2025",
    readTime: "6 min read",
    tags: ["Leadership", "Startup"],
    slug: "https://medium.com/@sdptd20/how-i-hired-myself-out-of-a-job-and-why-you-should-too-9b33ea6841fb"
  },
  {
    title: "CapyWarz: A Quirky Bullet Hell Adventure in the Human Heart",
    excerpt: "A hackathon journey combining the love for capybaras, game development, and AWS tools to create a unique arcade shooter experience.",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    tags: ["Game Dev", "AWS"],
    slug: "https://builder.aws.com/content/2rbgYlmzSHXfq8b4e86i62apzKf/capywarz-a-quirky-bullet-hell-adventure-in-the-human-heart"
  },
  {
    title: "Setting Up Strapi on Google Cloud Run with Cloud SQL and GCP Bucket",
    excerpt: "Configuring Strapi V3/V4 on Google Cloud Run, intricately weaving in the capabilities of Cloud SQL and Cloud Bucket integration.",
    date: "Aug 21, 2023",
    readTime: "6 min read",
    tags: ["GCP", "Strapi"],
    slug: "https://medium.com/google-cloud/setting-up-strapi-on-google-cloud-run-with-cloud-sql-and-gcp-bucket-cda7fc5fc8b1"
  },
  {
    title: "Exploring Google Cloud API Gateway with Google Cloud Functions",
    excerpt: "Create a secure API Gateway that can handle params and form data (file uploads) and forward them to appropriate cloud functions.",
    date: "Sep 17, 2021",
    readTime: "5 min read",
    tags: ["GCP", "API Gateway"],
    slug: "https://medium.com/google-cloud/exploring-google-cloud-api-gateway-with-google-cloud-functions-ff56c1c96cc9"
  },
  {
    title: "Exploring OCR Capabilities of ML Kit using CameraX",
    excerpt: "Creating a full-blown OCR app using ML Kit and CameraX to decode text from a live stream for a specific cropped region.",
    date: "Jul 25, 2020",
    readTime: "4 min read",
    tags: ["Android", "ML Kit"],
    slug: "https://medium.com/@sdptd20/exploring-ocr-capabilities-of-ml-kit-using-camera-x-9949633af0fe"
  }
];

export const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sudipta-dey/", icon: "linkedin" },
  { name: "Twitter", href: "https://x.com/Doom_S_Dey", icon: "twitter" },
  { name: "GitHub", href: "https://github.com/doomSDey", icon: "github" },
  { name: "Medium", href: "https://medium.com/@sdptd20", icon: "globe" }
] as const;

export const CONTACT_INFO = {
  email: "dey.sudipta@outlook.in"
};
