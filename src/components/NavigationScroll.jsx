import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function ScrollToTop(props) {
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
