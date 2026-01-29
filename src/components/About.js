import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-card">
          <div className="card-icon">💻</div>
          <h3 className="card-title">Full-Stack Developer</h3>
          <p>Specializing in modern, scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Expert in building responsive interfaces, designing intuitive user experiences, and implementing robust server-side solutions that bring innovative ideas to life.</p>
        </div>
        <div className="about-card">
          <div className="card-icon">🌍</div>
          <h3 className="card-title">International Speaker</h3>
          <p>Passionate advocate for world peace, using technology and communication to bridge divides and create meaningful global connections. Speaking at international forums to promote peace, understanding, and collaborative solutions.</p>
        </div>
        <div className="about-card">
          <div className="card-icon">🚀</div>
          <h3 className="card-title">Innovation Focus</h3>
          <p>Dedicated to using technology and empathy to create a better, more connected world through innovative solutions and collaborative projects. Constantly learning and exploring new technologies to stay at the cutting edge.</p>
        </div>
      </div>

      <div className="code-block">
        <div className="code-line"><span className="code-comment">// My Developer Profile</span></div>
        <div className="code-line">const ranju = {'{'}</div>
        <div className="code-line">  &nbsp;&nbsp;role: "Full-Stack Developer",</div>
        <div className="code-line">  &nbsp;&nbsp;stack: ["MongoDB", "Express.js", "React", "Node.js"],</div>
        <div className="code-line">  &nbsp;&nbsp;learning: ["Full-Stack Development", "UI/UX Design", "Peace Advocacy"],</div>
        <div className="code-line">  &nbsp;&nbsp;openTo: ["Web Development Projects", "Peace-driven Initiatives"],</div>
        <div className="code-line">  &nbsp;&nbsp;mission: "Innovation + Empathy = Peaceful Future",</div>
        <div className="code-line">  &nbsp;&nbsp;expertise: {'{'}</div>
        <div className="code-line">  &nbsp;&nbsp;&nbsp;&nbsp;frontend: ["Next.js", "React", "Redux", "TailwindCSS"],</div>
        <div className="code-line">  &nbsp;&nbsp;&nbsp;&nbsp;backend: ["Node.js", "Express", "MongoDB"],</div>
        <div className="code-line">  &nbsp;&nbsp;&nbsp;&nbsp;tools: ["Firebase", "Vercel", "Git", "VS Code"],</div>
        <div className="code-line">  &nbsp;&nbsp;&nbsp;&nbsp;design: ["Figma", "Adobe XD", "Canva"]</div>
        <div className="code-line">  &nbsp;&nbsp;{'}'},</div>
        <div className="code-line">  &nbsp;&nbsp;contact: "ranjuhsankhan@gmail.com",</div>
        <div className="code-line">  &nbsp;&nbsp;whatsapp: "+880 1839696587",</div>
        <div className="code-line">  &nbsp;&nbsp;philosophy: "Clean code, creative design, world peace"</div>
        <div className="code-line">{'}'};</div>
      </div>

      <h3 style={{ color: 'var(--accent-cyan)', fontFamily: "'Orbitron', sans-serif", textAlign: 'center', margin: '3rem 0 2rem' }}>Core Competencies</h3>
      <div className="about-grid">
        <div className="about-card">
          <div className="card-icon">⚛️</div>
          <h3 className="card-title">Frontend Excellence</h3>
          <p>Expert in building responsive, user-friendly interfaces with React, Next.js, and modern CSS frameworks. Focused on creating seamless user experiences with attention to detail and performance optimization.</p>
        </div>
        <div className="about-card">
          <div className="card-icon">🔧</div>
          <h3 className="card-title">Backend Mastery</h3>
          <p>Proficient in server-side development with Node.js and Express.js. Skilled in database design and management with MongoDB, API development, and implementing secure authentication systems.</p>
        </div>
        <div className="about-card">
          <div className="card-icon">🎨</div>
          <h3 className="card-title">UI/UX Design</h3>
          <p>Strong design sensibility with experience in Figma, Adobe XD, and Canva. Creating intuitive interfaces that balance aesthetics with functionality and accessibility.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
