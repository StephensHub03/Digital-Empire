import React, { useEffect, useRef, useState } from 'react'

const ALL_MEDIA = [
  '/1.mp4',                                                                        // was space-voyage
  '/2.mov',                                                                        // was codenest
  '/3.mp4',                                                                        // was vex-ventures
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  '/4.mp4',                                                                        // was stellar-ai
  '/5.mp4',                                                                        // was xportfolio
  '/6.mp4',                                                                        // was orbit-web3
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

const ROW1 = ALL_MEDIA.slice(0, 11)
const ROW2 = ALL_MEDIA.slice(11)

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
        className="rounded-2xl object-cover flex-shrink-0"
        style={{ width: 420, height: 270 }}
      />
    )
  }
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      className="rounded-2xl object-cover flex-shrink-0"
      style={{ width: 420, height: 270 }}
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
