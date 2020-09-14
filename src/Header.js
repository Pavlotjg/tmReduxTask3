import styled from "styled-components";

export const Header = styled.header`
  background-color: #222;
  background-image: url('https://cdn.sanity.io/images/topo6k9s/production/79c3fa4e69161e35d8d780c63646473a6f202ddd-5527x3685.jpg?w=1200');
  background-size: contain;
  padding: 40px 10px;
  font-size: 25px;
  font-weight: bold;
  color: white;
`;

export const HeaderShopLink = styled.span`
  a {
    text-decoration: none;
    color:white
  }
  a:hover {
    text-decoration: underline;
    color: #F2BA49;
  }
`;

export const HeaderCartLink = styled.span`
  float: right;
  margin: 0 30px;
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    text-decoration: underline;
    color: #F2BA49;
  }
`;

export const Button = styled.button`
  background-color: black;
  float: right;
  font-size: 17px;
  font-weight: bold;
  border: 3px solid white;
  border-radius: 5px;
  color: skyblue;
  padding: 5px 10px;
  :hover{
    border-color: #F2BA49;
    cursor: pointer;
  }
`;
