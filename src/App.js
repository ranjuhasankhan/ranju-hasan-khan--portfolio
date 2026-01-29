import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Stats from './components/Stats';
import Peace from './components/Peace';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Particles from './components/Particles';
import './App.css';

function App() {
  useEffect(() => {
    // Scroll animations
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="App">
      <div className="bg-grid"></div>
      <Particles />
      <Navigation />
      <Hero />
      <div className="container">
        <About />
        <Skills />
        <TechStack />
        <Stats />
        <Peace />
        <Contact />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
