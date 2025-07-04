import { Outlet } from 'react-router-dom';

// project-imports
import Breadcrumbs from 'components/Breadcrumbs';
import Drawer from './Drawer';
import Footer from './Footer';
import Header from './Header';
import NavigationScroll from 'components/NavigationScroll';

// ==============================|| MAIN LAYOUT ||============================== //

export default function MainLayout() {
  return (
    <div>
      <Drawer />
      <Header />
      <div className="pc-container">
        <div className="pc-content">
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
