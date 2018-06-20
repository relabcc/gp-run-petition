import { responsiveStyle } from 'styled-system';
import styled from 'styled-components';

import Box from './Box';
import { containerWidth } from './ThemeProvider/theme';

const injectMaxWidth = responsiveStyle({
  prop: 'maxWidth',
  cssProperty: 'maxWidth',
  numberToPx: true,
});

const Container = styled(Box)`
  ${injectMaxWidth}
`;

Container.defaultProps = {
  mx: 'auto',
  px: ['1em', null, '2em'],
  w: 1,
  maxWidth: containerWidth,
};

export default Container;
