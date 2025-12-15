// project-imports
import { DrawerHeader, DrawerOverlay, useDrawerLogic } from '../common';
import VerticalDrawerContent from './VerticalDrawerContent';

// ==============================|| VERTICAL DRAWER ||============================== //

export const VerticalDrawer = () => {
  const { drawerOpen, selectedItems, setSelectedItems, isMobile, overlayRef } = useDrawerLogic();

  return (
    <nav id="pc-sidebar" className={`pc-sidebar ${drawerOpen && 'pc-sidebar-hide mob-sidebar-active'}`}>
      <div className="navbar-wrapper">
        <DrawerHeader />
        <div className="navbar-content">
          <VerticalDrawerContent selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
        </div>
      </div>
      <DrawerOverlay drawerOpen={drawerOpen} isMobile={isMobile} overlayRef={overlayRef} />
    </nav>
  );
};
