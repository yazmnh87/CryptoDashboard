import React from 'react';
import {withProvider} from './context';


const Ticker = (props) => {
    const slicedBTC = props.BTC.CHANGE24HOUR !== undefined ? props.BTC.CHANGE24HOUR.slice(2) : null;
    const slicedETH = props.coins.length !== 0 ? props.coins.DISPLAY.ETH.USD.CHANGE24HOUR.slice(2) : null;
    const slicedXRP = props.coins.length!== 0 ? props.coins.DISPLAY.XRP.USD.CHANGE24HOUR.slice(2) : null;
    const slicedLTC = props.coins.length !== 0 ? props.coins.DISPLAY.LTC.USD.CHANGE24HOUR.slice(2) : null;
    const slicedEOS = props.coins.length !== 0 ? props.coins.DISPLAY.EOS.USD.CHANGE24HOUR.slice(2) : null;
    const convert1 = parseFloat(slicedBTC)
    const convert2 = parseFloat(slicedETH)
    const convert3 = parseFloat(slicedXRP)
    const convert4 = parseFloat(slicedLTC)
    const convert5 = parseFloat(slicedEOS)
    return (
        <div>
            {props.coins.length !== 0 ? <marquee><span>{props.BTCname}</span> <span style={convert1 < 0 ? {color:"red"} : {color:"lime"} }>{props.BTC.CHANGE24HOUR}</span> {props.ETHname} <span style={convert2 < 0 ? {color:"red"} : {color:"lime"} }>{props.coins.DISPLAY.ETH.USD.CHANGE24HOUR}</span> {props.XRPname} <span style={convert3 < 0 ? {color:"red"} : {color:"lime"} }>{props.coins.DISPLAY.XRP.USD.CHANGE24HOUR}</span> {props.LTCname} <span style={convert4 < 0 ? {color:"red"} : {color:"lime"} }>{props.coins.DISPLAY.LTC.USD.CHANGE24HOUR}</span> {props.EOSname} <span style={convert5 < 0 ? {color:"red"} : {color:"lime"} }>{props.coins.DISPLAY.EOS.USD.CHANGE24HOUR}</span></marquee> : 'loading'}
        </div>
    )
}

export default withProvider(Ticker);