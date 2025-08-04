import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'
import Image from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure className="my-8">
          <div className="relative w-full aspect-video">
            <Image 
              src={src} 
              alt={alt} 
              fill
              className="rounded-lg sm:rounded-xl object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
              priority={false}
              loading="lazy"
            />
          </div>
          <figcaption className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">{caption}</figcaption>
        </figure>
      )
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
    img: ({ src, alt, ...props }: ComponentPropsWithoutRef<'img'>) => {
      if (!src) return null;
      return (
        <span className="block my-8">
          <Image
            src={src}
            alt={alt || ''}
            width={800}
            height={400}
            className="rounded-md sm:rounded-lg w-full h-auto"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
            loading="lazy"
          />
        </span>
      )
    },
  }
}
