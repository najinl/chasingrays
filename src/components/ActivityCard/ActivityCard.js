import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import { AiOutlineHeart, AiFillHeart  } from "react-icons/ai";
import './ActivityCard.css';


const ActivityCard = ({ trail, city, weather, addToFavorites }) => {
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
        <AiOutlineHeart className='heart-btn'onClick={() => addToFavorites({trail: trail, city: city})}/>
      </section>
      <p className="city">{`${city}, Colorado`}</p>
      <WeatherCard filteredWeather={filteredWeather}/>
    </div>
  )
}


export default ActivityCard;
