import React from 'react';

const Header = ({ titles }) => (
  <div id="header">
  
    {titles.map(title => (<p>{title}</p>))}
  </div>
);


export default Header;