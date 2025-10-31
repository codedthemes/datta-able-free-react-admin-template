import PropTypes from 'prop-types';
import { useLocation, matchPath, Link } from 'react-router-dom';

// project-imports
import { handlerDrawerOpen } from 'api/menu';

// ==============================|| NAVIGATION - ITEM ||============================== //

export default function NavItem({ item }) {
  const { pathname } = useLocation();

  const itemPath = item?.link || item?.url;
  const itemTarget = item?.target ? '_blank' : '_self';
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

NavItem.propTypes = { item: PropTypes.any };
