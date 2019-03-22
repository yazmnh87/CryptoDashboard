import React, { Component } from 'react';
import {withProvider} from "./context"
import CoinInfo from "./CoinInfo"

class Coins extends Component {
    render() {
        
        return (
            <div>
            <hr style={{marginRight:0}}/>
            <div style={{textAlign: "center", display: "grid", gridGap: 15, gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr)", marginLeft:"5%", marginRight:"4.5%", marginTop:15}}>
                <h2 style={{width:"99%",borderBottom: "solid white"}}>Day Open: <br></br><p style={{display:"inline-block", color:"lime"}}>{this.props.currentCoin && this.props.currentCoin === "BTC" ? this.props.coinOpen : this.props.currentCoin && this.props.currentCoin === "ETH" ? this.props.coinOpen : this.props.currentCoin && this.props.currentCoin === "LTC" ? this.props.coinOpen : this.props.currentCoin && this.props.currentCoin === "XRP" ? this.props.coinOpen : this.props.currentCoin && this.props.currentCoin === "EOS" ? this.props.coinOpen : this.props.coinOpen} </p></h2>
                <h2 style={{width:"99%",borderBottom: "solid white"}}>Total Volume: <br></br><p style={{display:"inline-block", color:"lime"}}>{this.props.coinVolume}</p></h2>
                <h2 style={{width:"99%",borderBottom: "solid white"}}>24 Hr High: <br></br><p style={{display:"inline-block", color:"lime"}}>{this.props.coinHigh}</p></h2>
                <h2 style={{width:"99%",borderBottom: "solid white"}}>Day Price Change: <br></br> {this.props.coinPriceChng > 0 ? <p className="coinpricered">{this.props.coinPriceChng} </p> : <p className="coinpricegreen">{this.props.coinPriceChng} </p>}</h2>
                <h2 style={{width:"99%",borderBottom: "solid white"}}>Market Cap: <br></br> <p style={{display:"inline-block", color:"lime"}}>{this.props.coinMrkcap}</p></h2>
                <h2 style={{width:"99%",borderBottom: "solid white"}}>24 hr low: <br></br> <p style={{display:"inline-block", color:"lime"}}>{this.props.coinLow}</p></h2>
                </div>
                </div>
        )
    }
} 

export default withProvider(Coins);