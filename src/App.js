import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {connect} from "react-redux";

// Components
import SideBar from './components/sidebar';
import Cart from './containers/cart';
import ProductList from './containers/product-list';
import AddProductModal from "./components/modal/AddProductModal";

// CSS
import './App.css';
import {asyncGetProducts} from "./actions/products.action";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getInitialStateProducts = this.getInitialStateProducts.bind(this);
  }

  openModal() {
    this.setState({
      isOpen: true
    })
  };

  closeModal() {
    this.setState({
      isOpen: false
    })
  }

  getInitialStateProducts() {
    const {dispatch} = this.props;
    dispatch(asyncGetProducts());
  }

  componentDidMount() {
    this.getInitialStateProducts()
  }

  render() {
    const {isOpen} = this.state;
    const {cart} = this.props;
    const counter = cart.reduce((acc, currValue) => {
      return acc + currValue.count
    }, 0);
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <div><Link to="products">My simple shop</Link></div>
            <div className="headerCart"><Link to="cart">Cart</Link> {counter}</div>
            <button onClick={this.openModal}>New Product</button>
          </header>
          <section>
            {isOpen && <AddProductModal closeModal={this.closeModal}/>}
          </section>
          <Switch>
            <div className="App-wrapper">
              <SideBar/>
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

const mapStateToProps = (state) => ({
  cart: state.cart.inCart
});

export default connect(mapStateToProps)(App)
