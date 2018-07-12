import React from 'react';

const Welcome = ({src}) => (
  <div id="welcome" style={{backgroundImage: `url(${src})`}}></div>
);

export default Welcome;