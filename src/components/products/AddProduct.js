import React, {Component} from 'react';


class AddProduct extends Component{
    constructor(props){
    this.state={
        product:{
            product_name:'',
            price: '',
            quantity:''
        }}
    };

changeHandler = e => {
    this.setState({
        product: {
            ...this.state.product,
            [e.target.product_name]: e.target.value
        }
    })
}

addProductHandler = e => {
    e.preventDefault();
    this.props.addProduct(this.state.product)

    this.setState({
        product:{
            product_name:'',
            price: '',
            quantity:''
        }
        
    })
}

render(){
    return(
        <div className='submit-form'>
            <input name='product' type='text' placeholder='Produce' value= {this.state.product.product_name} onChange={this.changeHandler}/>
            <input name='price' type='text' placeholder='Price' value= {this.state.product.price} onChange={this.changeHandler}/>
            <input name='age' type='text' placeholder='Age' value=              {this.state.product.quantity} onChange={this.changeHandler}/>
            <button className="submit" onClick={this.addProductHandler}>Submit</button>
        </div>
    )
}
}

export default AddProduct;