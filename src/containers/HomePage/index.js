/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import getText from '../../text';

import Container from '../../components/Container';
import Box from '../../components/Box';
import Text from '../../components/Text';
import BackgroundImage from '../../components/BackgroundImage';
import LinksButton from '../../components/LinksButton';

import titlebubble from './title-bubble.svg';
import homePic from './home-pic.svg';
import mobilehomePic from './mobilehomepic.svg';
import cloudLeft from './cloud-left.svg';
import cloudRight from './cloud-right.svg';

import withResponsive from '../../hoc/withResponsive';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Box overflow="hidden" height="100%" position="relative">
        <Box
            w={['50%', null, null, null,]}
            position="absolute"
            top="0"
            left="0"
            transform={['translate(-30%, -60%)']}
            display={['none', null, null, 'block', 'block']}
          >
            <BackgroundImage src={cloudLeft} ratio={479.79 / 690.83} />
          </Box>
          <Box
            w={['50%', null, null, '50%']}
            position="absolute"
            top="0"
            right="0"
            transform={['translate(35%, -40%)']}
            display={['none', null, null, 'block', 'block']}
          >
            <BackgroundImage src={cloudRight} ratio={528.27 / 853.02} />
        </Box>
        <Container position="relative" height="100%">
          <Box
            position="absolute"
            bottom="0"
            left={['-42%', null, '-6%', '-20%', '-8%', null, null, '-14%']}
            right={['-42%', null, '-6%', '-20%', '-8%', null, null, '-14%']}
          >
            {this.props.browser.lessThan.md ? (
              <Box mx="auto">
                <BackgroundImage src={mobilehomePic} ratio={729 / 1425} />
              </Box>
            ) : (
              <Box mx="auto">
                <BackgroundImage src={homePic} ratio={800 / 1920} />
              </Box>
            )}
            <Box
              position="absolute"
              bottom={['90%', null, null, null, '85%']}
              left="0"
              right="0"
              px="24%"
            >
              <Box mx="auto">
                <object data={titlebubble}>
                  <Text>{getText('petition.toending')}</Text>
                </object>
              </Box>
            </Box>
          </Box>
          <Box
            position="absolute"
            bottom={['0%', null, '2%', '4%']}
            left="0"
            right="0"
            transform={['translateY(-50%)', null, 'translateY(-28%)', 'translateY(-50%)', 'translateY(6%)', 'translateY(-10%)', 'translateY(-60%)']}
          >
            <Box textAlign="center">
              <LinksButton
                px={['5em', null, '6em']}
                to="/quiz/question/1"
                f={['1em', null, null, null, '1.2em']}
              >
                {getText('petition.go')}
              </LinksButton>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  }
}

HomePage.propTypes = {
  browser: PropTypes.object,
};

export default withResponsive(HomePage);
