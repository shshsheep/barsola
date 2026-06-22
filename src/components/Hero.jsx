import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-overlay"></div>
      <div className="hero-content">
        <span className="hero-brand"> </span>
        <h1 className="hero-title">
          BAR SOLA<br />
        </h1>
        <p className="hero-desc">店還是要開，班還是要上。</p>
      </div>
      <div className="hero-scroll-indicator">
        <span className="arrow-down"></span>
      </div>
      <span className="hero-location">迦樓羅 - 海霧村 - 9區2號</span>
    </section>
  );
};

export default Hero;
