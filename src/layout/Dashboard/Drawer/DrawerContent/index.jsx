import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// react-bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

// project-imports
import Navigation from './Navigation';
import { useGetMenuMaster } from 'api/menu';
import SimpleBarScroll from 'components/third-party/SimpleBar';
import menuItems from 'menu-items';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

export default function DrawerContent({ selectedItems, setSelectedItems }) {
  const [selectTab, setSelectTab] = useState(menuItems.items[0]);
  const { menuMaster } = useGetMenuMaster();
  const { pathname } = useLocation();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;

  const [open, setOpen] = useState({});

  const handleClick = (item) => {
    if (!item.id) return;

    const isMobile = window.innerWidth <= 1024;

    setOpen((prev) => ({
      ...prev,
      [item.id]: !prev[item.id]
    }));

    if (isMobile || !drawerOpen) {
      setSelectedItems(item);
    }
  };

  const isActive = useCallback(
    (item) => {
      if (!item.url) return false;
      return pathname.toLowerCase().includes(item.url.toLowerCase());
    },
    [pathname]
  );

  const autoOpenParents = useCallback(
    (items) => {
      const openMap = {};

      const findAndMark = (entries = []) => {
        entries.forEach((item) => {
          if (item.children) {
            const match = item.children.find((child) => isActive(child) || child.children?.some(isActive));
            if (match) openMap[item.id] = true;

            findAndMark(item.children);
          }
        });
      };

      findAndMark(items);
      setOpen(openMap);
    },
    [isActive, setOpen]
  );

  useEffect(() => {
    autoOpenParents(selectTab?.children);
  }, [autoOpenParents, selectTab]);
  return (
    <>
      <SimpleBarScroll style={{ height: 'calc(100vh - 74px)' }}>
        <Navigation selectedItems={selectedItems} setSelectedItems={setSelectedItems} setSelectTab={setSelectTab} />
      </SimpleBarScroll>
      <div className="tab-link">
        <div className="navbar-content pc-trigger">
          <SimpleBarScroll style={{ height: 'calc(100vh - 74px)' }}>
            <ul className="pc-navbar">
              {selectTab?.children?.map((item) => (
                <ListGroup
                  key={item.id}
                  className={`pc-item pc-hasmenu ${open[item.id] ? 'pc-trigger' : ''} ${isActive(item) ? 'active' : ''}`}
                >
                  <Link to={item.url || '#'} className="pc-link" onClick={() => handleClick(item)}>
                    {item.icon && (
                      <span className="pc-micon">
                        <i className={typeof item.icon === 'string' ? item.icon : item.icon?.props.className} />
                      </span>
                    )}
                    <span className="pc-mtext">{item.title}</span>
                    {item.type === 'collapse' && (
                      <span className="pc-arrow">
                        <i className="ti ti-chevron-right" />
                      </span>
                    )}
                  </Link>

                  {open[item.id] && item.children && (
                    <ul className="pc-submenu">
                      {item.children.map((child) => (
                        <li key={child.id} className={`pc-item ${open[child.id] ? 'pc-trigger' : ''} ${isActive(child) ? 'active' : ''}`}>
                          <Link
                            to={child.url || '#'}
                            className="pc-link"
                            onClick={() => {
                              handleClick(child);
                            }}
                          >
                            {child.icon && (
                              <span className="pc-micon">
                                <i className={typeof child.icon === 'string' ? child.icon : child.icon?.props.className} />
                              </span>
                            )}
                            {child.title}
                            {child.type === 'collapse' && (
                              <span className="pc-arrow">
                                <i className="ti ti-chevron-right" />
                              </span>
                            )}
                          </Link>

                          {open[child.id] && child.children && (
                            <ul className="pc-submenu">
                              {child.children.map((value) => (
                                <li key={value.id} className={`pc-item ${isActive(value) ? 'active' : ''}`}>
                                  <Link className="pc-link" to={value.url || ''}>
                                    {value.icon && (
                                      <span className="pc-micon">
                                        <i className={typeof value.icon === 'string' ? value.icon : value.icon?.props.className} />
                                      </span>
                                    )}
                                    {value.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </ListGroup>
              ))}
            </ul>
          </SimpleBarScroll>
        </div>
      </div>
    </>
  );
}

DrawerContent.propTypes = { selectedItems: PropTypes.any, setSelectedItems: PropTypes.oneOfType([PropTypes.func, PropTypes.any]) };
