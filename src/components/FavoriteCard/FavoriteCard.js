import React from 'react';
// import WeatherCard from '../WeatherCard/WeatherCard';
import './FavoriteCard.css';


const FavoriteCard = ({ trail, city }) => {

  return (
    <div className="favorite-container">
      <h3>{trail}</h3>
      <p>{`${city}, Colorado`}</p>
    </div>
  )
}


export default FavoriteCard;
