import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const LINKS = [
  {
    num: '01',
    label: 'LinkedIn',
    handle: 'linkedin.com/in/stephen-profile',
    url: 'https://www.linkedin.com/in/stephen-profile/',
  },
  {
    num: '02',
    label: 'GitHub',
    handle: 'github.com/StephensHub03',
    url: 'https://github.com/StephensHub03',
  },
  {
    num: '03',
    label: 'Gmail',
    handle: 'jeyastephen025@gmail.com',
    url: 'https://mail.google.com/mail/?view=cm&to=jeyastephen025@gmail.com',
  },
]

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-5 sm:px-8 md:px-12 lg:px-16 pt-16 pb-24"
      style={{ background: '#0C0C0C' }}
    >
      {/* GET IN TOUCH label */}
      <FadeIn delay={0} y={0}>
        <div className="flex items-center gap-2 mb-10 sm:mb-14">
          <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
          <span
            className="text-[#D7E2EA] font-medium uppercase tracking-[0.3em]"
            style={{ fontSize: 'clamp(0.7rem, 1.2vw, 1rem)' }}
          >
            Get in touch
          </span>
        </div>
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0.1} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3.5rem, 13vw, 160px)' }}
        >
          Let&apos;s<br />Connect
        </h2>
      </FadeIn>

      {/* Links list */}
      <div className="flex flex-col">
        {LINKS.map((item, i) => (
          <FadeIn key={item.num} delay={0.15 + i * 0.1} y={20}>
            <a
              href={item.url}
              target={item.url.startsWith('mailto') ? '_self' : '_blank'}
              rel={item.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="group flex items-center justify-between py-8 sm:py-10 border-b border-[#D7E2EA]/10
                hover:border-[#D7E2EA]/30 transition-colors duration-300"
            >
              {/* Left: number + label + handle */}
              <div className="flex items-start gap-6 sm:gap-10">
                <span
                  className="text-[#D7E2EA] font-light mt-1"
                  style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1rem)', opacity: 0.5 }}
                >
                  {item.num}
                </span>
                <div className="flex flex-col gap-1">
                  <span
                    className="text-[#D7E2EA] font-black uppercase leading-none"
                    style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-[#D7E2EA] font-light"
                    style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.1rem)', opacity: 0.5 }}
                  >
                    {item.handle}
                  </span>
                </div>
              </div>

              {/* Right: arrow icon */}
              <ArrowUpRight
                className="text-[#D7E2EA] flex-shrink-0 opacity-50 group-hover:opacity-100
                  group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                size={28}
              />
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default ContactSection
