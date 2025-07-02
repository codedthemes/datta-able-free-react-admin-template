import PropTypes from 'prop-types';
import React from 'react';

// react-bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';

// ==============================|| COMPONENTS - EXTENDED-CUSTOM-BREADCRUMB ||============================== //

export default function Breadcrumbs({ children, separator = '>', listProps }) {
  const items = React.Children.toArray(children);
  return (
    <Breadcrumb {...listProps}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item}
          {index < items.length - 1 && <span className="mx-2 text-grey">{separator}</span>}
        </React.Fragment>
      ))}
    </Breadcrumb>
  );
}

Breadcrumbs.propTypes = { children: PropTypes.node, separator: PropTypes.node, listProps: PropTypes.object };
