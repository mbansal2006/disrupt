'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import VisionCard from '@/components/VisionCard'
import CTA from '@/components/CTA'

export default function Home() {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="container">
      <Hero />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="illustration"
      >
        <div className="video-wrapper">
          <video
            ref={videoRef}
            src="/getaway.mov"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="hero-video"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
              objectFit: 'contain'
            }}
          />
          <button
            onClick={toggleMute}
            className="unmute-button"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" fill="currentColor"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" fill="currentColor"/>
              </svg>
            )}
          </button>
        </div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2>The Problem</h2>
        <p>
          In 1904, St. Louis was booming. The World's Fair brought global attention. WashU built Francis Field and the Brookings Quadrangle to host the Olympics. The city was at the center of the old economy -- thriving with industry, culture, and ambition.
        </p>
        <p>
          <span className="highlight">This is a stark contrast to today.</span> While WashU has skyrocketed from a regional "streetcar college" to a world-leading research institution, the city itself hasn't shared in that success. There's no gravitational pull keeping talent here.
        </p>
        <div className="quote">
          "How do I get out of St. Louis and into San Francisco, New York, or Boston?"<br />
          — Every ambitious WashU senior
        </div>
        <p>
          The brain drain is real and devastating. Sam Altman, Jack Dorsey, Jim McKelvey, early Facebook employees, Salesforce co-founders—they all started in St. Louis and left to build elsewhere. <span className="highlight">WashU continues to rise while St. Louis declines.</span>
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2>The Pattern: Research → Ventures → Risk Capital → Economic Development</h2>
        <p>Economic development doesn't happen by accident. It follows a pattern. The clearest example is Stanford and Silicon Valley:</p>
        <Timeline />
        <p><span className="highlight">It's recursive:</span> Research institutions create ventures → Ventures scale → Some create risk capital → Risk capital funds and attracts talent for more ventures → Density attracts more talent → Talent creates more ventures. This is how cities thrive in the new economy.</p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2>A Bridge to Build an Ecosystem</h2>
        <p>We can't replicate Silicon Valley overnight. But we can start the flywheel. <span className="highlight">The ecosystem starts as a bridge between St. Louis and coastal risk capital.</span> Eventually, ventures starting and scaling here will create risk capital and innovation density in St. Louis itself.</p>
        <h3>Our Two Core Theses</h3>
        <div className="vision-grid">
          <VisionCard title="1. Fun is Crucial" index={0}>
            <p>In San Francisco, New York, and Boston, building is fun, social, and cool. At WashU, it's often academic or a means to an end. That's not conducive to building big things. We need a space where innovation comes from community, not the other way around. Somewhere where building is joyful, not just rigorous.</p>
          </VisionCard>
          <VisionCard title="2. In St. Louis, For St. Louis" index={1}>
            <p>In SF and NYC, students learn and build in the same place -- they stay because the ecosystem supports scale. In St. Louis, as soon as anyone gets traction, there's a burning question: "How do I get to the coast?" We need to create an innovation ecosystem that encourages people to stay here.</p>
          </VisionCard>
        </div>
        <p>As ventures start here, some will scale. Some of those will create risk capital in St. Louis. That capital will fund the next generation of ventures. <span className="highlight">This is the recursive engine of economic development in the new economy.</span></p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2>Reviving the Spirit of St. Louis</h2>
        <p>In 1927, St. Louis business leaders pooled resources to support Charles Lindbergh's attempt at the Orteig Prize—a $25,000 reward for the first nonstop transatlantic flight. Lindbergh flew from New York to Paris in 33 hours in the Spirit of St. Louis, and the prize sparked $16 of investment for every dollar offered. Within a year, airline passengers increased 30-fold, and pilot license applications grew 300%.</p>
        <p><span className="highlight">St. Louis became synonymous with daring innovation.</span> That moment proves what's possible when the city rallies behind bold ambition. Today, we face a different challenge -- not transatlantic flight, but economic transformation. We need to recreate that spirit—not with aviation, but with startups, AI, biotech, and the future of technology.</p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2>What We're Building</h2>
        <p>A physical space and social community here at WashU for people to come together and build. This is a <span className="highlight">student-run initiative</span> that empowers WashU talent and the broader St. Louis community to build ventures locally:</p>
        <ul>
          <li>Mentorship from founders who have built and scaled companies</li>
          <li>Resources and support to go from idea to traction</li>
          <li>Social events and community that make building fun</li>
          <li>Space for organic collaboration—nothing prescriptive, just serendipity</li>
          <li>A bridge to coastal capital—connecting St. Louis ventures with coastal capital</li>
        </ul>
      </motion.section>

      <CTA />

      <footer>
        &copy; 2025 Disrupt<br/>
      </footer>
    </div>
  )
}
