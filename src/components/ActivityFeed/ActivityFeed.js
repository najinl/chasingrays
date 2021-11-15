import React from 'react';
import ActivityCard from '../ActivityCard/ActivityCard';
import './ActivityFeed.css';


const ActivityFeed = ({ currentActivity, bikingOptions, hikingOptions, addToFavorites }) => {
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
