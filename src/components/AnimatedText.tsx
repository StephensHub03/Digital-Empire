import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

// Separate component so useTransform is called at component top-level (Rules of Hooks)
const Word: React.FC<{
  word: string
  globalStart: number
  globalEnd: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}> = ({ word, globalStart, globalEnd, scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, [globalStart, globalEnd], [0.15, 1])

  return (
    <motion.span style={{ opacity, display: 'inline' }}>
      {word}
    </motion.span>
  )
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className, style }) => {
  const ref = useRef<HTMLParagraphElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = text.split(' ')
  const total = words.length

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <Word
            word={word}
            globalStart={i / total}
            globalEnd={(i + 1) / total}
            scrollYProgress={scrollYProgress}
          />
          {i < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </p>
  )
}

export default AnimatedText
