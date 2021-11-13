import React from 'react';



const WeatherCard = ({ filteredWeather }) => {
  let dailyWeather=[];
  // console.log(filteredWeather)

  dailyWeather = filteredWeather.map(day => {
    return (
      <>
        <p>{day.name.substring(0,3)}</p>
        <p>{day.shortForecast}</p>
        <p>{`${day.temperature}°${day.temperatureUnit}`}</p>
      </>
    )
  })

  return (
    <div className="weather-container">
      {dailyWeather}
    </div>
  )
}


export default WeatherCard;
