import React from 'react';

const Stats = () => {
  const stats = [
    { number: '1000+', label: 'Contributions' },
    { number: '50+', label: 'Repositories' },
    { number: '10+', label: 'Languages' },
    { number: '∞', label: 'Learning' }
  ];

  const building = [
    { icon: '🌐', title: 'Web Applications', description: 'Creating modern, scalable web applications with clean architecture, responsive design, and optimal performance using the latest web technologies.' },
    { icon: '🛠️', title: 'Developer Tools', description: 'Building tools and utilities that enhance developer productivity and streamline workflows for the development community.' },
    { icon: '🌍', title: 'Peace Tech', description: 'Developing technology solutions that promote global understanding, collaboration, and peaceful coexistence across cultures.' }
  ];

  return (
    <section id="stats">
      <h2 className="section-title">GitHub Statistics</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <img 
          src="https://github-readme-stats.vercel.app/api?username=ranjuhasankhan&show_icons=true&theme=radical&bg_color=0a0e27&title_color=00ffff&text_color=ffffff&icon_color=ff00ff" 
          alt="GitHub Stats" 
          style={{ maxWidth: '100%', borderRadius: '10px', border: '2px solid var(--accent-cyan)', margin: '1rem' }} 
        />
        
        <img 
          src="https://streak-stats.demolab.com?user=ranjuhasankhan&theme=radical&background=0a0e27&ring=00ffff&fire=ff00ff&currStreakLabel=ffff00" 
          alt="GitHub Streak" 
          style={{ maxWidth: '100%', margin: '1rem', borderRadius: '10px', border: '2px solid var(--accent-magenta)' }} 
        />
        
        <img 
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=ranjuhasankhan&layout=compact&theme=radical&bg_color=0a0e27&title_color=00ffff&text_color=ffffff" 
          alt="Top Languages" 
          style={{ maxWidth: '100%', margin: '1rem', borderRadius: '10px', border: '2px solid var(--accent-yellow)' }} 
        />
      </div>

      <h3 style={{ color: 'var(--accent-cyan)', fontFamily: "'Orbitron', sans-serif", textAlign: 'center', margin: '4rem 0 2rem' }}>What I'm Building</h3>
      <div className="about-grid">
        {building.map((item, index) => (
          <div key={index} className="about-card">
            <div className="card-icon">{item.icon}</div>
            <h3 className="card-title">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
