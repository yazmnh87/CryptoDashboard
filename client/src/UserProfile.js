import React, {Component} from 'react';
import {Consumer} from "./context"

class UserProfile extends Component {
    constructor() {
        super()
        this.state = {
            currentCoin: "BTC",
        }
    }
    handleChange = (event) => {
        this.setState({currentCoin: event.target.value})
    }
   render() {
    return (
        <Consumer>
            {value =>{
                // console.log(value.coins.DISPLAY)
            return (
                
         <div className="UserProfile" style={{borderRight:"solid white", }}>
            <img style={{width:150, display:'block',margin:"auto", marginTop:15}} src="https://png.pngtree.com/svg/20170602/b7c3ca6e9e.png" alt=""/>
            <h1 style={{textAlign:"center"}}>Name</h1>
            <hr style={{marginTop:"-10px", marginBottom:"-10px"}}/>
            <h1 style={{textAlign:"center"}}>COIN NAME</h1>
            <img style={{width:150, display:'block',margin:"auto", marginTop:30}} alt=""/>
            <h1 style={{textAlign:"center", color:"red"}}>{value.coins.DISPLAY ? value.coins.DISPLAY.BTC.USD.PRICE : null} </h1>
            <h1 style={{textAlign:"center"}}>Percentage</h1>
            <select style={{display:"block", margin:"auto", zoom:"200%"}} onChange={this.handleChange} value={this.state.currentCoin}>
                <option value='BTC' name='BTC'  style={{marginTop:"1%", marginBottom:"1%", color:"#5ae0e7", textDecoration:"none"}}>Bitcoin</option>
                <option value='ETH' name='ETH'  style={{marginTop:"1%", marginBottom:"1%", color:"#5ae0e7", textDecoration:"none"}}>Ethereum</option>
                <option value='XRP' name='XRP'  style={{marginTop:"1%", marginBottom:"1%", color:"#5ae0e7", textDecoration:"none"}}>XRP</option>
                <option value='LTC' name='LTC'  style={{marginTop:"1%", marginBottom:"1%", color:"#5ae0e7", textDecoration:"none"}}>Litecoin</option>
                <option value='EOS' name='EOS' style={{marginTop:"1%", marginBottom:"1%", color:"#5ae0e7", textDecoration:"none"}}>EOS</option>
            </select>
        </div>
                
            )
        }}
        </Consumer>
    );
    }
}

export default UserProfile;