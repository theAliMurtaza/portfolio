'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Reveal from './Reveal';

const categories = [
  {
    label: 'Frontend',
    color: '#7c6aff',
    skills: [
      { name: 'React.js', level: 95, note: 'Hooks, Context, Redux' },
      { name: 'Next.js', level: 90, note: 'App Router, SSR, ISR' },
      { name: 'TypeScript', level: 88, note: 'Strict mode, generics' },
      { name: 'Tailwind CSS', level: 92, note: 'Custom configs' },
    ],
  },
  {
    label: 'Mobile',
    color: '#ff6a9b',
    skills: [
      { name: 'React Native', level: 88, note: 'Expo, bare workflow' },
      { name: 'iOS / Android', level: 80, note: 'Native modules' },
      { name: 'Navigation', level: 85, note: 'Stack, Tab, Drawer' },
      { name: 'App Store / Play', level: 78, note: 'Deployment & CI' },
    ],
  },
  {
    label: 'Backend',
    color: '#6affce',
    skills: [
      { name: 'Node.js', level: 92, note: 'Express, Fastify' },
      { name: 'REST / GraphQL', level: 88, note: 'Apollo, tRPC' },
      { name: 'PostgreSQL', level: 84, note: 'Prisma, Drizzle' },
      { name: 'Redis', level: 78, note: 'Caching, pub/sub' },
    ],
  },
  {
    label: 'AI & Python',
    color: '#ffbb6a',
    skills: [
      { name: 'Python', level: 90, note: 'FastAPI, Django' },
      { name: 'LangChain / LLMs', level: 85, note: 'GPT, Claude, Gemini' },
      { name: 'PyTorch / sklearn', level: 78, note: 'Model training' },
      { name: 'Data Pipelines', level: 82, note: 'Pandas, NumPy' },
    ],
  },
];

function SkillBar({ name, level, note, color, delay }: { name: string; level: number; note: string; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} style={{ marginBottom: '1.2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', alignItems: 'baseline' }}>
        <div>
          <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f0f0f5' }}>{name}</span>
          <span style={{ fontSize: '0.72rem', color: '#6b6b80', marginLeft: '0.6rem', fontFamily: 'DM Mono' }}>{note}</span>
        </div>
        <span style={{ fontFamily: 'DM Mono', fontSize: '0.72rem', color: color }}>{level}%</span>
      </div>
      <div style={{ height: 4, background: 'rgba(255,255,255,0.05)', borderRadius: 4, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.4, 0.25, 1] }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}aa, ${color})`,
            borderRadius: 4,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

const techIcons = [
  { name: 'React', symbol: '⚛' }, { name: 'Next.js', symbol: 'N' }, { name: 'Node.js', symbol: '⬡' },
  { name: 'Python', symbol: '🐍' }, { name: 'TypeScript', symbol: 'TS' }, { name: 'React Native', symbol: '📱' },
  { name: 'PostgreSQL', symbol: '🐘' }, { name: 'Redis', symbol: '⚡' }, { name: 'Docker', symbol: '🐳' },
  { name: 'AWS', symbol: '☁' }, { name: 'GraphQL', symbol: '◈' }, { name: 'Git', symbol: '⎇' },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '8rem 0', background: '#0d0d14', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(124,106,255,0.4), transparent)',
      }} />

      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <Reveal>
          <p style={{ fontFamily: 'DM Mono', fontSize: '0.75rem', color: '#7c6aff', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            // tech stack
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Skills &{' '}
            <span style={{ fontFamily: 'Instrument Serif', fontStyle: 'italic', fontWeight: 400, color: '#ff6a9b' }}>
              Expertise
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p style={{ color: '#6b6b80', marginBottom: '4rem', fontSize: '1rem', maxWidth: 500 }}>
A curated toolkit developed through hands-on projects in mobile, web, and AI application development          </p>
        </Reveal>

        {/* Skill bars grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          {categories.map((cat, ci) => (
            <Reveal key={cat.label} delay={0.1 * ci}>
              <div style={{
                padding: '1.8rem',
                background: '#050508',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '20px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                  <span style={{ fontFamily: 'DM Mono', fontSize: '0.78rem', color: cat.color, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {cat.label}
                  </span>
                </div>
                {cat.skills.map((skill, si) => (
                  <SkillBar key={skill.name} {...skill} color={cat.color} delay={0.2 + si * 0.1 + ci * 0.05} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tech icons marquee */}
        <Reveal>
          <p style={{ fontFamily: 'DM Mono', fontSize: '0.72rem', color: '#3a3a4a', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem', textAlign: 'center' }}>
            Technologies I work with
          </p>
        </Reveal>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
          {techIcons.map((tech, i) => (
            <Reveal key={tech.name} delay={0.05 * i}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(124,106,255,0.4)' }}
                style={{
                  padding: '0.6rem 1.2rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '100px',
                  fontSize: '0.82rem',
                  color: '#6b6b80',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  cursor: 'none', transition: 'border-color 0.2s',
                }}
              >
                <span>{tech.symbol}</span>
                <span style={{ fontFamily: 'DM Mono' }}>{tech.name}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(124,106,255,0.4), transparent)',
      }} />
    </section>
  );
}
