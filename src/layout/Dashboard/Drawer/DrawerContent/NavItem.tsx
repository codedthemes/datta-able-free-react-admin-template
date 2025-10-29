import { useLocation, matchPath, Link } from 'react-router-dom';

// project-imports
import { handlerDrawerOpen } from 'api/menu';

// types
import { LinkTarget, NavItemType } from 'types/menu';

interface Props {
  item: NavItemType;
  level: number;
  isParents?: boolean;
}

// ==============================|| NAVIGATION - ITEM ||============================== //

export default function NavItem({ item }: Props) {
  const { pathname } = useLocation();

  const itemPath = item?.link || item?.url;
  const itemTarget: LinkTarget = item?.target ? '_blank' : '_self';
  const isSelected = itemPath ? !!matchPath({ path: itemPath, end: true }, pathname) : false;
  const isMobile = window.innerWidth <= 1024;

  const handleClick = () => {
    // close drawer on mobile
    if (isMobile) handlerDrawerOpen(false);
  };

  const renderIcon = () =>
    item?.icon && (
      <span className="pc-micon">
        <i className={item.icon} />
      </span>
    );

  return (
    <li className={`pc-item ${isSelected ? 'active' : ''}`}>
      <Link className="pc-link" to={item?.url || '#'} target={itemTarget} onClick={handleClick}>
        {renderIcon()}
        {item.title}
      </Link>
    </li>
  );
}
