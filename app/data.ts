type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'HandTrackingML1',
    description:
      'Hand tracking implementation for Magic Leap 1. TODO: プロジェクト説明を補完',
    link: 'https://github.com/hideki5123/HandTrackingML1',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Test-UIElements',
    description: 'UI elements testing repository. TODO: プロジェクト説明を補完',
    link: 'https://github.com/hideki5123/Test-UIElements',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
  {
    name: 'GitAutoMaker',
    description: 'Automated Git workflow tool. TODO: プロジェクト説明を補完',
    link: 'https://github.com/hideki5123/GitAutoMaker',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project3',
  },
  {
    name: 'UnityTemplate',
    description: 'Unity project template. TODO: プロジェクト説明を補完',
    link: 'https://github.com/hideki5123/UnityTemplate',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project4',
  },
  {
    name: 'PlayCode',
    description: 'Code playground application. TODO: プロジェクト説明を補完',
    link: 'https://github.com/hideki5123/PlayCode',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project5',
  },
  {
    name: 'LookingGlass',
    description: 'Looking Glass display integration. TODO: プロジェクト説明を補完',
    link: 'https://github.com/hideki5123/LookingGlass',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project6',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'TELEXISTENCE Inc.',
    title: 'Senior VP & Software Engineer',
    start: '2020',
    end: 'Present',
    link: 'https://tx-inc.com/',
    id: 'work1',
  },
  {
    company: 'Synamon Inc.',
    title: 'Virtual Reality Software Engineer',
    start: '2018',
    end: '2020',
    link: 'https://synamon.com/',
    id: 'work2',
  },
  {
    company: 'Toyota Motor Corporation',
    title: 'Engineer, Prototype Department',
    start: '2017',
    end: '2018',
    link: 'https://global.toyota/',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/hideki5123',
  },
  {
    label: 'X',
    link: 'https://x.com/hideki5123',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/hideki-koike-01297114b/',
  },
  {
    label: 'YouTrust',
    link: 'https://youtrust.jp/users/f96ae6618c833b47125ab4ab86fa6472',
  },
]

export const EMAIL = 'hdkkik@gmail.com'

export const EDUCATION = {
  university: '東京理科大学',
  universityEn: 'Tokyo University of Science',
  degree: '電気電子情報工学科 学士',
  degreeEn: 'Bachelor of Electrical, Electronic and Information Engineering',
  period: '2011 - 2017',
}

export const SKILLS = [
  { name: 'C#', category: 'language' },
  { name: 'Unity', category: 'framework' },
  { name: 'Blazor', category: 'framework' },
  { name: 'Azure', category: 'cloud' },
  { name: 'VR/xR', category: 'technology' },
]
