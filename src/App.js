import React, {Component} from 'react';

// Components
import SideBar from './components/sidebar';
import Cart from './containers/cart';
import ProductList from './containers/product-list';

// CSS
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {activeComponent: 'product-list'};
    this.changeNavigation = this.changeNavigation.bind(this);
  }

  changeNavigation(prop) {
    this.setState({activeComponent: prop});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My simple shop</h1>
        </header>
        <div className="App-wrapper">
          <SideBar changeNavigation={this.changeNavigation}/>
          {this.state.activeComponent === 'product-list' ? <ProductList/> : <Cart/>}
        </div>
      </div>
    );
  }
}