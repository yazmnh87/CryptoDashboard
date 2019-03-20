import React, { Component } from 'react'
import axios from 'axios'
const Context = React.createContext();

   

export class Provider extends Component {
    state = {
      coins: [],
      BTC: [],
      ETH: [],
      XRP: [],
      LTC: [],
      EOS: [],
      BTCname: [],
      ETHname: [],
      XRPname: [],
      LTCname: [],
      EOSname: []

    }

    componentDidMount(){
      this.getCoinData() 
      this.getCoinData2()
 }


    getCoinData = () => {
      axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,EOS,XRP,BTC,LTC&tsyms=BTC,USD,EUR&api_key=${process.env.REACT_APP_MM}`)
      .then(res => {
        
        this.setState({
          coins: res.data,
          BTC: res.data.DISPLAY.BTC.USD,
          ETH: res.data.DISPLAY.ETH.USD,
          XRP: res.data.DISPLAY.LTC.USD,
          LTC: res.data.DISPLAY.XRP.USD,
          EOS: res.data.DISPLAY.EOS.USD,
        })
        console.log(this.state.BTC);
        console.log(this.state.ETH);
        console.log(this.state.LTC);
        console.log(this.state.XRP);
        console.log(this.state.EOS);
      })
    }

    getCoinData2 = () => {
      axios.get(`https://vschool-cors.herokuapp.com?url=https://rest.coinapi.io/v1/assets?apikey=${process.env.REACT_APP_COINAPI}`)
      .then(res => {
        const data = res.data
        this.setState({
          BTC: data.slice(0, 1),
          ETH: data.slice(2, 3),
          LTC: data.slice(4, 5),
          XRP: data.slice(8, 9),
          EOS: data.slice(14, 15)
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
