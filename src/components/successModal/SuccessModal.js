import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CLEAR_CART} from "../../actions/cart.actions";
import {BlockWindow, BoughtItem, BoughtItemContainer, CloseButton, Dialog} from "./SuccessModalStyle";

function SuccessModal(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector(state => state.cart.inCart);
  const renderBoughtItems = cartItems.map((item) => (
    <BoughtItem key={item.productId}>
      <div>Name: {item.name}</div> <span>Count: {item.count}</span> Total Price: {item.price * item.count}
    </BoughtItem>
  ));
  const buyAndClean = () => {
    props.onClose();
    history.push('/products');
    dispatch({
      type: CLEAR_CART
    });
  };

  return (
    <div>
      <BlockWindow/>
      <Dialog open>
        <BoughtItemContainer>You've just bought these items:
          <div>{renderBoughtItems} </div>
        </BoughtItemContainer>
        <CloseButton onClick={buyAndClean}>Done</CloseButton>
      </Dialog>
    </div>

  )
}

export default SuccessModal;
