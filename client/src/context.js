import React, { Component } from 'react'
import axios from 'axios'
const Context = React.createContext();

   

export class Provider extends Component {
    state = {
      coins: [],
      coinNames: [],
      currentCoin: "BTC",
      BTCHISTORICAL: [],
      ETHHISTORICAL: [],
      XRPHISTORICAL: [],
      LTCHISTORICAL: [],
      EOSHISTORICAL: [],
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
      this.getHistoricalBTC()
      this.getHistoricalETH()
      this.getHistoricalXRP()
      this.getHistoricalLTC()
      this.getHistoricalEOS()
 }
    getHistoricalBTC = () => {
      axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=30&aggregate=1&e=CCCAGG&api_key=${process.env.REACT_APP_NN}`)
      .then(res=> {
        this.setState({
          BTCHISTORICAL: res.data
        })
        console.log(this.state.BTCHISTORICAL)
      })
    }
    
      getHistoricalETH = () => {
      axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=30&aggregate=1&e=CCCAGG&api_key=${process.env.REACT_APP_NN}`)
      .then(res=> {
        this.setState({
          ETHHISTORICAL: res.data
        })
        console.log(this.state.ETHHISTORICAL)
      })
    }
      getHistoricalXRP = () => {
      axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/histoday?fsym=XRP&tsym=USD&limit=30&aggregate=1&e=CCCAGG&api_key=${process.env.REACT_APP_NN}`)
      .then(res=> {
        this.setState({
          XRPHISTORICAL: res.data
        })
        console.log(this.state.XRPHISTORICAL)
      })
    }
      getHistoricalLTC = () => {
      axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&limit=30&aggregate=1&e=CCCAGG&api_key=${process.env.REACT_APP_NN}`)
      .then(res=> {
        this.setState({
          LTCHISTORICAL: res.data
        })
        console.log(this.state.LTCHISTORICAL)
      })
    }
      getHistoricalEOS = () => {
      axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/histoday?fsym=EOS&tsym=USD&limit=30&aggregate=1&e=CCCAGG&api_key=${process.env.REACT_APP_NN}`)
      .then(res=> {
        this.setState({
          EOSHISTORICAL: res.data
        })
        console.log(this.state.EOSHISTORICAL)
      })
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
