import React from 'react';

const Dates = ({ dates }) => (

  <div id="tour-dates">
    <h2>KONCERTEK</h2>

    {dates.map(date => (
      <div className="date">
        <div className="gigDate">
          <div className="month">{date.month}</div>
          <div className="day">{date.day}</div>
          <div className="year">{date.year}</div>
        </div>
        <div className="venue">
          <h2 className="city">{date.city}</h2>
          <div className="venue">{date.venue}</div>
        </div>
        <a href={date.tickets} className="tickets">
          <p >Jegyek</p>
        </a>
      </div>
    ))}
  </div>
);


export default Dates;