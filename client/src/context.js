import React, { Component } from 'react'
import axios from 'axios'
const Context = React.createContext();

   

export class Provider extends Component {
    state = {

    }


    componentDidMount(){
      axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=${process.env.REACT_APP_MM}`)
      .then(res => console.log(res.data))
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
