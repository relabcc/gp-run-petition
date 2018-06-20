import merge from 'lodash/merge';
import { style, responsiveStyle } from 'styled-system';

const getConfig = (key, options) => merge({
  prop: key,
  cssProperty: key,
}, options);

const injectProps = (key, options) => style(getConfig(key, options));

injectProps.responsive = (key, options) => responsiveStyle(getConfig(key, options));

export default injectProps;
