import React from 'react'
import { data } from '../tournamentdata'
import { useParams } from 'react-router-dom'
import Participate from '../component/partitcipate/Participate';

const ParticipateTour = () => {
    const {id} = useParams();
    console.log(id);
    const participate = data.find((tour)=>{
        return tour.id === Number(id);
    })
    console.log(participate);
    
  return (
    <div className='participateTour'>
      <Participate participate={participate}/>
    </div>
  )
}

export default ParticipateTour