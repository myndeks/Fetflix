import React, { useState } from 'react';
import BrokenHart from './broken-heart.png';


function Favorites ({id}) {
  console.log(id);

  let storageSessionData = JSON.parse(sessionStorage.getItem('favorite'));
  const [favorites, setfavorites] = useState( storageSessionData ? storageSessionData : [] );


  const addRemoveFavorites = (id) => {
    if (favorites.includes(id)) {
      const updateFav = favorites.filter((item) => item !== id);
      setfavorites(updateFav);
      sessionStorage.setItem('favorite', JSON.stringify(updateFav));
    } else {
      const updateFav = favorites.concat(id);
      setfavorites(updateFav);
      sessionStorage.setItem('favorite', JSON.stringify(updateFav));
    }
  }

  const handleFavorite = (e, id) => {
     e.preventDefault();
     addRemoveFavorites(id);
   }
   const handleRemoveFavorite = (e, id) => {
      e.preventDefault();
      addRemoveFavorites(id);
  }


  return(
    <div>
      {
        favorites.includes(id) ?
            <button onClick={(e) => handleRemoveFavorite(e, id)} className="favorite">
              Remove <img src={BrokenHart} alt="broken hart"/>
            </button>
          :
            <button onClick={(e) => handleFavorite(e, id)} className="movie_card__content-button">
              Favorite
            </button>
      }
    </div>
  );
}

export default Favorites;
