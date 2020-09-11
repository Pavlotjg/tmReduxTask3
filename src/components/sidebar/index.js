import React from 'react';
import './sidebar.css';
import {NavLink} from "react-router-dom";

export const SideBar = () => {
  return (<div className="App-sidebar">
    <nav className="App-sidebar-nav">
      <NavLink to="products" activeClassName="active">Product list</NavLink>
      <NavLink to="cart" activeClassName="active">Cart</NavLink>
    </nav>
  </div>);
};

export default SideBar;
