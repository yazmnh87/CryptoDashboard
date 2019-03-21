import React from 'react';
import Graph from "./Graph"

const CoinInfo = (props) => {
    console.log(props)
    return (
        <div className='CoinInfo'>
            <Graph style={{width: "95%", height:"62vh", marginLeft:"3%", marginRight:"0%"}}/>
            <hr style={{marginRight:0}}/>
            <div style={{display: "grid", gridGap: 15, gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr)", marginLeft:"5%", marginRight:"5%", marginTop:15}}>
                <h2 style={{width:"95%",borderBottom: "solid white"}}>Coin Name: <p style={{display:"inline-block", color:"yellow"}}></p></h2>
                <h2 style={{width:"95%",borderBottom: "solid white"}}>Volume: <p style={{display:"inline-block", color:"yellow"}}>Num</p></h2>
                <h2 style={{width:"95%",borderBottom: "solid white"}}>24 Hr High:<p style={{display:"inline-block", color:"yellow"}}>Num</p></h2>
                <h2 style={{width:"95%",borderBottom: "solid white"}}>DOC: <p style={{display:"inline-block", color:"yellow"}}>Num</p></h2>
                <h2 style={{width:"95%",borderBottom: "solid white"}}>24 Hr Low: <p style={{display:"inline-block", color:"yellow"}}>Num</p></h2>
                <h2 style={{width:"95%",borderBottom: "solid white"}}>TOV: <p style={{display:"inline-block", color:"yellow"}}>Num</p></h2>
            </div>
        </div>
    );
};

export default CoinInfo;