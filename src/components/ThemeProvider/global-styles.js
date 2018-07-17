import { injectGlobal } from 'styled-components';

import theme from './theme';

injectGlobal`
  body {
    font-family: ${theme.font};
    width: 100%;
    height: 100%;
  }
`;
