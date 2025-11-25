'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CTA() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="cta">
        <motion.a
          href="#apply"
          onClick={(e) => {
            e.preventDefault()
            setShowModal(true)
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.a>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 50,
              padding: '16px'
            }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--card-bg)',
                border: '3px solid var(--accent)',
                borderRadius: '16px',
                padding: '40px',
                maxWidth: '500px',
                width: '100%',
                boxShadow: '0 0 60px rgba(135, 206, 235, 0.3)'
              }}
            >
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '20px', color: 'var(--accent)' }}>Apply to Disrupt</h2>
              <p style={{ marginBottom: '32px', color: '#e0e0e0', fontSize: '1.1rem', lineHeight: 1.7 }}>
                We're excited you're interested in joining Disrupt! Please reach out to us at{' '}
                <a href="mailto:hello@disrupt.stl" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 700 }}>
                  hello@disrupt.stl
                </a>
                {' '}to learn more about our application process.
              </p>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  color: 'var(--accent)',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  border: '2px solid var(--accent)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent)'
                  e.currentTarget.style.color = '#000'
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(135, 206, 235, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--accent)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
