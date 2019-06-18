import React from 'react';
export default function Header(props){
    return(
        <div style= {{
            backgroundColor:"pink",
        display:"flex", 
        justifyContent:"space-between", 
        alignItems:"center", 
        padding:10
        }}>
        <h2>Clicky Game</h2>
        <h3>Click an image to begin!</h3>
        <h4>Score: {props.score}  | Top Score:  {props.newScore} </h4>
              </div>
    )
}