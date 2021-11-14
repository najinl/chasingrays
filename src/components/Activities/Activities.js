import React from 'react';
import { useHistory } from 'react-router-dom';
import './Activities.css';

const Activities = ({ updateActivity }) => {
  const history = useHistory();
  const activities = ['Climbing', 'Hiking', 'Mountain Biking'];

  const submitActivity = () => {
    history.push("/activity");
  }

  const activitySelections = activities.map(activity => {
    return (
      <button className={`cy-activity-btn ${activity.toLowerCase()}-btn`} key={activity} onClick={() => updateActivity(activity)}>
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
        <button className="continue-btn" onClick={submitActivity}>Continue ➡</button>
      </div>
    </div>
  )
}

export default Activities;
