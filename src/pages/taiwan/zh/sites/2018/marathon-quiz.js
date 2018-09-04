import React from 'react';
import ImagePreloader from '../../../../../components/ImagePreloader';
import Page from '../../../../../containers/HomePage';
import assets from '../../../../../quiz-assets';

const Index = (props) => (
  <ImagePreloader images={assets}>
    <Page {...props} />
  </ImagePreloader>
);

export default Index;
