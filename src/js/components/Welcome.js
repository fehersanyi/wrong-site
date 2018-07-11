import React from 'react';

const Welcome = ({src}) => (
  <div id="welcome">
    <img src={src} className="pic" alt="welcome"/>
  </div>
);

export default Welcome;