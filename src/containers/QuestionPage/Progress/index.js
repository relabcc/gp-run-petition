import React from 'react';
import PropTypes from 'prop-types';

import range from 'lodash/range';

import Box from '../../../components/Box';
// import Flex from '../../../components/Flex';
import Border from '../../../components/Border';
import Head from '../../../components/Head';
import Circle from '../../../components/Circle';
import Text from '../../../components/Text';
import withResponsive from '../../../hoc/withResponsive';
import getText from '../../../text';

import questions from '../questions';

const Progress = ({ browser, currentId, ...props }) => (
  <Box
    position="fixed"
    top={browser.greaterThan.md ? '50%' : '0'}
    right={browser.greaterThan.md ? '3%' : '50%'}
    transform={browser.greaterThan.md ? 'translateY(-50%)' : 'translateX(50%)'}
    display={browser.greaterThan.md ? 'block' : 'flex'}
    bg={browser.greaterThan.md ? '' : 'lightYellow'}
    w={browser.greaterThan.md ? '' : '100%'}
    py={browser.greaterThan.md ? '' : '1.2em'}
    px={browser.greaterThan.md ? '' : '2em'}
    {...props}
  >
    <Border
      border="2px solid"
      bg="white"
      px="0.5em"
      mb={browser.greaterThan.md ? '1.5em' : ''}
    >
      <Text.tetsuBin>{getText('petition.start')}</Text.tetsuBin>
    </Border>
    {range(questions.length).map((number, index) => (
      <Circle
        w="1em"
        bg={index < currentId ? 'red' : 'white'}
        border="2px solid"
        my={browser.greaterThan.md ? '1.75em' : 'auto'}
        mx="auto"
        key={index}
      >
        {index === currentId && (
          <Box
            w={['2em', '3em']}
            transform={browser.greaterThan.md ? 'translate(-40%, -5%)' : 'translate(-30%, -5%)'}
          >
            <Head />
          </Box>
        )}
      </Circle>
  ))}
    <Border
      border="2px solid black"
      bg="red"
      px="0.5em"
      color="white"
      mt={browser.greaterThan.md ? '-0.75em' : ''}
    >
      <Text.tetsuBin>{getText('petition.done')}</Text.tetsuBin>
    </Border>
  </Box>
);

Progress.propTypes = {
  currentId: PropTypes.number,
  browser: PropTypes.object,
};

export default withResponsive(Progress);
