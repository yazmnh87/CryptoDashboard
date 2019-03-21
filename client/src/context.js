import React, { Component } from 'react'
import axios from 'axios'
const {Consumer, Provider} = React.createContext();


export default class GlobalProvider extends Component {
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
      EOSname: [],
      counter: 10
    }

    componentDidMount(){
      console.log('component mounted')
      this.getCoinData() 
      this.getCoinData2()
      this.getHistoricalBTC()
      this.getHistoricalETH()
      this.getHistoricalXRP()
      this.getHistoricalLTC()
      this.getHistoricalEOS()
      this.getCoinNames()
      this.countDown()
 }

 countDown = () => {
  setInterval(() => { 
     console.log("running")
    this.postCoinDataDB();
    }, 10000)
}


    getHistoricalBTC = () => {
      axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=30&aggregate=1&e=CCCAGG&api_key=${process.env.REACT_APP_NN}`)
      .then(res=> {
        this.setState({
          BTCHISTORICAL: res.data
        })
        // console.log(this.state.BTCHISTORICAL)
      })
    }
    
      getHistoricalETH = () => {
      axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=30&aggregate=1&e=CCCAGG&api_key=${process.env.REACT_APP_NN}`)
      .then(res=> {
        this.setState({
          ETHHISTORICAL: res.data
        })
        // console.log(this.state.ETHHISTORICAL)
      })
    }
      getHistoricalXRP = () => {
      axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/histoday?fsym=XRP&tsym=USD&limit=30&aggregate=1&e=CCCAGG&api_key=${process.env.REACT_APP_NN}`)
      .then(res=> {
        this.setState({
          XRPHISTORICAL: res.data
        })
        // console.log(this.state.XRPHISTORICAL)
      })
    }
      getHistoricalLTC = () => {
      axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&limit=30&aggregate=1&e=CCCAGG&api_key=${process.env.REACT_APP_NN}`)
      .then(res=> {
        this.setState({
          LTCHISTORICAL: res.data
        })
        // console.log(this.state.LTCHISTORICAL)
      })
    }
      getHistoricalEOS = () => {
      axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/histoday?fsym=EOS&tsym=USD&limit=30&aggregate=1&e=CCCAGG&api_key=${process.env.REACT_APP_NN}`)
      .then(res=> {
        this.setState({
          EOSHISTORICAL: res.data
        })
        // console.log(this.state.EOSHISTORICAL)
      })
    }
    getCoinNames = () => {
       axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,EOS,XRP,BTC,LTC&tsyms=USD&api_key=${process.env.REACT_APP_MM}`)
        .then(res => {
          this.setState({
            coinNames: res.data.DISPLAY.BTC
          })
          // console.log('coinNames')
          // console.log(this.state.coinNames)
    })}

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
        // console.log(this.state.BTC);
        // console.log(this.state.ETH);
        // console.log(this.state.LTC);
        // console.log(this.state.XRP);
        // console.log(this.state.EOS);
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

    postCoinDataDB = () => {
     axios.post('/crypto', this.state.coinNames)
      .then(res => {
        console.log(res.data)
      })
    }

  render() {
    return (
        <Provider value={{
          getCoinData: this.getCoinData,
          getCoinData2: this.getCoinData2,
          getHistoricalBTC: this.getHistoricalBTC,
          getHistoricalETH: this.getHistoricalETH,
          getHistoricalXRP: this.getHistoricalXRP,
          getHistoricalLTC: this.getHistoricalLTC,
          getHistoricalEOS: this.getHistoricalEOS,
          getCoinNames: this.getCoinNames,
          countDown: this.countDown,
          postCoinDataDB: this.postCoinDataDB,
          ...this.state
          }}>
        {this.props.children}
        </Provider>
    )
  }
}


export function withProvider(C) {
  return props => <Consumer>
    {value => <C {...value}{...props} />}
  </Consumer>
}

