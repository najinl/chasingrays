import React, { useEffect } from 'react';
import {Route, Switch} from 'react-router-dom';
import { getWeather } from '../../apiCalls';
import Header from '../Header/Header'
import Activities from '../Activities/Activities';
import './App.css';

function App() {

  useEffect(()=> {
    getWeather();
  });

  return (
    <div className="app-container">
      <Header />
      <Route path="/" component={ Activities } />
    </div>
  );
}

export default App;
