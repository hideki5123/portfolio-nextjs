'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface WorkDetailProps {
  title: string;
  children: ReactNode;
}

export default function WorkDetailFullWidth({ title, children }: WorkDetailProps) {
  const pathname = usePathname();

  return (
    <main className="work-detail-full-width min-h-screen bg-white dark:bg-gray-950 w-full">
      {/* Full width container with minimal padding for smaller screens, no padding on large screens */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6 sm:mb-8 group"
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

        {/* Full width article */}
        <article className="w-full prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none">
          <div className="mb-8 sm:mb-12 border-b-2 border-gray-200 dark:border-gray-700 pb-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {title}
            </h1>
          </div>
          
          <div className="prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100
                          prose-h2:text-2xl sm:prose-h2:text-3xl lg:prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-2
                          prose-h3:text-xl sm:prose-h3:text-2xl lg:prose-h3:text-3xl prose-h3:mt-8 prose-h3:mb-4
                          prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                          prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline prose-a:hover:underline
                          prose-strong:text-gray-900 dark:prose-strong:text-gray-100
                          prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-8 prose-ul:space-y-2
                          prose-li:text-gray-700 dark:prose-li:text-gray-300
                          prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                          prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800
                          dark:prose-invert
                          max-w-none">
            {children}
          </div>
        </article>
      </div>
    </main>
  );
}