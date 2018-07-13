import React from 'react';

const Dates = ({ dates }) => (
  
  <div id="tour-dates" style={tourDatesStyle}>
    <div  style={containerStyle}>
      {dates.map(date => (
        <div className="date" style={dateStyle}>
          <div className="gigDate" style={gigDateStyle}>
            <div className="month" style={monthStyle}>{date.month}</div>
            <div className="day" style={dayStyle}>{date.day}</div>
            <div className="year">{date.year}</div>
          </div>
          <div className="eventInfo" style={eventInfoStyle}>
            <h2 className="city" style={cityStyle}>{date.city}</h2>
            <div className="venue" style={venueStyle}>{date.venue}</div>
          </div>
          <a href={date.tickets} className="tickets" style={ticketsStyle}>
            <p style={buttonStyle}>Jegyek</p>
          </a>
        </div>
      ))}
    </div>
    <div>

    </div>
  </div>
);

let tourDatesStyle = {
  display: "block",
  fontSize: "16px",
  position: "relative",
  margin: '0',
  padding: '0 15px',
  maxWidth: "1150px"
};

let containerStyle = {
  borderTop: "1px solid black",
  margin: "0",
  padding: "0",
  marginBottom: "50px",
  display: "block",
  boxSizing: "inherit"
};

let dateStyle = {
  borderBottom: "1px solid black",
  padding: "20px 0",
  margin: "0",
  boxSizing: "inherit"
};

let gigDateStyle = {
  marginBottom: "10px",
  lineHeight: "1",
  boxSizing: "inherit"
};

let monthStyle = {
  textTransform: "uppercase",
  margin: "0",
  padding: "0",
  boxSizing: "inherit"
};

let dayStyle = {
  fontSize: "22px",
  fontWeight: "700",
  margin: "0!important",
  textTransform: "uppercase",
  letterSpacing: "0.5rem",
  lineHeight: "1",
  boxSizing: "inherit"
};

let eventInfoStyle = {
  marginBottom: "10px",
  display: "block",
  boxSizing: "inherit"
};

let cityStyle = {
  lineHeight: "1",
  fontSize: "22px",
  margin: "0!important",
  textTransform: "uppercase",
  letterSpacing: "0.5rem",
  fontWeight: "400",
  boxSizing: "inherit"
};

let venueStyle = {
  textTransform: "uppercase",
  margin: "0",
  padding: "0",
  boxSizing: "inherit"
};

let ticketsStyle = {
  marginBottom: "10p",
  boxSizing: "inherit"
};

let buttonStyle = {
  marginBottom: "8px",
  backgroundColor: "#d81919",
  color: "#fff",
  padding: "12px 16px",
  textTransform: "uppercase",
  letterSpacing: "0.4rem",
  borderRadius: "6px",
  display: "inline-block",
  lineHeight: "1",
  boxSizing: "inherit"
};

export default Dates;