import React from 'react';
import {NavLink} from "react-router-dom";
import {MainSideBar, NavSideBar} from "./SidebarStyle";

export const SideBar = () => {
  return (<MainSideBar>
    <NavSideBar>
      <NavLink to="products" activeClassName="active">Product list</NavLink>
      <NavLink to="cart" activeClassName="active">Cart</NavLink>
    </NavSideBar>
  </MainSideBar>);
};

export default SideBar;
