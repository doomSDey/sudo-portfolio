export const HERO_BG_IMAGE = "/hero-bg.png";

export const NAV_LINKS = [
  { name: 'Work', key: 'work' },
  { name: 'Experience', key: 'experience' },
  { name: 'Blog', key: 'blog' },
  { name: 'About', key: 'about' },
  { name: 'Contact', key: 'contact' },
] as const;

export const STATS = [
  "100M+ labels processed annually",
  "100K+ app downloads",
  "20K+ MAUs",
  "30% cost reduction",
  "5× deployment velocity",
  "8-engineer team built",
  "2 hackathon wins",
  "IIT Kanpur Incubated"
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
    id: 1,
    title: "Trott",
    category: "Side Project",
    description: "AI-powered app to organize saved reels, shorts & videos. Chat with your content, extract context (locations, recipes, product specs), and find anything with semantic search. Built for RevenueCat Shipathon 2025.",
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
    category: "Transpacks",
    description: "High-throughput image processing system for security labels. Ingests data from printers nationwide, runs CV checks + 2-stage human validation, and syncs to cloud. Processes 1 Cr images in 30 mins (previously 1-4 days).",
    stats: "1 Cr in 30 min",
    stack: ["Python", "FastAPI", "GCP Cloud Run", "PostgreSQL", "CV"],
    links: { private: true },
    image: "/pipeline.png",
    imagePrompt: "Abstract server rack data flow visualization, green code rain, wireframe globe, dithered monochromatic"
  },
  {
    id: 4,
    title: "Checko App",
    category: "Transpacks",
    description: "Cross-platform apps scaled to 100K+ downloads and 20K+ MAUs across 4 countries.",
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

export const EXPERIENCE = [
  {
    company: "Transpacks Technologies",
    role: "Founding Engineer",
    period: "Apr 2021 – Present",
    location: "Hyderabad, India",
    details: [
      "IIT Kanpur incubated startup building **patented 3D PUF anti-counterfeiting tech**; partnered with multiple printing partners including India Security Press.",
      "Led platform engineering from scratch, scaling to **100M+ label uploads/year** with **300% faster** turnaround.",
      "**Halved tech spend** and reduced compute costs **30%** via Knative autoscaling and Cloud Run spot instances.",
      "Scaled consumer apps to **100K+ downloads** and **20K+ MAUs** across 4 countries.",
      "Hired and mentored **8-engineer team**; implemented CI/CD increasing deployment velocity **5×**.",
      "Closed enterprise deals with **Godrej, Amazon, and Indian Oil** via technical pitches and ROI modeling."
    ]
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
  {
    company: "NCFlexE, IIT Kanpur",
    role: "Research Associate",
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
    role: "SDE Intern",
    period: "Jan 2020 – Jun 2020",
    location: "Gurugram, India",
    details: [
      "Developed internal web apps using PrimeFaces and ThingWorx.",
      "Integrated Windchill data via Swagger REST APIs."
    ]
  }
];

export const TECH_STACK = {
  Languages: ["Python", "Kotlin", "TypeScript"],
  Backend: ["FastAPI", "gRPC", "PostgreSQL", "MongoDB"],
  Cloud: ["GCP Cloud Run", "AWS", "Knative", "Docker"],
  DevOps: ["GitHub Actions", "Prometheus", "Grafana"],
  Mobile: ["Android SDK", "Flutter", "Firebase"]
};

export const BLOG_POSTS = [
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
