import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  // { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "SHUBHAM PANCHARAS",
  role: "Full Stack Developer",
  subheading:
    "With 3 years of experience in front-end and full-stack development, I specialize in creating efficient, scalable web applications and am actively seeking exciting new opportunities.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "RS Motor's landing page",
    description:
      "A responsive RS Motors Landing Page that allows users to book a test ride and schedule bike servicing online. The page is designed for Vespa bike models, providing a seamless booking experience.",
    techStack: ["HTML", "CSS", "Javascript", "MongoDB"],
    imgSrc: project1,
    link: "https://rsmotors.vercel.app",
  },
  {
    id: 2,
    title: "Social Media App",
    description:
      "A real-time social media app with chat, notifications, and a customizable profile page. Built with React, Firebase, and Redux for state management.",
    techStack: ["React", "Firebase", "Redux"],
    imgSrc: project2,
    link: "https://example-socialapp.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["Next.js", "Tailwind CSS"],
    imgSrc: project3,
    link: "https://myportfolio.com",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blogging platform with a content management system, user authentication, and an intuitive editor.",
    techStack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    imgSrc: project4,
    link: "https://example-blogplatform.com",
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "A task management tool with user authentication, reminders, and collaboration features.",
    techStack: ["Angular", "Firebase", "Material UI"],
    imgSrc: project5,
    link: "https://example-taskapp.com",
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
    imgSrc: project6,
    link: "https://example-learningplatform.com",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "GraphQL",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2024 - Present",
    role: "Full Stack Developer",
    company: "Freelancer",
    description:
      "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
    techStack: ["Javascript", "React.js", "Next.js", "MongoDB"],
  },
  {
    yearRange: "2023 - 2024",
    role: "Front-end Developer",
    company: "Freelancer",
    description:
      "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
    techStack: ["HTML", "CSS", "Vue.js", "MySQL"],
  },
  {
    yearRange: "2022 - 2023",
    role: "Front-end Developer",
    company: "Freelancer",
    description:
      "Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.",
    techStack: ["JS", "React", "Three.js", "Postgres"],
  },
  // {
  //   yearRange: "2020 - 2021",
  //   role: "Front-end Developer",
  //   company: "Freelancer",
  //   description:
  //     "Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.",
  //   techStack: ["HTML", "CSS", "Javascript", "Motion"],
  // },
];

// export const EDUCATION = [
//   {
//     id: 1,
//     degree: "Bachelor of Science in Computer Science",
//     institution: "Pune University",
//     duration: "2018 - 2020",
//     description:
//       "Graduated with honors in Computer Science, focusing on algorithms, data structures, and web development. Completed a capstone project on Student Discussion Forum.",
//   },
// ];

export const TESTIMONIAL = {
  name: "Rohit patekar",
  title: "CEO, RS Motor's",
  quote:
    "Working with Shubham was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};
