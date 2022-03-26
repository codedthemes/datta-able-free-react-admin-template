import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import NavLeft from './NavLeft';
import NavRight from './NavRight';

import { ConfigContext } from '../../../contexts/ConfigContext';
import * as actionType from '../../../store/actions';

const NavBar = () => {
  //const [moreToggle, setMoreToggle] = useState(false);
  const configContext = useContext(ConfigContext);
  const { collapseMenu, headerBackColor, headerFixedLayout, layout, subLayout } = configContext.state;
  const { dispatch } = configContext;

  let headerClass = ['navbar', 'pcoded-header', 'navbar-expand-lg', headerBackColor];
  if (headerFixedLayout && layout === 'vertical') {
    headerClass = [...headerClass, 'headerpos-fixed'];
  }

  let toggleClass = ['mobile-menu'];
  if (collapseMenu) {
    toggleClass = [...toggleClass, 'on'];
  }

  const navToggleHandler = () => {
    dispatch({ type: actionType.COLLAPSE_MENU });
  };

  // let moreClass = ['mob-toggler'];;
  // if (layout === 'horizontal') {
  //     moreClass = [...moreClass, 'd-none'];
  // }
  let collapseClass = ['collapse navbar-collapse'];
  // if (moreToggle) {
  //     //moreClass = [...moreClass, 'on'];
  //     collapseClass = [...collapseClass, 'd-block']
  // }

  let navBar = (
    <React.Fragment>
      <div className="m-header">
        <Link to="#" className={toggleClass.join(' ')} id="mobile-collapse" onClick={navToggleHandler}>
          <span />
        </Link>
        <Link to="#" className="b-brand">
          <div className="b-bg">
            <i className="feather icon-trending-up" />
          </div>
          <span className="b-title">Datta Able</span>
        </Link>
        {/* <Link to='#' className={moreClass.join(' ')} onClick={() => setMoreToggle(!moreToggle)}>
                    <i className="feather icon-more-vertical"/>
                </Link> */}
      </div>
      <div className={collapseClass.join(' ')}>
        <NavLeft />
        <NavRight />
      </div>
    </React.Fragment>
  );

  if (layout === 'horizontal' && subLayout === 'horizontal-2') {
    navBar = <div className="container">{navBar}</div>;
  }

  return (
    <React.Fragment>
      <header className={headerClass.join(' ')}>{navBar}</header>
    </React.Fragment>
  );
};

export default NavBar;
