import React from 'react';

import head from './head.svg';
import BackgroundImage from '../BackgroundImage';

const Head = () => (
  <div>
    <BackgroundImage w={1} src={head} ratio={60 / 60} />
  </div>
);

export default Head;
