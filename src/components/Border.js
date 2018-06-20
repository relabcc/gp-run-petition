import styled from 'styled-components';
import {
  border,
  borderBottom,
  borderColor,
  borderLeft,
  borderRight,
  borderTop,
} from 'styled-system';
import Box from './Box';

const Border = styled(Box)`
  ${border}
  ${borderRight}
  ${borderLeft}
  ${borderBottom}
  ${borderTop}
  ${borderColor}
`;

export default Border;
