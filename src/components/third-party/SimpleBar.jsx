import PropTypes from 'prop-types';

// third-party
import { BrowserView, MobileView } from 'react-device-detect';
import SimpleBar from 'simplebar-react';

// ==============================|| SIMPLE BAR SCROLL ||============================== //

export default function SimpleBarScroll({ children, className, browserStyle, style, ...other }) {
  return (
    <>
      <BrowserView style={{ flexGrow: 1, height: '100%', overflow: 'hidden', ...browserStyle }}>
        <SimpleBar clickOnTrack={false} style={{ maxHeight: '100%', ...style }} className={className} {...other}>
          {children}
        </SimpleBar>
      </BrowserView>

      <MobileView>
        <div style={{ overflowX: 'auto', ...style }} className={className} {...other}>
          {children}
        </div>
      </MobileView>
    </>
  );
}

SimpleBarScroll.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  browserStyle: PropTypes.any,
  style: PropTypes.any,
  other: PropTypes.any
};
