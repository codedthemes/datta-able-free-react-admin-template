import PropTypes from 'prop-types';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
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
  const location = useLocation();

  const isMenuActive = (menu, currentPath) => {
    if (menu.type === 'item') {
      return menu.url === currentPath;
    }
    if (menu.type === 'collapse' && Array.isArray(menu.children)) {
      return menu.children.some((child) => isMenuActive(child, currentPath));
    }
    return false;
  };

  const handleClick = (isRedirect) => {
    const isMobile = window.innerWidth <= 1024;
    setSelectedLevel(level);

    if (isMobile || !drawerOpen) {
      setOpen(!open);
      setSelected(!selected ? menu.id : null);
      setSelectedItems(!selected ? menu : selectedItems);
      if (menu.url && isRedirect) navigation(`${menu.url}`);
    }
  };

  useMemo(() => {
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

  const { pathname } = useLocation();

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
    if (menu.children) {
      menu.children.forEach((item) => {
        if (item.children?.length) {
          checkOpenForParent(item.children, menu.id);
        }

        if (item.link && !!matchPath({ path: item?.link, end: false }, pathname)) {
          setSelected(menu.id);
          setOpen(true);
        }

        if (item.url === pathname) {
          setSelected(menu.id);
          setOpen(true);
        }
      });
    }
  }, [pathname, menu.id, menu.children, checkOpenForParent]);

  useEffect(() => {
    if (menu.url === pathname) {
      setSelected(menu.id);
      setOpen(true);
    }
  }, [pathname, menu]);

  const navCollapse = menu.children?.map((item) => {
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
          <h6 key={item.id} color="error" className="align-center">
            Fix - Collapse or Item
          </h6>
        );
    }
  });

  return (
    <>
      <ListGroup className={`pc-item pc-hasmenu ${open && 'pc-trigger'}`}>
        <a className="pc-link" href="#!" onClick={() => handleClick(true)}>
          {menu.icon && (
            <span className="pc-micon">
              <i className={typeof menu.icon === 'string' ? menu.icon : menu.icon?.props.className} />
            </span>
          )}
          <span className="pc-mtext">{menu.title}</span>
          <span className="pc-arrow">
            <i className={`ti ti-chevron-right`} />
          </span>
          {menu.badge && <Badge className="pc-badge">{menu.badge}</Badge>}
        </a>
        {open === true && <ul className="pc-submenu">{navCollapse}</ul>}
      </ListGroup>
    </>
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
