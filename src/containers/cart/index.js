import React, {Component} from 'react';
import {connect} from 'react-redux';

import './cart.css';
import {addToCart, removeFromCart} from "../../helpers/productHelpers";
import SuccessModal from "../../components/successModal/SuccessModal";

export class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSuccessModalOpen: false
    };

    this.renderCart = this.renderCart.bind(this);
    this.changeItemCount = this.changeItemCount.bind(this);
    this.openSuccessModal = this.openSuccessModal.bind(this);
    this.closeSuccessModal = this.closeSuccessModal.bind(this);
  }

  openSuccessModal() {
    this.setState({
      isSuccessModalOpen: true
    })
  };
  closeSuccessModal(){
    this.setState({
      isSuccessModalOpen: false
    })
  }

  changeItemCount(e, item) {
    const {value} = e.target;
    const {dispatch} = this.props;

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
    const {isSuccessModalOpen} = this.state;
    return (
      <div className="App-cart">
        {this.renderCart()}
        <button onClick={this.openSuccessModal}>Next</button>
        <section>
          {isSuccessModalOpen && <SuccessModal onClose={this.closeSuccessModal}/>}
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.inCart,
  products: state.products.products
});

export default connect(mapStateToProps)(Cart);
