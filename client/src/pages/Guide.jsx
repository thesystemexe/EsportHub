import React from 'react';
import './css/Guide.css'
import {coaches} from '../coachData'
import GuideCom from '../component/guide/GuideCom';

const Guide = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "rgba(128, 128, 128, 0.42" }}>
        To make your career better
      </h1>
      <div className="guide-container">
        {coaches.map((coach, index) => {
          return (
            <GuideCom
              key={index}
              image={coach.image}
              id={coach.id}
              tagline={coach.tagline}
              name={coach.name}
              specialty={coach.specialty}
              price={coach.pricePerSession}
              achievement={coach.achievements}
              bio={coach.bio}
            />
          );
        })}
      </div>
    </>
  );
}

export default Guide