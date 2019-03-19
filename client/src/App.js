import React, { Component } from 'react';
import { Provider } from './context'
import NavBar from "./NavBar"
import CoinInfo from "./CoinInfo"
import UserProfile from "./UserProfile"
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
      <div className="AppDiv">
        <NavBar/>
        <UserProfile/>
        <CoinInfo/>
      </div>
      </Provider>
    );
  }
}

export default App;
