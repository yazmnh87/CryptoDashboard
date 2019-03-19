import React from 'react';
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div className="NavBar" style={{display: "flex", flexDirection:"row",justifyContent:"space-around", height:30, fontSize:"1.4em" }}>
            <Link style={{color:"#5ae0e7", textDecoration:"none"}}>Dashboard</Link>
            <Link style={{color:"#5ae0e7", textDecoration:"none"}}>Coin List</Link>
            <Link style={{color:"#5ae0e7", textDecoration:"none"}}>Setting</Link>
        </div>
    );
};

export default NavBar;