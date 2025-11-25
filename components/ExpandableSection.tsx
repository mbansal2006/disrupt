'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ExpandableSectionProps {
  title: string
  children: React.ReactNode
  defaultExpanded?: boolean
}

export default function ExpandableSection({ title, children, defaultExpanded = false }: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          width: '100%',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 24px',
          background: 'var(--card-bg)',
          border: '2px solid var(--border)',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          color: 'var(--text)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--card-hover)'
          e.currentTarget.style.borderColor = 'var(--accent)'
          e.currentTarget.style.boxShadow = '0 8px 40px rgba(135, 206, 235, 0.2), 0 0 0 1px rgba(135, 206, 235, 0.1)'
          e.currentTarget.style.transform = 'translateX(8px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--card-bg)'
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'
          e.currentTarget.style.transform = 'translateX(0)'
        }}
        aria-expanded={isExpanded}
      >
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0, color: isExpanded ? 'var(--accent)' : 'var(--text)' }}>{title}</h3>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ fontSize: '1.4rem', color: 'var(--accent)' }}
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '24px 24px 8px 24px', background: 'var(--card-bg)' }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
