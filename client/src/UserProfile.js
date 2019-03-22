import React, {Component} from 'react';
import {withProvider} from "./context"

class UserProfile extends Component {
 
  
   render() {
    return (
                // console.log(value.coins.DISPLAY)
                
         <div className="UserProfile" style={{borderRight:"solid white", }}>
            <img style={{width:150, display:'block',margin:"auto", marginTop:15}} src="https://png.pngtree.com/svg/20170602/b7c3ca6e9e.png" alt=""/>
            <h1 style={{textAlign:"center"}}>Name</h1>
            <hr style={{marginTop:"-10px", marginBottom:"-10px"}}/>
            <h1 style={{textAlign:"center"}}>{this.props.currentCoin}</h1>
            <img style={{width:150, height: 100, display:'block',margin:"auto", marginTop:30}} alt="" src={this.props.coinImg}/>,
            <h1 style={{textAlign:"center", color:"red"}}>{this.props.coins.DISPLAY ? this.props.coinPrice : null} </h1>
            <h1 style={{textAlign:"center"}}>{this.props.coinPrctg}</h1>
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