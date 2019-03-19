import React, { Component } from 'react';
import { Provider } from './context'
import NavBar from "./NavBar"
import CoinInfo from "./CoinInfo"
import UserProfile from "./UserProfile"
import './App.css';
import Coins from "./Coins"

class App extends Component {
  render() {
    return (
      <Provider>
      <div className="AppDiv">
        <NavBar/>
        <UserProfile/>
        <Coins />
      </div>
      </Provider>
    );
  }
}

export default App;
