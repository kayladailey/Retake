import React from 'react';


const Product = (props) => {
    return(
    <div className="small-width">
        <div className="flex">
        <h1>{props.product.product_name}</h1>
        </div>
        <div className="flex">
        <h4>${props.product.price}</h4> Amount: <h4>{props.product.quantity} </h4>
        </div>
    </div>
    )
}

export default Product;