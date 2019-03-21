import React, { Component } from 'react';
import {withProvider} from "./context"
import CoinInfo from "./CoinInfo"

class Coins extends Component {
    render() {
        
    return (
        <div>
        
                
                {/* if(this.props.coins.length !== 0) console.log(value)
                 if (this.props !== undefined){
                    console.log(this.props.coins.DISPLAY ? this.props.coins.DISPLAY.BTC.USD.PRICE : null)
                }
                
                return (
                    <div className="CoinInfo">
                        {this.props.coins.DISPLAY ? <CoinInfo price={this.props.coins.DISPLAY.BTC.USD.PRICE} /> : null}
                    </div>
                ) */}
          
                </div>
    )
    
    }
}

export default withProvider(Coins)