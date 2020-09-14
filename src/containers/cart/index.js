import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addToCart, removeFromCart} from "../../helpers/productHelpers";
import SuccessModal from "../../components/successModal/SuccessModal";
import {AmountItemInput, CartContainer, CartItem, EmptyCart, ItemName, NextButton, RemoveButton} from "./CartStyle";

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
    return this.props.cart.length ? this.props.cart.map((item) => (
      <CartItem key={item.price}>
        <ItemName>{item.name}</ItemName>
        <RemoveButton onClick={() => removeFromCart(item, dispatch, item.count)}>Delete</RemoveButton>
        <AmountItemInput type="number" value={item.count} onChange={(e) => this.changeItemCount(e, item)}/>
      </CartItem>
    )) : (<EmptyCart> Cart is empty. There is nothing to buy </EmptyCart>)
  }

  render() {
    const {isSuccessModalOpen} = this.state;
    return (
      <CartContainer>
        {this.renderCart()}
        <NextButton onClick={this.openSuccessModal}>Next</NextButton>
        <section>
          {isSuccessModalOpen && <SuccessModal onClose={this.closeSuccessModal}/>}
        </section>
      </CartContainer>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.inCart,
  products: state.products.products
});

export default connect(mapStateToProps)(Cart);
