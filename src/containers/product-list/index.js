import React, {Component} from 'react';
import {connect} from 'react-redux';

import './product-list.css';
import {DECREASE_AVAILABLE_ITEMS} from "../../actions/products.action";
import {ADD_ITEM_TO_CART} from "../../actions/cart.actions";

export class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: '',
    };
    this.addToCart = this.addToCart.bind(this);
    this.sortedProducts = this.sortedProducts.bind(this);
    this.fulfillSortState = this.fulfillSortState.bind(this);
  }

  sortedProducts() {
    const {sort} = this.state;
    const {products} = this.props;
    if (!sort) {
      return products;
    }
    return products.sort((a, b) => {
      const nameA = typeof a[sort] === 'string' ? a[sort].toUpperCase() : a[sort];
      const nameB = typeof b[sort] === 'string' ? b[sort].toUpperCase() : b[sort];
      const isAvailibility = sort === 'available';
      const x = isAvailibility ? -1 : 1;
      if (nameA < nameB) {
        return -1 * x;
      }
      if (nameA > nameB) {
        return x;
      }
      return 0;
    });
  }

  fulfillSortState(e) {
    const {value} = e.target;
    this.setState({sort: value});
  }

  renderProducts() {
    return this.sortedProducts().map((item, index) => (
      <div className="product_list_item" key={index}>
        <p>{item.name}</p>
        <p>Price: {item.price}</p>
        <p>{item.available > 0 ? 'In stock' : 'Sold out'}</p>
        <button className="add-to-cart-btn" disabled={item.available < 1} onClick={() => this.addToCart(item)}>Add to
          card
        </button>
      </div>
    ));
  }

  addToCart(item) {
    const {dispatch} = this.props;
    if (item.available >= 1) {
      dispatch({
        type: ADD_ITEM_TO_CART,
        payload: item
      });
      dispatch({
        type: DECREASE_AVAILABLE_ITEMS,
        payload: item
      });
      console.log(item);
    }
  }

  render() {
    return (
      <div>
        <div className="sortBtn">
          <select name='sort' onClick={this.fulfillSortState}>
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="available">Available</option>
          </select>
        </div>
        <div className="App-product_list">
          {this.renderProducts()}
        </div>
      </div>);

  }
}

const mapStateToProps = state => ({products: state.products.products});

export default connect(mapStateToProps)(ProductList);
