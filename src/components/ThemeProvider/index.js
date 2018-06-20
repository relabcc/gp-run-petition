import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'sanitize.css';

import theme from './theme';
import Box from '../Box';
import '../../web-font';

export default (props) => (
  <ThemeProvider theme={theme}>
    <Box f={[14, null, null, null, 16]} height="100%" bg="orange" {...props} />
  </ThemeProvider>
);
