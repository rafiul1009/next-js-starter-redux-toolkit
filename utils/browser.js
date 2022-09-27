import { useState, useEffect, useLayoutEffect } from 'react';

const browserWidth = 0;
const browserHeight = 0;

export function getBrowserWidth() {
  if (typeof window !== 'undefined') {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  } else {
    return browserWidth;
  }
}

export function getBrowserHeight() {
  if (typeof window !== 'undefined') {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  } else {
    return browserHeight;
  }
}

export function useWindowWidth() {
  let browserWidth = 0;

  if (typeof window !== 'undefined') {
    browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || undefined);
  }

  const [size, setSize] = useState(browserWidth);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }
  }, []);
  return size;
}

export function useWindowHeight() {
  let browserHeight = 0;

  if (typeof window !== 'undefined') {
    browserHeight = Math.max(document.documentElement.clientHeight, window.innerWidth || 0);
  }

  const [size, setSize] = useState(browserHeight);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerHeight);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}