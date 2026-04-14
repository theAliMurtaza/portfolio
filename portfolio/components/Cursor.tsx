'use client';
import { useEffect, useState } from 'react';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [follower, setFollower] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => setFollower({ x: e.clientX, y: e.clientY }), 80);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: pos.x - 4,
          top: pos.y - 4,
          width: 8,
          height: 8,
          background: '#7c6aff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'screen',
          transform: clicking ? 'scale(2)' : 'scale(1)',
          transition: 'transform 0.1s ease',
        }}
      />
      <div
        style={{
          position: 'fixed',
          left: follower.x - 16,
          top: follower.y - 16,
          width: 32,
          height: 32,
          border: '1px solid rgba(124, 106, 255, 0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          mixBlendMode: 'screen',
          transform: clicking ? 'scale(1.5)' : 'scale(1)',
          transition: 'transform 0.2s ease',
        }}
      />
    </>
  );
}
