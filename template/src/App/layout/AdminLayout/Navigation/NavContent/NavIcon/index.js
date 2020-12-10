import React from 'react';

const navIcon = (props) => {
    let navIcons = false;
    if (props.items.icon) {
        navIcons = <span className="pcoded-micon"><i className={props.items.icon} /></span>;
    }
    return navIcons;
};

export default navIcon;