'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Typewriter from './Typewriter'

export default function Hero() {
  const [showQuote, setShowQuote] = useState(false)
  const [quoteComplete, setQuoteComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowQuote(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const quote = "Here's to the crazy ones. The misfits. The rebels. The troublemakers."

  return (
    <header style={{ textAlign: 'center', marginBottom: '100px', paddingBottom: '60px', borderBottom: '2px solid var(--border)', position: 'relative' }}>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        style={{ 
          fontSize: '6rem', 
          fontWeight: 900, 
          letterSpacing: '-0.04em', 
          marginBottom: '24px', 
          lineHeight: 1,
          textTransform: 'uppercase'
        }}
      >
        Disrupt
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="subtitle"
        style={{ fontSize: '1.6rem', color: 'var(--subtle)' }}
      >
        Building the innovation ecosystem that keeps talent in St. Louis
      </motion.p>

      {showQuote && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mac-quote"
        >
          {quoteComplete ? (
            <span>{quote}</span>
          ) : (
            <Typewriter
              text={quote}
              speed={60}
              onComplete={() => setQuoteComplete(true)}
            />
          )}
        </motion.div>
      )}
    </header>
  )
}
