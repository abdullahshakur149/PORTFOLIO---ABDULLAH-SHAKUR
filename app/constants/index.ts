export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Full Stack Engineer",
    icon: "/web.webp",
  },
  {
    title: "Software Engineer",
    icon: "/creator.webp",
  },
  {
    title: "Backend Developer",
    icon: "/backend.webp",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "/tech/html.webp",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.webp",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.webp",
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.webp",
  },
  {
    name: "React JS",
    icon: "/tech/reactjs.webp",
  },
  {
    name: "Next.JS",
    icon: "/tech/nextjs.svg",
  },
  {
    name: "Redux Toolkit",
    icon: "/tech/redux.webp",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwind.webp",
  },
  {
    name: "Bootstrap",
    icon: "/tech/bootstrap.webp",
  },
  {
    name: "Three JS",
    icon: "/tech/threejs.webp",
  },
  {
    name: "git",
    icon: "/tech/git.webp",
  },
  {
    name: "GitHub",
    icon: "/tech/github.webp",
  },
  {
    name: "figma",
    icon: "/tech/figma.webp",
  },
  {
    name: "Vercel",
    icon: "/tech/vercel.svg",
  },
  {
    name: "Netlify",
    icon: "/tech/netlify.webp",
  },
];

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "Product Box",
    icon: "/company/sparkbright.webp",
    iconBg: "#3B82F6",
    date: "Jul 2025 - Present",
    points: [
      "Engineered a real-time analytics dashboard for a US-based client using ClickHouse and GA4 APIs, visualizing 2+ years of historical data to provide actionable insights, increasing trial-to-paid conversions by 18%.",
      "Implemented AI-driven automation, including a time-critical email system and an upgraded AI chat agent, improving user engagement and retention across the platform's free trial period.",
      "Resolved critical full-stack bugs and developed scalable backend APIs to enhance system stability, ensuring seamless performance under concurrent user load and reducing downtime incidents.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Enchant",
    icon: "/company/sparkbright.webp",
    iconBg: "#3B82F6",
    date: "Mar 2024 - Jul 2025",
    points: [
      "Integrated UFH10E RFID Readers with ESP32 for an automated vehicle checkpoint system, reducing fuel monitoring errors and theft incidents in a truck yard by 25%.",
      "Architected a university matching platform for YB Consultants, providing personalized international university recommendations using CGPA, preferences, and AI-driven analytics, simplifying foreign admission processes for students.",
      "Developed a React Native mobile app with OpenAI integration to deliver real-time natural-language legal guidance, improving accessibility for users unfamiliar with legal terminology while ensuring secure backend data handling.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Pixtrum Agency",
    icon: "/company/avm.webp",
    iconBg: "#2563EB",
    date: "Jun 2023 - Mar 2024",
    points: [
      "Launched a SaaS-based Order Management platform with real-time updates, automated status tracking, and courier API integration, streamlining order operations and reducing manual effort by 40%.",
      "Built a full-stack architecture with Docker containerization, automated testing using Puppeteer and Selenium, and CI/CD pipelines, improving deployment consistency and system reliability across environments.",
      "Created a comprehensive employee management module and responsive UI using Next.js and Tailwind, enhancing role-based access control, administrative oversight, and user experience across desktop and mobile platforms.",
    ],
  },
  {
    title: "Web Engineer / Backend Developer",
    company_name: "Veevo Tech",
    icon: "/company/wtw.jpg",
    iconBg: "#1D4ED8",
    date: "Jun 2022 - May 2023",
    points: [
      "Developed a multi-portal School Management System with real-time course booking and Stripe payment integration, improving administrative efficiency and student experience.",
      "Constructed a Custom Apparel Builder with a 9-stage live customization workflow, delivering instant visual feedback and streamlining design-to-order processes for multiple product types.",
      "Built and tuned a Spam Email Classifier using SVM with Gaussian kernels and cross-validation, reducing false positives and enabling automated email filtering for client communications.",
    ],
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    name: "Abdullah Shakur",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/abdullah-shakur/",
  },
  {
    id: 2,
    testimonial:
      "Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
    name: "Abdullah Shakur",
    image: "/tech/github.webp",
    link: "https://github.com/abdullahshakur",
  },
  {
    id: 3,
    testimonial:
      "Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
    name: "Abdullah Shakur",
    image: "/socialmedia/behance.svg",
    link: "https://www.behance.net/abdullahshakur",
  },
  {
    id: 4,
    testimonial:
      "Also do check out my UI/UX Portfolio where I have shared by design studies.",
    name: "Abdullah Shakur",
    image: "/socialmedia/portfolio.svg",
    link: "https://abdullahshakur.netlify.app/",
  },
  {
    id: 5,
    testimonial:
      "Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
    name: "Abdullah Shakur",
    image: "/socialmedia/dribble.svg",
    link: "https://dribbble.com/abdullahshakur",
  },
];

