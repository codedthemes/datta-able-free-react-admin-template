import PropTypes from 'prop-types';
import { useEffect, useState, useCallback, useRef } from 'react';

// third-party
import JsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';

// project-imports
import MainCard from 'components/MainCard';

// =============================|| DEFAULT - USERS MAP ||============================== //

export default function UsersMap({ height }) {
  const mapRef = useRef(null);
  const [mapHeight, setMapHeight] = useState(height ?? 450);
  const [isMobile, setIsMobile] = useState(false);

  const updateHeight = useCallback(() => {
    if (height) return;
    const width = window.innerWidth;
    const mobile = width <= 768;
    setIsMobile(mobile);

    if (width <= 480) {
      setMapHeight(250);
    } else if (width <= 768) {
      setMapHeight(350);
    } else {
      setMapHeight(height ?? 450);
    }
  }, [height]);

  useEffect(() => {
    updateHeight();
    if (!height) {
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, [height, updateHeight]);

  useEffect(() => {
    const mapElement = document.getElementById('basic-map');
    if (mapElement) {
      mapElement.innerHTML = '';
    }

    mapRef.current = new JsVectorMap({
      selector: '#basic-map',
      map: 'world',
      showTooltip: true,
      zoomOnScroll: !isMobile,
      zoomButtons: true,
      zoom: {
        min: 1,
        max: isMobile ? 3 : 10
      },
      markers: [
        { coords: [-15.7939, -47.8825], name: 'Brazil' },
        { coords: [24.7743, 47.7439], name: 'Saudi Arabia' },
        { coords: [35.8617, 104.1954], name: 'China' },
        { coords: [61.524, 105.3188], name: 'Russia' }
      ]
    });

    return () => {
      if (mapElement) {
        mapElement.innerHTML = '';
      }
      mapRef.current = null;
    };
  }, [isMobile, mapHeight]);

  return (
    <MainCard title="Users From United States">
      <div
        id="basic-map"
        className="set-map"
        style={{
          height: mapHeight,
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          touchAction: isMobile ? 'pan-x pan-y' : 'auto'
        }}
      />
    </MainCard>
  );
}

UsersMap.propTypes = { height: PropTypes.number };
