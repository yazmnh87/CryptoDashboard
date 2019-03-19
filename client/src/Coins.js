import React, { Component } from 'react';
import {Consumer} from "./context"
import CoinInfo from "./CoinInfo"

class Coins extends Component {
    render() {
        
        return (

        <Consumer>

            {value=> {
                if (value !== undefined){
                    // console.log(value.coins.DISPLAY ? value.coins.DISPLAY.BTC.USD.PRICE : null)
                }
                
                return (
                    <div className="CoinInfo">
                        {value.coins.DISPLAY ? <CoinInfo price={value.coins.DISPLAY.BTC.USD.PRICE} /> : null}
                    </div>
                )
            }
            }
       
        </Consumer>

    )
    }
}

export default Coins;