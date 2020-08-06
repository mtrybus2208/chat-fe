import { useState, useEffect } from 'react';

function getBrowserWidth() {
  return document.documentElement.clientWidth || window.innerWidth;
}

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getBrowserWidth());

  function handleWidthChange() {
    setWindowWidth(getBrowserWidth());
  }

  useEffect(() => {
    window.addEventListener('resize', handleWidthChange);
    return () => {
      window.removeEventListener('resize', handleWidthChange);
    };
  }, []);

  return windowWidth;
}

export { useWindowWidth };
