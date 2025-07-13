

import React, { useState, useEffect, useRef } from 'react';

const TerminalPortfolio = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { text: "welcome", isCommand: true },
    { text: "Hi, I'm Mark Gatere, a Software & AI Engineer." },
    { text: "Welcome to my interactive 'AI powered' portfolio terminal!" },
    { text: "Type 'help' to see available commands." },
  ]);
  const [currentTime, setCurrentTime] = useState('');
  const [isTyping, setIsTyping] = useState(false);
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

  const processCommand = async (command) => {
    if (isTyping) return; // Prevent new commands while typing
    
    if (command.toLowerCase() === 'clear') {
        setOutput([]);
        return;
    }

    let lines;
    switch (command.toLowerCase()) {
      case 'help':
        lines = [`Available commands: ${navCommands.join(', ')}`];
        break;
      case 'about':
        lines = [
          "I'm Vinay, a passionate Software & AI Engineer with expertise in:",
          "• Full-stack development with modern frameworks",
          "• AI/ML integration and implementation",
          "• Building scalable and innovative solutions",
          "",
          "I love turning complex problems into elegant solutions through code."
        ];
        break;
      case 'projects':
        lines = [
          "🚀 Featured Projects:",
          "",
          "1. AI-Powered Portfolio Terminal (Current)",
          "   - Interactive terminal interface with React",
          "   - Real-time command processing",
          "   - Responsive design with modern UI",
          "",
          "2. Machine Learning Pipeline",
          "   - End-to-end ML workflow automation",
          "   - Data preprocessing and model deployment",
          "   - RESTful API integration",
          "",
          "3. Cloud-Native Web Application",
          "   - Microservices architecture",
          "   - Docker containerization",
          "   - AWS/Azure deployment",
          "",
          "4. Real-time Data Analytics Dashboard",
          "   - Live data visualization",
          "   - WebSocket integration",
          "   - Interactive charts and metrics"
        ];
        break;
      case 'skills':
        lines = [
          "💻 Technical Skills:",
          "",
          "Programming Languages:",
          "• JavaScript/TypeScript, Python",
          "• HTML5, CSS3, SQL, NoSQL",
          "",
          "Frameworks & Libraries:",
          "• React, Node.js, Express,",
          "• PyTorch, Scikit-learn",
          "• Bootstrap, Tailwind CSS,",
          "",
          "Tools & Technologies:",
          "• Git, Docker",
          "• AWS",
          "• MongoDB, PostgreSQL, Redis",
          "• Linux, Windows, macOS"
        ];
        break;
      case 'experience':
        lines = [
          "💼 Professional Experience:",
          "",
          "Senior Software Engineer | TechCorp Inc. (2022-Present)",
          "• Led development of AI-powered applications",
          "• Improved system performance by 40%",
          "• Mentored junior developers",
          "",
          "Full Stack Developer | StartupXYZ (2020-2022)",
          "• Built scalable web applications from scratch",
          "• Implemented CI/CD pipelines",
          "• Collaborated with cross-functional teams",
          "",
          "Software Developer Intern | BigTech Co. (2019-2020)",
          "• Contributed to open-source projects",
          "• Developed REST APIs and microservices",
          "• Gained experience with cloud platforms"
        ];
        break;
      case 'contact':
        lines = [
          "📧 Get in Touch:",
          "",
          "Email: vinaygandra7777@gmail.com",
          "LinkedIn: linkedin.com/in/markgatere",
          "GitHub: github.com/markgatere",
          "Twitter: @markgatere",
          "Portfolio: markgatere.dev",
          "",
          "📍 Location: Nairobi, Kenya",
          "🌐 Open to remote opportunities worldwide"
        ];
        break;
      case 'education':
        lines = [
          "🎓 Education:",
          "",
          "Bachelor of Science in Computer Science",
          "University of Nairobi (2016-2020)",
          "• Graduated Magna Cum Laude",
          "• Relevant Coursework: AI, Machine Learning, Data Structures",
          "",
          "Certifications:",
          "• AWS Certified Solutions Architect",
          "• Google Cloud Professional Developer",
          "• Microsoft Azure Fundamentals",
          "• Certified Kubernetes Administrator (CKA)"
        ];
        break;
      case 'certifications':
        lines = [
          "🏆 Certifications & Awards:",
          "",
          "Professional Certifications:",
          "• AWS Certified Solutions Architect - Associate",
          "• Google Cloud Professional Cloud Developer",
          "• Microsoft Azure Developer Associate",
          "• Certified Kubernetes Administrator (CKA)",
          "• TensorFlow Developer Certificate",
          "",
          "Awards & Recognition:",
          "• Best Innovation Award - TechCorp 2023",
          "• Open Source Contributor of the Year 2022",
          "• Hackathon Winner - AI Challenge 2021"
        ];
        break;
      case 'leadership':
        lines = [
          "👥 Leadership & Community:",
          "",
          "Leadership Roles:",
          "• Tech Lead - AI Development Team (2023-Present)",
          "• Mentor - Google Developer Student Clubs",
          "• Organizer - Nairobi Tech Meetup",
          "",
          "Community Involvement:",
          "• Open source contributor (500+ commits)",
          "• Technical speaker at conferences",
          "• Code reviewer for junior developers",
          "• Volunteer coding instructor for underserved communities",
          "",
          "Speaking Engagements:",
          "• 'AI in Web Development' - DevFest 2023",
          "• 'Building Scalable Applications' - Tech Summit 2022"
        ];
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
  };

  // Create a placeholder image with initials
  const ProfileImage = () => (
    <div className="w-48 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 flex flex-col items-center justify-center shadow-lg">
      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4">
        <span className="text-white text-2xl font-bold">MG</span>
      </div>
      <div className="text-white text-sm font-mono text-center px-4">
        <div className="mb-2">Mark Gatere</div>
        <div className="text-gray-400">Software & AI Engineer</div>
        <div className="text-green-400 text-xs mt-2">ID: DEV-2024-001</div>
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white font-mono h-screen flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className='p-4 border-b border-green-800'>
        <h1 className="text-3xl text-green-400 font-bold">VINAY </h1>
        <p className="text-sm text-gray-400">Software Engineer</p>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel */}
        <aside className="w-1/3 flex justify-center items-start pt-16 px-6">
          <div className="text-center">
            <ProfileImage />
            <p className="text-green-500 text-sm mt-4 animate-pulse">[Interactive 3D Card]</p>
          </div>
        </aside>

        {/* Vertical Separator */}
        <div className="w-px bg-green-800"></div>

        {/* Right Panel */}
        <main className="w-2/3 flex flex-col pl-6 pr-4">
          {/* Top Navigation */}
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
          
          {/* Terminal Output */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            {output.map((line, index) => (
              <div key={index} className="mb-1">
                {line.isCommand ? (
                  <div className="flex">
                    <span className="text-blue-400">vinay@portfolio:~$</span>
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
              <span className="text-blue-400">vinay@portfolio:~$</span>
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
      <footer className="absolute bottom-4 left-4 text-blue-400 text-sm">
        
      </footer>
      <footer className="absolute bottom-4 right-4 text-green-500 text-xs font-mono">
        {currentTime}
      </footer>
    </div>
  );
};

export default TerminalPortfolio;