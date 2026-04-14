'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer style={{
      padding: '2.5rem 0',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      background: '#050508',
    }}>
      <div className="max-w-7xl mx-auto px-8 md:px-16" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontFamily: 'DM Mono', fontSize: '0.75rem', color: '#3a3a4a' }}>
          <span style={{ color: '#6b6b80' }}>{'<'}</span>
          dev
          <span style={{ color: '#7c6aff' }}>.io</span>
          <span style={{ color: '#6b6b80' }}>{' />'}</span>
        </div>
        <p style={{ fontFamily: 'DM Mono', fontSize: '0.72rem', color: '#3a3a4a' }}>
          © 2025 — Designed & built with ❤️ and lots of ☕
        </p>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ y: -3, color: '#7c6aff' }}
          style={{
            background: 'none', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '100px', padding: '0.4rem 1rem',
            color: '#3a3a4a', fontFamily: 'DM Mono', fontSize: '0.72rem',
            cursor: 'none', transition: 'color 0.2s',
          }}
        >
          ↑ Back to top
        </motion.button>
      </div>
    </footer>
  );
}
