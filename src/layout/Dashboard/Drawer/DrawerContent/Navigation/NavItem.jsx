import PropTypes from 'prop-types';
import { useLocation, matchPath, Link } from 'react-router-dom';

// project-imports
import { handlerDrawerOpen } from 'api/menu';

// ==============================|| NAVIGATION - ITEM ||============================== //

export default function NavItem({ item }) {
  const { pathname } = useLocation();
  const itemPath = item?.link || item?.url;

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }
  const isSelected = itemPath ? !!matchPath({ path: itemPath, end: true }, pathname) : false;
  return (
    <li className={`pc-item ${isSelected ? 'active' : ''} `}>
      <Link
        className="pc-link"
        to={item?.url || '#'}
        target={itemTarget}
        onClick={() => {
          handlerDrawerOpen(false);
        }}
      >
        {item?.icon && (
          <span className="pc-micon">
            <i className={typeof item.icon === 'string' ? item.icon : item.icon?.props.className} />
          </span>
        )}
        {item.title}
      </Link>
    </li>
  );
}

NavItem.propTypes = { item: PropTypes.any };
