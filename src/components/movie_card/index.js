import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
import BrokenHart from './broken-heart.png';
import './style.css';

function MovieCard (props) {

  const freeMovies = props.data;
  let storageSessionData = JSON.parse(sessionStorage.getItem('favorite'));
  const [favorites, setfavorites] = useState( storageSessionData ? storageSessionData : [] );


  const addRemoveFavorites = (itemId) => {
    if (favorites.includes(itemId)) {
      const updateFav = favorites.filter((item) => item !== itemId);
      setfavorites(updateFav);
      sessionStorage.setItem('favorite', JSON.stringify(updateFav));
    } else {
      const updateFav = favorites.concat(itemId);
      setfavorites(updateFav);
      sessionStorage.setItem('favorite', JSON.stringify(updateFav));
    }
  }

  const handleFavorite = (e, itemId) => {
     e.preventDefault();
     addRemoveFavorites(itemId);
   }
   const handleRemoveFavorite = (e, itemId) => {
      e.preventDefault();
      addRemoveFavorites(itemId);
  }


  return (
    <div className="movie_card_wrapper">
      {
        freeMovies.map((item, i) => {
          return (
            <div key={item.id} className="movie_card">
              <div className="movie_card__image">
                <Link to={item.id}> <img src={item.image} alt={item.title} /> </Link>
              </div>

              <div className="movie_card__content">
                <div className="movie_card__content-title">
                  <h3> {item.title} </h3>
                </div>

                <div className="movie_card__content-info">
                  <p>
                    {item.description.substring(0,50)}
                  </p>
                </div>


                {
                  favorites.includes(item.id) ?
                      <button onClick={(e) => handleRemoveFavorite(e, item.id)} className="favorite">
                        Remove <img src={BrokenHart} alt="broken hart"/>
                      </button>
                    :
                      <button onClick={(e) => handleFavorite(e, item.id)} className="movie_card__content-button">
                        Favorite
                      </button>
                }

              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default MovieCard;
