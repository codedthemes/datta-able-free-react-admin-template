import { useCallback, useEffect, useRef, useState } from 'react';

// project-imports
import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

// ==============================|| COMMON DRAWER LOGIC HOOK ||============================== //

export const useDrawerLogic = () => {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened ?? false;

  const [selectedItems, setSelectedItems] = useState();
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 1024);

  const overlayRef = useRef(null);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //  Close Drawer on Outside Click (only for mobile)
  const handleClickOutside = useCallback((event) => {
    if (overlayRef.current?.contains(event.target)) {
      handlerDrawerOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobile, handleClickOutside]);

  return {
    drawerOpen,
    selectedItems,
    setSelectedItems,
    isMobile,
    overlayRef
  };
};
