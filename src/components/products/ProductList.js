import React from 'react';
import Product from './Product';


const ProductList = (props) => {
    const deleteProduct = (e, product) => {
        e.preventDefault();
        props.deleteProduct(product);
    }
    const updateProduct = (e, product) => {
        e.preventDefault();
        console.log(product)
        props.editProduct(product)
    }
    return(
        <div>
             {props.product.map(product=>{
            return(<div>
                <Product product={product}></Product>
                <div className="small-width1">
                <button onClick={(e) => deleteProduct(e, product)}>Delete</button>
                <button onClick={(e) => updateProduct(e, product)}>Update</button>
                </div>
                </div>)})}

        </div>
    )
}

export default ProductList;