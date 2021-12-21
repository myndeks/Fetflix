import React from "react";
import axios from 'axios';

import './App.css';
import Header from './components/header/index.js';
import Hero from './components/hero/index.js';
import MovieCard from './components/movie_card/index.js';
import Button from './components/helpers/button/index.js';
import Footer from './components/footer/index.js';
import Spacer from './components/helpers/spacer/index.js';



class App extends React.Component {

  state = {
    freeVideo: [],
    loading: true
  }

  componentDidMount () {
    axios.get('https://academy-video-api.herokuapp.com/content/free-items')
      .then(res => {
        const freeVideo = res.data;
        this.setState({freeVideo: freeVideo, loading: false})
      })
  }

  render() {
    return (
      <div className="App">
        <Header btnInfo={'Sign In'} />
        <Hero btnInfo={'Get Access'} />
        <hr className="seperator"/>
        <Spacer />
        <MovieCard data={this.state.freeVideo} />
        <Spacer />
        <Button btnInfo={'Get More Content'}/>
        <Spacer />
        <Footer />
      </div>
    );
  };
}

export default App;
