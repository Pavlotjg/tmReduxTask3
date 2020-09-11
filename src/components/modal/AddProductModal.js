import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import './addProductModal.css';
import {REFRESH_LIST_ITEM} from "../../actions/products.action";

function AddProductModal(props) {

  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState(0);
  const [itemAvailable, setItemAvailable] = useState(0);

  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  function setNameToState(e) {
    const {value} = e.target;
    setItemName(value);
  }

  function setPriceToState(e) {
    const {value} = e.target;
    setItemPrice(value);
  }

  function setAvailableToState(e) {
    const {value} = e.target;
    setItemAvailable(value);
  }

  function addToList(e) {
    const { closeModal } = props;
    e.preventDefault();
    const newItem = {
      productId: products.length + 1,
      name: itemName,
      price: Number(itemPrice),
      available: Number(itemAvailable)
    };
    if (newItem.name) {
      dispatch({
        type: REFRESH_LIST_ITEM,
        payload: newItem
      });
      closeModal();
    }
  }

  return (
    <dialog open >
      <button onClick={props.closeModal}>Close</button>
      MyModal
      <form>
        <div>Name: <input type="text" value={itemName} onChange={setNameToState}/></div>
        <div>Price: <input type="number" value={itemPrice} onChange={setPriceToState}/></div>
        <div>Available: <input type="number" value={itemAvailable} onChange={setAvailableToState}/></div>
        <div>Add to Product List: <input type="submit" onClick={addToList}/></div>
      </form>
    </dialog>
  )
}

export default AddProductModal;
