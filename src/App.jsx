

// import React, { useState, useEffect, useRef } from 'react';

// const TerminalPortfolio = () => {
//   const [input, setInput] = useState('');
//   const [output, setOutput] = useState([
//     { text: "welcome", isCommand: true },
//     { text: "Hi, I'm Mark Gatere, a Software & AI Engineer." },
//     { text: "Welcome to my interactive 'AI powered' portfolio terminal!" },
//     { text: "Type 'help' to see available commands." },
//   ]);
//   const [currentTime, setCurrentTime] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const terminalEndRef = useRef(null);

//   const navCommands = ['help', 'about', 'projects', 'skills', 'experience', 'contact', 'education', 'certifications', 'leadership', 'sudo', 'clear'];

//   // Effect to update time
//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       const timeString = now.toLocaleString('en-US', {
//         month: 'numeric',
//         day: 'numeric',
//         year: 'numeric',
//         hour: 'numeric',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: true
//       }).replace(',', '');
//       setCurrentTime(timeString);
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);
  
//   // Effect to scroll to bottom of terminal
//   useEffect(() => {
//     terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [output]);

//   const typeText = async (lines, command) => {
//     setIsTyping(true);
//     const newOutput = [...output, { text: command, isCommand: true }];
//     setOutput(newOutput);
    
//     for (let i = 0; i < lines.length; i++) {
//       await new Promise(resolve => setTimeout(resolve, 250)); // Delay between lines
//       setOutput(prev => [...prev, { text: lines[i], isTyping: true }]);
//     }
//     setIsTyping(false);
//   };

//   const processCommand = async (command) => {
//     if (isTyping) return; // Prevent new commands while typing
    
//     if (command.toLowerCase() === 'clear') {
//         setOutput([]);
//         return;
//     }

