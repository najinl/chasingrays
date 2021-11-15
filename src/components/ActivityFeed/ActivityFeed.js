import React from 'react';
import { Link } from 'react-router-dom';
import ActivityCard from '../ActivityCard/ActivityCard';
import './ActivityFeed.css';


const ActivityFeed = ({ selectedActivity, currentActivity, bikingOptions, hikingOptions, addToFavorites }) => {
  let trailData = [];

  if(currentActivity === 'Mountain Biking') {
    trailData = bikingOptions.map(trail => {
      return (
        <ActivityCard
          trail={trail.trail}
          city={trail.city}
          weather={trail.weather}
          addToFavorites={addToFavorites}
          key={Math.random()}
        />
      )
    })
  } else if(currentActivity === 'Hiking') {
    trailData = hikingOptions.map(trail => {
      return (
        <ActivityCard
          trail={trail.trail}
          city={trail.city}
          weather={trail.weather}
          addToFavorites={addToFavorites}
          key={Math.random()}
        />
      )
    })
  }

  return (
    <div className="activities-container">
      { trailData }
    </div>
  )
}

export default ActivityFeed;
