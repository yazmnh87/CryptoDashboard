import React, {Component} from "react"
import ReactChartkick, { LineChart} from 'react-chartkick'
import Chart from 'chart.js'
import {withProvider} from "./context"
var moment = require('moment')
ReactChartkick.addAdapter(Chart)
class Graph extends Component {
    constructor() {
        super()
        this.state = {
            coins: [],
            coinNames: [],
            currentCoin: "",
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
    }
    
    render() {
        
        return (
            
            <div></div>
    )
}
}
export default withProvider(Graph)