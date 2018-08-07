import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Box from '../Box';
import BackgroundImage from '../BackgroundImage';

import board152 from './board-15-2.svg';

const images = {
  15: [null, board152],
};

const Big = ({ distance, children, ...props }) => (
  <Box position="absolute" w="40%" {...props}>
    <BackgroundImage position="absolute" src={get(images, distance)} ratio={550 / 330}>
     {children}
    </BackgroundImage>
  </Box>
);

Big.propTypes = {
  distance: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
};

export default Big;
