import PropTypes from 'prop-types';
import React from 'react';
import { withNProgress } from '@tanem/react-nprogress';

import Bar from './Bar';
import Container from './Container';
import Spinner from './Spinner';

const Progress = ({ isFinished, progress, animationDuration }) => {
  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
      <Spinner />
    </Container>
  );
};

Progress.propTypes = {
  animationDuration: PropTypes.number,
  progress: PropTypes.number,
  isFinished: PropTypes.bool
};

export default withNProgress(Progress);