//     let lines;
//     switch (command.toLowerCase()) {
//       case 'help':
//         lines = [`Available commands: ${navCommands.join(', ')}`];
//         break;
//       case 'about':
//         lines = [
//           "I'm Vinay, a passionate Software & AI Engineer with expertise in:",
//           "• Full-stack development with modern frameworks",
//           "• AI/ML integration and implementation",
//           "• Building scalable and innovative solutions",
//           "",
//           "I love turning complex problems into elegant solutions through code."
//         ];
//         break;
//       case 'projects':
//         lines = [
//           "🚀 Featured Projects:",
//           "",
//           "1. AI-Powered Portfolio Terminal (Current)",
//           "   - Interactive terminal interface with React",
//           "   - Real-time command processing",
//           "   - Responsive design with modern UI",
//           "",
//           "2. Machine Learning Pipeline",
//           "   - End-to-end ML workflow automation",
//           "   - Data preprocessing and model deployment",
//           "   - RESTful API integration",
//           "",
//           "3. Cloud-Native Web Application",
//           "   - Microservices architecture",
//           "   - Docker containerization",
//           "   - AWS/Azure deployment",
//           "",
//           "4. Real-time Data Analytics Dashboard",
//           "   - Live data visualization",
//           "   - WebSocket integration",
//           "   - Interactive charts and metrics"
//         ];
//         break;
//       case 'skills':
//         lines = [
//           "💻 Technical Skills:",
//           "",
//           "Programming Languages:",
//           "• JavaScript/TypeScript, Python",
//           "• HTML5, CSS3, SQL, NoSQL",
//           "",
//           "Frameworks & Libraries:",
//           "• React, Node.js, Express,",
//           "• PyTorch, Scikit-learn",
//           "• Bootstrap, Tailwind CSS,",
//           "",
//           "Tools & Technologies:",
//           "• Git, Docker",
//           "• AWS",
//           "• MongoDB, PostgreSQL, Redis",
//           "• Linux, Windows, macOS"
//         ];
//         break;
//       case 'experience':
//         lines = [
//           "💼 Professional Experience:",
//           "",
//           "Senior Software Engineer | TechCorp Inc. (2022-Present)",
//           "• Led development of AI-powered applications",
//           "• Improved system performance by 40%",
//           "• Mentored junior developers",
//           "",
//           "Full Stack Developer | StartupXYZ (2020-2022)",
//           "• Built scalable web applications from scratch",
//           "• Implemented CI/CD pipelines",
//           "• Collaborated with cross-functional teams",
//           "",
//           "Software Developer Intern | BigTech Co. (2019-2020)",
//           "• Contributed to open-source projects",
//           "• Developed REST APIs and microservices",
//           "• Gained experience with cloud platforms"
//         ];
//         break;
//       case 'contact':
//         lines = [
//           "📧 Get in Touch:",
//           "",
//           "Email: vinaygandra7777@gmail.com",
//           "LinkedIn: linkedin.com/in/markgatere",
//           "GitHub: github.com/markgatere",
//           "Twitter: @markgatere",
//           "Portfolio: markgatere.dev",
//           "",
//           "📍 Location: Nairobi, Kenya",
//           "🌐 Open to remote opportunities worldwide"
//         ];
//         break;
//       case 'education':
//         lines = [
//           "🎓 Education:",
//           "",
//           "Bachelor of Science in Computer Science",
//           "University of Nairobi (2016-2020)",
//           "• Graduated Magna Cum Laude",
//           "• Relevant Coursework: AI, Machine Learning, Data Structures",
//           "",
//           "Certifications:",
//           "• AWS Certified Solutions Architect",
//           "• Google Cloud Professional Developer",
//           "• Microsoft Azure Fundamentals",
//           "• Certified Kubernetes Administrator (CKA)"
//         ];
//         break;
//       case 'certifications':
//         lines = [
//           "🏆 Certifications & Awards:",
//           "",
//           "Professional Certifications:",
//           "• AWS Certified Solutions Architect - Associate",
//           "• Google Cloud Professional Cloud Developer",
//           "• Microsoft Azure Developer Associate",
//           "• Certified Kubernetes Administrator (CKA)",
//           "• TensorFlow Developer Certificate",
//           "",
//           "Awards & Recognition:",
//           "• Best Innovation Award - TechCorp 2023",
//           "• Open Source Contributor of the Year 2022",
//           "• Hackathon Winner - AI Challenge 2021"
//         ];
//         break;
//       case 'leadership':
//         lines = [
//           "👥 Leadership & Community:",
//           "",
//           "Leadership Roles:",
//           "• Tech Lead - AI Development Team (2023-Present)",
//           "• Mentor - Google Developer Student Clubs",
//           "• Organizer - Nairobi Tech Meetup",
//           "",
//           "Community Involvement:",
//           "• Open source contributor (500+ commits)",
//           "• Technical speaker at conferences",
//           "• Code reviewer for junior developers",
//           "• Volunteer coding instructor for underserved communities",
//           "",
//           "Speaking Engagements:",
//           "• 'AI in Web Development' - DevFest 2023",
//           "• 'Building Scalable Applications' - Tech Summit 2022"
//         ];
//         break;
//       case 'sudo':
//         lines = [
//           "🔐 Access Granted - Advanced Commands:",
//           "",
//           "sudo make_coffee ☕",
//           "sudo deploy_to_production 🚀",
//           "sudo debug_life --fix-all-bugs 🐛",
//           "sudo rm -rf /stress /anxiety /imposter_syndrome",
//           "sudo chmod +x dreams.sh && ./dreams.sh",
//           "",
//           "Remember: With great power comes great responsibility! 🕷️"
//         ];
//         break;
//       default:
//         lines = [`command not found: ${command}`];
//         break;
//     }
    
//     await typeText(lines, command);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter' && input.trim() && !isTyping) {
//       processCommand(input.trim());
//       setInput('');
//     }
//   };

