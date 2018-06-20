
import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../components/Box';
import Text from '../../components/Text';
import Flex from '../../components/Flex';
import Border from '../../components/Border';
import Head from '../../components/Head';
import DoubleLayerBox from '../../components/DoubleLayerBox';
import format from '../../components/utils/format';
import withResponsive from '../../hoc/withResponsive';

import getText from '../../text';

const PetitionCounter = ({ browser, count, ...props }) => browser.greaterThan.md ? (
  <Box
    position="absolute"
    right="0"
    top="0"
    transform="translate(100%, -50%)"
    f="1.5em"
    {...props}
  >
    <Box
      position="absolute"
      top="50%"
      right="100%"
      transform="translateY(-50%)"
      w="50%"
    >
      <Border border="2px solid" />
    </Box>
    <DoubleLayerBox p="0.75em">
      <Text>{getText('petition.current')}</Text>
      <Flex align="flex-end" justify="center">
        <Text.tetsuBin color="red" f="2.5em">{format(count)}</Text.tetsuBin>
        <Text.tetsuBin pb="0.6em" color="black">{getText('petition.person')}</Text.tetsuBin>
      </Flex>
    </DoubleLayerBox>
  </Box>
) : (
  <Box
    position="fixed"
    right="0"
    left="0"
    top="0"
    f={['1.2em', '1.5em']}
    bg="white"
    {...props}
  >
    <Border border="2px solid" p="0.25em">
      <Flex align="center" justify="center">
        <Box w={['10%', null, '8%']} px={['0.25em', '0.5em']}>
          <Head />
        </Box>
        <Text pr="1.25em">{getText('petition.current')}</Text>
        <Text.tetsuBin color="red" f="1.5em" pr="0.25em">{format(count)}</Text.tetsuBin>
        <Text.tetsuBin color="black">{getText('petition.person')}</Text.tetsuBin>
      </Flex>
    </Border>
  </Box>
);

PetitionCounter.propTypes = {
  count: PropTypes.number,
  browser: PropTypes.object,
};

export default withResponsive(PetitionCounter);
