import React from 'react';
import './Activities.css';

const Activities = ({ setActivity, updateActivity }) => {
  const activities = ['Climbing', 'Hiking', 'Mountain Biking'];

  const activitySelections = activities.map(activity => {
    return (
      <>
        <h2>{activity}</h2>
        <button className={`cy-activity-btn ${activity.toLowerCase()}-btn`} key={activity} onClick={() => updateActivity(activity)}>
        </button>
      </>
    )
  })

  return(
    <div className='activity-options'>
      <section className='activities'>
        {activitySelections}
      </section>
    </div>
  )
}

export default Activities;
