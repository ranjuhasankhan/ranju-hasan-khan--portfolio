import React from 'react';

const Footer = () => {
  const footerLinks = [
    { text: 'About', href: '#about' },
    { text: 'Skills', href: '#skills' },
    { text: 'Tech Stack', href: '#tech' },
    { text: 'GitHub', href: '#stats' },
    { text: 'Peace', href: '#peace' },
    { text: 'Contact', href: '#contact' }
  ];

  const smoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer>
      <div className="footer-content">
        <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.5rem', marginBottom: '1rem', background: 'linear-gradient(45deg, var(--accent-cyan), var(--accent-magenta))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Ranju Hasan Khan
        </p>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontFamily: "'JetBrains Mono', monospace" }}>
          Full-Stack Developer | International Speaker | Peace Advocate
        </p>
        <div className="footer-links">
          {footerLinks.map((link, index) => (
            <a key={index} href={link.href} onClick={(e) => smoothScroll(e, link.href)}>{link.text}</a>
          ))}
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '2rem' }}>
          © 2026 Ranju Hasan Khan. Building a better world through code and compassion.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '1rem', fontStyle: 'italic' }}>
          "Innovation + Empathy = Peaceful Future"
        </p>
      </div>
    </footer>
  );
};

export default Footer;
