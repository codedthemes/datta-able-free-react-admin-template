import { useEffect, useRef, useState } from 'react';

// react-bootstrap
import Image from 'react-bootstrap/Image';

// third-party

// project-imports
import DrawerContent from './DrawerContent';
import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

// assets
import logo from 'assets/images/logo-white.svg';

// ==============================|| MAIN LAYOUT - DRAWER ||============================== //

export default function MainDrawer() {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;
  const [selectedItems, setSelectedItems] = useState();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current?.contains(event.target)) {
        handlerDrawerOpen(false);
      }
    };
    if (isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile]);

  return (
    <nav id="pc-sidebar" className={`pc-sidebar ${drawerOpen ? 'pc-sidebar-hide mob-sidebar-active' : ''} `}>
      <div className="navbar-wrapper">
        <div className="m-header">
          <a className="b-brand text-primary">
            <Image src={logo} fluid className="logo logo-lg" alt="logo" />
          </a>
        </div>

        <div className="navbar-content">
          <DrawerContent selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
        </div>
      </div>
      {drawerOpen && isMobile && <div className="pc-menu-overlay" ref={overlayRef} />}
    </nav>
  );
}
