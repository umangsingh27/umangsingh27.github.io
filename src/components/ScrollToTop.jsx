import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef(new Map());
  const activeKey = useRef(key);

  useEffect(() => {
    const savePosition = () => positions.current.set(activeKey.current, window.scrollY);
    const saveBeforeNavigation = (event) => {
      if (event.target.closest?.('a[href]')) savePosition();
    };

    window.history.scrollRestoration = 'manual';
    window.addEventListener('scroll', savePosition, { passive: true });
    document.addEventListener('click', saveBeforeNavigation, true);
    return () => {
      window.removeEventListener('scroll', savePosition);
      document.removeEventListener('click', saveBeforeNavigation, true);
      window.history.scrollRestoration = 'auto';
    };
  }, []);

  useLayoutEffect(() => {
    if (navigationType === 'POP') {
      const savedPosition = positions.current.get(key);
      activeKey.current = key;
      if (savedPosition !== undefined) window.scrollTo(0, savedPosition);
      else if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
      return;
    }

    activeKey.current = key;

    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
      return;
    }

    window.scrollTo(0, 0);
    document.getElementById('main-content')?.focus({ preventScroll: true });
  }, [pathname, hash, key, navigationType]);

  return null;
}
