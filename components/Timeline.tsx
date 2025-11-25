'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ExpandableSection from './ExpandableSection'

interface TimelineItem {
  year: string
  content: string
}

const timelineItems: TimelineItem[] = [
  {
    year: '1937: Frederick Terman Joins Stanford',
    content: "Professor Frederick Terman encouraged Stanford students to stay local and start companies. He helped them secure funding and space. His vision was simple: keep talent in the region, build companies, and create an ecosystem."
  },
  {
    year: '1939: Hewlett-Packard Founded',
    content: "Bill Hewlett and Dave Packard, Terman's students, founded HP in a Palo Alto garage with $538. Terman helped them secure their first contracts. HP became the foundation of Silicon Valley—proving that Stanford talent could build world-class companies locally."
  },
  {
    year: '1950s–1960s: The Cascade Begins',
    content: "HP's success attracted talent and capital. Fairchild Semiconductor was founded in 1957 by Stanford-connected engineers. Fairchild became the \"mother company\" of Silicon Valley, spinning out Intel (1968), AMD (1969), and dozens of other semiconductor firms. Each generation created the next."
  },
  {
    year: '1970s–1980s: Venture Capital Emerges',
    content: "Successful founders became investors. Fairchild and Intel alumni funded Apple (1976), Oracle (1977), and Sun Microsystems (1982). Risk capital concentrated in the region. The flywheel accelerated: ventures created capital, capital funded more ventures, density attracted talent."
  },
  {
    year: '1990s–2000s: Urbanization & Scale',
    content: "Silicon Valley became synonymous with innovation. Google (1998), PayPal (1998), Facebook (2004), and thousands of startups followed. The ecosystem became self-sustaining. Stanford research fed ventures, ventures scaled, successful exits created more capital, capital funded the next generation. San Francisco transformed from a regional city to a global innovation capital."
  }
]

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((el, index) => {
      if (!el) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set(prev).add(index))
            }
          })
        },
        { threshold: 0.2 }
      )

      observer.observe(el)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <div className="timeline" style={{ position: 'relative', paddingLeft: '50px', margin: '60px 0' }}>
      <div style={{ 
        position: 'absolute', 
        left: 0, 
        top: 0, 
        bottom: 0, 
        width: '4px', 
        background: 'linear-gradient(180deg, var(--accent), var(--accent-dark))', 
        borderRadius: '2px',
        boxShadow: '0 0 20px rgba(135, 206, 235, 0.3)'
      }}></div>
      {timelineItems.map((item, index) => (
        <motion.div
          key={index}
          ref={(el) => { itemRefs.current[index] = el }}
          initial={{ opacity: 0, x: -30 }}
          animate={visibleItems.has(index) ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
          style={{ position: 'relative', marginBottom: '48px' }}
        >
          <div style={{ 
            position: 'absolute', 
            left: '-57px', 
            top: '8px', 
            width: '16px', 
            height: '16px', 
            borderRadius: '50%', 
            background: 'var(--accent)', 
            border: '4px solid var(--bg)', 
            boxShadow: '0 0 0 2px var(--accent), 0 0 20px rgba(135, 206, 235, 0.5)',
            zIndex: 2
          }}></div>
          <ExpandableSection title={item.year} defaultExpanded={index === 0}>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '8px', color: '#e0e0e0' }}>{item.content}</p>
          </ExpandableSection>
        </motion.div>
      ))}
    </div>
  )
}
