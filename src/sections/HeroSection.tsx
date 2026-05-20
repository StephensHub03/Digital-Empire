import React from 'react'
import { motion } from 'framer-motion'
import Magnet from '../components/Magnet'

const fadeIn = (delay: number, y = 0, x = 0) => ({
  initial: { opacity: 0, y, x },
  animate: { opacity: 1, y: 0, x: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
})

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip', background: '#0C0C0C' }}
    >
      {/* Navbar */}
      <motion.nav
        {...fadeIn(0, -20)}
        className="flex justify-between items-center px-4 sm:px-6 md:px-10 pt-6 md:pt-8 gap-2"
      >
        {['About', 'Services', 'Projects', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider
              text-[0.65rem] sm:text-sm md:text-lg lg:text-[1.4rem]
              transition-opacity duration-200 hover:opacity-70 cursor-pointer
              py-2 px-1 sm:px-2"
          >
            {link}
          </a>
        ))}
      </motion.nav>

      {/* Hero Heading */}
      <div className="overflow-hidden">
        <motion.h1
          {...fadeIn(0.15, 40)}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full
            text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]
            mt-6 sm:mt-4 md:-mt-5"
        >
          i&apos;m stephen
        </motion.h1>
      </div>

      {/* Portrait — centered absolutely */}
      <motion.div
        {...fadeIn(0.6, 30)}
        className="absolute left-1/2 -translate-x-1/2 z-10
          top-[40%] -translate-y-1/2
          sm:top-auto sm:translate-y-0 sm:bottom-[8%]"
      >
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <img
            src="IMG_removebg.png"
            alt="Jack portrait"
            className="w-[160px] sm:w-[220px] md:w-[280px] lg:w-[340px] object-contain"
            draggable={false}
          />
        </Magnet>
      </motion.div>

      {/* Bottom bar */}
      <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 px-4 sm:px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        {/* Left text */}
        <motion.p
          {...fadeIn(0.35, 20)}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
            max-w-[140px] sm:max-w-[220px] md:max-w-[350px] lg:max-w-none lg:whitespace-nowrap"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          Code. Connect. Create. — Full Stack with AI.
        </motion.p>

        {/* Resume button */}
        <motion.div {...fadeIn(0.5, 20)}>
          <a
            href="https://drive.google.com/file/d/1JkD2uBJ_lZssJ7izu8TqxHA4OVCsEJZG/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
              outline: '2px solid white',
              outlineOffset: '-3px',
            }}
            className="rounded-full text-white font-medium uppercase tracking-widest
              px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
              text-xs sm:text-sm md:text-base
              transition-opacity duration-200 hover:opacity-90 whitespace-nowrap inline-block"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
