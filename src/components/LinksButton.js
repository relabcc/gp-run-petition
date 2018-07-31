import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import DoubleLayerButton from './DoubleLayerButton';

const LinksButton = ({ children, to, ...props }) => (
  <DoubleLayerButton
    is={(p) => <Link to={to} {...p} />}
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
  to: PropTypes.string,
};

export default LinksButton;
