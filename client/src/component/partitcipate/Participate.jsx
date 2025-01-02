import React from 'react'
import './Participate.css'
const Participate = ({participate}) => {
  return (
    <div className="tournament-details">
      <div className="header-section">
        <img className='tournament-image' src={participate.img} alt={`${participate.gameName}`} />
        <h1 className="tournament-title">{participate.orgName}</h1>
        <p className="tournament-dates">{participate.date}</p>
        <p className="tournament-organizer">
          Organized by: {participate.orgName}
        </p>
      </div>

      <div className="details-section">
        <div className="left-section">
          <h3>Game information</h3>
          <p>Category: {participate.category}</p>
          <p>Participant: {participate.numOfParticipant}</p>
          <h3>Description:</h3>
          <p>{participate.description}</p>
          <h3>Platform</h3>
          <p>{participate.platform}</p>
          <h3>Sponsors</h3>
          <ul>
            {participate.sponsors.map((sponsor, index) => (
              <li key={index}>{sponsor}</li>
            ))}
          </ul>
          <h3>Streaming Info</h3>
          <p>{participate.streamingInfo}</p>
          <h3>Rules and Guidelines</h3>
          <ul>
            {participate.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
        <div className="right-section">
          <h3>Schedule</h3>
          <p>
            Registration Closes: {participate.schedule.registrationDeadline}
          </p>
          <p>Matches Start: {participate.schedule.startDate}</p>
          <p>Finals: {participate.schedule.finals}</p>
          <h3>Prize Pool</h3>
          <p>1st Place: {participate.prizePool.first}</p>
          <p>2nd Place: {participate.prizePool.second}</p>
          <p>3rd Place: {participate.prizePool.third}</p>
          <button className="register-button">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default Participate