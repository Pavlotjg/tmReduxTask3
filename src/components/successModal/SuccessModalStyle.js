import styled from 'styled-components';

export const BoughtItem = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  font-size: 18px;
  
`;

export const Dialog = styled.dialog`
  width: 35%;
  background-color: black;
  color: white;
  z-index: 2;
`;

export const BoughtItemContainer = styled.div`
  font-size: 20px;
`;
export const CloseButton = styled.button`
  margin-top: 25px;
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
