import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';

// project-imports
import NavItem from './NavItem';
import { useGetMenuMaster } from 'api/menu';

// ==============================|| NAVIGATION - COLLAPSE ||============================== //

export default function NavCollapse({ menu, level, parentId, setSelectedItems, selectedItems, setSelectedLevel, selectedLevel }) {
  const { menuMaster } = useGetMenuMaster();
  const navigation = useNavigate();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const { pathname } = useLocation();

  const isMenuActive = useCallback((menu, currentPath) => {
    if (menu.type === 'item') {
      return menu.url === currentPath;
    }
    if (menu.type === 'collapse' && Array.isArray(menu.children)) {
      return menu.children.some((child) => isMenuActive(child, currentPath));
    }
    return false;
  }, []);

  const handleClick = (isRedirect) => {
    setSelectedLevel(level);
    const willOpen = !open;
    setOpen(willOpen);
    setSelected(willOpen ? menu.id : null);
    setSelectedItems(willOpen ? menu : undefined);
    if (menu.url && isRedirect) navigation(menu.url);
  };

  useEffect(() => {
    if (selected === selectedItems?.id) {
      if (level === 1) {
        setOpen(true);
      }
    } else {
      if (level === selectedLevel) {
        setOpen(false);

        if (drawerOpen) {
          setSelected(null);
        }
      }
    }
  }, [selectedItems, level, selected, drawerOpen, selectedLevel]);

  useEffect(() => {
    if (pathname === menu.url) {
      setSelected(menu.id);
    }
  }, [pathname, menu.id, menu.url]);

  const checkOpenForParent = useCallback(
    (child, id) => {
      child.forEach((item) => {
        if (item.url === pathname) {
          setOpen(true);
          setSelected(id);
        }
      });
    },
    [pathname]
  );

  // menu collapse for sub-levels
  useEffect(() => {
    setOpen(false);
    if (!menu.children) return;

    for (const item of menu.children) {
      if (item.children?.length) {
        checkOpenForParent(item.children, menu.id);
      }

      if (item.link && matchPath({ path: item?.link, end: false }, pathname)) {
        setSelected(menu.id);
        setOpen(true);
        break;
      }

      if (item.url === pathname) {
        setSelected(menu.id);
        setOpen(true);
        break;
      }
    }
  }, [pathname, menu.id, menu.children, checkOpenForParent]);

  useEffect(() => {
    if (menu.url === pathname) {
      setSelected(menu.id);
      setOpen(true);
    }
  }, [pathname, menu.url, menu.id]);
  const navCollapse = useMemo(
    () =>
      menu.children?.map((item) => {
        switch (item.type) {
          case 'collapse':
            return (
              <NavCollapse
                key={item.id}
                setSelectedItems={setSelectedItems}
                setSelectedLevel={setSelectedLevel}
                selectedLevel={selectedLevel}
                selectedItems={selectedItems}
                menu={item}
                level={level + 1}
                parentId={parentId}
              />
            );
          case 'item':
            return <NavItem key={item.id} item={item} level={level + 1} />;
          default:
            return (
              <h6 key={item.id} className="text-danger align-center">
                Fix - Collapse or Item
              </h6>
            );
        }
      }) ?? [],
    [menu.children, setSelectedItems, setSelectedLevel, selectedLevel, selectedItems, level, parentId]
  );

  return (
    <ListGroup className={`pc-item pc-hasmenu ${open ? 'pc-trigger' : ''}`}>
      <Link className="pc-link" to="#!" onClick={() => handleClick(true)}>
        {menu.icon && (
          <span className="pc-micon">
            <i className={menu.icon} />
          </span>
        )}
        <span className="pc-mtext">{menu.title}</span>
        <span className="pc-arrow">
          <i className={`ti ti-chevron-right`} />
        </span>
        {menu.badge && <Badge className="pc-badge">{menu.badge}</Badge>}
      </Link>
      <Collapse in={open} mountOnEnter unmountOnExit>
        <div>
          <ul className="pc-submenu">{navCollapse}</ul>
        </div>
      </Collapse>
    </ListGroup>
  );
}

NavCollapse.propTypes = {
  menu: PropTypes.any,
  level: PropTypes.number,
  parentId: PropTypes.string,
  setSelectedItems: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
  selectedItems: PropTypes.any,
  setSelectedLevel: PropTypes.func,
  selectedLevel: PropTypes.number
};
