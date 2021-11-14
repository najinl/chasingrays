import React from 'react';
import './WeatherCard.css';


const WeatherCard = ({ filteredWeather }) => {
  let dailyWeather=[];
  // console.log(filteredWeather)

  dailyWeather = filteredWeather.map(day => {
    return (
        <div className="day-card" key={Math.random()}>
            <div className="date">
              <div className="day-of-week">{day.name.substring(0,3)}</div>
              <div className="day">{day.startTime.substring(8,10)}</div>
            </div>
            <div className="temperature">{`${day.temperature}°${day.temperatureUnit}`}</div>
            <img className="weather-img" src={day.icon} alt="representative weather image"/>
            <div className="short-forecast">{day.shortForecast}</div>
        </div>
    )
  })

  return (
    <div className="weather-container">
      {dailyWeather}
    </div>
  )
}


export default WeatherCard;
