'use client';

import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

interface WorkDetailProps {
  title: string;
  children: ReactNode;
}

export default function WorkDetailFullWidth({ title, children }: WorkDetailProps) {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="work-detail-full-width min-h-screen bg-zinc-50 dark:bg-zinc-950 w-full overflow-x-hidden">
      {/* Modern hero section with gradient background */}
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90" />
        
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-400/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-400/30 via-transparent to-transparent" />
        </div>
        
        {/* Floating shapes animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-white/10 blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        {/* Parallax effect on scroll */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 drop-shadow-lg">
              {title}
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-4 text-white/90"
            >
              <span className="text-lg sm:text-xl">Experience</span>
              <span className="h-1 w-1 rounded-full bg-white/60" />
              <span className="text-lg sm:text-xl">Innovation</span>
              <span className="h-1 w-1 rounded-full bg-white/60" />
              <span className="text-lg sm:text-xl">Excellence</span>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Bottom wave shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="currentColor"
              className="text-zinc-50 dark:text-zinc-950"
              d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      </div>

      {/* Content section */}
      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16">
        {/* Floating navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sticky top-4 z-10 mb-8"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg rounded-full shadow-lg text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 group"
          >
            <svg 
              className="w-4 h-4 transition-transform group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Back to Home
          </Link>
        </motion.div>

        {/* Modern content container */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-6xl mx-auto"
        >
          <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16">
            {/* Background pattern */}
            <div className="absolute inset-0 rounded-3xl opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,var(--tw-gradient-stops))] from-blue-500 to-transparent" />
            </div>
            
            <div className="relative prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none
                          prose-headings:font-bold prose-headings:text-zinc-900 dark:prose-headings:text-zinc-100
                          prose-h2:text-2xl sm:prose-h2:text-3xl lg:prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:bg-gradient-to-r prose-h2:from-blue-600 prose-h2:to-purple-600 prose-h2:bg-clip-text prose-h2:text-transparent
                          prose-h3:text-xl sm:prose-h3:text-2xl lg:prose-h3:text-3xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-zinc-800 dark:prose-h3:text-zinc-200
                          prose-p:text-zinc-700 dark:prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:mb-4
                          prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline prose-a:relative prose-a:after:absolute prose-a:after:bottom-0 prose-a:after:left-0 prose-a:after:h-[1px] prose-a:after:w-full prose-a:after:origin-left prose-a:after:scale-x-0 prose-a:after:bg-blue-600 dark:prose-a:after:bg-blue-400 prose-a:after:transition-transform prose-a:hover:after:scale-x-100
                          prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100 prose-strong:font-semibold
                          prose-ul:list-none prose-ul:pl-0 prose-ul:space-y-3
                          prose-li:relative prose-li:pl-7 prose-li:text-zinc-700 dark:prose-li:text-zinc-300
                          prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-2 prose-li:before:h-1.5 prose-li:before:w-1.5 prose-li:before:rounded-full prose-li:before:bg-gradient-to-r prose-li:before:from-blue-500 prose-li:before:to-purple-500
                          prose-code:bg-zinc-100 dark:prose-code:bg-zinc-800 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-sm prose-code:font-medium
                          prose-pre:bg-zinc-900 dark:prose-pre:bg-zinc-950 prose-pre:rounded-xl prose-pre:shadow-lg
                          dark:prose-invert">
              {children}
            </div>
          </div>
        </motion.article>
        
        {/* Floating action buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="fixed bottom-8 right-8 flex flex-col gap-3"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Scroll to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </motion.div>
      </div>
    </main>
  );
}