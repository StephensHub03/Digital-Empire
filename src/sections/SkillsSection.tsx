import React from 'react'
import FadeIn from '../components/FadeIn'

const SKILLS = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Three.js'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'JWT Auth'] },
  { category: 'Database', items: ['MongoDB', 'MySQL', 'Firebase', 'PostgreSQL', 'Redis'] },
  { category: 'AI & Tools', items: ['OpenAI API', 'AI Agent', 'Prompt Eng.', 'Automation', 'Postman'] },
  { category: 'DevOps', items: ['Git', 'GitHub', 'Vercel', 'Render', 'Railway'] },
  { category: 'Design', items: ['Light Room', 'Hypic', 'Filmora', 'Canva', 'CapCut'] },
]

const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="px-5 sm:px-8 md:px-12 lg:px-16 pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-32"
      style={{ background: '#0C0C0C' }}
    >
      {/* WHAT I WORK WITH label */}
      <FadeIn delay={0} y={0}>
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
          <span
            className="text-[#D7E2EA] font-medium uppercase tracking-[0.3em]"
            style={{ fontSize: 'clamp(0.65rem, 1.1vw, 0.9rem)' }}
          >
            What I work with
          </span>
        </div>
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0.1} y={40}>
        <h2
          className="font-black uppercase leading-none tracking-tight mb-4"
          style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
        >
          <span className="text-[#D7E2EA]">Skills &amp;</span>
          <br />
          <span style={{ color: '#F5C518' }}>Expertise</span>
        </h2>
      </FadeIn>

      {/* Decorative underline */}
      <FadeIn delay={0.2} y={0}>
        <div className="flex gap-1 mb-16 sm:mb-20 md:mb-24">
          <div className="h-[3px] w-10 rounded-full" style={{ background: '#F5C518' }} />
          <div className="h-[3px] w-6 rounded-full" style={{ background: '#7721B1' }} />
        </div>
      </FadeIn>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
        {SKILLS.map((group, i) => (
          <FadeIn key={group.category} delay={0.1 + i * 0.08} y={30}>
            <div className="flex flex-col gap-4">
              {/* Category label */}
              <span
                className="font-medium uppercase tracking-widest"
                style={{ color: '#F5C518', fontSize: 'clamp(0.65rem, 1vw, 0.85rem)' }}
              >
                {group.category}
              </span>
              {/* Items */}
              <ul className="flex flex-col gap-3">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-[#D7E2EA] font-medium border-b border-[#D7E2EA]/10 pb-3"
                    style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)' }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
