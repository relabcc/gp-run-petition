import React, { PureComponent } from 'react';
import { polyfill } from 'react-lifecycles-compat';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import TWEEN from '@tweenjs/tween.js';
import scroll from 'window-scroll';
import isNumber from 'lodash/isNumber';
import get from 'lodash/get';
import mapKeys from 'lodash/mapKeys';

import Container from '../../components/Container';
import Box from '../../components/Box';
import Text from '../../components/Text';
import CircleWithArrow from '../../components/CircleWithArrow';
import Runway from '../../components/Runway';
import Runner from '../../components/Runner';
import DoubleLayerButton from '../../components/DoubleLayerButton';
import Logo from '../../components/Logo';
import { resultContainerWidth } from '../../components/ThemeProvider/theme';
import api from '../../services/api';

import getText from '../../text';

import Modal from './Modal';
import PetitionForm from './PetitionForm';
import PetitionCounter from './PetitionCounter';
import bubble from './bubble.svg';

const percent = (num) => `${num * 100}%`;

const remapFields = {
  fullName: 'supporter.NOT_TAGGED_19',
  dateOfBirth: 'supporter.NOT_TAGGED_6',
  email: 'supporter.emailAddress',
  phoneNumber: 'supporter.phoneNumber',
  emailOkTaiwan: 'supporter.questions.7276',
};

class PetitionPage extends PureComponent {
  static getDerivedStateFromProps({ data, location: { search } }) {
    const searchParams = queryString.parse(search);
    const forceOpen = +searchParams.open === 1;
    if (!data.jsonContent) return { forceOpen };
    const jsonContent = JSON.parse(data.jsonContent);
    const base = jsonContent.initial || 0;
    const realCount = base + +get(data, ['data', 'rows', 0, 'columns', 4, 'value'], 0);
    const target = jsonContent.goal;

    return {
      realCount,
      target,
      forceOpen,
    };
  }

  state = {
    petitionCount: 0,
    count: 0,
    modalOpen: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (isNumber(this.state.target) && !isNumber(prevState.target)) this.setAnimation();
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animate);
  }

  setAnimation = () => {
    const { forceOpen } = this.state;
    this.tween = new TWEEN.Tween({ scrollTop: 0, count: 0 });
    const { top } = this.dummyRef.getBoundingClientRect();
    this.tween.to({
      scrollTop: (scroll.getScrollY() + top) - (window.innerHeight * 0.66),
      count: this.state.realCount,
    }, forceOpen ? 0 : Math.min(top * 1.75, 5000))
      .easing(TWEEN.Easing.Quadratic.Out)
      .onUpdate(({ scrollTop, count }) => {
        if (scrollTop > document.documentElement.scrollHeight) this.tween.stop();
        window.scrollTo(0, scrollTop);
        this.setState({ count });
      })
      .onComplete(() => this.setState({ animated: true, animating: false, modalOpen: forceOpen }));
    this.startAnimation();
  }

  toEnding = () => {
    this.tweenEnd = new TWEEN.Tween({ scrollTop: scroll.getScrollY() });
    this.tweenEnd.to({
      scrollTop: document.documentElement.scrollHeight - window.innerHeight,
    }, 2000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(({ scrollTop }) => {
        window.scrollTo(0, scrollTop);
      })
      .start();
  }

  toPetition = () => {
    const { top } = this.dummyRef.getBoundingClientRect();
    this.tweenPetition = new TWEEN.Tween({ scrollTop: scroll.getScrollY() });
    this.tweenPetition.to({
      scrollTop: (scroll.getScrollY() + top) - (window.innerHeight * 0.66),
    }, 2000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(({ scrollTop }) => {
        window.scrollTo(0, scrollTop);
      })
      .start();
  }

  startAnimation = () => {
    this.setState({ animating: true });
    window.requestAnimationFrame(this.animate);
    this.tween.start();
  }

  animate = (time) => {
    window.requestAnimationFrame(this.animate);
    TWEEN.update(time);
  }

  handleDummyRef = (ref) => {
    this.dummyRef = ref;
  }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  handleSubmit = (data) => {
    const remappedData = mapKeys(data, (value, key) => remapFields[key]);
    return this.props.submitForm(remappedData)
      .then(() => {
        this.setState({ submitted: true });
        this.props.updateStat();
      });
  }

  render() {
    const {
      count,
      realCount,
      animated,
      modalOpen,
      submitted,
      animating,
      target,
    } = this.state;
    const appear = realCount < target * 0.95;
    const runnerTop = percent((animated ? realCount : count) / target);
    return (
      <Box w={1} position="relative" overflow="hidden">
        <Logo />
        <Container maxWidth={resultContainerWidth} px="1.5em" overflow={['hidden', 'visible']}>
          <Box position="relative" pt="100%" pb="30%">
            <Runway length="1000%" cleanTop={runnerTop} target={target}>
              <Runner
                width="60%"
                position="absolute"
                left="50%"
                transform="translate(-50%, -100%)"
                style={{ top: runnerTop }}
                animate={animating}
              />
              <Box
                innerRef={this.handleDummyRef}
                position="absolute"
                textAlign="center"
                left="0"
                right="0"
                style={{ top: percent(realCount / target) }}
                zIndex={5}
              >
                {animated && (
                  <div>
                    <Box position="absolute" width="42%" top="0" right="5%" transform="translateY(-270%)">
                      <object data={bubble}>
                        <Text>{getText('petition.letsClean')}</Text>
                      </object>
                    </Box>
                    <Box w="100%" transform={['translateY(20%)', null, null, null, 'translateY(40%)']}>
                      <DoubleLayerButton
                        w={1 / 2}
                        f={['1.2em', '2em']}
                        py="0.5em"
                        onClick={this.handleOpen}
                      >
                        <Text>{getText(['petition', submitted ? 'share' : 'action'])}</Text>
                      </DoubleLayerButton>
                    </Box>
                    {appear && (
                      <CircleWithArrow
                        w={['12%', null, null, '15%']}
                        minWidth="4.5em"
                        mx="auto"
                        mt="1em"
                        transform={['translateY(20%)', 'translateY(40%)']}
                        onClick={this.toEnding}
                      >
                        <Text f={['1em', null, null, '1.5em']}>{getText('petition.ending')}</Text>
                      </CircleWithArrow>
                  )}
                    <PetitionCounter count={realCount} />
                  </div>
                )}
              </Box>
              {appear && (
                <Box position="absolute" bottom="0" w={1} transform={['translateY(270%)', null, null, 'translateY(250%)']}>
                  <CircleWithArrow
                    w={['12%', null, null, '15%']}
                    minWidth="5em"
                    mx="auto"
                    onClick={this.toPetition}
                    arrowType="up"
                  >
                    <Text f={['1em', null, null, '1.5em']} whiteSpace="pre">{getText('petition.toPetition')}</Text>
                  </CircleWithArrow>
                </Box>
              )}
            </Runway>
            <Modal
              isOpen={modalOpen}
              onRequestClose={this.handleClose}
            >
              <PetitionForm
                onSubmit={this.handleSubmit}
                onRequestClose={this.handleClose}
                submitted={submitted}
              />
            </Modal>
          </Box>
        </Container>
      </Box>
    );
  }
}

PetitionPage.propTypes = {
  submitForm: PropTypes.func,
  firebase: PropTypes.object,
};

export default compose(
  api,
  polyfill
)(PetitionPage);
