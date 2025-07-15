
// TerminalPortfolio.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import BootSequence from './BootSequence';

const TerminalPortfolio = () => {
  /* ------------------------------------------------------------------ */
  /* 1. STATE                                                           */
  /* ------------------------------------------------------------------ */
  const [bootDone, setBootDone] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { text: 'welcome', isCommand: true },
    { text: 'Hi, I\'m Vinay Gandra, a Software & AI Engineer.' },
    { text: 'Welcome to my interactive AI-powered portfolio terminal!' },
    { text: 'Type \'help\' to see available commands.' },
  ]);
  const [currentTime, setCurrentTime] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activePopup, setActivePopup] = useState(null);
  const [cmdQueue, setCmdQueue] = useState([]);
  const [skipTyping, setSkipTyping] = useState(false);
  

  const terminalEndRef = useRef(null);
  const navCommands = ['help', 'about', 'projects', 'skills', 'experience', 'contact', 'education', 'certifications', 'leadership', 'sudo', 'clear'];

  

  /* ------------------------------------------------------------------ */
  /* 2. TIME                                                            */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleString('en-US', {
          month: 'numeric',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).replace(',', '')
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  /* ------------------------------------------------------------------ */
  /* 3. SCROLL                                                          */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  /* ------------------------------------------------------------------ */
  /* 4. COMMAND QUEUE DRAIN                                             */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    if (!isTyping && cmdQueue.length) {
      const [next, ...rest] = cmdQueue;
      setCmdQueue(rest);
      processCommand(next);
    }
  }, [isTyping, cmdQueue]);

  /* ------------------------------------------------------------------ */
  /* 5. TYPING & SKIP LOGIC                                             */
  /* ------------------------------------------------------------------ */
  const typeText = async (lines, command) => {
    setOutput((prev) => [...prev, { text: command, isCommand: true }]);

    if (skipTyping) {
      setOutput((prev) => [
        ...prev,
        ...lines.map((l) => ({ text: l })),
      ]);
      return;
    }

    setIsTyping(true);
    for (const line of lines) {
      await new Promise((r) => setTimeout(r, 250));
      setOutput((prev) => [...prev, { text: line }]);
    }
    setIsTyping(false);
  };

  /* ------------------------------------------------------------------ */
  /* 6. POPUP CONTENT                                                   */
  /* ------------------------------------------------------------------ */
  const getPopupContent = useCallback((command) => {
    switch (command.toLowerCase()) {
      case 'about':
        return {
          title: 'About Me',
          content: (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-400">
                  <span className="text-black text-xl font-bold">VG</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">Vinay Gandra</h3>
                <p className="text-green-300 text-lg">Software & AI Engineer</p>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>I'm a passionate Software & AI Engineer with expertise in full-stack development, AI/ML integration, and building scalable solutions.</p>
                <p>I love turning complex problems into elegant solutions through code and innovation.</p>
                <p>Currently focused on building next-generation AI-powered applications and systems.</p>
              </div>
            </div>
          ),
        };
        case "projects":
      return {
        title: "Featured Projects",
        content: (
          <div className="space-y-4">
            {/* Card 1 */}
            <div className="bg-gray-900/80 p-5 rounded-lg border border-green-500/50 hover:border-green-400 transition">
              <h4 className="text-green-400 font-semibold text-lg mb-2">
                Online Food Ordering Platform
              </h4>
              <p className="text-gray-300 mb-3">
                -Built with HTML, CSS, JavaScript, and Firebase Authentication.
                -Features user login, cart management, and order summary
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">
                  JavaScript
                </span>
                <span className="bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">
                  Firebase
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900/80 p-5 rounded-lg border border-green-500/50 hover:border-green-400 transition">
              <h4 className="text-green-400 font-semibold text-lg mb-2">
                Geni Ai 🤖
              </h4>
              <p className="text-gray-300 mb-3">
                An interactive, futuristic chat platform designed to enhance user engagement and streamline communication. With a sleek and responsive UI, Gemini AI Chat offers features such as light and dark mode toggles, conversation history storage, and smooth message animations. Built using modern web technologies, it incorporates AI-powered responses to deliver real-time assistance, providing users with an intuitive and cutting-edge experience.
                
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">
                  Javascript
                </span>
                <span className="bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">
                  Gemini AI
                </span>
              
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900/80 p-5 rounded-lg border border-green-500/50 hover:border-green-400 transition">
              <h4 className="text-green-400 font-semibold text-lg mb-2">
                PayGate Micro-Service 💳
              </h4>
              <p className="text-gray-300 mb-3">
                Fault-tolerant payment gateway handling 10k+ TPS with zero-downtime
                deployments.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">GO</span>
            
                <span className="bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">
                  Kafka
                </span>
                <span className="bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">
                  Kubernetes
                </span>
              </div>
            </div>
          </div>
        ),
      }
      case "skills":
      return {
        title: "Technical Skills",
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/30">
              <h4 className="text-green-400 font-semibold mb-3">Languages</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>JavaScript</li>
                <li>Python</li>
                <li>SQL (PostgreSQL, MySQL)</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/30">
              <h4 className="text-green-400 font-semibold mb-3">Frameworks & Tools</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>React & Next.js</li>
                <li>FastAPI</li>
                <li>Docker </li>
                <li>AWS & GCP</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/30">
              <h4 className="text-green-400 font-semibold mb-3">ML / AI</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>PyTorch</li>
                <li>RAG & Dspy</li>
                <li>LangChain & LlamaIndex</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/30">
              <h4 className="text-green-400 font-semibold mb-3">DevOps & Cloud</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Docker</li>
                <li>AWS (S3, EC2, Lambda)</li>
                <li>CI/CD (GitHub Actions)</li>
              </ul>
              </div>
            
          </div>
        ),
      };

    /* -------------------------------------------------- */
    /* 4️⃣  EXPERIENCE                                    */
    /* -------------------------------------------------- */
    case "experience":
      return {
        title: "Professional Experience",
        content: (
          <ul className="space-y-6 text-gray-300">
            <li className="border-l-2 border-green-500 pl-4">
              <strong className="text-green-400">Software Engineer</strong> — Zingaro.ai(present)
              <br />
              <span className="text-sm text-gray-400">
                Building Voice agents.
              </span>
            </li>
          </ul>
        ),
      };

    /* -------------------------------------------------- */
    /* 5️⃣  CONTACT                                       */
    /* -------------------------------------------------- */
    case "contact":
      return {
        title: "Get In Touch",
        content: (
          <div className="space-y-4 text-gray-300">
            <p>
              <strong className="text-green-400">Email:</strong> vinaygandra7777@gmail.com
            </p>
            <p>
              <strong className="text-green-400">LinkedIn:</strong> https://www.linkedin.com/in/gandra-vinay-297376266/
            </p>
            <p>
              <strong className="text-green-400">GitHub:</strong> https://github.com/vinaygandra7777
            </p>
          </div>
        ),
      };

    /* -------------------------------------------------- */
    /* 6️⃣  EDUCATION                                     */
    /* -------------------------------------------------- */
    case "education":
      return {
        title: "Education",
        content: (
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              <strong className="text-green-400">Electrical and Communication Engineering</strong> — Sreenidhi institute of science and Technology  
              <br />
              <span className="text-sm text-gray-400">8.59</span>
            </li>
          </ul>
        ),
      };

    /* -------------------------------------------------- */
    /* 7️⃣  CERTIFICATIONS                                */
    /* -------------------------------------------------- */
    case "certifications":
      return {
        title: "Certifications",
        content: (
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>AWS Certified Solutions Architect – Associate</li>
            <li>Google Professional Cloud Developer</li>
            <li>Certified Kubernetes Application Developer (CKAD)</li>
            <li>HashiCorp Certified: Terraform Associate</li>
            <li>DeepLearning.AI TensorFlow Developer Certificate</li>
          </ul>
        ),
      };

    /* -------------------------------------------------- */
    /* 8️⃣  LEADERSHIP                                    */
    /* -------------------------------------------------- */
    case "leadership":
      return {
        title: "Leadership & Community",
        content: (
          <div className="space-y-4 text-gray-300">
            <p>
              <strong className="text-green-400">Nairobi JS Meetup Lead</strong> — 800+ members, 12 events/year
            </p>
          </div>
        ),
      };

    /* -------------------------------------------------- */
    /* 9️⃣  SUDO EASTER EGGS                              */
    /* -------------------------------------------------- */
    case "sudo":
      return {
        title: "Sudo Easter Eggs",
        content: (
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>sudo make_coffee ☕  →  brewing...</li>
            <li>sudo deploy_to_prod 🚀  →  0-downtime release!</li>
            <li>sudo debug_life --fix-all-bugs 🐛  →  life patched</li>
            <li>sudo rm -rf /stress /anxiety  →  deleted successfully</li>
            <li>sudo chmod +x dreams.sh && ./dreams.sh  →  dream big</li>
          </ul>
        ),
      };

      /* … add remaining cases (projects, skills, etc.) same as before … */
      default:
        return { title: 'Info', content: <p className="text-gray-300">Details here</p> };
    }
  }, []);

  /* ------------------------------------------------------------------ */
  /* 7. PROCESS COMMAND                                                 */
  /* ------------------------------------------------------------------ */
  const processCommand = async (command) => {
    if (isTyping) {
      setCmdQueue((q) => [...q, command]);
      return;
    }

    if (command.toLowerCase() === 'clear') {
      setOutput([]);
      return;
    }

    const popups = ['about', 'projects', 'skills', 'experience', 'contact', 'education','certifications', 'leadership'];
    if (popups.includes(command.toLowerCase())) {
      setActivePopup(command.toLowerCase());
      await typeText([`Opening display for ${command}...`], command);
      return;
    }

    let lines;
    switch (command.toLowerCase()) {
      case 'help':
        lines = ['Available commands: help, about, projects, skills, experience, contact,certifications,leadership, education, clear'];
        break;
      case 'sudo':
        lines = [
          '🔐 Access Granted - Advanced Commands:',
          'sudo make_coffee ☕',
          'sudo deploy_to_production 🚀',
          'sudo debug_life --fix-all-bugs 🐛',
        ];
        break;
      default:
        lines = [`command not found: ${command}`];
    }
    await typeText(lines, command);
  };

  /* ------------------------------------------------------------------ */
  /* 8. KEY HANDLERS                                                    */
  /* ------------------------------------------------------------------ */
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      if (isTyping) setCmdQueue((q) => [...q, input.trim()]);
      else processCommand(input.trim());
      setInput('');
    }
    if (e.key === 'Escape' && activePopup) {
      setActivePopup(null);
    }
    if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      setSkipTyping((s) => !s);
    }
  };

  /* ------------------------------------------------------------------ */
  /* 9. MOBILE SWIPE-TO-CLOSE                                           */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    let startY = 0;
    const onTouchStart = (e) => (startY = e.touches[0].clientY);
    const onTouchEnd = (e) => {
      const endY = e.changedTouches[0].clientY;
      if (startY - endY < -80) setActivePopup(null); // swipe down
    };
    if (activePopup) {
      window.addEventListener('touchstart', onTouchStart);
      window.addEventListener('touchend', onTouchEnd);
    }
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [activePopup]);

  /* ------------------------------------------------------------------ */
  /* 10. 3-D ID CARD                                                    */
  /* ------------------------------------------------------------------ */
  const InteractiveIDCard = () => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const onMouseMove = (e) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 20;
      const y = -(e.clientY - top - height / 2) / 20;
      setRotate({ x, y });
    };
    const onMouseLeave = () => setRotate({ x: 0, y: 0 });

    return (
      <div
        className="w-60 h-80 rounded-xl bg-gradient-to-br from-gray-900 to-black border-2 border-green-500 shadow-2xl"
        style={{
          transform: `perspective(1000px) rotateX(${rotate.y}deg) rotateY(${rotate.x}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div
  className="w-60 h-80 rounded-xl bg-cover bg-center border-2 border-green-500 shadow-2xl cursor-grab"
  style={{
    backgroundImage: "url(src/assets/image1.jpg)", // ← replace with your own full-card URL
    transform: `perspective(1000px) rotateX(0deg) rotateY(0deg)`,
    transition: 'transform .1s ease-out',
  }}
>
  {/* Overlay text (optional) */}
  <div className="flex flex-col justify-end h-full p-4 bg-black/60 rounded-xl">
    <div className="text-white text-center">
      <div className="text-lg font-bold text-green-400">Vinay Gandra</div>
      <div className="text-sm text-gray-300">Software & AI Engineer</div>
    </div>
  </div>
</div>
</div>
    );
  };
  if (!bootDone) {
    return <BootSequence onDone={() => setBootDone(true)} />;
  }
  /* ------------------------------------------------------------------ */
  /* 11. RENDER                                                         */
  /* ------------------------------------------------------------------ */
  return (
    
    <div className="bg-black text-white font-mono h-screen flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className="p-2 md:p-4 border-b border-green-500">
        <h1 className="text-2xl md:text-3xl text-green-400 font-bold">VINAY GANDRA</h1>
        <p className="text-xs md:text-sm text-gray-400">Software & AI Engineer</p>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel / 3-D Card */}
        <aside className="hidden md:flex w-1/3 justify-center items-start pt-16 px-4">
          <InteractiveIDCard />
        </aside>

        {/* Vertical Separator */}
        <div className="hidden md:block w-px bg-green-500"></div>

        {/* Right Panel / Terminal */}
        <main className="w-full md:w-2/3 flex flex-col pl-2 pr-2 md:pl-6 md:pr-4">
          {/* Nav */}
          <nav className="flex flex-wrap items-center gap-x-2 text-sm py-4 border-b border-green-800 mb-4">
             {navCommands.map((cmd, index) => (
              <React.Fragment key={cmd}>
                <button 
                  onClick={() => processCommand(cmd)}
                  className="text-green-400 hover:text-white transition-colors duration-200 px-1 py-1 rounded hover:bg-gray-800"
                  disabled={isTyping}
                >
                  {cmd}
                </button>
                {index < navCommands.length - 1 && <span className="text-gray-600">|</span>}
              </React.Fragment>
            ))}
          </nav>

          {/* Output */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-gray-800">
            {output.map((line, i) => (
              <div key={i} className="mb-1">
                {line.isCommand ? (
                  <div className="flex">
                    <span className="text-green-400">vinay@portfolio:~$</span>
                    <span className="ml-2 text-white">{line.text}</span>
                  </div>
                ) : (
                  <div className="text-gray-300 whitespace-pre-line ml-2 md:ml-4">{line.text}</div>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
            <div className="flex items-center py-2">
              <span className="text-green-400 text-sm">vinay@portfolio:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent text-white outline-none flex-1 ml-2 caret-green-400 text-sm"
                placeholder={isTyping ? 'Processing...' : 'Type command…'}
                disabled={isTyping}
              />
            </div>
          </div>
        </main>
      </div>
      
      

      {/* Footer */}
      <footer className="absolute bottom-2 right-2 text-green-400 text-xs">
        {currentTime}
        {skipTyping && <span className="ml-2 bg-green-600 text-black px-1 rounded">FAST MODE</span>}
      </footer>

      {/* Popup */}
      {activePopup && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center backdrop-blur-sm"
          onClick={() => setActivePopup(null)}
        >
          <div
            className="relative bg-black/95 border-2 border-green-500 rounded-lg p-4 md:p-6 w-11/12 max-w-3xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePopup(null)}
              className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 bg-green-600 hover:bg-green-500 rounded-full text-black font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-green-400 mb-4 text-center">
              {getPopupContent(activePopup).title}
            </h2>
            <div>{getPopupContent(activePopup).content}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TerminalPortfolio;