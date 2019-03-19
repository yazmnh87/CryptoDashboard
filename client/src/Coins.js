import React, { Component } from 'react';
import {Consumer} from "./context"
import CoinInfo from "./CoinInfo"

class Coins extends Component {
    render() {
        
        return (

        <Consumer>

            {value=> {
                console.log(value.coinNames)
              
                if (value !== undefined){
                    return <h1>hi</h1>
                }   
            }
            }
       
        </Consumer>

    )
    }
}

export default Coins;