//   // Create a placeholder image with initials
//   const ProfileImage = () => (
//     <div className="w-48 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 flex flex-col items-center justify-center shadow-lg">
//       <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4">
//         <span className="text-white text-2xl font-bold">MG</span>
//       </div>
//       <div className="text-white text-sm font-mono text-center px-4">
//         <div className="mb-2">Mark Gatere</div>
//         <div className="text-gray-400">Software & AI Engineer</div>
//         <div className="text-green-400 text-xs mt-2">ID: DEV-2024-001</div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-black text-white font-mono h-screen flex flex-col relative overflow-hidden">
//       {/* Header */}
//       <div className='p-4 border-b border-green-800'>
//         <h1 className="text-3xl text-green-400 font-bold">VINAY </h1>
//         <p className="text-sm text-gray-400">Software Engineer</p>
//       </div>

//       <div className="flex flex-1 overflow-hidden">
//         {/* Left Panel */}
//         <aside className="w-1/3 flex justify-center items-start pt-16 px-6">
//           <div className="text-center">
//             <ProfileImage />
//             <p className="text-green-500 text-sm mt-4 animate-pulse">[Interactive 3D Card]</p>
//           </div>
//         </aside>

//         {/* Vertical Separator */}
//         <div className="w-px bg-green-800"></div>

//         {/* Right Panel */}
//         <main className="w-2/3 flex flex-col pl-6 pr-4">
//           {/* Top Navigation */}
//           <nav className="flex flex-wrap items-center gap-x-2 text-sm py-4 border-b border-green-800 mb-4">
//             {navCommands.map((cmd, index) => (
//               <React.Fragment key={cmd}>
//                 <button 
//                   onClick={() => processCommand(cmd)}
//                   className="text-green-400 hover:text-white transition-colors duration-200 px-1 py-1 rounded hover:bg-gray-800"
//                   disabled={isTyping}
//                 >
//                   {cmd}
//                 </button>
//                 {index < navCommands.length - 1 && <span className="text-gray-600">|</span>}
//               </React.Fragment>
//             ))}
//           </nav>
          
//           {/* Terminal Output */}
//           <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
//             {output.map((line, index) => (
//               <div key={index} className="mb-1">
//                 {line.isCommand ? (
//                   <div className="flex">
//                     <span className="text-blue-400">vinay@portfolio:~$</span>
//                     <span className="ml-2 text-white">{line.text}</span>
//                   </div>
//                 ) : (
//                   <div className="text-gray-300 whitespace-pre-line ml-4 leading-relaxed">
//                     {line.text}
//                   </div>
//                 )}
//               </div>
//             ))}

//             <div ref={terminalEndRef} />
//             <div className="flex items-center py-4">
//               <span className="text-blue-400">vinay@portfolio:~$</span>
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 className="bg-transparent text-white outline-none flex-1 ml-2 caret-green-400"
//                 autoFocus
//                 placeholder={isTyping ? "Processing..." : "Type a command..."}
//                 disabled={isTyping}
//               />
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Footer Elements */}
//       <footer className="absolute bottom-4 left-4 text-blue-400 text-sm">
        
//       </footer>
//       <footer className="absolute bottom-4 right-4 text-green-500 text-xs font-mono">
//         {currentTime}
//       </footer>
//     </div>
//   );
// };

// export default TerminalPortfolio;



import React, { useState, useEffect, useRef } from 'react';

