import React, { Component } from 'react';
import { GlobalProvider } from './context'
import NavBar from "./NavBar"
import CoinInfo from "./CoinInfo"
import UserProfile from "./UserProfile"
import './App.css';
import Coins from "./Coins"
import Graph from "./Graph"

class App extends Component {
  render() {
    return (
      <GlobalProvider>
      <div className="AppDiv">
        <NavBar/>
        <Graph />
        <UserProfile/>
        <Coins />
      </div>
      </GlobalProvider>
    );
  }
}

export default App;
