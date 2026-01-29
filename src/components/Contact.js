import React from 'react';

const Contact = () => {
  const contacts = [
    { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/ranju-hasan-khan-5482952ba', sublabel: 'Professional Network' },
    { icon: '💻', label: 'GitHub', href: 'https://github.com/ranjuhasankhan', sublabel: 'Open Source Projects' },
    { icon: '📘', label: 'Facebook', href: 'https://www.facebook.com/hasanranjukhan', sublabel: 'Social Connection' },
    { icon: '📧', label: 'Email', href: 'mailto:ranjuhsankhan@gmail.com', sublabel: 'ranjuhsankhan@gmail.com' },
    { icon: '💬', label: 'WhatsApp', href: 'https://wa.me/8801839696587', sublabel: '+880 1839696587' },
    { icon: '☕', label: 'Buy Me Coffee', href: 'https://www.buymeacoffee.com/', sublabel: 'Support My Work' }
  ];

  const opportunities = [
    'Freelance Projects',
    'Full-Time Positions',
    'Collaborations',
    'Speaking Engagements',
    'Open Source Contributions',
    'Peace Initiatives'
  ];

  return (
    <section id="contact">
      <h2 className="section-title">Connect With Me</h2>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        Let's collaborate on exciting projects, discuss technology, or work together towards a more peaceful world. I'm always open to new opportunities and meaningful connections!
      </p>
      <div className="contact-grid">
        {contacts.map((contact, index) => (
          <a key={index} href={contact.href} className="contact-item" target="_blank" rel="noopener noreferrer">
            <div className="contact-icon">{contact.icon}</div>
            <div className="contact-label">{contact.label}</div>
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>{contact.sublabel}</p>
          </a>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h3 style={{ color: 'var(--accent-cyan)', fontFamily: "'Orbitron', sans-serif", marginBottom: '1rem' }}>Open to Opportunities</h3>
        <div className="skills-container">
          {opportunities.map((opp, index) => (
            <div key={index} className="skill-pill">{opp}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
