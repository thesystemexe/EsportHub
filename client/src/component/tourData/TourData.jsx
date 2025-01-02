import React, { useEffect, useState } from 'react';
import './TourData.css';
import { Link } from 'react-router-dom';
const TourData = ({image , orgName , gameName , date, numOfParticipant,id,category }) => {
  return (
    <div className="tour-data">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="below-contains">
        <div className="left-side-text">
          <p>{orgName}</p>
          <p>{gameName}</p>
          <p>{numOfParticipant}</p>
        </div>
        <div className="right-side-text">
          <p>{date}</p>
          <Link to={`/participate/${id}`}>
            <button>Participate</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TourData;