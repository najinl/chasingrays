import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import './FavoriteFeed.css';


const FavoriteFeed = ({ favorites }) => {
  const favoriteData = favorites.map(favorited => {
    return (
      <FavoriteCard
      trail={favorited.trail}
      city={favorites.city}
      key={Math.random()}
      />
    )
  })

  return (
    <div className="favorite-container">
      { favoriteData }
    </div>
  )
}

export default FavoriteFeed;
