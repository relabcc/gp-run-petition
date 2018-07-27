import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'sanitize.css';

import './global-styles';
import theme from './theme';
import Box from '../Box';
import '../../web-font';

export default (props) => (
  <ThemeProvider theme={theme}>
    <Box f={[12, 14, null, null, null, 16]} height="100%" {...props} />
  </ThemeProvider>
);
