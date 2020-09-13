import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CLEAR_CART} from "../../actions/cart.actions";

function SuccessModal(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector(state => state.cart.inCart);
  const renderBoughtItems = cartItems.map((item) => (
    <div key={item.productId}>
      Name: {item.name} <span>Count: {item.count}</span> Total Price: {item.price * item.count}
    </div>
  ));
  const buyAndClean = () => {
    props.onClose();
    history.push('/products');
    dispatch({
      type: CLEAR_CART
    });
  };

  return (
    <dialog open>
      <div>You've just bought these items:
        <div>{renderBoughtItems} </div>
      </div>
      <button onClick={buyAndClean}>Done</button>
    </dialog>
  )
}

export default SuccessModal;
