import React, { useState } from 'react';
import '../pages/css/Tournament.css'
import {data} from '../tournamentdata';
import TourData from '../component/tourData/TourData';


const Tournament = () => {
  const [category, setCategory] = useState("All");

  const filteredData = category==="All"?data:data.filter((tour)=>tour.category===category);

  return (
    <div className="tournament">
      <ul className='tournament-category'>
        <li onClick={()=>setCategory('All')}>All</li>
        <li onClick={()=>setCategory("mobile")}>Mobile</li>
        <li onClick={()=>setCategory("controller")}>Pc</li>
        <li onClick={()=>setCategory("pc")}>Console</li>
      </ul>
      <div className="tour-container">
        {filteredData.map((tour, index) => {
          return (
            <TourData
            id={tour.id}
              key={index}
              image={tour.img}
              orgName={tour.orgName}
              gameName={tour.gameName}
              date={tour.date}
              numOfParticipant={tour.numOfParticipant}
              category={tour.category}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tournament