import React from 'react'
import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'

const App: React.FC = () => {
  return (
    <div
      style={{
        background: '#0C0C0C',
        fontFamily: "'Kanit', sans-serif",
        overflowX: 'clip',
      }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default App
