export const DrawerOverlay = ({ drawerOpen, isMobile, overlayRef }) => {
  if (!drawerOpen || !isMobile) {
    return null;
  }

  return <div className="pc-menu-overlay" ref={overlayRef} />;
};
