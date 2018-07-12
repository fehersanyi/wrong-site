import React from 'react';

const Footer = ({src}) => (
  
  <div id="footer">
    <img id="fb" alt={src.fb} src={src.fb}/>
    <img id="yt" alt={src.yt} src={src.yt}/>
    <img id="ins" alt={src.ins} src={src.ins}/>
    <img id="sp" alt={src.sp} src={src.sp}/>
    <div id="band">©WRONG SIDE</div>
    <div id="label">©EDGE RECORDS</div>

    <a id="creator" href="https://github.com/fehersanyi"><div>SANDOR FEHER</div></a>
  </div>
);

export default Footer;