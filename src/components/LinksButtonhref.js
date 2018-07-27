import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import DoubleLayerButton from './DoubleLayerButton';


const LinksButton = ({ children, ...props }) => (
  <DoubleLayerButton
    is={(p) => (
      <Link.noUnderline
        color="black"
        hoverColor="white"
        {...p}
      />
    )}
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
