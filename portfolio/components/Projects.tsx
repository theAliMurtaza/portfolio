'use client';
import { motion } from 'framer-motion';
import { ExternalLink, GitFork, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

const projects = [
  {
    num: '01',
    title: 'AI Resume Builder and Analyzer',
    desc: 'An intelligent tool that uses AI to build and analyze resumes, providing personalized feedback and optimization suggestions.',
    stack: ['react.js', 'Node.js', 'Gemini', 'Mongodb', 'Tailwind CSS'],
    color: '#7c6aff',
    tag: 'AI / Web',
  },
 {
  num: '02',
  title: 'AI Content Detector',
  desc: 'AI-powered platform that detects whether text is human-written or AI-generated, with plagiarism checks, confidence scoring, and detailed linguistic analysis.',
  stack: ['Flutter / React', 'Python', 'FastAPI', 'OpenAI API / Custom Model', 'MongoDB'],
  color: '#ff6a9b',
  tag: 'AI / SaaS',
},
  {
  num: '03',
  title: 'AI Study Assistant',
  desc: 'An intelligent AI agent that converts lectures, PDFs, and images into structured notes, generates quizzes, summarizes content, and creates personalized study plans.',
  stack: ['Flutter', 'Node.js / FastAPI', 'OpenAI API', 'Firebase / MongoDB'],
  color: '#6affce',
  tag: 'AI / EdTech',
},
  {
    num: '04',
    title: 'LLM Chat Interface',
    desc: 'A multi-model AI chat platform supporting streaming responses, conversation branching, file uploads, and custom system prompts.',
    stack: ['React.js', 'LangChain', 'Python', 'WebSockets', 'Docker'],
    color: '#ffbb6a',
    tag: 'AI / Python',
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '8rem 0', position: 'relative' }} className="grid-bg">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <Reveal>
          <p style={{ fontFamily: 'DM Mono', fontSize: '0.75rem', color: '#7c6aff', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            // selected work
          </p>
        </Reveal>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <Reveal delay={0.1}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Featured{' '}
              <span style={{ fontFamily: 'Instrument Serif', fontStyle: 'italic', fontWeight: 400, color: '#7c6aff' }}>
                Projects
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              style={{ color: '#6b6b80', fontSize: '0.82rem', fontFamily: 'DM Mono', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', cursor: 'none' }}
            >
              All projects <ArrowUpRight size={14} />
            </motion.a>
          </Reveal>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {projects.map((project, i) => (
            <Reveal key={project.num} delay={0.1 * i}>
              <motion.div
                whileHover={{ x: 8, borderColor: `${project.color}30` }}
                style={{
                  padding: '2rem 2.5rem',
                  background: '#0d0d14',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '20px',
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr auto',
                  gap: '2rem',
                  alignItems: 'center',
                  transition: 'border-color 0.3s, transform 0.3s',
                  cursor: 'none',
                }}
                className="flex-col md:grid"
              >
                {/* Number */}
                <div>
                  <span style={{ fontFamily: 'DM Mono', fontSize: '0.72rem', color: project.color, opacity: 0.6 }}>
                    {project.num}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f0f0f5' }}>{project.title}</h3>
                    <span style={{
                      padding: '0.2rem 0.7rem',
                      background: `${project.color}10`,
                      border: `1px solid ${project.color}25`,
                      borderRadius: '100px',
                      fontSize: '0.68rem',
                      fontFamily: 'DM Mono',
                      color: project.color,
                    }}>
                      {project.tag}
                    </span>
                  </div>
                  <p style={{ color: '#6b6b80', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem', maxWidth: 600 }}>
                    {project.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {project.stack.map((tech) => (
                      <span key={tech} style={{
                        padding: '0.2rem 0.6rem',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        fontFamily: 'DM Mono',
                        color: '#3a3a4a',
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <motion.a href="#" whileHover={{ y: -2, color: '#7c6aff' }} style={{ color: '#3a3a4a', cursor: 'none' }}>
                    <GitFork size={18} />
                  </motion.a>
                  <motion.a href="#" whileHover={{ y: -2, color: '#7c6aff' }} style={{ color: '#3a3a4a', cursor: 'none' }}>
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
