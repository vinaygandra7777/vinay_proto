// MatrixRain.jsx

import React, { useState, useEffect,useRef } from 'react';
const MatrixRain = ({ onDone }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const cvs = canvasRef.current;
    const ctx = cvs.getContext('2d');
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    const cols = Math.floor(cvs.width / 20);
    const drops = new Array(cols).fill(1);
    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.05)';
      ctx.fillRect(0, 0, cvs.width, cvs.height);
      ctx.fillStyle = '#00ff00';
      ctx.font = '15px monospace';
      drops.forEach((y, i) => {
        const text = String.fromCharCode(Math.random() * 128);
        ctx.fillText(text, i * 20, y * 20);
        drops[i] = y > cvs.height / 20 && Math.random() > 0.975 ? 0 : y + 1;
      });
    };
    const id = setInterval(draw, 50);
    const next = (e) => (e.key === ' ' || e.type === 'click') && (onDone(), window.removeEventListener('keydown', next));
    window.addEventListener('keydown', next);
    return () => (clearInterval(id), window.removeEventListener('keydown', next));
  }, [onDone]);

  return (
    <canvas
      ref={canvasRef}
      className="bg-black h-screen w-screen"
      onClick={() => onDone()}
      title="Press Space / click to enter"
    />
  );
};
export default MatrixRain;