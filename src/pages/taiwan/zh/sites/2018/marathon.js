import React from 'react';
import ImagePreloader from '../../../../../components/ImagePreloader';
import Petition from '../../../../../containers/PetitionPage';
import assets from '../../../../../assets';

const Index = (props) => (
  <ImagePreloader images={assets}>
    <Petition {...props} />
  </ImagePreloader>
);

export default Index;
