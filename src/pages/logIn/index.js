import "./style.css";
import React, { createRef, useEffect, useCallback  } from 'react'
import Header from '../.././components/header/index.js';
import Footer from '../.././components/footer/index.js';
import axios from 'axios';
import { useState } from 'react';

function LogIn ( {tokenInfoData} ) {

  const password = createRef(null);
  const username = createRef(null);


  function isLogedIn () {
    if (tokenInfoData) {
      window.location.replace("/");
    }
  }

  isLogedIn();

  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  const headers = {
  'Content-Type': 'application/json',
  }


  function logInIntoAccunt () {
    console.log(username, password);
     axios.post('https://academy-video-api.herokuapp.com/auth/login', {
       username: username.current.value,
       password: password.current.value
     }, headers)
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
      setToken(res.data);
      const tokenData = res.data;
      sessionStorage.setItem('token', tokenData.token);
      window.location.replace("/");
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
      setError('Failure: please check the login details.')
    })
  }



  return (
    <div className="login">
      <Header btnInfo={'Sign In'} link={'/login'} />


      <div className="login-wrapper">
        <div className="login-wrapper__box">
          <div className="login-wrapper__box-username">
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              ref={username}
              />
          </div>
          <div className="login-wrapper__box-password">
            <label htmlFor="Username">Password</label>
            <input
              type="password"
              ref={password}
            />
          </div>
          <div className="login-wrapper__box-error">
            {error}
          </div>
          <div className="login-wrapper__box-error">
            <button onClick={logInIntoAccunt} className="btn-red"> Sign In </button>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}

export default LogIn;
