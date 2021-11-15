import React, { useEffect, useState } from 'react';
import {Route, Switch, useHistory } from 'react-router-dom';
import { getWeather } from '../../apiCalls';
import { noaaGridLocales, bikingTrails, hikingTrails } from '../../Models.js';
import Header from '../Header/Header'
import Activities from '../Activities/Activities';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import FavoriteFeed from '../FavoriteFeed/FavoriteFeed';
import './App.css';

function App() {
  const [currentActivity, setActivity] = useState('');
  const [selectedActivity, setSelectedActivity] = useState([]);
  const [bikingOptions, setBikingOptions] = useState([]);
  const [hikingOptions, setHikingOptions] = useState([]);
  const [climbingOptions, setClimbingOptions] = useState([]);
  const [favorites, setFavorites] = useState([])
  // const [retrievedFavorites, getFavorites]= useState([]);
  const history = useHistory();

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
      setBikingOptions(populatedBikingTrails)
      setHikingOptions(populateHikingTrails)
    });
  },[])

  const updateActivity = (chosenActivity) => {
    console.log('currActivity:', currentActivity)
    let randomTrails;
    if(chosenActivity === 'Mountain Biking') {
      setSelectedActivity(randomTrails)
    } else if(chosenActivity === 'Hiking') {
      setSelectedActivity(randomTrails)
    }
    visitActivityPage(chosenActivity)
  }

  const addToFavorites = (favoritedTrail) => {
    const matchingTrail = favorites.find(favorited => favorited.trail === favoritedTrail.trail);
    const localHistory = JSON.parse(localStorage.getItem('favoritesHistory'));
    if(!localHistory) {
      localStorage.setItem('favoritesHistory', JSON.stringify([favoritedTrail]));
      let favoritedHistory = localStorage.getItem('favoritesHistory');
      console.log(JSON.parse(favoritedHistory))
      setFavorites(JSON.parse(favoritedHistory))
    } else if(localHistory && !matchingTrail) {
      let favoritedHistory = JSON.parse(localStorage.getItem('favoritesHistory'))
      favoritedHistory.push(favoritedTrail)
      localStorage.setItem('favoritesHistory', JSON.stringify(favoritedHistory));
      setFavorites(favoritedHistory)
    }
  }

  const visitActivityPage = (activity) => {
    setActivity(activity)
    history.push(`/${activity}`)
  }

  console.log(selectedActivity)
  // console.log(currentActivity)
  console.log(bikingOptions)

  return (
    <div className="app-container">
      <Header />
      <Switch>
      <Route exact path="/" render={() => {
        return (
          <Activities updateActivity={updateActivity}/>
        )
      }}
      />
      <Route exact path="/favorites" render={() => {
        return (
          <FavoriteFeed />
        )
      }}
      />
      <Route exact path="/:activity" render={({ match } ) => {
        return (
          <ActivityFeed
          selectedActivity={selectedActivity}
          currentActivity={match.params.activity}
          bikingOptions={bikingOptions}
          hikingOptions={hikingOptions}
          addToFavorites={addToFavorites}
          />
        )
      }}
      />
      </Switch>
    </div>
  );
}

export default App;
