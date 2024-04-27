import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Aimen Hamed",
  initials: "AH",
  location: "Sydney, Australia",
  locationLink: "https://www.google.com/maps/place/Sydney",
  about:
    "Full Stack Engineer focused on building products and solutions with extra attention to details",
  summary:
    "As a Full Stack Engineer, I have successfully contributed and taken multiple products from 0 to 1. I work with teams effectively, contributing to an environment where people do their best work. Currently, I work mostly with TypeScript, React, Node.js, Java and GraphQL. I have over 3 years of experience in building and designing solutions in various project.",
  avatarUrl: "https://avatars.githubusercontent.com/u/66828989?v=4",
  personalWebsiteUrl: "https://aimenhamed.vercel.app",
  contact: {
    email: "aimenhamedwork@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aimenhamed",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://au.linkedin.com/in/aimen-hamed",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of New South Wales",
      degree: "Bachelor's Degree in Computer Science (BSc)",
      start: "2020",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Atlassian",
      link: "https://atlassian.com",
      badges: ["Full Stack", "Jira", "AI"],
      title: "Software Engineer",
      start: "2024",
      end: "",
      description:
        "Implementing new AI features for Jira, whilst iterating and maintaining the Jira issue view.",
    },
    {
      company: "Zip",
      link: "https://zip.co",
      badges: ["DevOps"],
      title: "Software Engineer (Platform)",
      start: "2023",
      end: "2024",
      description:
        "Managed Kubernetes runtime and CI/CD pipelines for developers, introducing automation allowing devs to interface into platform components with security in mind. Designed and implemented solutions for cloud cost savings, service ownership and Docker image security.",
    },
    {
      company: "Atlassian",
      link: "https://atlassian.com",
      badges: ["Full Stack", "Reliability"],
      title: "Site Reliability Engineer Intern",
      start: "2022",
      end: "2023",
      description:
        "Built send comms portal where every incident at Atlassian goes through to notify service owners and relevant parties about incidents.",
    },
    {
      company: "Optus",
      link: "https://optus.com.au/",
      badges: ["Full Stack", "DevOps"],
      title: "Product Engineer Intern → Junior Software Engineer",
      start: "2021",
      end: "2022",
      description:
        "Built and iterated on features for MyOptus app products such as Optus Pause and Optus Eco. Contributed to managing deployments, environments and code infrastructure.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Java",
    "Go",
    "Python",
    "React/Next.js",
    "Node.js",
    "AWS",
    "Kubernetes",
    "Terraform",
  ],
  projects: [
    {
      title: "Unilectives",
      techStack: [
        "CSESoc Projects Director",
        "TypeScript",
        "Node.js",
        "Next.js",
      ],
      description: "Your one-stop shop for UNSW course and elective reviews.",
      link: {
        label: "unilectives",
        href: "https://unilectives.csesoc.app/",
      },
    },
    {
      title: "WatchTime",
      techStack: ["Side project", "TypeScript", "React", "Next.js"],
      description:
        "A centralised movie library to search any movie and see it's ratings and overview.",
      link: {
        label: "watchtime",
        href: "https://watchtime-chi.vercel.app/",
      },
    },
    {
      title: "pj",
      techStack: ["Side project", "Rust", "CLI"],
      description:
        "Developer project manager CLI tool to manage frequently accessed directories.",
      link: {
        label: "pj",
        href: "https://github.com/aimenhamed/pj",
      },
    },
    {
      title: "lss",
      techStack: ["Side project", "Rust", "CLI"],
      description: "A pretty format list CLI tool written in Rust",
      link: {
        label: "lss",
        href: "https://github.com/aimenhamed/lss",
      },
    },
    {
      title: "reqme",
      techStack: ["Side project", "npm package", "TypeScript", "Node.js"],
      description:
        "A tool used to test your APIs locally using a simple interface, config stored as code.",
      link: {
        label: "reqme",
        href: "https://www.npmjs.com/package/reqme",
      },
    },
  ],
} as const;
