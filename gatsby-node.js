const path = require('path');
const merge = require('lodash/merge');
const questions = require('./src/containers/QuestionPage/questions.json')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve) => {
    questions.forEach((q, index) => {
      const bases = [
        'quiz/question/',
        'taiwan/zh/sites/2018/marathon/quiz/question/',
        'taiwan/marathon/quiz/question/',
      ];
      bases.forEach((base) => {
        const id = index + 1;
        createPage({
          path: `${base}${id}`,
          component: path.resolve('./src/containers/QuestionPage/index.js'),
          context: merge({ id, isLast: id === questions.length }, q),
        });
      });
    });
    resolve();
  })
};
