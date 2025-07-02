import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// project-imports
import Breadcrumbs from 'components/Breadcrumbs';
import Drawer from './Drawer';
import Footer from './Footer';
import Header from './Header';
import useConfig from 'hooks/useConfig';
import NavigationScroll from 'components/NavigationScroll';

// ==============================|| MAIN LAYOUT ||============================== //

export default function MainLayout() {
  const { container } = useConfig();

  useEffect(() => {
    document.documentElement.setAttribute('data-pc-sidebar-caption', true);
    document.documentElement.setAttribute('data-pc-direction', 'ltr');
    document.documentElement.setAttribute('ddata-pc-preset', 'preset-1');
    document.documentElement.setAttribute('data-pc-drp-menu-icon', 'preset-1');
    document.documentElement.setAttribute('data-pc-layout', 'vertical');
    document.documentElement.setAttribute('data-pc-theme', 'light');
  }, []);

  return (
    <div>
      <Drawer />
      <Header />
      <div className="pc-container">
        <div className={`pc-content ${container && 'container'} `}>
          <Breadcrumbs />
          <NavigationScroll>
            <Outlet />
          </NavigationScroll>
        </div>
      </div>
      <Footer />
    </div>
  );
}
