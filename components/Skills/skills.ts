export interface Skill {
  link: string
  image: string | { [key: string]: string }
}

export interface Skills {
  [key: string]: Skill
}

export const skills: Skills = {
  JavaScript: {
    link: 'https://developer.mozilla.org/docs/Web/JavaScript',
    image: '/images/skills/JavaScript.png'
  },
  TypeScript: {
    link: 'https://www.typescriptlang.org/',
    image: '/images/skills/TypeScript.png'
  },
  Python: {
    link: 'https://www.python.org/',
    image: '/images/skills/Python.png'
  },
  'C/C++': {
    link: 'https://isocpp.org/',
    image: '/images/skills/C-Cpp.png'
  },
  Dart: {
    link: 'https://dart.dev/',
    image: '/images/skills/Dart.png'
  },
  Flutter: {
    link: 'https://flutter.dev/',
    image: '/images/skills/Flutter.webp'
  },
  HTML: {
    link: 'https://developer.mozilla.org/docs/Web/HTML',
    image: '/images/skills/HTML.png'
  },
  CSS: {
    link: 'https://developer.mozilla.org/docs/Web/CSS',
    image: '/images/skills/CSS.png'
  },
  'Tailwind CSS': {
    link: 'https://tailwindcss.com/',
    image: '/images/skills/TailwindCSS.png'
  },
  SASS: {
    link: 'https://sass-lang.com/',
    image: '/images/skills/SASS.svg'
  },
  'React.js (+ Next.js)': {
    link: 'https://reactjs.org/',
    image: '/images/skills/ReactJS.png'
  },
  'Node.js': {
    link: 'https://nodejs.org/',
    image: '/images/skills/NodeJS.png'
  },
  Fastify: {
    link: 'https://www.fastify.io/',
    image: {
      light: '/images/skills/Fastify-light.png',
      dark: '/images/skills/Fastify-dark.png'
    }
  },
  Prisma: {
    link: 'https://www.prisma.io/',
    image: {
      light: '/images/skills/Prisma-light.png',
      dark: '/images/skills/Prisma-dark.png'
    }
  },
  PostgreSQL: {
    link: 'https://www.postgresql.org/',
    image: '/images/skills/PostgreSQL.png'
  },
  MySQL: {
    link: 'https://www.mysql.com/',
    image: '/images/skills/MySQL.png'
  },
  Strapi: {
    link: 'https://strapi.io/',
    image: '/images/skills/Strapi.png'
  },
  'Visual Studio Code': {
    link: 'https://code.visualstudio.com/',
    image: '/images/skills/Visual_Studio_Code.png'
  },
  Git: {
    link: 'https://git-scm.com/',
    image: '/images/skills/Git.png'
  },
  Hyper: {
    link: 'https://hyper.is/',
    image: '/images/skills/Hyper.svg'
  },
  Ubuntu: {
    link: 'https://ubuntu.com/',
    image: '/images/skills/Ubuntu.png'
  },
  'GNU/Linux': {
    link: 'https://www.gnu.org/',
    image: '/images/skills/GNU-Linux.png'
  },
  Docker: {
    link: 'https://www.docker.com/',
    image: '/images/skills/Docker.png'
  }
} as const
