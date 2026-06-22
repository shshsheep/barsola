import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo" onClick={(e) => handleLinkClick(e, 'hero')}>BAR SOLA</a>
        <button 
          className={`nav-toggle ${isOpen ? 'active' : ''}`} 
          aria-label="Toggle navigation" 
          onClick={toggleMenu}
        >
          <span 
            className="bar" 
            style={{ transform: isOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none' }}
          ></span>
          <span 
            className="bar" 
            style={{ opacity: isOpen ? '0' : '1' }}
          ></span>
          <span 
            className="bar" 
            style={{ transform: isOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none' }}
          ></span>
        </button>
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`} id="navMenu">
          <ul>
            <li>
              <a href="#story" className="nav-link" onClick={(e) => handleLinkClick(e, 'story')}>Members</a>
            </li>
            <li>
              <a href="#menu" className="nav-link" onClick={(e) => handleLinkClick(e, 'menu')}>Menu</a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
