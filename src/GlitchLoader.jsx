// GlitchLoader.jsx
import React, { useState, useEffect } from 'react';
const GlitchLoader = ({ onDone }) => {
  const [phase, setPhase] = useState(0); // 0 static, 1 glitching, 2 granted
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200);
    const t2 = setTimeout(() => setPhase(2), 800);
    const t3 = setTimeout(onDone, 1400);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [onDone]);

  return (
    <div className="bg-black h-screen flex items-center justify-center font-mono">
      {phase === 0 && (
        <div className="text-green-400 text-2xl animate-pulse">Loading...</div>
      )}
      {phase === 1 && (
        <div className="text-green-400 text-3xl glitch">// ACCESSING...</div>
      )}
      {phase === 2 && (
        <div className="text-green-400 text-4xl animate-ping-once">ACCESS GRANTED</div>
      )}
    </div>
  );
};
export default GlitchLoader;