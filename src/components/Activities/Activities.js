import React from 'react';
import './Activities.css';

const Activities = () => {
  const activities = ['Climbing', 'Hiking', 'Mountain Biking'];

  const activitySelections = activities.map(activity => {
    return (
      <button className={`cy-activity-btn ${activity.toLowerCase()}-btn`}>
        <h2>{activity}</h2>
      </button>
    )
  })

  return(
    <div className='activity-options'>
      <section className='activities'>
        {activitySelections}
      </section>
      <div className="continue-option">
        <button className="continue-btn">Continue ➡</button>
      </div>
    </div>
  )
}

export default Activities;
