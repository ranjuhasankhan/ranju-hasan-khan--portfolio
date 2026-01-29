import React from 'react';

const Peace = () => {
  const peaceMissions = [
    { icon: '🤝', title: 'Global Collaboration', description: 'Working across borders to unite people through shared goals and mutual understanding. Building bridges through technology and communication.' },
    { icon: '💡', title: 'Technology for Good', description: 'Leveraging digital innovation to solve humanitarian challenges and promote peace. Creating accessible solutions that empower communities worldwide.' },
    { icon: '❤️', title: 'Empathy-Driven Development', description: 'Creating solutions that prioritize human connection and compassionate action. Technology with heart, designed to serve humanity\'s highest ideals.' }
  ];

  return (
    <section id="peace">
      <h2 className="section-title">World Peace Advocacy</h2>
      <div className="peace-section">
        <p className="peace-quote">
          "Passionate about Establishing World Peace through Technology, Empathy, and Global Collaboration"
        </p>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-secondary)', margin: '2rem 0' }}>
          As an International Speaker for World Peace 🕊️, I believe that innovation and empathy can work together to build a peaceful, sustainable future for all humanity. Technology is not just about code—it's about connecting people, fostering understanding, and creating solutions that serve the greater good.
        </p>
        <div className="about-grid" style={{ marginTop: '3rem' }}>
          {peaceMissions.map((mission, index) => (
            <div key={index} className="about-card">
              <div className="card-icon">{mission.icon}</div>
              <h3 className="card-title">{mission.title}</h3>
              <p>{mission.description}</p>
            </div>
          ))}
        </div>

        <h3 style={{ color: 'var(--accent-yellow)', fontFamily: "'Orbitron', sans-serif", textAlign: 'center', margin: '4rem 0 2rem' }}>My Peace Mission</h3>
        <div className="code-block" style={{ borderColor: 'var(--accent-yellow)' }}>
          <div className="code-line"><span className="code-comment">// My Vision for a Peaceful World</span></div>
          <div className="code-line" style={{ color: 'var(--accent-yellow)' }}>const peaceMission = {'{'}</div>
          <div className="code-line" style={{ color: 'var(--accent-yellow)' }}>  &nbsp;&nbsp;vision: "A world united by technology and compassion",</div>
          <div className="code-line" style={{ color: 'var(--accent-yellow)' }}>  &nbsp;&nbsp;approach: ["Dialogue", "Innovation", "Education", "Empathy"],</div>
          <div className="code-line" style={{ color: 'var(--accent-yellow)' }}>  &nbsp;&nbsp;goals: [</div>
          <div className="code-line" style={{ color: 'var(--accent-yellow)' }}>  &nbsp;&nbsp;&nbsp;&nbsp;"Bridge cultural divides through technology",</div>
          <div className="code-line" style={{ color: 'var(--accent-yellow)' }}>  &nbsp;&nbsp;&nbsp;&nbsp;"Promote understanding through global platforms",</div>
          <div className="code-line" style={{ color: 'var(--accent-yellow)' }}>  &nbsp;&nbsp;&nbsp;&nbsp;"Create solutions for humanitarian challenges",</div>
          <div className="code-line" style={{ color: 'var(--accent-yellow)' }}>  &nbsp;&nbsp;&nbsp;&nbsp;"Inspire next generation of peace advocates"</div>
          <div className="code-line" style={{ color: 'var(--accent-yellow)' }}>  &nbsp;&nbsp;],</div>
          <div className="code-line" style={{ color: 'var(--accent-yellow)' }}>  &nbsp;&nbsp;belief: "Every line of code can contribute to a better world"</div>
          <div className="code-line" style={{ color: 'var(--accent-yellow)' }}>{'}'};</div>
        </div>
      </div>
    </section>
  );
};

export default Peace;
