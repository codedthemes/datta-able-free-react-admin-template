import React from 'react';
import { Link } from 'react-router-dom';

const PreBuiltLayout = () => {
  return (
    <React.Fragment>
      <h6>Prebuilt Layout</h6>
      <p className="f-12">
        <span className="text-c-red">*</span> in Prebuilt Layout you redirect to new page
      </p>
      <div className="theme-color prelayout-color">
        <Link to="/layout/layout-2" data-value="l2" target="_blank">
          <span />
          <span />
        </Link>
        <Link to="/layout/layout-2-2/" data-value="l2-2" target="_blank">
          <span />
          <span />
        </Link>
        <Link to="/layout/layout-3/" data-value="l3" target="_blank">
          <span />
          <span />
        </Link>
        <Link to="/layout/layout-4/" data-value="l4" target="_blank">
          <span />
          <span />
        </Link>
        <Link to="/layout/layout-4-2/" data-value="l4-2" target="_blank">
          <span />
          <span />
        </Link>
        <Link to="/layout/layout-5h/" data-value="l5-h" target="_blank">
          <span />
          <span />
        </Link>
        <Link to="/layout/nav-color/" data-value="l-lite" target="_blank">
          <span />
          <span />
        </Link>
        <Link to="/layout/layout-6/" data-value="l6" target="_blank">
          <span />
          <span />
        </Link>
        <Link to="/layout/layout-8/" data-value="l8" target="_blank">
          <span />
          <span />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default PreBuiltLayout;
