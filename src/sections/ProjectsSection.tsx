import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'

const PROJECTS = [
  {
    num: '01',
    category: 'API',
    name: 'Movie Hub',
    url: 'https://netflix-clone-omega-six-62.vercel.app/',
    col1img1: '/project1.png',
    col1img2: '/project2.png',
    col2img: '/project3.jpeg',
  },
  {
    num: '02',
    category: 'Frontend',
    name: 'Udemy Clone',
    url: 'https://stephenshub03.github.io/udemy_clone/',
    col1img1:
      '/proimg1.png',
    col1img2:
      '/proimg2.png',
    col2img:
      '/proimg3.png',
  },
  {
    num: '03',
    category: 'Automation',
    name: 'Certificate Generator',
    url: 'https://certificate-generator-mu-coral.vercel.app',
    col1img1:
      '/cer2.png',
    col1img2:
      '/cer3.png',
    col2img:
      '/cer1.png',
  },
]

const TOTAL = PROJECTS.length

interface ProjectCardProps {
  project: (typeof PROJECTS)[0]
  index: number
  totalCards: number
  containerProgress: ReturnType<typeof useScroll>['scrollYProgress']
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  containerProgress,
}) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const rangeStart = index / totalCards
  const rangeEnd = 1

  const scale = useTransform(containerProgress, [rangeStart, rangeEnd], [1, targetScale])

  return (
    <div
      className="sticky top-24 md:top-32 h-[85vh] flex items-start"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.div
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
          border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
        style={{
          background: '#0C0C0C',
          scale,
          transformOrigin: 'top center',
          height: '85vh',
          overflow: 'hidden',
        }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-4 md:gap-8">
            {/* Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
            >
              {project.num}
            </span>
            {/* Category + name */}
            <div className="flex flex-col">
              <span
                className="text-[#D7E2EA] font-light uppercase tracking-widest"
                style={{ fontSize: 'clamp(0.65rem, 1.2vw, 1rem)', opacity: 0.6 }}
              >
                {project.category}
              </span>
              <span
                className="text-[#D7E2EA] font-medium uppercase tracking-wide"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 2.2rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton url={project.url} />
        </div>

        {/* Image grid */}
        <div className="flex gap-3 sm:gap-4 h-[calc(100%-100px)]">
          {/* Left column — 40% */}
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <img
              src={project.col1img1}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1img2}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex-1"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          {/* Right column — 60% */}
          <div style={{ width: '60%' }}>
            <img
              src={project.col2img}
              alt={`${project.name} preview 3`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 z-10 relative
        px-5 sm:px-8 md:px-10 pt-20 pb-32"
      style={{ background: '#0C0C0C' }}
    >
      {/* Heading */}
      <FadeIn y={40} className="mb-16 sm:mb-20 md:mb-28">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      {/* Stacking cards container */}
      <div ref={containerRef} style={{ height: `${TOTAL * 85}vh` }}>
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            totalCards={TOTAL}
            containerProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
