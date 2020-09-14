import styled from 'styled-components';

export const Dialog = styled.dialog`
  width: 35%;
  background-color: black;
  font-size: 20px;
  color: white;
  z-index: 2;
  button, input[type=submit] {
    float: right;
  }
`;

export const InputContainer = styled.div`
  margin: 5px 0;
`;

export const CloseButton = styled.button`
  width: 25%;
  background-color: black;
  font-size: 15px;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 5px;
  color:  #F2BA49;
  padding: 5px 10px;
  :hover{
    border-color: skyblue;
    cursor: pointer;
  }
`;

export const AddProductInput = styled.input`
  width: 25%;
  background-color: black;
  font-size: 15px;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 5px;
  color:  #F2BA49;
  padding: 5px 10px;
  :hover{
    border-color: skyblue;
    cursor: pointer;
  }
`;

export const AddInfoInput = styled.input`
  width: 250px;
  margin-top: 5px;
  background-color: black;
  color: white;
  font-size: 20px;
  border: 2px solid white;
  border-radius: 5px;
`;

export const BlockWindow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: white;
  opacity: 0.2;
`;
