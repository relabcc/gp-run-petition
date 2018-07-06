import React from 'react';
import styled from 'styled-components';
import tag from 'clean-tag';
import {
  space,
  width,
  display,
  textAlign,
  height,
  top,
  left,
  right,
  bottom,
  position,
  color,
  fontSize,
  fontWeight,
  borderRadius,
  minWidth,
  maxWidth,
  maxHeight,
  lineHeight,
  zIndex,
  flex,
} from 'styled-system';

import blacklist from './utils/blacklist';
import injectProps from './utils/injectProps';

const Box = styled(tag)`
  ${space}
  ${width}
  ${display}
  ${height}
  ${color}
  ${fontSize}
  ${position}
  ${zIndex}
  ${textAlign}
  ${minWidth}
  ${maxWidth}
  ${maxHeight}
  ${top}
  ${left}
  ${right}
  ${bottom}
  ${fontWeight}
  ${lineHeight}
  ${borderRadius}
  ${flex}
  ${injectProps.responsive('overflow')}
  ${injectProps.responsive('overflowX')}
  ${injectProps.responsive('overflowY')}
  ${injectProps.responsive('transform')}
  ${injectProps('transition')}
  ${injectProps.responsive('opacity', { alias: 'alpha' })}
  ${injectProps('verticalAlign')}
  ${({ onClick }) => onClick && 'cursor: pointer;'}
`;

Box.defaultProps = {
  blacklist,
};

Box.inline = (props) => <Box is="span" display="inline-block" verticalAlign="middle" {...props} />;

export default Box;
