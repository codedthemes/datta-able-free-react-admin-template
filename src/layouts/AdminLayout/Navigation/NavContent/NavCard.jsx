import React from 'react';
import { Card } from 'react-bootstrap';

// import sidebarImages from '../../../../assets/images/Datta-able-img.svg';
import sidebarImages from '../../../../assets/images/sidebar.png';

let itemTarget = '_blank';

const NavCard = () => {
  return (
    <React.Fragment>
      <div className="p-20">
        <Card className="pro-card">
          <Card.Body className="p-2 text-center">
            <img src={sidebarImages} className="img-radius " alt="User-Profile" />
            <h5 className="text-white">Datta Able Pro</h5>
            <p className="text-white">Checkout Datta Premium Features</p>
            <a
              href="https://codedthemes.com/item/datta-able-react-admin-template/?utm_source=free_demo&utm_medium=codedthemes&utm_campaign=button_download_premium"
              target={itemTarget}
              className="btn text-white btn-primary"
            >
              Download Premium
            </a>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default NavCard;
