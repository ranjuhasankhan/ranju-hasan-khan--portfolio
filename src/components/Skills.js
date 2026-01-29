import React from 'react';

const Skills = () => {
  const developmentSkills = [
    'Full-Stack Development',
    'MERN Stack',
    'Responsive Design',
    'RESTful APIs',
    'Database Design',
    'Version Control (Git)',
    'Agile Methodology',
    'Problem Solving'
  ];

  const softSkills = [
    'International Speaking',
    'Team Collaboration',
    'Project Management',
    'Creative Thinking',
    'Communication',
    'Leadership',
    'Peace Advocacy',
    'Cultural Awareness'
  ];

  const learningSkills = [
    'Advanced TypeScript',
    'System Design',
    'Cloud Architecture',
    'DevOps Practices',
    'AI/ML Integration',
    'Web3 Technologies'
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Professional Skills</h2>
      
      <h3 style={{ color: 'var(--accent-cyan)', fontFamily: "'Orbitron', sans-serif", textAlign: 'center', margin: '2rem 0' }}>Development Skills</h3>
      <div className="skills-container">
        {developmentSkills.map((skill, index) => (
          <div key={index} className="skill-pill">{skill}</div>
        ))}
      </div>

      <h3 style={{ color: 'var(--accent-magenta)', fontFamily: "'Orbitron', sans-serif", textAlign: 'center', margin: '3rem 0 2rem' }}>Soft Skills</h3>
      <div className="skills-container">
        {softSkills.map((skill, index) => (
          <div key={index} className="skill-pill">{skill}</div>
        ))}
      </div>

      <h3 style={{ color: 'var(--accent-yellow)', fontFamily: "'Orbitron', sans-serif", textAlign: 'center', margin: '3rem 0 2rem' }}>Currently Learning</h3>
      <div className="skills-container">
        {learningSkills.map((skill, index) => (
          <div key={index} className="skill-pill">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
