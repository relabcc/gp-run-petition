import React from 'react';

import getText from '../../../text';

import Box from '../../../components/Box';
import Border from '../../../components/Border';
import Text from '../../../components/Text';
import LinksButton from '../../../components/LinksButton';

import smallquestion from './smallquestion.svg';
import garbage from './garbage.svg';
import trash from './trash.svg';
import injury from './injury.svg';
import whatshouldwedo from './whatshouldwedo.svg';

const ups = [
  {
    img: trash,
    text: '開跑前，要注意自己的身體',
  },
  {
    img: injury,
    text: '跑步途中，多注意身邊的人',
  },
];

const downs = [
  {
    img: garbage,
    text: '其實，最後的兩題，我們也沒有標準答案，不過底下有一些數據也許能幫助我們一起思考',
  },
  {
    img: whatshouldwedo,
    text: '路跑時，最可怕的是忽略了對自己、他人、環境的影響。為了更友善的路跑環境，以後參加路跑時你可以...',
  },
];

const Mobile = () => (
  <Box w="100%">
    <Box mt="-15%">
      {ups.map((up, index) => (
        <Box textAlign="center" pb="1em" key={index}>
          <Border
            py="1em"
            px={['1em', '2em']}
            w={['18em', '20em', '20em']}
            f={['1em', '1.2em']}
            my="1em"
            bg="white"
            border="2px solid"
            display="inline-block"
          >
            {up.text}
          </Border>
          <object data={up.img}>
          </object>
        </Box>
      ))}
    </Box>
    <Box bg="white" pb="2em">
      <Box textAlign="center" pt="1em">
        <object data={smallquestion}>
        </object>
        {downs.map((down, index) => (
          <Box textAlign="center" pb="1em" key={index}>
            <Border
              w={['20em', '30em']}
              py="1em"
              px={['2em', '4em']}
              my="1.5em"
              bg={index > 0 ? 'orange' : 'white'}
              border="2px solid"
              display="inline-block"
            >
              <Text>{down.text}</Text>
            </Border>
            <object data={down.img}>
            </object>
          </Box>
        ))}
        <LinksButton
          px="3em"
          to="/"
        >
          {getText('petition.mobilesupport')}
        </LinksButton>
      </Box>
    </Box>
  </Box>
  );

export default Mobile;
