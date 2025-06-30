import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// third-party
import { BrowserView, MobileView } from 'react-device-detect';
import SimpleBar from 'simplebar-react';

// ==============================|| SIMPLE BAR SCROLL ||============================== //

export default function SimpleBarScroll({ children, className, style, ...other }) {
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    const rootElement = document.querySelector('[data-pc-direction]');
    const attr = rootElement?.getAttribute('data-pc-direction');
    setDirection(attr === 'ltr' ? 'ltr' : 'rtl');
  }, []);

  return (
    <>
      <BrowserView style={{ flexGrow: 1, height: '100%', overflow: 'hidden' }}>
        <SimpleBar
          clickOnTrack={false}
          style={{ maxHeight: '100%', ...style }}
          className={className}
          data-simplebar-direction={direction}
          {...other}
        >
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

SimpleBarScroll.propTypes = { children: PropTypes.node, className: PropTypes.string, style: PropTypes.any, other: PropTypes.any };
