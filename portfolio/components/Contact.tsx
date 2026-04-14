'use client';
import { motion } from 'framer-motion';
import { Mail, GitFork, Link, Send, MapPin, Coffee } from 'lucide-react';
import Reveal from './Reveal';
import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  const socials = [
    { icon: GitFork, label: 'GitHub', handle: '@yourhandle', color: '#f0f0f5' },
    { icon: Link, label: 'LinkedIn', handle: 'in/yourname', color: '#0a66c2' },
    { icon: Mail, label: 'Twitter / X', handle: '@yourhandle', color: '#1da1f2' },
    { icon: Mail, label: 'Email', handle: 'hello@dev.io', color: '#ff6a9b' },
  ];

  return (
    <section id="contact" style={{ padding: '8rem 0', position: 'relative' }} className="grid-bg">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <Reveal>
          <p style={{ fontFamily: 'DM Mono', fontSize: '0.75rem', color: '#7c6aff', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            // get in touch
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Let's build something{' '}
            <span style={{ fontFamily: 'Instrument Serif', fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(135deg, #7c6aff, #ff6a9b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              great
            </span>
            .
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p style={{ color: '#6b6b80', fontSize: '1rem', lineHeight: 1.7, maxWidth: 500, marginBottom: '4rem' }}>
            I'm open to freelance projects, full-time roles, and interesting collaborations.
            Let's talk about how I can help.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: form */}
          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Name', id: 'name', type: 'text', placeholder: 'Your name' },
                { label: 'Email', id: 'email', type: 'email', placeholder: 'you@example.com' },
              ].map((field) => (
                <div key={field.id}>
                  <label style={{ display: 'block', fontFamily: 'DM Mono', fontSize: '0.72rem', color: '#6b6b80', marginBottom: '0.4rem', letterSpacing: '0.08em' }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.id as 'name' | 'email']}
                    onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                    style={{
                      width: '100%', padding: '0.85rem 1rem',
                      background: '#0d0d14',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '10px', color: '#f0f0f5',
                      fontSize: '0.9rem', fontFamily: 'Syne',
                      outline: 'none', cursor: 'none',
                    }}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontFamily: 'DM Mono', fontSize: '0.72rem', color: '#6b6b80', marginBottom: '0.4rem', letterSpacing: '0.08em' }}>
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: '100%', padding: '0.85rem 1rem',
                    background: '#0d0d14',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '10px', color: '#f0f0f5',
                    fontSize: '0.9rem', fontFamily: 'Syne',
                    outline: 'none', resize: 'vertical', cursor: 'none',
                  }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(124,106,255,0.3)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '1rem 2rem',
                  background: sent ? 'rgba(106,255,206,0.2)' : 'linear-gradient(135deg, #7c6aff, #ff6a9b)',
                  border: sent ? '1px solid rgba(106,255,206,0.4)' : 'none',
                  borderRadius: '100px', color: 'white',
                  fontSize: '0.9rem', fontFamily: 'Syne', fontWeight: 600,
                  cursor: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  transition: 'all 0.3s',
                }}
              >
                {sent ? '✓ Message Sent!' : <><Send size={16} /> Send Message</>}
              </motion.button>
            </form>
          </Reveal>

          {/* Right: info */}
          <div>
            <Reveal delay={0.25}>
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b6b80', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                  <MapPin size={14} /> Lahore, Pakistan (Open to Remote)
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b6b80', fontSize: '0.85rem' }}>
                  <Coffee size={14} /> Reply within 24 hours
                </div>
              </div>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {socials.map((social, i) => (
                <Reveal key={social.label} delay={0.3 + i * 0.08}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 8, borderColor: `${social.color}30` }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      padding: '1rem 1.2rem',
                      background: '#0d0d14',
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderRadius: '12px', textDecoration: 'none',
                      transition: 'all 0.2s', cursor: 'none',
                    }}
                  >
                    <div style={{
                      width: 36, height: 36, borderRadius: '8px',
                      background: `${social.color}10`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <social.icon size={16} color={social.color} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#6b6b80', fontFamily: 'DM Mono' }}>{social.label}</div>
                      <div style={{ fontSize: '0.9rem', color: '#f0f0f5', fontWeight: 600 }}>{social.handle}</div>
                    </div>
                  </motion.a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
