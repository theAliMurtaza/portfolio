'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '1.2rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(5, 5, 8, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(124,106,255,0.1)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.85rem', color: '#7c6aff', letterSpacing: '0.1em' }}>
          <span style={{ color: '#6b6b80' }}>{'<'}</span>
          dev
          <span style={{ color: '#ff6a9b' }}>.io</span>
          <span style={{ color: '#6b6b80' }}>{' />'}</span>
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2.5rem' }} className="hidden md:flex">
          {links.map((link, i) => (
            <motion.button
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              onClick={() => scrollTo(link)}
              style={{
                background: 'none',
                border: 'none',
                color: '#6b6b80',
                fontSize: '0.8rem',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'none',
                transition: 'color 0.2s',
              }}
              whileHover={{ color: '#f0f0f5' }}
            >
              {link}
            </motion.button>
          ))}
        </div>

        {/* Hire me button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => scrollTo('Contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '0.5rem 1.3rem',
            background: 'linear-gradient(135deg, #7c6aff, #ff6a9b)',
            border: 'none',
            borderRadius: '100px',
            color: 'white',
            fontSize: '0.78rem',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 600,
            letterSpacing: '0.08em',
            cursor: 'none',
          }}
          className="hidden md:block"
        >
          Hire Me
        </motion.button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', color: '#f0f0f5', cursor: 'none' }}
          className="md:hidden"
        >
          <div style={{ width: 24, height: 2, background: open ? '#7c6aff' : '#f0f0f5', transition: 'all 0.3s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <div style={{ width: 24, height: 2, background: '#f0f0f5', margin: '5px 0', opacity: open ? 0 : 1, transition: 'all 0.3s' }} />
          <div style={{ width: 24, height: 2, background: open ? '#7c6aff' : '#f0f0f5', transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 70,
              left: 0,
              right: 0,
              zIndex: 999,
              background: 'rgba(5,5,8,0.97)',
              backdropFilter: 'blur(20px)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              borderBottom: '1px solid rgba(124,106,255,0.1)',
            }}
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                style={{ background: 'none', border: 'none', color: '#f0f0f5', fontSize: '1.2rem', fontFamily: 'Syne', textAlign: 'left', cursor: 'none' }}
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
