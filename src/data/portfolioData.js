import cvFile from "../assets/Hifza Bibi.pdf";
import investmentCalcImg from "../assets/investment.jpg";
import quranicCenterImg from "../assets/quranic center.jpg";
import uplawWebsiteImg from "../assets/uplaw.jpg";
import uplawAdminImg from "../assets/dashboard.jpg";
import passwordManagerImg from "../assets/password image.png";
import amazonWebImg from "../assets/amazon web.png";

export const profile = {
  name: "Hifza Jadoon",
  role: "Frontend Developer",
  bio: [
    "I am a passionate Frontend Developer specializing in React.js. I create beautiful, scalable and high-performance web applications with modern UI/UX principles and smooth interactions.",
    "My focus is on writing clean code, building interactive experiences and delivering visually stunning interfaces with smooth animations and performance optimization.",
  ],
  resume: cvFile,
  email: "hissijadoon@gmail.com",
  phone: "+92 3321536332",
  location: "Abbottabad, KPK Pakistan",
  socialLinks: {
    github: "https://github.com/Hifzabibi",
    linkedin: "https://www.linkedin.com/in/hifza-jadoon-28001b318",
    instagram: "https://instagram.com/",
  },
};

export const menuItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
   { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export const experience = [
  {
    id: "urraan",
    step: "01",
    title: "Intern",
    company: "Urraan (Codematics Inc, Abbottabad)",
    desc: "Completed internship program where I worked on React components, UI improvements and frontend development tasks using HTML, CSS and React.",
    from: "2025",
    to: "2025",
  },
  {
    id: "stem-wizards",
    step: "02",
    title: "Frontend Intern",
    company: "STEM Wizards Academia",
    desc: "Worked for 3 months using React, HTML and CSS. Built UI components and contributed to frontend tasks and small projects.",
    from: "Sep 2024",
    to: "Dec 2024",
  },
  {
    id: "robotics-world",
    step: "03",
    title: "Frontend Developer",
    company: "Robotics-World",
    desc: "Working on responsive UI, live web projects, dashboard development and API integrations for real-world applications.",
    from: "Nov 2025",
    to: "Present",
    current: true,
  },
];

export const projects = [
  { id: "01", title: "Investment Calculator", tag: "React App", image: investmentCalcImg, desc: "A smart investment calculator built with React for financial planning and growth tracking.", tech: ["React", "JavaScript", "CSS"], link: "https://github.com/Hifzabibi/Investment-calculator" },
  { id: "02", title: "Quranic Center Website", tag: "Frontend", image: quranicCenterImg, desc: "Modern Islamic learning website using React and Tailwind CSS with responsive UI.", tech: ["React", "Tailwind CSS"], link: "https://github.com/Hifzabibi/QuranicCenter-website" },
  { id: "03", title: "Uplaw Website", tag: "API Integration", image: uplawWebsiteImg, desc: "Law firm website with API integration, dynamic content, built using React & Tailwind.", tech: ["React", "Tailwind", "API"], link: "https://github.com/Hifzabibi/Uplaw-website" },
  { id: "04", title: "Uplaw Admin Dashboard", tag: "Dashboard", image: uplawAdminImg, desc: "Fully responsive admin dashboard built with React, Redux Toolkit, and reusable components.", tech: ["React", "Redux Toolkit", "Tailwind"], link: "https://github.com/Hifzabibi/uplaw-admin" },
  { id: "05", title: "Password Manager", tag: "Full Stack App", image: passwordManagerImg, desc: "A secure full-stack password manager to save, view and manage credentials, built with a React.js frontend and a Node.js + MongoDB backend.", tech: ["React", "Node.js", "MongoDB", "Express"], link: "https://github.com/Hifzabibi/Password-Manager-.git" },
  { id: "06", title: "Amazon Website", tag: "React App", image: amazonWebImg, desc: "A React.js based Amazon-style e-commerce UI clone featuring smooth animations and Lucide icons for a clean, modern shopping experience.", tech: ["React", "Framer Motion", "Lucide Icons"], link: "https://github.com/Hifzabibi/Amazon-Web.git" },
];

export const skills = {
  mainSkills: [
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", dark: true },
    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  ],
  otherSkills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Node.js", "Git", "GitHub", "VS Code", "REST APIs", "React Router", "React Hooks", "Responsive Design"],
};
