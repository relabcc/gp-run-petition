import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DoubleLayerButton from './DoubleLayerButton';


const LinksButton = ({ children, ...props }) => (
  <DoubleLayerButton
    is={Link}
    color="black"
    hoverColor="white"
    display="block"
    {...props}
  >
    {children}
  </DoubleLayerButton>
);

LinksButton.propTypes = {
  children: PropTypes.node,
};

export default LinksButton;
