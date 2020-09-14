import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  color: white;
`;

export const CartItem = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
`;

export const AmountItemInput = styled.input`
  float: right;
  width: 40px;
  margin-right: 30px;
  margin-top: 5px;
  background-color: black;
  color: white;
  font-size: 15px;
  border: 2px solid white;
  border-radius: 5px;
`;

export const RemoveButton = styled.button`
  float: right;
  background-color: black;
  font-size: 15px;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 5px;
  color:  #F2BA49;
  padding: 5px 10px;
  :hover{
    border-color: skyblue ;
    color: red;
    cursor: pointer;
  }
`;

export const NextButton = styled.button`
  margin-top: 50px;
  margin-left: 5px;
  width: 25%;
  background-color: black;
  font-size: 15px;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 5px;
  color:  #F2BA49;
  padding: 5px 10px;
  :hover{
    border-color: skyblue ;
    cursor: pointer;
  }
`;

export const ItemName = styled.span`
  font-size: 20px;
`;

export const EmptyCart = styled.div`
  font-size: 20px;
  
`;
