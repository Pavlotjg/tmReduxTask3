import styled from "styled-components";

export const MainSideBar = styled.div`
  display: flex;
  min-width: 200px;
  padding: 0 10px;
  font-size: 20px;
  font-weight: bold;
  a {
    color:white;
    text-decoration: none;
  };
  a:hover {
    color: #F2BA49;
    text-decoration: underline;
  }
  .active {
    color: skyblue;
}
`;

export const NavSideBar = styled.div`
  a {
  display: block;
  padding: 10px 0;
  cursor: pointer;
  }
`;
