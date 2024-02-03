import PropTypes from 'prop-types';
import React from 'react';

const NavBadge = ({ items }) => {
  let navBadges = false;
  if (items.badge) {
    const badgeClass = ['label', 'pcoded-badge', items.badge.type];

    navBadges = <span className={badgeClass.join(' ')}>{items.badge.title}</span>;
  }

  return <React.Fragment>{navBadges}</React.Fragment>;
};

NavBadge.propTypes = {
  items: PropTypes.object,
  badge: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string
};

export default NavBadge;