const TerminalPortfolio = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { text: "welcome", isCommand: true },
    { text: "Hi, I'm Vinay Gandra, a Software & AI Engineer." },
    { text: "Welcome to my interactive 'AI powered' portfolio terminal!" },
    { text: "Type 'help' to see available commands." },
  ]);
  const [currentTime, setCurrentTime] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activePopup, setActivePopup] = useState(null);
  const terminalEndRef = useRef(null);

  const navCommands = ['help', 'about', 'projects', 'skills', 'experience', 'contact', 'education', 'certifications', 'leadership', 'sudo', 'clear'];

  // Effect to update time
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).replace(',', '');
      setCurrentTime(timeString);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  // Effect to scroll to bottom of terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  const typeText = async (lines, command) => {
    setIsTyping(true);
    const newOutput = [...output, { text: command, isCommand: true }];
    setOutput(newOutput);
    
    for (let i = 0; i < lines.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 250)); // Delay between lines
      setOutput(prev => [...prev, { text: lines[i], isTyping: true }]);
    }
    setIsTyping(false);
  };

  const getPopupContent = (command) => {
    switch (command.toLowerCase()) {
      case 'about':
        return {
          title: "About Me",
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
          )
        };
      case 'projects':
        return {
          title: "Featured Projects",
          content: (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-900/80 p-5 rounded-lg border border-green-500/50 hover:border-green-400 transition-colors">
                  <h4 className="text-green-400 font-semibold text-lg mb-2">AI-Powered Portfolio Terminal</h4>
                  <p className="text-gray-300 mb-3">Interactive terminal interface with React and real-time command processing</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">React</span>
                    <span className="bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">JavaScript</span>
                    <span className="bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">CSS</span>
                  </div>
                </div>
                <div className="bg-gray-900/80 p-5 rounded-lg border border-green-500/50 hover:border-green-400 transition-colors">
                  <h4 className="text-green-400 font-semibold text-lg mb-2">Machine Learning Pipeline</h4>
                  <p className="text-gray-300 mb-3">End-to-end ML workflow automation with data preprocessing and model deployment</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">Python</span>
                    <span className="bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">TensorFlow</span>
                    <span className="bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">Docker</span>
                  </div>
                </div>
                <div className="bg-gray-900/80 p-5 rounded-lg border border-green-500/50 hover:border-green-400 transition-colors">
                  <h4 className="text-green-400 font-semibold text-lg mb-2">Cloud-Native Web Application</h4>
                  <p className="text-gray-300 mb-3">Microservices architecture with Docker containerization and AWS deployment</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">Node.js</span>
                    <span className="bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">AWS</span>
                    <span className="bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">Docker</span>
                  </div>
                </div>
              </div>
            </div>
          )
        };
      case 'skills':
        return {
          title: "Technical Skills",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/30">
                  <h4 className="text-green-400 font-semibold mb-3 text-lg">Programming Languages</h4>
                  <div className="space-y-2">
                    {['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'].map(skill => (
                      <div key={skill} className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/30">
                  <h4 className="text-green-400 font-semibold mb-3 text-lg">Frameworks & Tools</h4>
                  <div className="space-y-2">
                    {['React', 'Node.js', 'Express', 'PyTorch', 'TensorFlow'].map(skill => (
                      <div key={skill} className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/30">
                <h4 className="text-green-400 font-semibold mb-3 text-lg">Cloud & DevOps</h4>
                <div className="grid grid-cols-2 gap-2">
                  {['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Git'].map(skill => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        };
      case 'experience':
        return {
          title: "Professional Experience",
          content: (
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6 relative">
                <div className="absolute -left-3 w-5 h-5 bg-green-500 rounded-full border-2 border-black"></div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/30">
                  <h4 className="text-green-400 font-semibold text-lg">Senior Software Engineer</h4>
                  <p className="text-green-300 font-medium">TechCorp Inc. • 2022 - Present</p>
                  <p className="text-gray-300 mt-2 leading-relaxed">Led development of AI-powered applications, improved system performance by 40%, and mentored junior developers in modern development practices.</p>
                </div>
              </div>
              <div className="border-l-4 border-green-500 pl-6 relative">
                <div className="absolute -left-3 w-5 h-5 bg-green-500 rounded-full border-2 border-black"></div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/30">
                  <h4 className="text-green-400 font-semibold text-lg">Full Stack Developer</h4>
                  <p className="text-green-300 font-medium">StartupXYZ • 2020 - 2022</p>
                  <p className="text-gray-300 mt-2 leading-relaxed">Built scalable web applications from scratch, implemented CI/CD pipelines, and developed microservices architecture.</p>
                </div>
              </div>
              <div className="border-l-4 border-green-500 pl-6 relative">
                <div className="absolute -left-3 w-5 h-5 bg-green-500 rounded-full border-2 border-black"></div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/30">
                  <h4 className="text-green-400 font-semibold text-lg">Software Developer Intern</h4>
                  <p className="text-green-300 font-medium">Innovation Labs • 2019 - 2020</p>
                  <p className="text-gray-300 mt-2 leading-relaxed">Developed web applications using React and Node.js, collaborated with cross-functional teams, and gained experience in agile development.</p>
                </div>
              </div>
            </div>
          )
        };
      case 'contact':
        return {
          title: "Get in Touch",
          content: (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-gray-300 text-lg">Let's connect and build something amazing together!</p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-black text-lg font-bold">@</span>
                    </div>
                    <div>
                      <p className="text-green-400 font-semibold text-lg">Email</p>
                      <p className="text-gray-300">vinaygandra7777@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-black text-sm font-bold">in</span>
                    </div>
                    <div>
                      <p className="text-green-400 font-semibold text-lg">LinkedIn</p>
                      <p className="text-gray-300">linkedin.com/in/vinaygandra</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-black text-sm font-bold">git</span>
                    </div>
                    <div>
                      <p className="text-green-400 font-semibold text-lg">GitHub</p>
                      <p className="text-gray-300">github.com/vinaygandra</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        };
      case 'education':
        return {
          title: "Education & Certifications",
          content: (
            <div className="space-y-6">
              <div className="bg-gray-900/50 p-5 rounded-lg border border-green-500/50">
                <h4 className="text-green-400 font-semibold text-lg mb-2">Bachelor of Science in Computer Science</h4>
                <p className="text-green-300 font-medium">University of Technology • 2016 - 2020</p>
                <p className="text-gray-300 mt-2">Graduated Magna Cum Laude with focus on AI and Machine Learning</p>
              </div>
              <div className="bg-gray-900/50 p-5 rounded-lg border border-green-500/50">
                <h4 className="text-green-400 font-semibold text-lg mb-4">Professional Certifications</h4>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'AWS Certified Solutions Architect - Professional',
                    'Google Cloud Professional Developer',
                    'Microsoft Azure Fundamentals',
                    'Certified Kubernetes Administrator (CKA)',
                    'Machine Learning Engineering Certification'
                  ].map(cert => (
                    <div key={cert} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        };
      default:
        return {
          title: "Information",
          content: (
            <div className="text-center">
              <p className="text-gray-300">Command information will appear here</p>
            </div>
          )
        };
    }
  };

  const processCommand = async (command) => {
    if (isTyping) return; // Prevent new commands while typing
    
    if (command.toLowerCase() === 'clear') {
        setOutput([]);
        return;
    }

    // Check if command should show popup
    if (['about', 'projects', 'skills', 'experience', 'contact', 'education', 'certifications', 'leadership'].includes(command.toLowerCase())) {
      setActivePopup(command.toLowerCase());
      const newOutput = [...output, { text: command, isCommand: true }];
      setOutput(newOutput);
      await new Promise(resolve => setTimeout(resolve, 100));
      setOutput(prev => [...prev, { text: `Opening display for ${command}...`, isTyping: true }]);
      return;
    }

    let lines;
    switch (command.toLowerCase()) {
      case 'help':
        lines = [`Available commands: ${navCommands.join(', ')}`];
        break;
      case 'sudo':
        lines = [
          "🔐 Access Granted - Advanced Commands:",
          "",
          "sudo make_coffee ☕",
          "sudo deploy_to_production 🚀",
          "sudo debug_life --fix-all-bugs 🐛",
          "sudo rm -rf /stress /anxiety /imposter_syndrome",
          "sudo chmod +x dreams.sh && ./dreams.sh",
          "",
          "Remember: With great power comes great responsibility! 🕷️"
        ];
        break;
      default:
        lines = [`command not found: ${command}`];
        break;
    }
    
    await typeText(lines, command);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim() && !isTyping) {
      processCommand(input.trim());
      setInput('');
    }
    if (e.key === 'Escape' && activePopup) {
      setActivePopup(null);
    }
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  // Create a placeholder image with initials
  const ProfileImage = () => (
    <div className="w-48 h-64 bg-gradient-to-br from-gray-900 to-black rounded-lg border-2 border-green-500 flex flex-col items-center justify-center shadow-2xl">
      <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-4 border-2 border-green-400">
        <span className="text-black text-2xl font-bold">VG</span>
      </div>
      <div className="text-white text-sm font-mono text-center px-4">
        <div className="mb-2 text-green-400 font-semibold">Vinay Gandra</div>
        <div className="text-gray-300">Software & AI Engineer</div>
        <div className="text-green-400 text-xs mt-2">ID: DEV-2024-001</div>
      </div>
    </div>
  );

  // Green-themed Popup Component
  const GreenPopup = ({ command, onClose }) => {
    const popupData = getPopupContent(command);
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div 
          className="relative bg-black/95 border-2 border-green-500 rounded-lg p-6 max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl"
          style={{
            boxShadow: '0 0 30px rgba(0, 255, 0, 0.3)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Green accent lines */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-green-500 to-transparent"></div>
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-green-500 to-transparent"></div>
          </div>
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <span className="text-black text-lg font-bold">×</span>
          </button>
          
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-green-400 mb-3">
              {popupData.title}
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            {popupData.content}
          </div>
          
          {/* Footer */}
          <div className="text-center mt-6 pt-4 border-t border-green-500/30">
            <p className="text-xs text-gray-400">Press ESC to close display</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black text-white font-mono h-screen flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className='p-4 border-b border-green-500'>
        <h1 className="text-3xl text-green-400 font-bold">VINAY GANDRA</h1>
        <p className="text-sm text-gray-400">Software & AI Engineer</p>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel */}
        <aside className="w-1/3 flex justify-center items-start pt-16 px-6">
          <div className="text-center">
            <ProfileImage />
            <p className="text-green-500 text-sm mt-4">[Interactive Profile Card]</p>
          </div>
        </aside>

        {/* Vertical Separator */}
        <div className="w-px bg-green-500"></div>

        {/* Right Panel */}
        <main className="w-2/3 flex flex-col pl-6 pr-4">
          {/* Top Navigation */}
          <nav className="flex flex-wrap items-center gap-x-2 text-sm py-4 border-b border-green-500 mb-4">
            {navCommands.map((cmd, index) => (
              <React.Fragment key={cmd}>
                <button 
                  onClick={() => processCommand(cmd)}
                  className="text-green-400 hover:text-green-300 hover:bg-green-900/30 transition-colors duration-200 px-2 py-1 rounded"
                  disabled={isTyping}
                >
                  {cmd}
                </button>
                {index < navCommands.length - 1 && <span className="text-green-600">|</span>}
              </React.Fragment>
            ))}
          </nav>
          
          {/* Terminal Output */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-gray-800">
            {output.map((line, index) => (
              <div key={index} className="mb-1">
                {line.isCommand ? (
                  <div className="flex">
                    <span className="text-green-400">vinay@portfolio:~$</span>
                    <span className="ml-2 text-white">{line.text}</span>
                  </div>
                ) : (
                  <div className="text-gray-300 whitespace-pre-line ml-4 leading-relaxed">
                    {line.text}
                  </div>
                )}
              </div>
            ))}

            <div ref={terminalEndRef} />
            <div className="flex items-center py-4">
              <span className="text-green-400">vinay@portfolio:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent text-white outline-none flex-1 ml-2 caret-green-400"
                autoFocus
                placeholder={isTyping ? "Processing..." : "Type a command..."}
                disabled={isTyping}
              />
            </div>
          </div>
        </main>
      </div>

      {/* Footer Elements */}
      <footer className="absolute bottom-4 right-4 text-green-400 text-xs font-mono">
        {currentTime}
      </footer>

      {/* Green Popup */}
      {activePopup && (
        <GreenPopup 
          command={activePopup} 
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default TerminalPortfolio;
