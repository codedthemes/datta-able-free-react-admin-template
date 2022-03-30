import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ConfigContext } from '../../../../contexts/ConfigContext';
import * as actionType from '../../../../store/actions';

const Layout = () => {
  const configContext = useContext(ConfigContext);
  const { layoutType } = configContext.state;
  const { dispatch } = configContext;

  return (
    <React.Fragment>
      <h6>Layouts</h6>
      <div className="theme-color layout-type">
        <Link
          to="#"
          onClick={() =>
            dispatch({
              type: actionType.LAYOUT_TYPE,
              layoutType: 'menu-dark',
              headerBackColor: 'header-default',
              navBackColor: 'navbar-default',
              navBrandColor: 'brand-default'
            })
          }
          title="Default Layout"
          className={layoutType === 'menu-dark' ? 'active' : ''}
          data-value="menu-dark"
        >
          <span />
          <span />
        </Link>
        <Link
          to="#"
          onClick={() =>
            dispatch({
              type: actionType.LAYOUT_TYPE,
              layoutType: 'menu-light',
              headerBackColor: 'header-default',
              navBackColor: 'navbar-default',
              navBrandColor: 'brand-default'
            })
          }
          title="Light"
          className={layoutType === 'menu-light' ? 'active' : ''}
          data-value="menu-light"
        >
          <span />
          <span />
        </Link>
        <Link
          to="#"
          onClick={() =>
            dispatch({
              type: actionType.LAYOUT_TYPE,
              layoutType: 'dark',
              headerBackColor: 'header-dark',
              navBackColor: 'navbar-dark',
              navBrandColor: 'brand-dark'
            })
          }
          title="Dark"
          className={layoutType === 'dark' ? 'active' : ''}
          data-value="dark"
        >
          <span />
          <span />
        </Link>
        <Link
          to="#"
          onClick={() => dispatch({ type: actionType.RESET })}
          title="Reset"
          className={layoutType === 'reset' ? 'active' : ''}
          data-value="reset"
        >
          Reset to Default
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Layout;
