import { injectGlobal } from 'styled-components';

import theme from './theme';

injectGlobal`
  body {
    font-family: ${theme.font};
  }
`;
