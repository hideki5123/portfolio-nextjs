'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center">
      <AnimatedBackground
        className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
        defaultValue={theme}
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.2,
        }}
        enableHover={false}
        onValueChange={(id) => {
          setTheme(id as string)
        }}
      >
        {THEMES_OPTIONS.map((theme) => {
          return (
            <button
              key={theme.id}
              className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
              type="button"
              aria-label={`Switch to ${theme.label} theme`}
              data-id={theme.id}
            >
              {theme.icon}
            </button>
          )
        })}
      </AnimatedBackground>
    </div>
  )
}

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-lg border-b border-zinc-100 dark:border-zinc-800">
      <div className="mx-auto w-full max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div>
            {/* TODO: ヘッドショット画像を準備・配置 */}
            <Link href="/" className="font-medium text-sm sm:text-base lg:text-lg text-black dark:text-white">
              小池 英貴 (Hideki Koike)
            </Link>
          </div>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}
