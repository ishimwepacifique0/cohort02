import React from "react";

function Product({id,name,description}){
    return (
        <div>
            <h1>Product Page</h1>
            <p>Product_id: {id}</p>
            <p>Product_Name: {name}</p>
            <p>Product_Description: {description}</p>
        </div>
    )
}

export default Product;