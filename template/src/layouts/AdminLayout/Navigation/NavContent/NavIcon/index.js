import PropTypes from 'prop-types';
import React from 'react';

const NavIcon = ({ items }) => {
  let navIcons = false;
  if (items.icon) {
    navIcons = (
      <span className="pcoded-micon">
        <i className={items.icon} />
      </span>
    );
  }

  return <React.Fragment>{navIcons}</React.Fragment>;
};

NavIcon.propTypes = {
  items: PropTypes.object,
  icon: PropTypes.string
};

export default NavIcon;
