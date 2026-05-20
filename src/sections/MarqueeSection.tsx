import React, { useEffect, useRef, useState } from 'react'

const ALL_MEDIA = [
  '/11_compressed.mp4',
  '/22_compressed.mp4',
  '/33_compressed.mp4',
  '/44_compressed.mp4',
  '/55_compressed.mp4',
  '/66_compressed.mp4',
]

const ROW1 = ALL_MEDIA.slice(0, 3)
const ROW2 = ALL_MEDIA.slice(3)

const tripled = (arr: string[]) => [...arr, ...arr, ...arr]

const isVideo = (src: string) => /\.(mp4|mov|webm)$/i.test(src)

const MediaTile: React.FC<{ src: string }> = ({ src }) => {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="rounded-2xl object-contain flex-shrink-0 w-[280px] sm:w-[340px] md:w-[420px] h-[180px] sm:h-[220px] md:h-[270px]"
      />
    )
  }
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      className="rounded-2xl object-contain flex-shrink-0 w-[280px] sm:w-[340px] md:w-[420px] h-[180px] sm:h-[220px] md:h-[270px]"
    />
  )
}

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(200)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = window.scrollY + rect.top
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(raw)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* Row 1 — moves right */}
      <div
        className="flex gap-3 mb-3"
        style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
      >
        {tripled(ROW1).map((src, i) => (
          <MediaTile key={i} src={src} />
        ))}
      </div>

      {/* Row 2 — moves left */}
      <div
        className="flex gap-3"
        style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
      >
        {tripled(ROW2).map((src, i) => (
          <MediaTile key={i} src={src} />
        ))}
      </div>
    </section>
  )
}

export default MarqueeSection
