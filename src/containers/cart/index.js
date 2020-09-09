import React, {Component} from 'react';
import {connect} from 'react-redux';

import './cart.css';

export class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="App-cart">
      {this.props.cart.length ? 'There is some items in you cart' : 'Your cart is empty :('}
    </div>);
  }
}

const mapStateToProps = state => ({cart: state.cart.inCart});

export default connect(mapStateToProps)(Cart);
