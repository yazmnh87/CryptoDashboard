import React, {Component} from 'react';
import {withProvider} from "./context"

class UserProfile extends Component {
 
//     componentWillUpdate(){
//         console.log('component mounted')
//         this.props.getCoinData() 
//         this.props.getCoinData2()
//         this.props.getCoinNames()
//         // this.props.countDown()
//    }
   render() {
       console.log(this.props.coinPrice + "currr")
    return (
                
         <div className="UserProfile" style={{borderRight:"solid white", }}>
            <img style={{width:150, display:'block',margin:"auto", marginTop:15}} src="https://png.pngtree.com/svg/20170602/b7c3ca6e9e.png" alt=""/>
            <h1 style={{textAlign:"center"}}>Name</h1>
            <hr style={{marginTop:"-10px", marginBottom:"-10px"}}/>
            <h1 style={{textAlign:"center"}}>{this.props.currentCoin}</h1>

            {/* <img style={{width:150, height: 100, display:'block',margin:"auto", marginTop:30}} alt="" src={this.props.coinImg}/> */}
            <img style={{width:150, height: 100, display:'block',margin:"auto", marginTop:30}} alt="" src={this.props.currentCoin && this.props.currentCoin === "BTC" ? "https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" : this.props.currentCoin && this.props.currentCoin === "ETH" ? "https://www.ethereum.org/images/logos/ETHEREUM-ICON_Black_small.png" : this.props.currentCoin && this.props.currentCoin === "LTC" ? "https://cdn4.iconfinder.com/data/icons/cryptocoins/227/LTC-512.png" : this.props.currentCoin && this.props.currentCoin === "EOS" ? "https://cdn.iconscout.com/icon/free/png-256/eos-9-646062.png" : this.props.currentCoin && this.props.currentCoin === "XRP" ? "https://cdn.freebiesupply.com/logos/large/2x/ripple-2-logo-png-transparent.png" : null}/> 


            <h1 style={{textAlign:"center", color:"red"}}>{this.props.currentCoin && this.props.currentCoin === "BTC" ? this.props.coinPrice : this.props.currentCoin && this.props.currentCoin === "ETH" ? this.props.coinPrice : this.props.currentCoin && this.props.currentCoin === "LTC" ? this.props.coinPrice : this.props.currentCoin && this.props.currentCoin === "EOS" ? this.props.coinPrice : this.props.currentCoin && this.props.currentCoin === "XRP" ? this.props.coinPrice : null} </h1>


            <h1 style={{textAlign:"center"}}>{this.props.currentCoin && this.props.currentCoin === "BTC" ? this.props.coinPrctg : this.props.currentCoin && this.props.currentCoin === "ETH" ? this.props.coinPrctg : this.props.currentCoin && this.props.currentCoin === "LTC" ? this.props.coinPrctg : this.props.currentCoin && this.props.currentCoin === "EOS" ? this.props.coinPrctg : this.props.currentCoin && this.props.currentCoin === "XRP" ? this.props.coinPrctg : null}%</h1>


            <select style={{display:"block", margin:"auto", zoom:"200%"}} name="currentCoin" onChange={this.props.handleChange} value={this.props.currentCoin}>
                <option value='BTC' style={{marginTop:"1%", marginBottom:"1%", color:"#5ae0e7", textDecoration:"none"}}>Bitcoin</option>
                <option value='ETH'   style={{marginTop:"1%", marginBottom:"1%", color:"#5ae0e7", textDecoration:"none"}}>Ethereum</option>
                <option value='XRP'   style={{marginTop:"1%", marginBottom:"1%", color:"#5ae0e7", textDecoration:"none"}}>XRP</option>
                <option value='LTC'   style={{marginTop:"1%", marginBottom:"1%", color:"#5ae0e7", textDecoration:"none"}}>Litecoin</option>
                <option value='EOS'  style={{marginTop:"1%", marginBottom:"1%", color:"#5ae0e7", textDecoration:"none"}}>EOS</option>
            </select>
        </div>
                
            )

    }
}

export default withProvider(UserProfile);


