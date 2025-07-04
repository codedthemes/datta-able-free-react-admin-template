import PropTypes from 'prop-types';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

// project-imports
import NavItem from './NavItem';
import NavCollapse from './NavCollapse';

// ==============================|| NAVIGATION - GROUP ||============================== //

export default function NavGroup({
  item,
  lastItem,
  remItems,
  lastItemId,
  setSelectedID,
  setSelectedItems,
  selectedItems,
  setSelectedLevel,
  selectedLevel
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentItem, setCurrentItem] = useState(item);
  const { pathname } = useLocation();

  const openMini = Boolean(anchorEl);

  useEffect(() => {
    if (lastItem) {
      if (item.id === lastItemId) {
        const localItem = { ...item };
        const elements = remItems.map((ele) => ele?.children);
        localItem.children = elements.flat(1);
        setCurrentItem(localItem);
      } else {
        setCurrentItem(item);
      }
    }
  }, [item, lastItem, lastItemId, remItems, setCurrentItem]);

  const checkOpenForParent = useCallback(
    (child, id) => {
      child.forEach((ele) => {
        if (ele.children?.length) {
          checkOpenForParent(ele.children, currentItem.id);
        }

        if (ele.url && !!matchPath({ path: ele?.link ? ele.link : ele.url, end: true }, pathname)) {
          setSelectedID(id);
        }
      });
    },
    [currentItem.id, pathname, setSelectedID]
  );

  const checkSelectedOnload = useCallback(
    (data) => {
      const children = data.children ?? [];
      children.forEach((itemCheck) => {
        if (!itemCheck) return;

        if (itemCheck.children?.length) {
          checkOpenForParent(itemCheck.children, currentItem.id);
        }

        if (itemCheck.url && matchPath({ path: itemCheck.link ? itemCheck.link : itemCheck.url, end: true }, pathname)) {
          setSelectedID(currentItem.id);
        }
      });
    },
    [pathname, currentItem, checkOpenForParent, setSelectedID]
  );

  useEffect(() => {
    checkSelectedOnload(currentItem);
    if (openMini) setAnchorEl(null);
  }, [pathname, currentItem, checkSelectedOnload, openMini, setAnchorEl]);

  const navCollapse = item.children?.map((menuItem, index) => {
    const key = menuItem.id || `${menuItem.type}-${index}`;
    switch (menuItem.type) {
      case 'collapse':
        return (
          <NavCollapse
            key={key}
            menu={menuItem}
            setSelectedItems={setSelectedItems}
            setSelectedLevel={setSelectedLevel}
            selectedLevel={selectedLevel}
            selectedItems={selectedItems}
            level={1}
            parentId={currentItem.id}
          />
        );
      case 'item':
        return <NavItem key={key} item={menuItem} level={1} />;
      default:
        return (
          <h6 key={`fix-${index}`} color="error" className="align-center">
            Fix - Group Collapse or Items
          </h6>
        );
    }
  });

  return (
    <>
      <Fragment>
        <li className="pc-item pc-caption" key={item.id}>
          <label>{item.title}</label>
        </li>
        {navCollapse}
      </Fragment>
    </>
  );
}

NavGroup.propTypes = {
  item: PropTypes.any,
  lastItem: PropTypes.number,
  remItems: PropTypes.array,
  lastItemId: PropTypes.string,
  setSelectedID: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
  setSelectedItems: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
  selectedItems: PropTypes.any,
  setSelectedLevel: PropTypes.func,
  selectedLevel: PropTypes.number,
  setSelectTab: PropTypes.func
};
