import React from 'react';

const Section = ({ title, sectionSrc, url, subTitle, forwardSrc }) => (
  <div className="section" style={sectionStyle}>
    <div className="wrapper" style={wrapperStyle}>
      <header className="sectionBarInternal" style={sectionBarInternalStyle}>
        <div style={buttonStyle}>
          <img alt="smallIcon" src={sectionSrc} style={sectionSrcStyle}/>
        <span style={titleStyle}>
          {title}
        </span>
        </div>
      </header>
      <header className="sectionBarExternal" style={sectionBarExternalStyle}>
        <a href={url} target="_blank" style={externalLinkStyle}>
          <span style={subTitleStyle}>{subTitle}</span>
          <img alt="smallIcon" className="iconLink" src={forwardSrc} style={externalIconStyle} />
        </a>
      </header>
    </div>
  </div>
);

export default Section;

let sectionStyle = {
  fontSize: "16px",
  boxShadow: "inset 0 1px #fff, 0 2px 4px rgba(0,0,0,.2)",
  marginTop: "10px",
  marginBottom: "30px",
  padding: "24px 0",
  marginLeft: "15px",
  marginRight: "15px",
}

let wrapperStyle = {
  position: "relative",
  maxWidth: "1150px",
  margin: "0 auto",
  padding: "0 15px",
  display: "flex",
  justifyContent: "space-between"
}

let sectionBarInternalStyle = {
  zoom: "1",
  position: "relative",
  margin: "0",
  padding: "0"
}

let sectionBarExternalStyle = {
  zoom: "1",
  position: "relative",
  margin: "0",
  padding: "0",
}

let buttonStyle = {
  textTransform: "uppercase",
  letterSpacing: ".04em",
  display: "flex",
  textAlign: "left",
  fontSize: "22px",
  lineHeight: "1",
  padding: "0",
  margin: "0",
  outline: "none",
  border: "none",
  wordBreak: "normal",
  transition: "opacity 250ms color 250ms background 250ms",
  textDecoration: "none",
  cursor: "pointer"
}

let externalLinkStyle = {
  textTransform: "uppercase",
  letterSpacing: ".04em",
  display: "flex",
  textAlign: "right",
  fontSize: "18px",
  lineHeight: "1",
  padding: "0",
  margin: "0",
  outline: "none",
  border: "none",
  wordBreak: "normal",
  transition: "opacity 250ms color 250ms background 250ms",
  textDecoration: "none",
  cursor: "pointer"
}

let titleStyle = {
  marginLeft: "11px",
  display: "inline-block",
  verticalAlign: "middle",
}

let subTitleStyle = {
  marginRight: "11px",
  display: "inline-block",
  verticalAlign: "middle",
}

let externalIconStyle = {
  height: "18px",
  width: "18px",

}

let sectionSrcStyle = {
  height: "18px",
  width: "18px",
  }