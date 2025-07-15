// BootSequence.jsx
import React, { useState, useEffect } from 'react';

const BootSequence = ({ onDone }) => {
  const lines = [
    "BIOS vG.2024 © VINAY GANDRA",
    "Memory check: 32768 MB OK",
    "Booting from /dAY ev/portfolio...",
    "Loading kernel modules...  ✓",
    "Initializing GPU...      ✓",
    "Mounting rootfs...       ✓",
    "login: gatere",
    "password: ******",
    "Welcome to Portfolio OS v1.0",
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx < lines.length) {
      const t = setTimeout(() => setIdx(idx + 1), 350);
      return () => clearTimeout(t);
    }
    const doneT = setTimeout(onDone, 600);
    return () => clearTimeout(doneT);
  }, [idx, onDone]);
return (
  <div className="bg-black h-screen flex items-center justify-center">
    <div className="font-mono text-green-400">
      {lines.slice(0, idx).map((l, i) => (
        <pre key={i} className="text-sm">{l}</pre>
      ))}
      {idx < lines.length && <span className="animate-pulse">_</span>}
    </div>
  </div>
);
};

export default BootSequence;