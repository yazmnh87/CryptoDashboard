import React, { Component } from 'react';
import {withProvider} from "./context"
import CoinInfo from "./CoinInfo"

class Coins extends Component {
    render() {
        
        return (
            <div>
            <hr style={{marginRight:0}}/>
            <div style={{display: "grid", gridGap: 15, gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr)", marginLeft:"5%", marginRight:"5%", marginTop:15}}>
                <h2 style={{width:"95%",borderBottom: "solid white"}}>Day Open: {this.props.coinOpen} <p style={{display:"inline-block", color:"yellow"}}></p></h2>
                <h2 style={{width:"95%",borderBottom: "solid white"}}>Total Volume: {this.props.coinVolume}<p style={{display:"inline-block", color:"yellow"}}></p></h2>
                <h2 style={{width:"95%",borderBottom: "solid white"}}>24 Hr High:{this.props.coinHigh}<p style={{display:"inline-block", color:"yellow"}}></p></h2>
                <h2 style={{width:"95%",borderBottom: "solid white"}}>24 hr low:{this.props.coinLow} <p style={{display:"inline-block", color:"yellow"}}></p></h2>
                <h2 style={{width:"95%",borderBottom: "solid white"}}>Market Cap: {this.props.coinMrkcap}<p style={{display:"inline-block", color:"yellow"}}></p></h2>
                <h2 style={{width:"95%",borderBottom: "solid white"}}>Day Price Change:{this.props.coinPrctg} <p style={{display:"inline-block", color:"yellow"}}></p></h2>
                </div>
                </div>
        )
    }
}

export default withProvider(Coins);