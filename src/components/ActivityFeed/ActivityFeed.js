import React from 'react';
import { Link } from 'react-router-dom';
import ActivityCard from '../ActivityCard/ActivityCard';
import './ActivityFeed.css';


const ActivityFeed = ({ selectedActivity }) => {
  // let randomTrailData = selectedActivity.sort(() => Math.random() - Math.random()).slice(0, 4);

  let trailData = [];

  trailData = selectedActivity.map(trail => {
    return (
      <ActivityCard
        trail={trail.trail}
        city={trail.city}
      />
    )
  })

  return (
    <div className="activities-container">
      {trailData}
    </div>
  )
}

export default ActivityFeed;
