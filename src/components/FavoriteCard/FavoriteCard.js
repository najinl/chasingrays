import React from 'react';
import { AiOutlineMinusCircle  } from "react-icons/ai";
import './FavoriteCard.css';


const FavoriteCard = ({ trail, city }) => {

  return (
    <section className="favorite-card">
      <div className="favorite-data">
        <h3>{trail}</h3>
        <p>{`${city}, Colorado`}</p>
      </div>
      <AiOutlineMinusCircle className="remove-favorite-btn"/>
    </section>
  )
}


export default FavoriteCard;
