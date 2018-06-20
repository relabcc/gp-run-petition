import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import Box from '../Box';
import BackgroundImage from '../BackgroundImage';

import runner from './runner-sprite.svg';

const run = keyframes`
  0%, 100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const Animatable = styled(BackgroundImage)`
  background-position: 0 0;
  ${({ animate }) => animate && `
    animation: ${run} 1s steps(3) infinite;
  `}
`;

const Runner = ({ animate, ...props }) => (
  <Box {...props}>
    <Animatable animate={animate} src={runner} ratio={554 / (1900 / 4)} />
  </Box>
);

Runner.propTypes = {
  animate: PropTypes.bool,
};

export default Runner;
