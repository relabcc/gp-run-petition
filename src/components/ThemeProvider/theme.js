import merge from 'lodash/merge';
import constants from 'styled-system/dist/constants';

const emToPx = (em) => em * 16;

export const breakpoints = [20.5, 30, 48, 62, 92, 105, 122].map(emToPx);
export const containerWidth = [48, 48, 48, 48, 48, 60, 75].map(emToPx);
export const resultContainerWidth = [48, 48, 48, 48, 60, 60, 75].map(emToPx);
export const petitionContainerWidth =  [36, 36, 40, 40, 40, 50].map(emToPx);

const font = 'Arial, "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif';
const tetsuBin = 'TetsuBin Gothic';

const white = '#fff';
const black = '#000';
const gray = '#ADADAD';
const lightGray = '#E6E6E6';
const lightYellow = '#FFFCD9';
const orange = '#FFBC18';
const red = '#F15A24';
const teal = '#00B997';
const lightGreen = '#9bd9da';

export default merge(constants, {
  colors: {
    white,
    black,
    lightGray,
    gray,
    lightYellow,
    orange,
    red,
    teal,
    lightGreen,
    primary: red,
    secondary: orange,
    background: orange,
  },
  breakpoints,
  containerWidth,
  font,
  tetsuBin,
  duration: 250,
});
