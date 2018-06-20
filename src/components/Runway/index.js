import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { withContentRect } from 'react-measure';
import { polyfill } from 'react-lifecycles-compat';
import { compose } from 'redux';
import range from 'lodash/range';
import random from 'lodash/random';
import take from 'lodash/take';
import last from 'lodash/last';
import get from 'lodash/get';

import getText from '../../text';

import Bushes from '../Bushes';
import Box from '../Box';
import Border from '../Border';
import Text from '../Text';
import BoardBig from '../MeterBoard/Big';
import format from '../utils/format';

import pattern from './road-pattern.svg';
import trashes from './trashes.svg';
import shine from './clean-shine.svg';
import start from './start.svg';
import finish from './finish.svg';
import BackgroundImage from '../BackgroundImage';

const full = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const FullSize = styled(Box)`
  ${full}
`;

const RunwayTrash = styled(FullSize)`
  background-position: 50% 100%;
  background-image: url(${trashes});
  background-repeat: repeat-y;
`;

const RunwayPattern = styled(FullSize)`
  background-image: url(${pattern});
  background-repeat: repeat-y;
`;

const RunwayShine = styled(FullSize)`
  background-image: url(${shine});
  background-repeat: repeat-y;
  background-size: 100%;
`;

const BushesContainer = (props) => (
  <Box
    w="25%"
    top="0"
    bottom="0"
    position="absolute"
    {...props}
  />
);

const LineBox = ({ children, ...props }) => (
  <Border border="0.25em solid black" py="2em" {...props}>
    <Text.tetsuBin f="2em" textAlign="center">{children}</Text.tetsuBin>
  </Border>
);

LineBox.propTypes = {
  children: PropTypes.node,
};

const BigFlag = ({ src, ...props }) => (
  <Box
    position="absolute"
    left="7.5%"
    right="7.5%"
    {...props}
  >
    <BackgroundImage src={src} ratio={664 / 690} />
  </Box>
);

BigFlag.propTypes = {
  src: PropTypes.string,
};

const notRepeatRandom = (prev = 0, ...params) => {
  const n = random(...params);
  if (n === prev) return notRepeatRandom(prev, ...params);
  return n;
};

const generateBushes = (list) => list.concat({
  variation: notRepeatRandom(get(last(list), 'variation'), 1, 3),
  rotation: random(3),
});

class Runway extends PureComponent {
  static getDerivedStateFromProps({ contentRect: { bounds: { width, height } } }, prevState) {
    if (height === prevState.height) return null;
    const bushCount = Math.round((height / width) * 5.95);
    const ranges = range(bushCount - prevState.bushCount);

    return {
      height,
      bushCount,
      bushLeft: ranges.reduce(generateBushes, prevState.bushLeft),
      bushRight: ranges.reduce(generateBushes, prevState.bushRight),
    };
  }

  state = {
    bushCount: 0,
    bushLeft: [],
    bushRight: [],
  }

  componentDidMount() {
    this.props.measure();
  }

  renderBush = (bush, index) => <Bushes key={index} {...bush} />

  render() {
    const {
      length,
      measure,
      measureRef,
      contentRect,
      cleanTop,
      target,
      ...props
    } = this.props;
    const { bushCount, bushLeft, bushRight } = this.state;
    return (
      <Box position="relative">
        <LineBox bg="white" />
        <Box
          innerRef={measureRef}
          position="relative"
          bg="lightGray"
          pt={length}
        >
          <RunwayPattern />
          <RunwayTrash />
          <RunwayShine bg="lightYellow" style={{ height: cleanTop }} />
          <RunwayPattern style={{ height: cleanTop }} />
          <FullSize {...props} />
        </Box>
        <LineBox bg="red" color="white">{getText('petition.finish', { target: format(target) })}</LineBox>
        <BushesContainer left="0" transform="translateX(-50%)">
          {take(bushLeft, bushCount).map(this.renderBush)}
        </BushesContainer>
        <BushesContainer right="0" transform="translateX(50%)">
          {take(bushRight, bushCount).map(this.renderBush)}
        </BushesContainer>
        <BigFlag top="0" src={start} transform="translateY(-90%)" />
        <BoardBig top="25%" left="0" distance={5} transform="translate(-40%, -100%)" />
        <BoardBig top="50%" right="0" distance={10} transform="translate(40%, -100%)" />
        <BoardBig top="75%" left="0" distance={[15, 0]} transform="translate(-40%, -100%)" />
        <BoardBig top="75%" right="0" distance={[15, 1]} transform="translate(40%, -100%)" />
        <BigFlag src={finish} transform="translateY(-110%)" />
      </Box>
    );
  }
}

Runway.propTypes = {
  length: PropTypes.string,
  measure: PropTypes.func,
  measureRef: PropTypes.func,
  contentRect: PropTypes.object,
  cleanTop: PropTypes.string,
  target: PropTypes.number,
};

export default compose(
  withContentRect('bounds'),
  polyfill
)(Runway);
