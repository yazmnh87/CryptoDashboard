import React, { Component } from 'react';
import  GlobalProvider  from './context'
import NavBar from "./NavBar"
import UserProfile from "./UserProfile"
import './App.css';
import CoinInfo from './CoinInfo';

class App extends Component {
  render() {
    return (
      <GlobalProvider>
      <div className="AppDiv">
        <NavBar/>
        <UserProfile/>
        <CoinInfo />
      </div>
      </GlobalProvider>
    );
  }
}

export default App;
