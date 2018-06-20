import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import BackgroundImage from '../BackgroundImage';
import board10 from './board-s-10.svg';

const Small = ({ distance, ...props }) => (
  <Box position="absolute" w="20%" {...props}>
    <BackgroundImage src={board10} ratio={158 / 146} />
  </Box>
);

Small.propTypes = {
  distance: PropTypes.number,
};

export default Small;
