import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const checkScrollTop = () => {
    if (window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowScroll(false);
  };


  return (<>
    <button type="button" className={`scroll-to-top position-fixed end-0 bottom-0 d-flex align-items-center justify-content-center btn btn-sm ${showScroll ? 'active' : ''}`} onClick={scrollTop}>
      <span className="icon">
        <FontAwesomeIcon icon={faArrowUp} />
      </span>
    </button>
  </>);
};

export default Footer;