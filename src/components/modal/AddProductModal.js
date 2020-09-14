import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import {ADD_PRODUCT} from "../../actions/products.action";
import {AddInfoInput, AddProductInput, BlockWindow, CloseButton, Dialog, InputContainer} from "./AddProductModalStyle";

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
        type: ADD_PRODUCT,
        payload: newItem
      });
      closeModal();
    }
  }

  return (
    <div>
      <BlockWindow/>
      <Dialog open >
        <CloseButton onClick={props.closeModal}>Close</CloseButton>
        <span>Add Some New Product</span>
        <form>
          <InputContainer>Name:</InputContainer><AddInfoInput type="text" value={itemName} onChange={setNameToState}/><br/>
          <InputContainer>Price:</InputContainer><AddInfoInput type="number" value={itemPrice} onChange={setPriceToState}/><br/>
          <InputContainer>Available:</InputContainer> <AddInfoInput type="number" value={itemAvailable} onChange={setAvailableToState}/><br/>
          <AddProductInput type="submit" value='Add' onClick={addToList}/>
        </form>
      </Dialog>
    </div>

  )
}

export default AddProductModal;
