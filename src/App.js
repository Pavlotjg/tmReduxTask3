import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Components
import SideBar from './components/sidebar';
import Cart from './containers/cart';
import ProductList from './containers/product-list';

// CSS
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Router>
        <header className="App-header">
          <div ><Link to="products">My simple shop</Link></div>
          <div className="headerCart"><Link to="cart">Cart</Link> 23</div>
        </header>
            <Switch>
            <div className="App-wrapper">
              <SideBar />
              <Route path="/products">
                <ProductList/>
              </Route>
              <Route path="/cart">
                <Cart/>
              </Route>
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}
