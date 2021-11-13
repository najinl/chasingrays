import React from 'react';
import { Link } from 'react-router-dom';


const ActivityCard = ({ trail, city }) => {

  return (
    <div className="activity-container">
      <h3>{trail}</h3>
      <p>{`${city}, Colorado`}</p>
    </div>
  )
}


export default ActivityCard;
