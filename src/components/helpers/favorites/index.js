import React, { useState } from 'react';
import BrokenHart from './broken-heart.png';
import { connect } from "react-redux";


function Favorites ({id, isFavorite, toggleFavorites = () => {} }) {

  const handleOnClick = () => {
    toggleFavorites(id);
  }

  return(
    <div>
    {
      isFavorite && "movie_card__content-button" ?
          <button onClick={handleOnClick} className="favorite">
            Remove
          </button>
        :
          <button onClick={handleOnClick} className="movie_card__content-button">
            Favorite
          </button>
    }
    </div>
  );
}

function mapStateToProps ({ content }, { id }) {
  return {
    isFavorite: content.favorites.includes(id),
  }
}
function mapDispatchToProps (dispatch) {
  return {
    toggleFavorites: (id) => dispatch({ type: 'CONTENT/TOGGLE_FAVORITE', id }),
  };
}


const wrapComponent = connect(mapStateToProps, mapDispatchToProps);

export default wrapComponent(Favorites);
