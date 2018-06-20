import PropTypes from 'prop-types';
import { ratio } from 'styled-system';

import Box from './Box';

const BackgroundImage = Box.extend`
  position: relative;
  background-image: url(${({ src }) => src});
  background-size: ${({ size }) => size};
  background-position: ${({ backgroundPosition }) => backgroundPosition};
  background-repeat: no-repeat;
  ${ratio}
`;

BackgroundImage.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  position: PropTypes.string,
};

BackgroundImage.defaultProps = {
  ratio: 1,
  size: 'cover',
  backgroundPosition: '50% 50%',
};

BackgroundImage.displayName = 'BackgroundImage';

export default BackgroundImage;
