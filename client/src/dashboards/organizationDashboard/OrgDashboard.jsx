import React, { useState } from 'react'
import './OrgDashboard.css'

const OrgDashboard = () => {
    const [tourDetails, setTourDetails] = useState([
      {
        id: null,
        img:'',
        orgName: "",
        gameName: "",
        date: "",
        numOfParticipant: null,
        category: "",
        prizePool: {
          first: "",
          second: "",
          third: "",
        },
        schedule: {
          registrationDeadline: "",
          startDate: "",
          endDate: "",
          finals: "",
        },
        rules: [

        ],
        description:"",
        platform: "",
        sponsors: [],
        streamingInfo:"",
      },
    ]);

   const handleChange = (e) => {
     const { name, value } = e.target;
     if (name.includes(".")) {
       const [key, subKey] = name.split(".");
       setTourDetails({
         ...tourDetails,
         [key]: { ...tourDetails[key], [subKey]: value },
       });
     } else {
       setTourDetails({ ...tourDetails, [name]: value });
     }
   };


    const handleRulesChange=(index,value)=>{
        const updatedRule = [...tourDetails.rules];
        updatedRule[index] = value;
        setTourDetails({ ...tourDetails, rules: updatedRule });
    }

    const addRule=()=>{
        setTourDetails({ ...tourDetails, rules: [...tourDetails.rules, ""] });
    }
  return (
    <div>
      <h1>Org DashBoard</h1>
      <div className="tour-data">
        <label>
          ID:
          <input
            type="number"
            name="id"
            value={tourDetails.id || ""}
            onChange={handleChange}
          />
        </label>

        <label>
          Image URL:
          <input
            type="file"
            name="img"
            value={tourDetails.img}
            onChange={handleChange}
          />
        </label>

        <label>
          Organizer Name:
          <input
            type="text"
            name="orgName"
            value={tourDetails.orgName}
            onChange={handleChange}
          />
        </label>

        <label>
          Game Name:
          <input
            type="text"
            name="gameName"
            value={tourDetails.gameName}
            onChange={handleChange}
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={tourDetails.date}
            onChange={handleChange}
          />
        </label>

        <label>
          Number of Participants:
          <input
            type="number"
            name="numOfParticipant"
            value={tourDetails.numOfParticipant || ""}
            onChange={handleChange}
          />
        </label>

        <label>
          Category:
          <input
            type="text"
            name="category"
            value={tourDetails.category}
            onChange={handleChange}
          />
        </label>

        <h3>Prize Pool</h3>
        <label>
          First Prize:
          <input
            type="text"
            name="prizePool.first"
            value={tourDetails.prizePool.first}
            onChange={handleChange}
          />
        </label>

        <label>
          Second Prize:
          <input
            type="text"
            name="prizePool.second"
            value={tourDetails.prizePool.second}
            onChange={handleChange}
          />
        </label>

        <label>
          Third Prize:
          <input
            type="text"
            name="prizePool.third"
            value={tourDetails.prizePool.third}
            onChange={handleChange}
          />
        </label>

        <h3>Schedule</h3>
        <label>
          Registration Deadline:
          <input
            type="date"
            name="schedule.registrationDeadline"
            value={tourDetails.schedule.registrationDeadline}
            onChange={handleChange}
          />
        </label>

        <label>
          Start Date:
          <input
            type="date"
            name="schedule.startDate"
            value={tourDetails.schedule.startDate}
            onChange={handleChange}
          />
        </label>

        <label>
          End Date:
          <input
            type="date"
            name="schedule.endDate"
            value={tourDetails.schedule.endDate}
            onChange={handleChange}
          />
        </label>

        <label>
          Finals:
          <input
            type="date"
            name="schedule.finals"
            value={tourDetails.schedule.finals}
            onChange={handleChange}
          />
        </label>

        <h3>Rules</h3>
        {tourDetails.rules.map((rule, index) => (
          <div key={index}>
            <input
              type="text"
              value={rule}
              onChange={(e) => handleRulesChange(index, e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={addRule}>
          Add Rule
        </button>

        <label>
          Description:
          <textarea
            name="description"
            value={tourDetails.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Platform:
          <input
            type="text"
            name="platform"
            value={tourDetails.platform}
            onChange={handleChange}
          />
        </label>

        <label>
          Streaming Info:
          <input
            type="text"
            name="streamingInfo"
            value={tourDetails.streamingInfo}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default OrgDashboard