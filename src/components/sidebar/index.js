import React from 'react';
import './sidebar.css';

export const SideBar = (props) => {
  return (<div className="App-sidebar">
    <nav className="App-sidebar-nav">
      <a onClick={() => props.changeNavigation('product-list')}>Product list</a>
      <a onClick={() => props.changeNavigation('cart')}>Cart</a>
    </nav>
  </div>);
};

export default SideBar;