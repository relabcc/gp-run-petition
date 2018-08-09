import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../components/Box';

import finish from './finish.svg';
import Desktop from './Desktop';
import Mobile from './Mobile';

import withResponsive from '../../hoc/withResponsive';

const ResultPage = ({ browser }) => (
  <Box overflow={['hidden', null, null, 'none']}>
    <Box maxWidth="105em" mx={['-18%', null, null, 'auto']}>
      <object data={finish}>
      </object>
    </Box>
    {browser.lessThan.md ? (
      <Mobile />
    ) : (
      <Desktop />
    )}
  </Box>
  );

ResultPage.propTypes = {
  browser: PropTypes.object,
};

export default withResponsive(ResultPage);
