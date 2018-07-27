import React from 'react';
import Box from '../../components/Box';
import BackgroundImage from '../../components/BackgroundImage';

import smalllogo from './small-logo.svg';

const Logo = () => (
  <Box
    position="fixed"
    pt="2em"
    top="0"
    left="2%"
    w="100%"
    display={['none', null, null, null, 'block']}
    zIndex={50}
  >
    <Box w="15%" maxWidth="15em">
      <BackgroundImage src={smalllogo} ratio={70 / 225} />
    </Box>
  </Box>
);

export default Logo;
