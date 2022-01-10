import React, { useState } from 'react';
import BrokenHart from './broken-heart.png';
import './style.css';

function MovieCard (props) {

  const freeMovies = props.data;
  let storageSessionData = sessionStorage.getItem('favorite');
  const [favorites, setfavorites] = useState(storageSessionData ? storageSessionData : '');


  const handleFavorite = (e, i) => {
     e.preventDefault();
     if (favorites.includes(i)) {

     } else {
       sessionStorage.setItem('favorite', `${favorites},${i}` );
       setfavorites( `${favorites},${i}` );
     }
      console.log(favorites);
 }

 const handleRemoveFavorite = (e, i) => {
    e.preventDefault();
    if (favorites.includes(i)) {

      const array = favorites.split(',')
      console.log('array ' + array);

      let removedItems = array.filter(item => item != i ? item : '');

      setfavorites(removedItems);
      sessionStorage.setItem('favorite', removedItems );
      console.log('removed items ' + removedItems);

    } else {
    }
     console.log('favorites ' + favorites);
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
                  favorites.includes(i) ?
                    <button onClick={(e) => handleRemoveFavorite(e, i)} className="favorite">
                      Remove <img src={BrokenHart} alt="broken hart"/>
                    </button>
                    :
                    <button onClick={(e) => handleFavorite(e, i)} className="movie_card__content-button">
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
