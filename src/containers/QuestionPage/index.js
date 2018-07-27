import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import LinksButton from '../../components/LinksButton';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Text from '../../components/Text';
import Container from '../../components/Container';
import BackgroundImage from '../../components/BackgroundImage';
import VerticalCenter from '../../components/VerticalCenter';

import Logo from './Logo';
import Bubble from './Bubble';
import Progress from './Progress';

import pictures from './qpictures';
import withReducer from './hoc';

const QuestionPage = ({ pathContext: question , setAnswer, answers }) => {
  // 如果沒有題目，導回首頁
  if (!question) return <Redirect to="/" />;

  const pageId = question.id + 1;
  const qId = question.id;

  // 判斷是不是最後一題
  const isLast = pageId === pictures.length;

  return (
    <Box position="relative" height="100%">
      <Logo />
      <Container height="100%">
        <VerticalCenter>
          <Bubble number={pageId}>
            {question.title}
          </Bubble>
          <Box px={['5%', '15%']}>
            <BackgroundImage w={1} src={pictures[qId]} ratio={540 / 1020} />
          </Box>
          <Flex justify="center" key={qId}>
            {question.options.map((optText, optId) => (
              <Box key={optId} transform="translateY(-25%)">
                <LinksButton
                  w={['12em', '15em']}
                  px={['0em', '1em']}
                  py="0.5em"
                  to={isLast ? '/quiz/result' : `/quiz/question/${pageId + 1}`}
                  onClick={() => setAnswer(qId, optId)}
                  mx={['0.25em', '1em']}
                  active={answers[qId] === optId}
                >
                  <Text f={['1em', '1.2em']} whiteSpace="pre" textAlign="center">{optText}</Text>
                </LinksButton>
              </Box>
            ))}
          </Flex>
        </VerticalCenter>
      </Container>
      <Progress currentId={qId} />
    </Box>
  );
};

QuestionPage.propTypes = {
  answers: PropTypes.array,
  setAnswer: PropTypes.func,
};

export default withReducer(QuestionPage);