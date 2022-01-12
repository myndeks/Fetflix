import "./style.css";
import { useParams, useHistory} from "react-router-dom";
import { useState, useCallback, useEffect } from 'react';
import axios from "axios";
import Header from '../.././components/header/index.js';
import Footer from '../.././components/footer/index.js';
import Button from '../helpers/button/index.js';
import PopUp from '../helpers/pop_up/index.js';
import Favorites from '../helpers/favorites/index.js';


function MovieInfo ({tokenInfoData, data}) {

  let { id } = useParams();

  const [getSingleMovies, setSingleMovies] = useState([]);

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


  const getData = useCallback(async (url, header, token) => {
    await axios.get(url, header)
      .then(res => {
        const videosData = res.data;
        if (token) {
          setSingleMovies(videosData);
        } else {
          const singleData = videosData.find((item) => item.id === id)
          setSingleMovies(singleData);
        }
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
        window.location.replace("/login");
      })
    }, []);

   useEffect(() => {
     if (tokenInfoData) {
       getData(`https://academy-video-api.herokuapp.com/content/items/${id}`, {headers: {
         'Authorization': tokenInfoData
       }}, tokenInfoData )
     } else {
       getData(`https://academy-video-api.herokuapp.com/content/free-items`, null, tokenInfoData )
     }
   },[setSingleMovies]);

  return (
    <div>
    <Header btnInfo={tokenInfoData ? 'Sign Out' : 'Sign In'} link={ tokenInfoData ? '/logout' : '/login'} />

    <div className="single-movie-wrapper">
      <div className="single-movie-wrapper__image">
        <img src={getSingleMovies.image} alt={getSingleMovies.title} />
      </div>

      <div className="single-movie-wrapper__content">
        <h1>{getSingleMovies.title}</h1>
        <p>
        {getSingleMovies.description}
        </p>
        <div className="single-movie-wrapper__content-buttons">
          <PopUp url={getSingleMovies.video}/>
          <Favorites id={getSingleMovies.id} />
        </div>
      </div>
    </div>

    <Footer />
    </div>
  );
}

export default MovieInfo;
