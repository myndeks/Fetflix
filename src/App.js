import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import LogIn from './pages/logIn/index.js';
import LogOut from './pages/logout/index.js';
import Main from './pages/main/index.js';


function App () {

  const [getMovies, setMovies] = useState([]);
  const [tokenInfo, setTokenInfo] = useState(sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null);


  const getData = useCallback(async (url, header) => {
    await axios.get(url, header)
      .then(res => {
        const videosData = res.data;
        setMovies(videosData)
      })
    }, []);

   useEffect(() => {
     if (tokenInfo) {
       getData('https://academy-video-api.herokuapp.com/content/items', {headers: {
         'Authorization': `${sessionStorage.getItem('token')}`
       }} )
     } else {
       getData('https://academy-video-api.herokuapp.com/content/free-items', null);
     }
   },[getData]);

  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Main tokenInfoData={ tokenInfo } data={ getMovies } />}> </Route>
        <Route  path="login" element={<LogIn tokenInfoData={ tokenInfo } />} />
        <Route  path="logout" element={<LogOut />} />
      </Routes>
    </div>
  );
}

export default App;
