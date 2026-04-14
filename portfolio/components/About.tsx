'use client';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { Code2, Cpu, Globe, Smartphone } from 'lucide-react';

const cards = [
  { icon: Globe, title: 'Full Stack', desc: 'End-to-end web apps with modern frameworks and cloud infrastructure', color: '#7c6aff' },
  { icon: Smartphone, title: 'Native Mobile', desc: 'Cross-platform iOS & Android apps with React Native', color: '#ff6a9b' },
  { icon: Code2, title: 'React & Node', desc: 'Scalable SPAs and robust REST/GraphQL APIs that perform at scale', color: '#6affce' },
  { icon: Cpu, title: 'AI & Python', desc: 'ML pipelines, LLM integrations, and intelligent data systems', color: '#ffbb6a' },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '8rem 0', position: 'relative' }}>
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left text */}
          <div>
            <Reveal>
              <p style={{ fontFamily: 'DM Mono', fontSize: '0.75rem', color: '#7c6aff', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                // about me
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
                Crafting digital
                <br />
                <span style={{ fontFamily: 'Instrument Serif', fontStyle: 'italic', fontWeight: 400, color: '#7c6aff' }}>
                  experiences
                </span>
                <br />
                that matter.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p style={{ color: '#6b6b80', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.5rem' }}>
               I’m a Software Engineering student with hands-on experience in building mobile and AI-powered applications. I enjoy working at the intersection of design and development, creating intuitive user interfaces backed by efficient and scalable systems.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p style={{ color: '#6b6b80', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2.5rem' }}>
                My stack spans the entire product lifecycle: React.js & Next.js for web, React Native for mobile,
                Node.js for APIs, Python for data & AI, and whatever else the problem demands.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(124,106,255,0.3)' }}
                  style={{
                    padding: '0.75rem 1.8rem',
                    background: 'rgba(124,106,255,0.1)',
                    border: '1px solid rgba(124,106,255,0.3)',
                    borderRadius: '100px', color: '#a89fff',
                    fontSize: '0.85rem', fontFamily: 'Syne', fontWeight: 600,
                    textDecoration: 'none', cursor: 'none',
                  }}
                >
                  Download CV
                </motion.a>
              </div>
            </Reveal>
          </div>

          {/* Right cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {cards.map((card, i) => (
              <Reveal key={card.title} delay={0.15 * i} direction={i % 2 === 0 ? 'left' : 'right'}>
                <motion.div
                  whileHover={{ y: -6, borderColor: `${card.color}40` }}
                  style={{
                    padding: '1.5rem',
                    background: '#0d0d14',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '16px',
                    transition: 'border-color 0.3s',
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: '10px', marginBottom: '1rem',
                    background: `${card.color}15`,
                    border: `1px solid ${card.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <card.icon size={18} color={card.color} />
                  </div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem', color: '#f0f0f5' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: '#6b6b80', lineHeight: 1.6 }}>
                    {card.desc}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
