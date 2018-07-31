module.exports = {
  siteMetadata: {
    title: '最可怕的，不是跑不到終點',
    description: '【無拘無塑來跑步】當路跑活動的風潮日益成熟，你想像過最理想的路跑環境，應該具備什麼條件？',
  },
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/containers/QuestionPage/questions.json`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
  ],
  // pathPrefix: '/taiwan/Global/taiwan/code/2018/marathon'
  pathPrefix: '/gp-run-petition'
};
