'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Reveal from './Reveal';

const experiences = [
  {
    role: 'Flutter & AI App Developer (Student Projects)',
    company: 'University Projects',
    period: '2023 — Present',
    type: 'Academic',
    desc: 'Designed and developed multiple cross-platform mobile applications using Flutter, focusing on real-world problem solving. Built apps including an AI-based image-to-text converter (OCR with PDF export) and a storage cleaner with file detection and deletion features. Integrated REST APIs and optimized UI for responsive performance.',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'OCR', 'SQLite'],
    color: '#7c6aff',
  },
  {
    role: 'AI & Backend Development (FYP - In Progress)',
    company: 'Final Year Project',
    period: '2025 — Present',
    type: 'Academic',
    desc: 'Developing an AI-powered system to generate realistic advertisements from images and videos using generative AI techniques. Working on backend services, model integration, and automation workflows for content generation.',
    tech: ['Python', 'FastAPI', 'AI Models', 'OpenAI API', 'Computer Vision'],
    color: '#ff6a9b',
  },
  {
    role: 'Mobile App Developer',
    company: 'Personal Projects',
    period: '2022 — 2023',
    type: 'Self-initiated',
    desc: 'Built and experimented with multiple mobile app concepts including productivity tools and utility-based applications. Focused on UI/UX design, state management, and performance optimization.',
    tech: ['Flutter', 'Dart', 'Provider', 'SharedPreferences'],
    color: '#6affce',
  },
  {
    role: 'Frontend Development (Learning Phase)',
    company: 'Self Learning',
    period: '2021 — 2022',
    type: 'Training',
    desc: 'Learned core frontend development concepts including responsive design, component-based architecture, and JavaScript fundamentals. Built small projects to strengthen development skills.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React (Basics)'],
    color: '#ffbb6a',
  },
];
export default function Experience() {
  return (
    <section id="experience" style={{ padding: '8rem 0', background: '#0d0d14', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(124,106,255,0.4), transparent)' }} />

      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <Reveal>
          <p style={{ fontFamily: 'DM Mono', fontSize: '0.75rem', color: '#7c6aff', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            // work history
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '4rem' }}>
            Experience &{' '}
            <span style={{ fontFamily: 'Instrument Serif', fontStyle: 'italic', fontWeight: 400, color: '#ff6a9b' }}>
              Journey
            </span>
          </h2>
        </Reveal>

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 0, top: 8, bottom: 8, width: 1,
            background: 'linear-gradient(to bottom, #7c6aff, #ff6a9b, #6affce, #ffbb6a)',
            opacity: 0.3,
          }} />

          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={0.1 * i}>
              <div style={{ position: 'relative', marginBottom: '3rem' }}>
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  style={{
                    position: 'absolute', left: -2 - 8, top: 6,
                    width: 12, height: 12, borderRadius: '50%',
                    background: exp.color,
                    boxShadow: `0 0 12px ${exp.color}80`,
                    border: '2px solid #0d0d14',
                    zIndex: 1,
                  }}

                />

                <motion.div
                  whileHover={{ x: 8 }}
                  style={{
                    padding: '1.8rem 2rem',
                    background: '#050508',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f0f0f5', marginBottom: '0.2rem' }}>{exp.role}</h3>
                      <p style={{ color: exp.color, fontSize: '0.88rem', fontWeight: 600 }}>{exp.company}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontFamily: 'DM Mono', fontSize: '0.72rem', color: '#6b6b80' }}>{exp.period}</span>
                      <br />
                      <span style={{
                        padding: '0.15rem 0.6rem',
                        background: `${exp.color}10`,
                        border: `1px solid ${exp.color}20`,
                        borderRadius: '100px',
                        fontSize: '0.65rem',
                        fontFamily: 'DM Mono',
                        color: exp.color,
                      }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p style={{ color: '#6b6b80', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                    {exp.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.tech.map((t) => (
                      <span key={t} style={{
                        padding: '0.2rem 0.6rem',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        fontFamily: 'DM Mono',
                        color: '#6b6b80',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(124,106,255,0.4), transparent)' }} />
    </section>
  );
}
