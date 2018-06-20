import React from 'react';
import styled, { css } from 'styled-components';
import {
  themeGet,
  fontSize,
  space,
  color,
  width,
  border,
  borderColor,
  borderRadius,
  borderWidth,
  letterSpacing,
  fontWeight,
  maxWidth,
  display,
} from 'styled-system';
import tag from 'clean-tag';

import { getColorByPropKey } from './utils/getColor';
import blacklist from './utils/blacklist';

const active = css`
  color: ${getColorByPropKey('hoverColor')};
  background-color: ${getColorByPropKey('hoverBg')};
  border-color: ${getColorByPropKey('hoverBorder')};
`;

export const buttonStyle = css`
  padding: 0;
  border: none;
  font-family: inherit;
  line-height: 1;
  text-decoration: none;
  ${fontSize}
  ${space}
  ${color}
  ${width}
  ${maxWidth}
  ${border}
  ${borderColor}
  ${borderRadius}
  ${borderWidth}
  ${fontWeight}
  ${letterSpacing}
  ${display}
  appearance: none;
  transition: all ${themeGet('duration', 250)}ms;
  cursor: pointer;
  &:hover,
  &:focus {
    ${(props) => !props.disabled && active}
  }
  ${(props) => props.active && !props.disabled && active}
  ${(props) => props.disabled && `
    cursor: not-allowed;
    opacity: 0.5;
  `}
`;

const Button = styled(tag)`
  ${buttonStyle}
`;

Button.defaultProps = {
  is: 'button',
  f: '1em',
  border: '2px solid',
  borderColor: 'black',
  bg: 'white',
  color: 'black',
  hoverColor: 'white',
  hoverBg: 'red',
  hoverBorder: 'black',
  px: '1.5em',
  py: '1em',
  fontWeight: 'bold',
  blacklist,
};

Button.secondary = (props) => (
  <Button
    bg="secondary"
    borderColor="secondary"
    hoverColor="secondary"
    {...props}
  />
);

export default Button;
