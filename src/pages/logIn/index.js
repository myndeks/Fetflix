import "./style.css";
import Header from '../.././components/header/index.js';
import Footer from '../.././components/footer/index.js';
import axios from 'axios';
import { useState } from 'react';

function LogIn ( {tokenInfoData} ) {


  function isLogedIn () {
    if (tokenInfoData) {
      window.location.replace("/");
    }
  }

  isLogedIn();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  function addUserName (e) {
    setUsername(e.target.value);
  }

  const data = {
    username: username,
    password: password
  };

  function addUserPassword (e) {
    setPassword(e.target.value);
  }

  const headers = {
  'Content-Type': 'application/json',
  }


  function logInIntoAccunt () {
    console.log(username, password);
    axios.post('https://academy-video-api.herokuapp.com/auth/login', data, headers)
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
            <input onChange={(e) => addUserName(e)} type="text" />
          </div>
          <div className="login-wrapper__box-password">
            <label htmlFor="Username">Password</label>
            <input onChange={(e) => addUserPassword(e)} type="password" />
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
