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
import MovieInfo from './components/movie_info/index.js';
import useFetch from './hooks/useFetch.js';


function App () {

  const {
    error,
    tokenInfo,
    payLoad: movies = [],
  } = useFetch (
    'https://academy-video-api.herokuapp.com/content/free-items',
    'https://academy-video-api.herokuapp.com/content/items',
        {headers: {
          'Authorization': `${sessionStorage.getItem('token')}`
    }}
  );


  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Main tokenInfoData={ tokenInfo } data={ movies } />}> </Route>
        <Route  path="/:id" element={<MovieInfo tokenInfoData={ tokenInfo } data={ movies } />}> </Route>
        <Route  path="login" element={<LogIn tokenInfoData={ tokenInfo } />} />
        <Route  path="logout" element={<LogOut />} />
      </Routes>
    </div>
  );
}

export default App;
