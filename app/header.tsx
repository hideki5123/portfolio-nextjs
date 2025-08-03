'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        {/* TODO: ヘッドショット画像を準備・配置 */}
        <Link href="/" className="font-medium text-black dark:text-white">
          小池 英貴 (Hideki Koike)
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Senior VP & Software Engineer, VR/xR
        </TextEffect>
      </div>
    </header>
  )
}
