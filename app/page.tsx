'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  EMAIL,
  SOCIAL_LINKS,
  EDUCATION,
  SKILLS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-lg sm:rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-3 py-1.5 sm:px-2.5 sm:py-1 text-xs sm:text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 min-h-[44px] sm:min-h-0"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-16 sm:space-y-20 lg:space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            C#、Unity、Blazor、Azureを活用したVR/xR開発を専門とするソフトウェアエンジニア。
            現在はTELEXISTENCE Inc.でSenior VPとしてAIロボットのVRオペレーションプラットフォーム開発に従事。
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-6 sm:mb-8 text-lg sm:text-xl font-semibold bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">Selected Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-50 p-[2px] transition-all duration-300 hover:shadow-2xl hover:shadow-zinc-200/50 dark:from-zinc-800 dark:to-zinc-900 dark:hover:shadow-zinc-800/50">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
                  
                  <div className="relative h-full overflow-hidden rounded-[14px] bg-white dark:bg-zinc-950">
                    {/* Video container with overlay */}
                    <div className="relative aspect-video overflow-hidden">
                      <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      
                      {/* Hover play icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                          <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <h4 className="mb-2 text-base sm:text-lg font-semibold text-zinc-900 transition-colors duration-200 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                        {project.name}
                      </h4>
                      <p className="mb-4 text-sm text-zinc-600 line-clamp-2 dark:text-zinc-400">
                        {project.description}
                      </p>
                      
                      {/* Tech stack tags (placeholder - you can add this to data) */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                          Unity
                        </span>
                        <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                          C#
                        </span>
                      </div>
                      
                      {/* View project link */}
                      <div className="flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors duration-200 group-hover:text-blue-600 dark:text-zinc-400 dark:group-hover:text-blue-400">
                        <span>View on GitHub</span>
                        <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
        
        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/hideki5123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-800 hover:shadow-lg dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            View All Projects
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-6 sm:mb-8 text-lg sm:text-xl font-semibold bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">Work Experience</h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-zinc-300 via-zinc-300 to-transparent dark:from-zinc-700 dark:via-zinc-700" />
          
          <div className="flex flex-col space-y-4 sm:space-y-6">
            {WORK_EXPERIENCE.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 h-4 w-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25 dark:shadow-blue-400/25" />
                <div className="absolute left-4 top-6 h-4 w-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 animate-ping opacity-30" />
                
                <Link
                  className="group relative ml-12 block overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100/50 p-[1px] transition-all duration-300 hover:shadow-xl hover:shadow-zinc-200/50 dark:from-zinc-800 dark:to-zinc-900/50 dark:hover:shadow-zinc-800/50"
                  href={`/work/${job.company.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                >
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-sm" />
                  
                  <div className="relative h-full w-full rounded-[15px] bg-white/90 p-4 sm:p-6 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/95 dark:bg-zinc-950/90 dark:group-hover:bg-zinc-950/95">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,var(--tw-gradient-stops))] from-blue-500 to-transparent" />
                    </div>
                    
                    <div className="relative flex w-full flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-semibold text-zinc-900 transition-colors duration-200 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                          {job.title}
                        </h4>
                        <p className="mt-1 text-sm sm:text-base font-medium text-zinc-600 dark:text-zinc-400">
                          {job.company}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                            {job.type || 'Full-time'}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            {job.location || 'Remote'}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-2">
                        <p className="text-sm sm:text-base font-medium text-zinc-600 dark:text-zinc-400">
                          {job.start} - {job.end}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-500">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">View details</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-4 sm:mb-5 text-base sm:text-lg font-medium">Education</h3>
        <div className="rounded-2xl bg-zinc-50/40 p-3 sm:p-4 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
          <h4 className="text-sm sm:text-base font-normal dark:text-zinc-100">
            {EDUCATION.university} ({EDUCATION.universityEn})
          </h4>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            {EDUCATION.degree}
          </p>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-500">
            {EDUCATION.period}
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-6 sm:mb-8 text-lg sm:text-xl font-semibold bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">Skills & Expertise</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, index) => {
            const proficiencyLevels: Record<string, number> = {
              'C#': 95,
              'Unity': 90,
              'Blazor': 85,
              'Azure': 80,
              'VR/xR': 92,
            };
            const proficiency = proficiencyLevels[skill.name] || 75;
            const categoryColors: Record<string, string> = {
              language: 'from-blue-500 to-cyan-500',
              framework: 'from-purple-500 to-pink-500',
              cloud: 'from-orange-500 to-red-500',
              technology: 'from-green-500 to-emerald-500',
            };
            const color = categoryColors[skill.category] || 'from-gray-500 to-gray-600';
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-zinc-900"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                
                {/* Skill header */}
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">
                      {skill.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold bg-gradient-to-r from-zinc-700 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-300 dark:to-zinc-100">
                      {proficiency}%
                    </span>
                  </div>
                </div>
                
                {/* Progress bar container */}
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                  {/* Animated progress bar */}
                  <motion.div
                    className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${proficiency}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_ease-in-out_infinite]" />
                  </motion.div>
                </div>
                
                {/* Hover effect - floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-2 left-2 h-1 w-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-150" />
                  <div className="absolute bottom-3 right-4 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-150" />
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Additional skills tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">Additional Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {['TypeScript', 'React', 'Next.js', '.NET', 'Docker', 'Kubernetes', 'Git', 'WebRTC'].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gradient-to-r from-zinc-100 to-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-all duration-200 hover:from-zinc-200 hover:to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 dark:text-zinc-300 dark:hover:from-zinc-700 dark:hover:to-zinc-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* TODO: ブログ記事を追加 */}
      {/* <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section> */}

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-4 sm:mb-5 text-base sm:text-lg font-medium">Connect</h3>
        <p className="mb-4 sm:mb-5 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
