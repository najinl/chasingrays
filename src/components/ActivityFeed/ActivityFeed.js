import React from 'react';
import { Link } from 'react-router-dom';
import ActivityCard from '../ActivityCard/ActivityCard';
import './ActivityFeed.css';


const ActivityFeed = ({ selectedActivity }) => {
  let trailData = [];

  trailData = selectedActivity.map(trail => {
    return (
      <ActivityCard
        trail={trail.trail}
        city={trail.city}
        weather={trail.weather}
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
