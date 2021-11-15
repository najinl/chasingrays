import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
// import './FavoriteFeed.css';


const FavoriteFeed = () => {
  const [favorites, setFavorites] = useState([]);
  // let favoritedTrails = JSON.parse(localStorage.getItem('favoritesHistory'));
  // console.log('favoritedTrails:',favoritedTrails);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favoritesHistory')));
  },[])

  const favoriteCards = () => favorites.map(favorited => {
    return (
      <FavoriteCard
      trail={favorited.trail}
      city={favorited.city}
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
