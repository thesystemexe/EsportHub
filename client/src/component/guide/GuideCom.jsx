import React from "react";
import "./GuideCom.css";

const GuideCom = ({
  image,
  tagline,
  achievement,
  price,
  id,
  bio,
  name,
  specialty,
}) => {
  return (
    <div className="guide-profile">
      <div className="guide-left">
        <div className="guide-header">
          <img src={image} alt="" className="coach-img" />
          <p className="coach-name">{name}</p>
          <p className="coach-specialty">{specialty}</p>
          <p className="coach-tagline">{tagline}</p>
        </div>
      </div>
      <div className="guide-right">
          <p className="coach-price">Price: ${price}</p>
          <div className="coach-achievements">
            <h4>Achievements:</h4>
            <ul>
              {achievement.slice(0, 2).map((info, index) => {
                return <li key={index}>{info}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
  );
};

export default GuideCom;
