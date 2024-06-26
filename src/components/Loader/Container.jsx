import PropTypes from 'prop-types';
import React from 'react';

const Container = ({ animationDuration, children, isFinished }) => {
  return (
    <div
      style={{
        opacity: isFinished ? 0 : 1,
        pointerEvents: 'none',
        transition: `opacity ${animationDuration}ms linear`
      }}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  animationDuration: PropTypes.number,
  children: PropTypes.node,
  isFinished: PropTypes.bool
};

export default Container;
