import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from '../Box';
import BackgroundImage from '../BackgroundImage';

import bush1 from './bush-1.svg';
import bush2 from './bush-2.svg';
import bush3 from './bush-3.svg';
import bushDeco from './bush-deco.svg';

const variations = {
  1: bush1,
  2: bush2,
  3: bush3,
};

const rotations = [
  '0',
  '90deg',
  '180deg',
  '-90deg',
];

const BushImage = styled(({ withDeco, ...props }) => <BackgroundImage {...props} />)`
  position: relative;
  &::after {
    ${({ withDeco }) => withDeco && `
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      padding-top: ${(188 / 180) * 100}&;
      background-image: url(${bushDeco});
      backgounr-size: cover;
    `}
  }
`;

const Bushes = ({ variation, withDeco, rotation, ...props }) => (
  <Box my="-30%" {...props}>
    <BushImage src={variations[variation]} withDeco={withDeco} transform={`rotate(${rotations[rotation]})`} />
  </Box>
);

Bushes.propTypes = {
  variation: PropTypes.number,
  withDeco: PropTypes.bool,
  rotation: PropTypes.number,
};

Bushes.defaultProps = {
  variation: 1,
  rotation: 0,
};

export default Bushes;
