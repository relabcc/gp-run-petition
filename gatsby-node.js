const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allQuestionsJson {
          edges {
            node {
              title
              options
            }
          }
        }
      }
    `).then(result => {
      result.data.allQuestionsJson.edges.forEach(({ node }, index) => {
        const bases = [
          'quiz/question/',
          'taiwan/zh/sites/2018/marathon/quiz/question/',
          'taiwan/marathon/quiz/question/',
        ];
        bases.forEach((base) => {
          createPage({
            path: `${base}${index + 1}`,
            component: path.resolve('./src/containers/QuestionPage/index.js'),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              id: index,
              title: node.title,
              options: node.options,
            },
          });
        });
      });
      resolve();
    })
  })
};
