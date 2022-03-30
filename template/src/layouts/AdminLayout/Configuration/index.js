import React, { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';

// import TabConfig from './TabConfig';
// import PreBuiltLayout from './PreBuiltLayout';
// import Layout from './Layout';

import { ConfigContext } from '../../../contexts/ConfigContext';
// import * as actionType from '../../../store/actions';

const Configuration = () => {
  const configContext = useContext(ConfigContext);
  // const { navIconColor } = configContext.state;
  // const { dispatch } = configContext;

  const [configOpen, setConfigOpen] = useState(false);
  let configClass = ['menu-styler'];
  if (configOpen) {
    configClass = [...configClass, 'open'];
    console.log(setConfigOpen);
    console.log(configContext);
    console.log(configClass);
  }

  return ( 
    <>
    </>
    // <React.Fragment>
    //   <div id="styleSelector" className={configClass.join(' ')}>
    //     <div className="style-toggler">
    //       <Link to="#" onClick={() => setConfigOpen(!configOpen)}>
    //         *
    //       </Link>
    //     </div>
    //     <div className="style-block">
    //       <h5 className="mb-2">Live Menu Customizer</h5>
    //       <hr />
    //       <div className="m-style-scroller">
    //         <Layout />
    //         <PreBuiltLayout />

    //         {/* icon colored */}
    //         <div className="form-group mb-3">
    //           <div className="switch switch-primary d-inline m-r-10">
    //             <input
    //               type="checkbox"
    //               id="icon-colored"
    //               checked={navIconColor}
    //               onChange={() => dispatch({ type: actionType.NAV_ICON_COLOR })}
    //             />
    //             <label htmlFor="icon-colored" className="cr" />
    //           </div>
    //           <label>Icon Color</label>
    //         </div>

    //         <TabConfig />
    //       </div>
    //     </div>
    //   </div>
    // </React.Fragment>
  );
};

export default Configuration;
