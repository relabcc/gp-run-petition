import React from 'react';
import PropTypes from 'prop-types';

import DoubleLayerButton from './DoubleLayerButton';
import Circle from './Circle';
import Flex from './Flex';


const IconButton = ({ children, onClick, icon, ...props }) => (
  <DoubleLayerButton
    px="0"
    py="0.5em"
    bg="white"
    hoverBg="teal"
    {...props}
  >
    <Flex align="center" justify="center">
      <Circle w="20%" mr="0.75em" border="2px solid">
        {icon}
      </Circle>
      {children}
    </Flex>
  </DoubleLayerButton>
);

IconButton.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  onClick: PropTypes.func,
};

export default IconButton;