const projects: {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  deploy_link: string;
  platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web";
}[] = [
  {
    name: "Roshna Haq - AI Legal Rights Guidance App",
    description:
      "Developed an AI-powered legal rights guidance application for Pakistan, designed to educate citizens on their basic rights in real time across all five provinces. The platform scrapes official government websites to provide accurate, region-specific legal information with emergency alert features and a verified lawyer directory. Successfully piloted with 200 users, demonstrating tangible social impact.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "orange-text-gradient",
      },
      {
        name: "web-scraping",
        color: "blue-text-gradient",
      },
    ],
    image: "/projectimg/sparkbright.png",
    source_code_link: "https://github.com/abdullahshakur/roshna-haq",
    platform: "Web",
    deploy_link: "https://roshna-haq.vercel.app/",
  },
  {
    name: "B'fest 2024 - Business Fest Web App",
    description:
      "Developed the B'fest 2024 Web App as IT Team Lead for Business Fest, implementing a full-stack solution with Next.js, Node.js, MongoDB, and Tailwind CSS, delivering a seamless event management platform with secure authentication and dynamic user interactions.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: "/projectimg/mern.png",
    source_code_link: "https://github.com/abdullahshakur/bfest-2024",
    platform: "Vercel",
    deploy_link: "https://bfest-2024.vercel.app/",
  },
  {
    name: "PARVENETTA - 2D Real Time Clothing Design App",
    description:
      "Built a bespoke t-shirt and hoodie design platform with fit/fabric selection, custom file uploads, Stripe payment integration, and dynamic measurement profiles, enhancing the end-to-end design-to-order user experience.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: "/projectimg/sparkbright.png",
    source_code_link: "https://github.com/abdullahshakur/parvenetta",
    platform: "Vercel",
    deploy_link: "https://parvenetta.vercel.app/",
  },
  {
    name: "ORTHORIC - Bacha Khan University of Dentistry",
    description:
      "Developed a healthcare management platform for Orthoric Bacha Khan University of Dentistry using Node.js, Express, MongoDB, EJS, and Bootstrap, featuring secure authentication, appointment scheduling, patient data management, and role-based access for supervisors, TMOs, and receptionists.",
    tags: [
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: "/projectimg/mern.png",
    source_code_link: "https://github.com/abdullahshakur/orthoric",
    platform: "Web",
    deploy_link: "https://orthoric.vercel.app/",
  },
  {
    name: "ENCHANT - Courier Management System",
    description:
      "Developed a courier management system with secure authentication, real-time order tracking, role-based access for admins and couriers, automated CRON job-based order processing with third-party API integrations (Trax, Postex, Daewoo), and scalable data storage for streamlined operations.",
    tags: [
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "cron-jobs",
        color: "blue-text-gradient",
      },
    ],
    image: "/projectimg/issuetracker.png",
    source_code_link: "https://github.com/abdullahshakur/enchant-cms",
    platform: "Web",
    deploy_link: "https://enchant-cms.vercel.app/",
  },
  {
    name: "SaaS Order Management Platform",
    description:
      "Built and launched a SaaS-based Order Management platform designed to streamline the order lifecycle for businesses, featuring real-time updates, automated status tracking, and seamless courier integrations. Developed using Next.js, Tailwind CSS, Node.js, and MongoDB with secure authentication and role-based access control.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "saas",
        color: "blue-text-gradient",
      },
    ],
    image: "/projectimg/avm.webp",
    source_code_link: "https://github.com/abdullahshakur/order-management",
    platform: "Vercel",
    deploy_link: "https://order-management.vercel.app/",
  },
];

