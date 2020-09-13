import React, {Component} from 'react';
import {connect} from 'react-redux';

import './cart.css';
import {addToCart, removeFromCart} from "../../helpers/productHelpers";

export class Cart extends Component {
  constructor(props) {
    super(props);

    this.renderCart = this.renderCart.bind(this);
    this.changeItemCount = this.changeItemCount.bind(this);
  }

  changeItemCount(e, item) {
    const {value} = e.target;
    const { dispatch } = this.props;

    if(value > item.count){
      const { products } = this.props;
      const productItem = products.find((elem) => {
        return elem.productId === item.productId
      });
      addToCart(productItem, dispatch, value - item.count);
    }
    else {
      removeFromCart(item, dispatch, item.count - value)
    }
  }

  renderCart() {
    const {dispatch} = this.props;
    return this.props.cart.length ? this.props.cart.map((item, index) => (
      <div className="cart-item" key={index}>
        <div>{item.name}</div>
        <button onClick={() => removeFromCart(item, dispatch, item.count)}>Delete</button>
        <input type="number" value={item.count} onChange={(e) => this.changeItemCount(e, item)}/>
      </div>
    )) : (<div> Cart is empty </div>)

  }

  render() {
    return (
      <div className="App-cart">
        {this.renderCart()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.inCart,
  products: state.products.products
});

export default connect(mapStateToProps)(Cart);
