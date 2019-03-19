import React, { Component } from 'react'
import axios from 'axios'
const Context = React.createContext();

   

export class Provider extends Component {
    state = {
      coins: []
    }


    componentDidMount(){
      axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,EOS,XRP,BTC,LTC&tsyms=BTC,USD,EUR&api_key=${process.env.REACT_APP_MM}`)
      .then(res => {
        this.setState({
          coins: res.data
        })
      })
    }

  render() {
    return (
        <Context.Provider value={this.state}>
        {this.props.children}
        </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer
