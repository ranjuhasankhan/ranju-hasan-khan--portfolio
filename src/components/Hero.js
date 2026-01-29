import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const texts = [
    'Full-Stack Developer | International Speaker | Peace Advocate 🕊️',
    'MERN Stack Specialist | React Enthusiast | Node.js Expert',
    'Building Technology for a Peaceful World 🌍',
    'Innovation + Empathy = Better Future 💡'
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timer;

    const type = () => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }
    };

    if (!isDeleting && charIndex === texts[textIndex].length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      const typingSpeed = isDeleting ? 50 : 100;
      timer = setTimeout(type, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  const smoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="glitch-wrapper">
          <h1 className="glitch">Ranju Hasan Khan</h1>
        </div>
        <p className="subtitle">
          <span className="typing-effect">{displayText}</span>
        </p>
        <div className="cta-buttons">
          <a href="#about" className="btn" onClick={(e) => smoothScroll(e, '#about')}>Explore Profile</a>
          <a href="#contact" className="btn btn-secondary" onClick={(e) => smoothScroll(e, '#contact')}>Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
