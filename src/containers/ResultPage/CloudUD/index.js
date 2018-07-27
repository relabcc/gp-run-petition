import React from 'react';

import BackgroundImage from '../../../components/BackgroundImage';
import Box from '../../../components/Box';

import cloud from './cloudUD.svg';

const cloudUD = (props) => (
  <Box position="absolute" {...props}>
    <BackgroundImage src={cloud} ratio={583 / 870} />
  </Box>
);

export default cloudUD;
