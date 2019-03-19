import React, {Component} from 'react';

class UserProfile extends Component {
    constructor() {
        super()
        this.state = {
            logo: []
        }
    }
    render() {
    return (
        <div className="UserProfile" style={{borderRight:"solid white", }}>
            <img style={{width:150, display:'block',margin:"auto", marginTop:15}} src="https://png.pngtree.com/svg/20170602/b7c3ca6e9e.png" alt=""/>
            <h1 style={{textAlign:"center"}}>Name</h1>
            <hr style={{marginTop:"-10px", marginBottom:"-10px"}}/>
            <h1 style={{textAlign:"center"}}>Coin Name</h1>
            <img style={{width:150, display:'block',margin:"auto", marginTop:30}} src={`${this.state.logo}`} alt=""/>
            <h1 style={{textAlign:"center", color:"red"}}>Price</h1>
            <h1 style={{textAlign:"center"}}>Percentage</h1>
            <select style={{display:"block", margin:"auto", zoom:"200%"}}>
                <option style={{marginTop:"1%", marginBottom:"1%", color:"#5ae0e7", textDecoration:"none"}}>Bitcoin</option>
                <option style={{marginTop:"1%", marginBottom:"1%", color:"#5ae0e7", textDecoration:"none"}}>Ethereum</option>
                <option style={{marginTop:"1%", marginBottom:"1%", color:"#5ae0e7", textDecoration:"none"}}>XRP</option>
                <option style={{marginTop:"1%", marginBottom:"1%", color:"#5ae0e7", textDecoration:"none"}}>Litecoin</option>
                <option style={{marginTop:"1%", marginBottom:"1%", color:"#5ae0e7", textDecoration:"none"}}>EOS</option>
            </select>
        </div>
    );
    }
};

export default UserProfile;