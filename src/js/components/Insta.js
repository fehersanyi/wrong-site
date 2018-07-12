import React from 'react';

const Insta = ({ pictures }) => (
  <div id="insta">
    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/wrongside_official/"><h2>INSTAGRAM</h2></a>
    <div className="picContainer">
    {pictures.map(pic => (
      <a target="_blank" href={pic.url}>
        <img className="instaPic" src={pic.pic} alt={pic.title} />
      </a>
    ))}
    </div>
  </div>
);


export default Insta;