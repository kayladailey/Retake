import React from 'react';
import Product from './Product';


const ProductList = props => {
    const deleteProduct = (e, id) => {
        e.preventDefault();
        props.deleteProduct(id);
    }
    const updateProduct = (e, product) => {
        e.preventDefault();
        console.log(product)
        props.editProduct(product)
    }
    return(
        <div>
             {props.products.map(product=>{
            return(<div>
                <Product product={product}></Product>
                <div className="small-width1">
                <button onClick={(e) => deleteProduct(e, product.id)}>Delete</button>
                <button onClick={(e) => updateProduct(e, product)}>Update</button>
                </div>
                </div>)})}

        </div>
    )
}

export default ProductList;