const automationProjects: {
  name: string;
  category: "n8n" | "Vapi" | "Custom Agent";
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  deploy_link: string;
  platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web";
}[] = [
  {
    name: "Lead Capture → CRM Sync",
    category: "n8n",
    description:
      "An n8n workflow that receives new leads from a landing page via webhook, enriches them with company data, de-duplicates against existing records, then creates the contact in Airtable and posts an instant alert to a Slack sales channel — turning form submissions into actionable leads with zero manual entry.",
    tags: [
      { name: "n8n", color: "blue-text-gradient" },
      { name: "webhook", color: "green-text-gradient" },
      { name: "airtable", color: "orange-text-gradient" },
      { name: "slack", color: "blue-text-gradient" },
    ],
    image: "/projectimg/issuetracker.png",
    source_code_link: "https://github.com/abdullahshakur/n8n-lead-capture-sync",
    platform: "Web",
    deploy_link: "https://github.com/abdullahshakur/n8n-lead-capture-sync",
  },
  {
    name: "Daily AI News Digest",
    category: "n8n",
    description:
      "A scheduled n8n automation that pulls the day's top articles from multiple RSS feeds, summarizes each one with an OpenAI node, formats the highlights into a clean HTML layout, and emails a single digest every morning via Gmail — keeping the team current without the scroll.",
    tags: [
      { name: "n8n", color: "blue-text-gradient" },
      { name: "openai", color: "green-text-gradient" },
      { name: "rss", color: "orange-text-gradient" },
      { name: "gmail", color: "blue-text-gradient" },
    ],
    image: "/projectimg/metaverse.png",
    source_code_link: "https://github.com/abdullahshakur/n8n-ai-news-digest",
    platform: "Web",
    deploy_link: "https://github.com/abdullahshakur/n8n-ai-news-digest",
  },
  {
    name: "Invoice-to-Sheet Automation",
    category: "n8n",
    description:
      "An n8n workflow that watches a Gmail inbox for incoming invoices, extracts vendor, amount, and due date from PDF attachments, and appends each record to a Google Sheet while flagging anything over a set threshold for approval — replacing repetitive bookkeeping data entry.",
    tags: [
      { name: "n8n", color: "blue-text-gradient" },
      { name: "gmail", color: "green-text-gradient" },
      { name: "google-sheets", color: "orange-text-gradient" },
      { name: "ocr", color: "blue-text-gradient" },
    ],
    image: "/projectimg/hoobank.webp",
    source_code_link: "https://github.com/abdullahshakur/n8n-invoice-to-sheet",
    platform: "Web",
    deploy_link: "https://github.com/abdullahshakur/n8n-invoice-to-sheet",
  },
  {
    name: "Restaurant Reservation Voice Agent",
    category: "Vapi",
    description:
      "A Vapi voice assistant that answers inbound calls, checks table availability against a live calendar, books reservations, and confirms details by SMS. Natural-sounding conversation handles party size, timing, and special requests, freeing front-of-house staff from the phone during peak hours.",
    tags: [
      { name: "vapi", color: "blue-text-gradient" },
      { name: "voice-ai", color: "green-text-gradient" },
      { name: "twilio", color: "orange-text-gradient" },
      { name: "calendar", color: "blue-text-gradient" },
    ],
    image: "/projectimg/sparkbright.png",
    source_code_link: "https://github.com/abdullahshakur/vapi-reservation-agent",
    platform: "Web",
    deploy_link: "https://github.com/abdullahshakur/vapi-reservation-agent",
  },
  {
    name: "AI Appointment Reminder Caller",
    category: "Vapi",
    description:
      "A Vapi outbound calling agent that phones clients a day before their appointment, confirms or reschedules in natural language, and writes the outcome back to the booking system. Reduces no-shows by reaching people on a channel they actually answer, with every call logged automatically.",
    tags: [
      { name: "vapi", color: "blue-text-gradient" },
      { name: "voice-ai", color: "green-text-gradient" },
      { name: "outbound", color: "orange-text-gradient" },
      { name: "scheduling", color: "blue-text-gradient" },
    ],
    image: "/projectimg/avm.webp",
    source_code_link: "https://github.com/abdullahshakur/vapi-reminder-caller",
    platform: "Web",
    deploy_link: "https://github.com/abdullahshakur/vapi-reminder-caller",
  },
  {
    name: "Customer Support Triage Agent",
    category: "Custom Agent",
    description:
      "A custom LLM agent built with LangChain and the OpenAI API that reads incoming support tickets, classifies them by topic and urgency, drafts a suggested reply from a knowledge base, and routes escalations to the right team — cutting first-response time while keeping a human in the loop.",
    tags: [
      { name: "langchain", color: "blue-text-gradient" },
      { name: "openai", color: "green-text-gradient" },
      { name: "rag", color: "orange-text-gradient" },
      { name: "python", color: "blue-text-gradient" },
    ],
    image: "/projectimg/mern.png",
    source_code_link: "https://github.com/abdullahshakur/support-triage-agent",
    platform: "Web",
    deploy_link: "https://github.com/abdullahshakur/support-triage-agent",
  },
  {
    name: "Research Assistant Agent",
    category: "Custom Agent",
    description:
      "A tool-using AI agent that takes a research question, runs live web searches, reads and cross-checks the top sources, and returns a cited summary with key findings. Built on a function-calling loop with OpenAI, it turns open-ended questions into structured, source-backed briefs.",
    tags: [
      { name: "agents", color: "blue-text-gradient" },
      { name: "openai", color: "green-text-gradient" },
      { name: "web-search", color: "orange-text-gradient" },
      { name: "python", color: "blue-text-gradient" },
    ],
    image: "/projectimg/avm.webp",
    source_code_link: "https://github.com/abdullahshakur/research-assistant-agent",
    platform: "Web",
    deploy_link: "https://github.com/abdullahshakur/research-assistant-agent",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  automationProjects,
};
