import React, { createElement } from 'react';
import PropTypes from 'prop-types';

import Border from './Border';

const DoubleLayerBox = ({
  m,
  mx,
  my,
  mt,
  ml,
  mb,
  mr,
  outerBg,
  border,
  borderColor,
  w,
  width,
  position,
  ...props
}) => createElement(Border, {
  m,
  mx,
  my,
  mt,
  ml,
  mb,
  mr,
  border: '4px solid',
  borderColor,
  display: 'inline-block',
  p: '0.5em',
  bg: outerBg,
  w,
  width,
}, <Border w={1} bg="white" position={position} border={border} borderColor={borderColor} {...props} />);

const responsivePropTypes = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
]);

DoubleLayerBox.propTypes = {
  m: responsivePropTypes,
  mx: responsivePropTypes,
  my: responsivePropTypes,
  mt: responsivePropTypes,
  ml: responsivePropTypes,
  mb: responsivePropTypes,
  mr: responsivePropTypes,
  w: responsivePropTypes,
  width: responsivePropTypes,
  outerBg: PropTypes.string,
  border: PropTypes.string,
  borderColor: PropTypes.string,
  position: PropTypes.string,
};

DoubleLayerBox.defaultProps = {
  border: '2px solid',
  borderColor: 'black',
  outerBg: 'red',
};

export default DoubleLayerBox;
