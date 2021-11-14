import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Activities.css';

const Activities = ({ setActivity, updateActivity }) => {
  // const history = useHistory();
  const activities = ['Climbing', 'Hiking', 'Mountain Biking'];

  // const updateActivity = (activity) => {
  //   setActivity(activity)
  // }

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
    </div>
  )
}

export default Activities;
