"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);  // Button becomes visible after scrolling 300px
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);  // Clean up event listener
  }, []);

  return (
    <Button
      className="BackToTop"
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }} 
      title="Back to Top"
    >
      <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: '20px' }} />
    </Button>
  );
};

export default ScrollButton;
