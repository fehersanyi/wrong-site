import React from 'react';
import pic from '../../sources/images/megjelent.jpg'
const Welcome = ({src}) => (
  <div id="welcome" style={welcomeStyle}></div>
);

export default Welcome;

let welcomeStyle = {
  height: "500px",
  maxHeight: "800px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: `url(${pic})`
}
