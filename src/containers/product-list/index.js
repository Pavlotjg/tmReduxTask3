import React, {Component} from 'react';
import {connect} from 'react-redux';

import './product-list.css';
import {DECREASE_AVAILABLE_ITEMS} from "../../actions/products.action";
import {ADD_ITEM_TO_CART} from "../../actions/cart.actions";

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }
  renderProducts() {
    return this.props.products.map((item, index) => (
      <div className="product_list_item" key={index}>
        <p>{item.name}</p>
        <p>Price: {item.price}</p>
        <p>{item.available > 0 ? 'In stock' : 'Sold out'}</p>
        <button className="add-to-cart-btn" disabled={item.available < 1} onClick={() => this.addToCart(item)}>Add to card</button>
      </div>
    ));
  }

  addToCart(item) {
    const {dispatch} = this.props;
    if(item.available >= 1){
      console.log(item);
      dispatch({
        type: ADD_ITEM_TO_CART,
        payload: item
      });
      dispatch({
        type: DECREASE_AVAILABLE_ITEMS,
        payload: item
      });
    }
  }

  render() {
    return (<div className="App-product_list">
      {this.renderProducts()}
    </div>);
  }
}

const mapStateToProps = state => ({products: state.products.products});

export default connect(mapStateToProps)(ProductList);
