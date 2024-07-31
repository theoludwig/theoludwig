export interface Skill {
  link: string
  image: string | { [key: string]: string }
}

export const SKILLS = {
  JavaScript: {
    link: "https://developer.mozilla.org/docs/Web/JavaScript",
    image: "/images/skills/JavaScript.webp",
  },
  TypeScript: {
    link: "https://www.typescriptlang.org/",
    image: "/images/skills/TypeScript.webp",
  },
  Python: {
    link: "https://www.python.org/",
    image: "/images/skills/Python.webp",
  },
  "C/C++": {
    link: "https://isocpp.org/",
    image: "/images/skills/C-Cpp.webp",
  },
  PHP: {
    link: "https://www.php.net/",
    image: "/images/skills/PHP.webp",
  },
  Laravel: {
    link: "https://laravel.com/",
    image: "/images/skills/Laravel.webp",
  },
  Dart: {
    link: "https://dart.dev/",
    image: "/images/skills/Dart.webp",
  },
  Flutter: {
    link: "https://flutter.dev/",
    image: "/images/skills/Flutter.webp",
  },
  HTML: {
    link: "https://developer.mozilla.org/docs/Web/HTML",
    image: "/images/skills/HTML.webp",
  },
  CSS: {
    link: "https://developer.mozilla.org/docs/Web/CSS",
    image: "/images/skills/CSS.webp",
  },
  "Tailwind CSS": {
    link: "https://tailwindcss.com/",
    image: "/images/skills/TailwindCSS.webp",
  },
  SASS: {
    link: "https://sass-lang.com/",
    image: "/images/skills/SASS.svg",
  },
  "React.js (+ Next.js)": {
    link: "https://reactjs.org/",
    image: "/images/skills/ReactJS.webp",
  },
  "Node.js": {
    link: "https://nodejs.org/",
    image: "/images/skills/NodeJS.webp",
  },
  Fastify: {
    link: "https://www.fastify.io/",
    image: {
      light: "/images/skills/Fastify-light.webp",
      dark: "/images/skills/Fastify-dark.webp",
    },
  },
  Prisma: {
    link: "https://www.prisma.io/",
    image: {
      light: "/images/skills/Prisma-light.webp",
      dark: "/images/skills/Prisma-dark.webp",
    },
  },
  PostgreSQL: {
    link: "https://www.postgresql.org/",
    image: "/images/skills/PostgreSQL.webp",
  },
  MySQL: {
    link: "https://www.mysql.com/",
    image: "/images/skills/MySQL.webp",
  },
  Strapi: {
    link: "https://strapi.io/",
    image: "/images/skills/Strapi.webp",
  },
  "Visual Studio Code": {
    link: "https://code.visualstudio.com/",
    image: "/images/skills/VisualStudioCode.webp",
  },
  Git: {
    link: "https://git-scm.com/",
    image: "/images/skills/Git.webp",
  },
  Ubuntu: {
    link: "https://ubuntu.com/",
    image: "/images/skills/Ubuntu.webp",
  },
  "Arch Linux": {
    link: "https://archlinux.org/",
    image: "/images/skills/ArchLinux.webp",
  },
  "GNU/Linux": {
    link: "https://www.gnu.org/",
    image: "/images/skills/GNU-Linux.webp",
  },
  Docker: {
    link: "https://www.docker.com/",
    image: "/images/skills/Docker.webp",
  },
} as const

export type SkillName = keyof typeof SKILLS

export const SKILL_CATEGORIES = [
  "programming-languages",
  "frontend",
  "backend",
  "software-tools",
] as const
export type SkillCategory = (typeof SKILL_CATEGORIES)[number]

export const SKILL_NAMES_BY_CATEGORY = {
  "programming-languages": ["TypeScript", "Python", "C/C++", "PHP"],
  frontend: ["HTML", "CSS", "Tailwind CSS", "React.js (+ Next.js)"],
  backend: ["Laravel", "Node.js", "Fastify", "PostgreSQL"],
  "software-tools": [
    "GNU/Linux",
    "Arch Linux",
    "Visual Studio Code",
    "Git",
    "Docker",
  ],
} as const satisfies {
  [key in SkillCategory]: SkillName[]
}
