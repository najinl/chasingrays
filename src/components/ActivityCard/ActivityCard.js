import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import './ActivityCard.css';


const ActivityCard = ({ trail, city, weather }) => {
  let filteredWeather = [];
  const todayFull = new Date()
  const todayShort = todayFull.toISOString().split('T')[0]

  filteredWeather = weather.filter(day => {
    return (!day.name.includes('Night') && !day.name.includes('Tonight') && day.startTime > todayShort)
  })
  console.log(filteredWeather)
  return (
    <div className="activity-container">
      <section className="trail-title">
        <h3>{trail}</h3>
        <button>❤️</button>
      </section>
      <p>{`${city}, Colorado`}</p>
      <WeatherCard filteredWeather={filteredWeather}/>
    </div>
  )
}


export default ActivityCard;
