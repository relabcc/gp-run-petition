import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import config from '../../gatsby-config';

import Box from '../components/Box';
import ThemeProvider from '../components/ThemeProvider';

const withPrefix = (path) => config.pathPrefix + path;

const Layout = ({ children, data }) => (
  <Box height="100%">
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <link rel="apple-touch-icon" sizes="180x180" href={withPrefix('/apple-touch-icon.png')} />
      <link rel="icon" type="image/png" sizes="32x32" href={withPrefix('/favicon-32x32.png')} />
      <link rel="icon" type="image/png" sizes="16x16" href={withPrefix('/favicon-16x16.png')} />
      <link rel="manifest" href={withPrefix('/site.webmanifest')} />
      <link rel="mask-icon" color="#5bbad" href={withPrefix('/safari-pinned-tab.svg')} />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:image" content={`https://secured-static.greenpeace.org${withPrefix('/og_image.png')}`} />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.min.css" />
    </Helmet>
    <ThemeProvider>
      {children()}
    </ThemeProvider>
  </Box>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`;
