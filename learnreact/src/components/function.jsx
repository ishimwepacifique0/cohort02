import React  from "react";

function Greeting({name ,color}){
    return (
        <h1>Hello <span style={{color:color}} >{name}</span></h1>
    )
}

export default Greeting
