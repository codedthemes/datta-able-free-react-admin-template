import React from 'react';

// project-imports
import SimpleBarScroll from 'components/third-party/SimpleBar';
import Navigation from '../DrawerContent';

// types
import { NavItemType } from 'types/menu';

// ==============================|| VERTICAL DRAWER CONTENT ||============================== //

interface VerticalDrawerContentProps {
  selectedItems: NavItemType | undefined;
  setSelectedItems: React.Dispatch<React.SetStateAction<NavItemType | undefined>>;
}

export default function VerticalDrawerContent({ selectedItems, setSelectedItems }: VerticalDrawerContentProps) {
  return (
    <SimpleBarScroll style={{ height: 'calc(100vh - 74px)' }}>
      <Navigation selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
    </SimpleBarScroll>
  );
}
