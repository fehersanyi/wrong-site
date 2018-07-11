import React from 'react';

const Header = ({ titles }) => (
  <div id="header">
  
    {titles.map(title => (<p className="titles">{title}</p>))}
  </div>
);


export default Header;