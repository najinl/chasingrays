import React, { useEffect, useState } from 'react';
import {Route, Switch } from 'react-router-dom';
import { getWeather } from '../../apiCalls';
import { noaaGridLocales, bikingTrails, hikingTrails } from '../../Models.js';
import Header from '../Header/Header'
import Activities from '../Activities/Activities';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import './App.css';

function App() {
  const [currentActivity, setActivity] = useState('');
  const [selectedActivity, setSelectedActivity] = useState([]);
  const [bikingOptions, setBikingOptions] = useState([]);
  const [hikingOptions, setHikingOptions] = useState([]);
  // const [allLocalesWeather, setAllLocalesWeather] = useState([]);

  useEffect(() => {
    getWeather(noaaGridLocales).then(data => {
      const populatedBikingTrails = bikingTrails.map((trail, i) => {
        trail.weather = data[i].properties.periods
        return trail
      })
      const populateHikingTrails = hikingTrails.map((trail, i) => {
        trail.weather = data[i].properties.periods
        return trail
      })
      // setAllLocalesWeather(data)
      setBikingOptions(populatedBikingTrails)
      setHikingOptions(populateHikingTrails)
    });
  },[])

  const randomTrailData = (selectedActivity) => {
    return selectedActivity.sort(() => Math.random() - Math.random()).slice(0, 4);
  }

  const updateActivity = (chosenActivity) => {
    let randomTrails;
    if(chosenActivity === 'Mountain Biking') {
      randomTrails = randomTrailData(bikingOptions)
      setSelectedActivity(randomTrails)
    } else if(chosenActivity === 'Hiking') {
      randomTrails = randomTrailData(hikingOptions)
      setSelectedActivity(randomTrails)
    }
    console.log('shit')
  }

  // const submitActivity = () => {
  //   if(currentActivity !== 'Mountain Biking') {
  //     history.push(`/${currentActivity.toLowerCase()}`);
  //   }
  //   history.push(`/${currentActivity.split(' ').join('-')}`)
  // }

  console.log(selectedActivity)
  // console.log(bikingOptions)
  // console.log('hiking options', hikingOptions)
  // console.log('allLocales:', allLocalesWeather)
  return (
    <div className="app-container">
      <Header />
      <Route exact path="/" render={() => {
        return (
          <Activities
          updateActivity={updateActivity}
        />
        )
      }}
      />
      <Route exact path="/activity" render={() => {
        return (
          <ActivityFeed selectedActivity={selectedActivity}/>
        )
      }}
      />
    </div>
  );
}

export default App;
