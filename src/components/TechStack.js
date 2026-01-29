import React from 'react';

const TechStack = () => {
  const languages = [
    { icon: '⚡', name: 'TypeScript' },
    { icon: '📜', name: 'JavaScript' },
    { icon: '🌐', name: 'HTML5' },
    { icon: '🎨', name: 'CSS3' }
  ];

  const frontend = [
    { icon: '▲', name: 'Next.js' },
    { icon: '⚛️', name: 'React' },
    { icon: '🔄', name: 'Redux' },
    { icon: '💨', name: 'TailwindCSS' },
    { icon: '🅱️', name: 'Bootstrap' }
  ];

  const backend = [
    { icon: '🟢', name: 'Node.js' },
    { icon: '⚡', name: 'Express.js' },
    { icon: '🍃', name: 'MongoDB' }
  ];

  const tools = [
    { icon: '🔥', name: 'Firebase' },
    { icon: '▲', name: 'Vercel' },
    { icon: '💻', name: 'VS Code' },
    { icon: '📦', name: 'Git' },
    { icon: '🐙', name: 'GitHub' }
  ];

  const design = [
    { icon: '🎨', name: 'Figma' },
    { icon: '🖌️', name: 'Adobe XD' },
    { icon: '🎭', name: 'Canva' }
  ];

  return (
    <section id="tech">
      <h2 className="section-title">Tech Stack</h2>
      
      <h3 style={{ color: 'var(--accent-cyan)', fontFamily: "'Orbitron', sans-serif", textAlign: 'center', margin: '2rem 0' }}>Programming Languages</h3>
      <div className="tech-grid">
        {languages.map((tech, index) => (
          <div key={index} className="tech-item">
            <div style={{ fontSize: '3rem' }}>{tech.icon}</div>
            <div className="tech-name">{tech.name}</div>
          </div>
        ))}
      </div>

      <h3 style={{ color: 'var(--accent-magenta)', fontFamily: "'Orbitron', sans-serif", textAlign: 'center', margin: '3rem 0 2rem' }}>Front-End Development</h3>
      <div className="tech-grid">
        {frontend.map((tech, index) => (
          <div key={index} className="tech-item">
            <div style={{ fontSize: '3rem' }}>{tech.icon}</div>
            <div className="tech-name">{tech.name}</div>
          </div>
        ))}
      </div>

      <h3 style={{ color: 'var(--accent-yellow)', fontFamily: "'Orbitron', sans-serif", textAlign: 'center', margin: '3rem 0 2rem' }}>Back-End Development</h3>
      <div className="tech-grid">
        {backend.map((tech, index) => (
          <div key={index} className="tech-item">
            <div style={{ fontSize: '3rem' }}>{tech.icon}</div>
            <div className="tech-name">{tech.name}</div>
          </div>
        ))}
      </div>

      <h3 style={{ color: 'var(--accent-cyan)', fontFamily: "'Orbitron', sans-serif", textAlign: 'center', margin: '3rem 0 2rem' }}>Tools & Deployment</h3>
      <div className="tech-grid">
        {tools.map((tech, index) => (
          <div key={index} className="tech-item">
            <div style={{ fontSize: '3rem' }}>{tech.icon}</div>
            <div className="tech-name">{tech.name}</div>
          </div>
        ))}
      </div>

      <h3 style={{ color: 'var(--accent-magenta)', fontFamily: "'Orbitron', sans-serif", textAlign: 'center', margin: '3rem 0 2rem' }}>Design Tools</h3>
      <div className="tech-grid">
        {design.map((tech, index) => (
          <div key={index} className="tech-item">
            <div style={{ fontSize: '3rem' }}>{tech.icon}</div>
            <div className="tech-name">{tech.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
