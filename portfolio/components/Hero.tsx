'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, GitFork, Link } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="hero" style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }} className="grid-bg">
      {/* Orbs */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div style={{
          position: 'absolute', top: '15%', right: '10%', width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(124,106,255,0.12) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(40px)',
        }} className="animate-float" />
        <div style={{
          position: 'absolute', bottom: '20%', left: '5%', width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(255,106,155,0.08) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(40px)',
          animationDelay: '2s',
        }} className="animate-float" />
        <div style={{
          position: 'absolute', top: '50%', left: '40%', width: 200, height: 200,
          background: 'radial-gradient(circle, rgba(106,255,206,0.06) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(30px)',
          animationDelay: '1s',
        }} className="animate-float" />

        {/* Rotating ring */}
        <div style={{
          position: 'absolute', top: '10%', right: '5%', width: 300, height: 300,
          border: '1px solid rgba(124,106,255,0.1)', borderRadius: '50%',
        }} className="animate-spin-slow" />
        <div style={{
          position: 'absolute', top: '12%', right: '7%', width: 260, height: 260,
          border: '1px solid rgba(255,106,155,0.06)', borderRadius: '50%', borderStyle: 'dashed',
        }} className="animate-spin-slow" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pt-24">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1rem',
            background: 'rgba(106,255,206,0.08)',
            border: '1px solid rgba(106,255,206,0.2)',
            borderRadius: '100px', marginBottom: '2rem',
          }}
        >
          <span style={{ width: 6, height: 6, background: '#6affce', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px #6affce' }} />
          <span style={{ fontFamily: 'DM Mono', fontSize: '0.72rem', color: '#6affce', letterSpacing: '0.1em' }}>
            Available for opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <div style={{ marginBottom: '1.5rem' }}>
          {['Full Stack', 'Software', 'Engineer'].map((word, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <h1 style={{
                fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                color: i === 1 ? 'transparent' : '#f0f0f5',
                WebkitTextStroke: i === 1 ? '2px rgba(124,106,255,0.6)' : 'none',
                display: 'block',
                fontFamily: 'Syne, sans-serif',
              }}>
                {word}
                {i === 0 && <span style={{ color: '#7c6aff' }}>.</span>}
              </h1>
            </motion.div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: 600 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            style={{ color: '#6b6b80', fontSize: '1.05rem', lineHeight: 1.7, fontWeight: 400 }}
          >
            Building seamless digital experiences across web, mobile & AI — from
            pixel-perfect UIs to scalable backend systems.
          </motion.p>

          {/* Tech stack pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
          >
            {['React.js', 'Node.js', 'React Native', 'Python', 'AI/ML', 'Next.js'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.07 }}
                style={{
                  padding: '0.3rem 0.9rem',
                  background: 'rgba(124,106,255,0.08)',
                  border: '1px solid rgba(124,106,255,0.2)',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontFamily: 'DM Mono',
                  color: '#a89fff',
                  letterSpacing: '0.05em',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA + Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: '0.9rem 2.2rem',
                background: 'linear-gradient(135deg, #7c6aff 0%, #ff6a9b 100%)',
                border: 'none', borderRadius: '100px',
                color: 'white', fontSize: '0.9rem',
                fontFamily: 'Syne', fontWeight: 600, letterSpacing: '0.05em',
                cursor: 'none', boxShadow: '0 0 30px rgba(124,106,255,0.3)',
              }}
            >
              View Projects
            </motion.button>

            <div style={{ display: 'flex', gap: '1rem' }}>
              {[
                { icon: GitFork, href: '#' },
                { icon: Link, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ y: -3, color: '#7c6aff' }}
                  style={{ color: '#3a3a4a', transition: 'color 0.2s', cursor: 'none' }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          style={{
            display: 'flex', gap: '3rem', marginTop: '4rem',
            paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.05)',
            flexWrap: 'wrap',
          }}
        >
          
          
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 2, repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          background: 'none', border: '1px solid rgba(124,106,255,0.2)',
          borderRadius: '100px', padding: '0.6rem 1.2rem',
          color: '#6b6b80', display: 'flex', alignItems: 'center', gap: '0.5rem',
          fontSize: '0.72rem', fontFamily: 'DM Mono', cursor: 'none',
        }}
        whileHover={{ borderColor: 'rgba(124,106,255,0.5)', color: '#f0f0f5' }}
      >
        <ArrowDown size={12} /> scroll
      </motion.button>
    </section>
  );
}
