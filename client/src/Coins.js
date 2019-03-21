import React, { Component } from 'react';
import {Consumer} from "./context"
import CoinInfo from "./CoinInfo"

class Coins extends Component {
    render() {
        
        return (

        <Consumer>

            {value=> {
                
                // if(value.coins.leng !== 0) console.log(value)
                if (value.coins !== undefined){
                    // console.log(value.coins.DISPLAY ? value.coins.DISPLAY.BTC.USD.PRICE : null)
                    return <CoinInfo open={value.coinOpen} volume={value.coinVolume} high={value.coinHigh} low={value.coinLow} market={value.coinMrkcap} percentagePrice={value.coinPriceChng} percentage={value.Prctg}/>
                
                }
            }
            }
       
        </Consumer>

    )
    }
}

export default Coins;