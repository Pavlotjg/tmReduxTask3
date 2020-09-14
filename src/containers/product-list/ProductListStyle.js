import styled from 'styled-components';

export const ProductsContainer = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
`;

export const ProductListItem = styled.div`
  display: block;
  padding: 20px;
  color: white;
  border: 2px solid #F4442E;
  border-radius: 10px;
  margin: 10px;  
  p {
    font-size: 1em;
    line-height: 25px;
    margin: 0;
    }
`;

export const AddToCartButton = styled.button`
  margin-top: 10px;
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
  :disabled {
    background-color: gray;
  }
`;

export const SortContainer = styled.div`
  padding: 20px;
  span {
  font-size: 20px;
    color: white;
    margin-right: 10px;
  };
  select {
    background-color: black;
    color: white;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
  }
  select:hover {
    color: #F2BA49;
  }
`;
