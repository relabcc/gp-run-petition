import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../components/Box';

import finish from './finish.svg';
import Destop from './Destop';
import Mobile from './Mobile';

import withResponsive from '../../hoc/withResponsive';

const ResultPage = ({ browser }) => (
  <Box>
    <object data={finish}>
    </object>
    {browser.lessThan.md ? (
      <Mobile />
    ) : (
      <Destop />
    )}
  </Box>
  );

ResultPage.propTypes = {
  browser: PropTypes.object,
};

export default withResponsive(ResultPage);
