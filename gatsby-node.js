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
        createPage({
          path: `quiz/question/${index + 1}`,
          component: path.resolve('./src/containers/QuestionPage/index.js'),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            id: index,
            title: node.title,
            options: node.options,
          },
        })
      });
      resolve();
    })
  })
};
