import "./style.css";
import React, { createRef } from 'react'
import Header from '../.././components/header/index.js';
import Footer from '../.././components/footer/index.js';
import axios from 'axios';
import { connect } from "react-redux";


function LogIn ( { tokenInfoData, error, addToken = () => {} } ) {

  const password = createRef(null);
  const username = createRef(null);

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
      const tokenData = res.data;
      sessionStorage.setItem('token', tokenData.token);
      window.location.replace("/");
      addToken(tokenInfoData);
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
      addToken('Please fill in all the fields');
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


function mapStateToProps ({ auth, tokenInfoData, error }) {
  return {
    tokenInfoData: auth.tokenInfoData,
    error: auth.error,
  }
}
function mapDispatchToProps (dispatch) {
  return {
    addToken: (tokenInfoData, error) => dispatch({ type: 'AUTH/LOGIN', tokenInfoData, error }),
  };
}


const wrapComponent = connect(mapStateToProps, mapDispatchToProps);

export default wrapComponent(LogIn);
