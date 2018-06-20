import React from 'react';
import PropTypes from 'prop-types';
import ArrowDown from 'react-icons/lib/fa/angle-down';
import ArrowUp from 'react-icons/lib/fa/angle-up';

import Box from './Box';
import Circle from './Circle';
import Button from './Button';

const NoPaddingButton = (props) => (
  <Button
    px="0"
    py="0"
    color="white"
    bg="teal"
    border="3px solid"
    hoverBg="lightGreen"
    hoverColor="black"
    {...props}
  />
);

const CircleWithArrow = ({ children, onClick, arrowType, ...props }) => (
  <Box {...props}>
    <Circle
      lineHeight="0"
      onClick={onClick}
      is={NoPaddingButton}
    >
      {arrowType === 'down' && children}
      {arrowType === 'up' ? (
        <ArrowUp />
      ) : (
        <ArrowDown />
      )}
      {arrowType === 'up' && children}
    </Circle>
  </Box>
);

CircleWithArrow.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  arrowType: PropTypes.string,
};

CircleWithArrow.defaultProps = {
  arrowType: 'down',
};

export default CircleWithArrow;
