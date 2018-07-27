import React from 'react';

import getText from '../../../text';

import Container from '../../../components/Container';
import Box from '../../../components/Box';
import Border from '../../../components/Border';
import Text from '../../../components/Text';
import LinksButton from '../../../components/LinksButton';
import { resultContainerWidth } from '../../../components/ThemeProvider/theme';

import firstStep from './firstStep.svg';
import secStep from './secStep.svg';
import blackManquestionMark from './blackManquestionMark.svg';
import endStep from './endStep.svg';
import transhMan from './transhMan.svg';

import CloudLR from '../CloudLR';
import CloudUD from '../CloudUD';

const ups = [
  {
    img: firstStep,
    text: '開跑前，要注意自己的身體',
  },
  {
    img: secStep,
    text: '跑步途中，多注意身邊的人',
  },
];

const downs = [
  {
    img: transhMan,
    text: '其實，最後的兩題，我們也沒有標準答案，不過\n底下有一些數據也許能幫助我們一起思考',
  },
  {
    img: endStep,
    text: '路跑時，最可怕的是忽略了對自己、他人、環境的影響。\n為了更友善的路跑環境，以後參加路跑時你可以...',
  },
];

const ResultContainer = (props) => <Container maxWidth={resultContainerWidth} {...props} />;

const Destop = () => (
  <Box w="100%" position="relative">
    <Box position="absolute" top="0" left="0" bottom="0" right="0" overflow="hidden">
      <CloudLR
        w="40%"
        top="43%"
        left="-20%"
      />
      <CloudLR
        w="40%"
        bottom="19%"
        right="-23%"
      />
      <CloudUD
        w="50%"
        bottom="2%"
        left="-26%"
      />
      <CloudUD
        w="40%"
        top="32%"
        right="-17%"
      />
    </Box>
    <ResultContainer position="relative" zIndex={5} mt="-15%">
      {ups.map((up, index) => (
        <Box textAlign="center" pb="1em" key={index}>
          <Border
            py="1em"
            px="3em"
            w="20em"
            f="1.5em"
            my="1.5em"
            bg="white"
            border="4px solid"
            display="inline-block"
          >
            {up.text}
          </Border>
          <object data={up.img}>
          </object>
        </Box>
      ))}
    </ResultContainer>
    <Box bg="white" pb="2em" position="relative" zIndex={5}>
      <ResultContainer textAlign="center" pt="1em">
        <object data={blackManquestionMark}>
        </object>
        {downs.map((down, index) => (
          <Box textAlign="center" pb="1em" key={index}>
            <Border
              w="30em"
              f="1.5em"
              p="1em"
              my="1.5em"
              bg={index > 0 ? 'orange' : 'white'}
              border="4px solid"
              display="inline-block"
            >
              <Text whiteSpace="pre">
                {down.text}
              </Text>
            </Border>
            <object data={down.img}>
            </object>
          </Box>
        ))}
        <LinksButton
          px="5em"
          f="1.5em"
          to="/"
        >
          {getText('petition.support')}
        </LinksButton>
      </ResultContainer>
    </Box>
  </Box>
  );

export default Destop;
