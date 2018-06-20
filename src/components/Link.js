import React from 'react';
import styled from 'styled-components';
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  letterSpacing,
} from 'styled-system';
import tag from 'clean-tag';

import blacklist from './utils/blacklist';
import { getColorByPropKey } from './utils/getColor';

const Link = styled(tag.a)`
  ${fontSize}
  ${space}
  ${color}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  text-decoration: none;
  &:hover {
    color: ${getColorByPropKey('hoverColor')};
    ${({ noUnderline }) => !noUnderline && `
      text-decoration: underline;
    `}
  }
`;

Link.defaultProps = {
  blacklist,
  color: 'primary',
  hoverColor: 'primary',
  fontWeight: 'bold',
};

Link.noUnderline = (props) => (
  <Link
    noUnderline
    {...props}
  />
);

export default Link;
