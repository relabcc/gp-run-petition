import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash/pickBy';

import Border from './Border';
import Button from './Button';

const DoubleLayerButton = ({
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
  ...props
}) => {
  const margins = {
    m,
    mx,
    my,
    mt,
    ml,
    mb,
    mr,
  };
  return createElement(Border, {
    ...pickBy(margins, Boolean),
    display: 'inline-block',
    border: '4px solid',
    borderColor: props.disabled ? 'gray' : borderColor,
    p: '0.25em',
    bg: outerBg,
    w,
    width,
  }, <Button w={1} border={border} borderColor={borderColor} {...props} />);
};

const responsivePropTypes = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
]);

DoubleLayerButton.propTypes = {
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
  disabled: PropTypes.bool,
};

DoubleLayerButton.defaultProps = {
  border: '2px solid',
  borderColor: 'black',
  outerBg: 'white',
};

export default DoubleLayerButton;
