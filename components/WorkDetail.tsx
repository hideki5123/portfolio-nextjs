'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface WorkDetailProps {
  title: string;
  children: ReactNode;
}

export default function WorkDetail({ title, children }: WorkDetailProps) {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8"
        >
          <svg 
            className="w-4 h-4" 
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

        <article className="prose prose-lg dark:prose-invert mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {title}
            </h1>
          </div>
          
          <div className="prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100
                          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                          prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                          prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline prose-a:hover:underline
                          prose-strong:text-gray-900 dark:prose-strong:text-gray-100
                          prose-ul:list-disc prose-ul:pl-5
                          prose-li:text-gray-700 dark:prose-li:text-gray-300
                          prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                          prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800">
            {children}
          </div>
        </article>
      </div>
    </main>
  );
}