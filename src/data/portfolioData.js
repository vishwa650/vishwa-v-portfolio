// ============================================================
// portfolioData.js — Vishwa V Portfolio Content
// This file controls all the text, links, and data for the website.
// ============================================================

export const personalInfo = {
  name: "Vishwa V",
  firstName: "Vishwa V",
  brandName: "Vishwa V", // shown in the preloader, navbar and footer
  title: "Data Analyst",
  location: "Kuppam, India",
  phone: "7207454414",
  emails: {
    primary: "vishwavadivelu@gmail.com",
    secondary: "",
  },
  summary:
    "B.Sc. Computer Science graduate with a strong foundation in Python, SQL, Excel, Power BI, and data analysis libraries including Pandas and NumPy. Currently pursuing a Data Analytics program at TAP Academy, with an interest in transforming data into meaningful insights and visualizations. Seeking to develop practical expertise in data cleaning, analysis, reporting, and dashboard development while building a career in Data Analytics.",
  resumeUrl: "/Vishwa_Data_Analyst_Resume.pdf", // located inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/vishwa650",
  linkedin: "https://linkedin.com/in/vishwa-v-888047330",
  instagram: "https://www.instagram.com/vishwa_650_",
};

export const heroContent = {
  greeting: "Hi, I'm Vishwa V",
  titleHighlight: "Data Analyst",
  subtitle:
    "Uncovering business trends, cleaning complex data, and building impactful dashboards to power data-driven decisions.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:vishwavadivelu@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Vishwa_Data_Analyst_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML)
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Vishwa V</span>, a Data Analyst based in Kuppam, India. I am a Computer Science graduate passionate about turning raw datasets into actionable business intelligence using Python, SQL, and Power BI. Currently sharpening my skills through the placement training program at TAP Academy, I focus on data cleaning, exploratory analysis, and building intuitive visual reports to help organizations make confident, data-backed decisions.`,
  techStack: ["Python", "SQL", "Power BI", "Excel", "Pandas", "NumPy"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description:
    "A structured analytical approach to data collection, cleaning, visualization, and strategic reporting.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Understanding business objectives, defining key performance indicators, and researching relevant data requirements.",
    },
    {
      number: "02",
      title: "Design",
      text: "Structuring data models, mapping relational schemas, and planning intuitive dashboard layouts.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Ingesting, cleaning, and transforming datasets using Python, Pandas, and SQL queries.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Publishing interactive Power BI reports and automated dashboards ready for stakeholders.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming & Data Analysis",
      skills: [{ name: "Python" }, { name: "Pandas" }, { name: "NumPy" }],
    },
    {
      title: "Database & Querying",
      skills: [{ name: "SQL" }],
    },
    {
      title: "Data Visualization",
      skills: [{ name: "Power BI" }, { name: "Matplotlib" }, { name: "Seaborn" }],
    },
    {
      title: "Spreadsheet & Reporting",
      skills: [{ name: "Microsoft Excel" }],
    },
  ],
};

export const leadershipList = [
  {
    title: "Technical Seminar & Symposium",
    description: "Coordinated technical seminars and peer learning sessions at Emeralds Degree College.",
    role: "Student Coordinator",
    badge: "College Leadership",
  },
];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Data Analytics Trainee",
    duration: "2024 - Present",
    skills: ["Data Cleaning", "Dashboard Development", "Exploratory Data Analysis"],
    tech: ["Python", "SQL", "Power BI", "Microsoft Excel"],
  },
];

export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Working effectively with cross-functional team members to achieve shared analytical objectives.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Translating complex analytical findings and dashboard metrics into clear takeaways for non-technical stakeholders.",
  },
  {
    name: "Adaptability",
    icon: "🔄",
    desc: "Rapidly learning new data tools, analytical libraries, and shifting business problem statements.",
  },
  {
    name: "Time Management",
    icon: "⏱️",
    desc: "Prioritizing multiple data deliverables and analysis pipelines to meet deadlines efficiently.",
  },
];

export const projects = [
  {
    id: "project-one",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Online Food Ordering System",
    description:
      "Developed a web-based online food ordering system, focusing on frontend development and enhancing user interaction while providing proactive user support.",
    techTags: ["HTML", "CSS", "JavaScript", "Frontend Development"],
    links: { github: "https://github.com/vishwa650", demo: "" },
    isFlagship: true,
  },
  {
    id: "project-two",
    number: "02",
    badge: null,
    title: "Sales Performance & Customer Insights Dashboard",
    description:
      "Designed an interactive Power BI dashboard analyzing sales trends, regional revenue, and customer segments to highlight key growth opportunities.",
    techTags: ["Power BI", "Microsoft Excel", "SQL", "Data Modeling"],
    links: { github: "https://github.com/vishwa650", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [{ name: "Data Analytics Program", issuer: "TAP Academy", icon: "🏅" }],
  viewAllUrl: "https://linkedin.com/in/vishwa-v-888047330",
};

export const education = {
  degree: "B.Sc. Computer Science",
  institution: "Emeralds Degree College",
  cgpa: "2023 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Data Analyst", "Python · SQL · Power BI · Excel", "Turning Data into Clear Business Decisions"],
  credential: "B.Sc. Computer Science",
  copyright: `© ${new Date().getFullYear()} Vishwa V | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
