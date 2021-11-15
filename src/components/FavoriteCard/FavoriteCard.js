import React from 'react';
import { AiOutlineMinusCircle  } from "react-icons/ai";
import './FavoriteCard.css';


const FavoriteCard = ({ trail, city, removeFromFavorites }) => {

  return (
    <section className="favorite-card">
      <div className="favorite-data">
        <h3>{trail}</h3>
        <p>{`${city}, Colorado`}</p>
      </div>
      <AiOutlineMinusCircle className="remove-favorite-btn" onClick={() => removeFromFavorites(trail)}/>
    </section>
  )
}

export default FavoriteCard;
