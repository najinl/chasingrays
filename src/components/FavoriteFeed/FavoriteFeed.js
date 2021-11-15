import React, { useEffect, useState } from 'react';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import './FavoriteFeed.css';


const FavoriteFeed = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favoritesHistory')));
  },[])

  const removeFromFavorites = (trailToRemove) => {
    const localHistory = JSON.parse(localStorage.getItem('favoritesHistory'));
    const updatedLocalHistory = localHistory.filter(trail => trail.trail !== trailToRemove)
    localStorage.setItem('favoritesHistory', JSON.stringify(updatedLocalHistory));
    setFavorites(JSON.parse(localStorage.getItem('favoritesHistory')));
  }

  const favoriteCards = () => favorites.map(favorited => {
    return (
      <FavoriteCard
      trail={favorited.trail}
      city={favorited.city}
      removeFromFavorites = {removeFromFavorites}
      key={Math.random()}
      />
    )
  })

  return (
    <div className="favorites-container">
      { favoriteCards() }
    </div>
  )
}

export default FavoriteFeed;
