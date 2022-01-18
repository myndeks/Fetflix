import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
import './style.css';
import Favorites from '../helpers/favorites/index.js';

function MovieCard (props) {

  const freeMovies = props.data;


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
                <Favorites id={item.id} />
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default MovieCard;
