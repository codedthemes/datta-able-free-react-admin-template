import * as React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
interface ScrollToTopProps {
  children: React.ReactNode;
}
function ScrollToTop(props: ScrollToTopProps) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  return <>{props.children || null}</>;
}
export default ScrollToTop;
