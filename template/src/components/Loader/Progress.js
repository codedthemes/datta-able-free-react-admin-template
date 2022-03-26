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

export default withNProgress(Progress);
