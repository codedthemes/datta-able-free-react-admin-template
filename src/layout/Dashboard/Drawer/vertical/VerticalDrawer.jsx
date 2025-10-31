import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import Image from 'react-bootstrap/Image';

// project-imports
import VerticalDrawerContent from './VerticalDrawerContent';
import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

// assets
import logo from 'assets/images/logo-white.svg';

// ==============================|| VERTICAL DRAWER ||============================== //

export const VerticalDrawer = () => {
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
    <nav id="pc-sidebar" className={`pc-sidebar ${drawerOpen && 'pc-sidebar-hide mob-sidebar-active'}`}>
      <div className="navbar-wrapper">
        <div className="m-header">
          <Link to="/" className="b-brand text-primary">
            <Image src={logo} fluid className="logo logo-lg" alt="logo" />
          </Link>
        </div>
        <div className="navbar-content">
          <VerticalDrawerContent selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
        </div>
      </div>

      {drawerOpen && isMobile && <div className="pc-menu-overlay" ref={overlayRef} />}
    </nav>
  );
};
