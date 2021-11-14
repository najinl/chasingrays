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
  const [retrievedFavorites, getFavorites]= useState([]);
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

  // const randomTrailData = (selectedActivity) => {
  //   return selectedActivity.sort(() => Math.random() - Math.random()).slice(0, 4);
  // }

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
      return setFavorites(JSON.parse(favoritedHistory))
    } else if(localHistory && !matchingTrail) {
      let favoritedHistory = JSON.parse(localStorage.getItem('favoritesHistory'))
      favoritedHistory.push(favoritedTrail)
      localStorage.setItem('favoritesHistory', JSON.stringify(favoritedHistory));
      return setFavorites(favoritedHistory)
    }
    // setFavorites([...favorites, favoritedTrail])
    // console.log('Favorites:', favorites)
  }

  const visitActivityPage = (activity) => {
    setActivity(activity)
    history.push(`/${activity}`)
  }

  console.log(selectedActivity)
  // console.log(currentActivity)
  console.log(bikingOptions)
  // console.log('hiking options', hikingOptions)
  // console.log('allLocales:', allLocalesWeather)
  return (
    <div className="app-container">
      <Header />
      <Switch>
      <Route exact path="/" render={() => {
        return (
          <Activities
          updateActivity={updateActivity}
        />
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
      <Route exact path="/favorite" render={() => {
        <FavoriteFeed />
      }}
      />
      </Switch>
    </div>
  );
}

export default App;
