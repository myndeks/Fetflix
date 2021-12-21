import React, { useState } from 'react';
import './style.css';

function MovieCard (props) {
  
  const freeMovies = props.data;

  const handleFavorite = (e) => {
     e.preventDefault();

     if (e.target.classList == 'movie_card__content-button') {
       e.target.classList.remove('movie_card__content-button');
       e.target.classList.add('favorite');
     } else {
       e.target.classList.remove('favorite');
       e.target.classList.add('movie_card__content-button');
     }

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
                <button onClick={(e) => handleFavorite(e)} className="movie_card__content-button">
                  Favorite
                </button>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default MovieCard;
