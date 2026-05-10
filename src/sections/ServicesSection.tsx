import React from 'react'
import FadeIn from '../components/FadeIn'

const SERVICES = [
  {
    num: '01',
    name: 'AI Web Apps',
    desc: 'Building intelligent, scalable web applications powered by AI, automation, and modern full-stack technologies for real-world use cases.',
  },
  {
    num: '02',
    name: 'Frontend Development',
    desc: 'Creating fast, responsive, and modern user interfaces using React, Tailwind CSS, and interactive web technologies.',
  },
  {
    num: '03',
    name: 'Backend Development',
    desc: 'Developing secure and scalable backend systems with Node.js, Express.js, APIs, authentication, and server-side logic.',
  },
  {
    num: '04',
    name: 'Database Architecture',
    desc: 'Designing optimized MongoDB databases and cloud integrations that handle data efficiently and scale smoothly.',
  },
  {
    num: '05',
    name: 'AI & Automations',
    desc: 'Developing AI-driven tools, workflow automations, and smart systems that improve productivity and user experience.',
  },
]

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* Heading */}
      <FadeIn y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      {/* Service list */}
      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              {/* Number */}
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.num}
              </span>

              {/* Name + description */}
              <div className="flex flex-col justify-center gap-2 pt-2">
                <span
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </span>
                <span
                  className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {service.desc}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
