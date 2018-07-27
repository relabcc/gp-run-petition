import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../../components/Box';
import Text from '../../../components/Text';
import BackgroundImage from '../../../components/BackgroundImage';

import bubble from './q-bubble.svg';
import numberlogo from './q-number.svg';

const Bubble = ({ number, children, ...props }) => (
  <Box
    position="relative"
    pt={['5em', null, null, null, '3.5em']}
    mx={[null, '0.5em', '10%', '11%', '15%', '20%']}
    {...props}
  >
    <BackgroundImage position="absolute" src={bubble} ratio={240 / 686}>
      <Box
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
      >
        <Text
          f={['1em', '1.4em', '1.6em']}
          whiteSpace="pre"
          textAlign="center"
          fontWeight="bold"
        >
          {children}
        </Text>
      </Box>
      <Box
        position="absolute"
        left="0"
        right="0"
        transform="translateY(-50%) rotate(20deg)"
      >
        <Box w="15%" mx="auto">
          <BackgroundImage position="absolute" src={numberlogo} ratio={110 / 110}>
            <Box
              position="absolute"
              left="50%"
              top="50%"
              transform="translate(-60%, -40%)"
            >
              <Text f={['1.2em', '2em', '2.5em']} textAlign="center">{number}</Text>
            </Box>
          </BackgroundImage>
        </Box>
      </Box>
    </BackgroundImage>
  </Box>
);

Bubble.propTypes = {
  number: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  children: PropTypes.node,
};

export default Bubble;
