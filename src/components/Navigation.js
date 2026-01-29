import React from 'react';

const Navigation = () => {
  const smoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav>
      <ul>
        <li><a href="#about" onClick={(e) => smoothScroll(e, '#about')}>About</a></li>
        <li><a href="#skills" onClick={(e) => smoothScroll(e, '#skills')}>Skills</a></li>
        <li><a href="#tech" onClick={(e) => smoothScroll(e, '#tech')}>Tech Stack</a></li>
        <li><a href="#stats" onClick={(e) => smoothScroll(e, '#stats')}>GitHub</a></li>
        <li><a href="#peace" onClick={(e) => smoothScroll(e, '#peace')}>Peace</a></li>
        <li><a href="#contact" onClick={(e) => smoothScroll(e, '#contact')}>Connect</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
