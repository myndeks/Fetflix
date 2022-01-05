import React from "react";
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



class App extends React.Component {

  state = {
    freeVideo: [],
    tokenInfo: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null,
    paidVideos: []
  }


  fetchFreeVideos () {
    axios.get('https://academy-video-api.herokuapp.com/content/free-items')
      .then(res => {
        const freeVideo = res.data;
        this.setState({freeVideo: freeVideo})
      })
  }

  fetchPaidVideos () {

    axios.get('https://academy-video-api.herokuapp.com/content/items', {headers: {
      'Authorization': `${sessionStorage.getItem('token')}`
    }})
      .then(res => {
        const paidVideos = res.data;
        this.setState({paidVideos: paidVideos})
    })
  }

  componentDidMount () {

    if (this.state.tokenInfo) {
      this.fetchPaidVideos();
    } else {
      this.fetchFreeVideos();
    }

  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route  path="/" element={<Main tokenInfoData={ this.state.tokenInfo } data={ this.state.tokenInfo ? this.state.paidVideos : this.state.freeVideo } />}> </Route>
          <Route  path="login" element={<LogIn tokenInfoData={ this.state.tokenInfo } />} />
          <Route  path="logout" element={<LogOut />} />
        </Routes>
      </div>
    );
  };
}

export default App;
