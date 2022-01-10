import React, { useState } from 'react';
import BrokenHart from './broken-heart.png';
import './style.css';

function MovieCard (props) {

  const freeMovies = props.data;
  let storageSessionData = sessionStorage.getItem('favorite');
  const [favorites, setfavorites] = useState( storageSessionData ? storageSessionData.split(",") : [] );


  const addRemoveFavorites = (itemId) => {
    if (favorites.includes(itemId)) {
      const updateFav = favorites.filter((item) => item !== itemId);
      setfavorites(updateFav);
      sessionStorage.setItem('favorite', updateFav );
    } else {
      setfavorites(favorites.concat(itemId));
      sessionStorage.setItem('favorite', `${itemId}, ${favorites}` );
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
                <img src={item.image} alt={item.title} />
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
