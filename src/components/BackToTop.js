import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.pageYOffset > 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <button
      id="backToTop"
      onClick={scrollToTop}
      className={visible ? 'visible' : ''}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '60px',
        height: '60px',
        background: 'var(--accent-cyan)',
        color: 'var(--bg-primary)',
        border: 'none',
        borderRadius: '50%',
        fontSize: '1.5rem',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0)',
        transition: 'all 0.3s',
        zIndex: 1000,
        fontWeight: '900'
      }}
    >
      ↑
    </button>
  );
};

export default BackToTop;
