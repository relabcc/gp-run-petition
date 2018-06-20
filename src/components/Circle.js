import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import Border from './Border';

const Circle = ({ children, border, borderColor, bg, is, ...props }) => (
  <Box {...props}>
    <Box position="relative" pt="100%">
      <Border
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        w={1}
        borderRadius="50%"
        border={border}
        borderColor={borderColor}
        bg={bg}
        is={is}
      >
        <Box
          top="50%"
          left="0"
          right="0"
          transform="translateY(-50%)"
          position="absolute"
          align="center"
        >
          {children}
        </Box>
      </Border>
    </Box>
  </Box>
);

Circle.propTypes = {
  children: PropTypes.node,
  border: PropTypes.string,
  borderColor: PropTypes.string,
  bg: PropTypes.string,
  is: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

export default Circle;
