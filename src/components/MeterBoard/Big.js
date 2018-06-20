import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Box from '../Box';
import BackgroundImage from '../BackgroundImage';
import board5 from './board-5.svg';
import board10 from './board-10.svg';
import board151 from './board-15-1.svg';
import board152 from './board-15-2.svg';

const images = {
  5: board5,
  10: board10,
  15: [board151, board152],
};

const Big = ({ distance, ...props }) => (
  <Box position="absolute" w="33%" {...props}>
    <BackgroundImage src={get(images, distance)} ratio={550 / 330} />
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
