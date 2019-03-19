import React, { Component } from 'react'
import axios from 'axios'
const Context = React.createContext();

   

export class Provider extends Component {
    state = {
      coins: [],
      coinNames: []
    }

    componentDidMount(){
      this.getCoinData() 
      this.getCoinData2()
 }


    getCoinData = () => {
      axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,EOS,XRP,BTC,LTC&tsyms=BTC,USD,EUR&api_key=${process.env.REACT_APP_MM}`)
      .then(res => {
        
        this.setState({
          coins: res.data
        })
      })
    }

    getCoinData2 = () => {
      axios.get(`https://vschool-cors.herokuapp.com?url=https://rest.coinapi.io/v1/assets?apikey=${process.env.REACT_APP_COINAPI}`)
      .then(res => {
        const data = res.data
        this.setState({
          coinNames: data.slice(0, 15)
        })
      })
    }

  render() {
    return (
        <Context.Provider value={{...this.props,...this.state}}>
        {this.props.children}
        </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer
