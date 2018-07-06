import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import BackgroundImage from '../BackgroundImage';

import bush1 from './bush-1.svg';
import bush2 from './bush-2.svg';
import bush3 from './bush-3.svg';

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

const Bushes = ({ variation, rotation, ...props }) => (
  <Box my="-30%" {...props}>
    <BackgroundImage src={variations[variation]} transform={`rotate(${rotations[rotation]})`} />
  </Box>
);

Bushes.propTypes = {
  variation: PropTypes.number,
  rotation: PropTypes.number,
};

Bushes.defaultProps = {
  variation: 1,
  rotation: 0,
};

export default Bushes;
