import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addProduct, updateProduct, deleteProduct, getProducts} from '../actions';
import AddProduct from '../components/products/AddProduct';
import ProductList from '../components/products/ProductList';


class FarmerView extends Component {
  state = {
      ...this.props.products
  }
componentDidMount(){
    this.props.getProducts()
}

editProduct = (product) => {
  console.log(product.product_name)
  this.setState({
    isUpdating: true,
    product: {
    name: product.product_name,
    price: product.price,
    height: product.quantity,
    }
  })
}

updateProduct(e, product){
  e.preventDefault();
  console.log(product)
this.props.updateProduct(product)
this.setState({
    product: {
        name: product.product_name,
        price: product.price,
        height: product.quantity,
        }
})
}

handleChange = (e) => {
  this.setState({
    product: { ...this.state.product,
    [e.target.name]: e.target.value
    }
  })
}

  render() {
    return (
      <div >
          {this.state.isUpdating 
          ? 
          <form onSubmit= {e=> this.updateProduct(e, this.state.product)}>
            <input name="name" value={this.state.product.product_name} onChange={this.handleChange}></input>
            <input name='price' value={this.state.product.price} onChange={this.handleChange}></input>
            <input name='quantity' value={this.state.product.quantity} onChange={this.handleChange}></input>
            <button>Submit</button>
          </form>
          :
          <AddProduct addProduct={this.props.addProduct} />
        }
          {/* <ProductList products={this.props.products} deleteProduct= {this.props.deleteProduct} editProduct= {this.editProduct}/> */}
          
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    isUpdating: state.isUpdating
}
}

export default connect(mapStateToProps, {addProduct, updateProduct, deleteProduct, getProducts})(FarmerView);