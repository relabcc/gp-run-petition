import { injectGlobal } from 'styled-components';
import tetsuBinWoff from './minified/TetsuBinGothic.woff';
import tetsuBinTtf from './minified/TetsuBinGothic.ttf';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @font-face {
    font-family: 'TetsuBin Gothic';
    src: local('TetsuBin Gothic'),
      url(${tetsuBinWoff}),
      url(${tetsuBinTtf});
  }
`;
