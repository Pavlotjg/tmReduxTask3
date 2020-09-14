import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {connect} from "react-redux";
import {createGlobalStyle} from 'styled-components'

import {asyncGetProducts} from "./actions/products.action";
// Components
import SideBar from './components/sidebar';
import Cart from './containers/cart';
import ProductList from './containers/product-list';
import AddProductModal from "./components/modal/AddProductModal";

// CSS
import {Button, Header, HeaderCartLink, HeaderShopLink} from "./Header";
import {InvitationContainer, MainWrapper} from "./MainWrapper";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('https://www.desktopbackground.org/download/o/2014/10/13/839349_60-light-bulb-hd-wallpapers_2560x1600_h.jpg');
    background-size: cover;
  }
`;

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
      <div>
        <Router>
          <Header>
            <HeaderShopLink><Link to="products">My Shop</Link></HeaderShopLink>
            <HeaderCartLink><Link to="cart">Cart {counter}</Link></HeaderCartLink>
            <Button onClick={this.openModal}>New Product</Button>
          </Header>
          <section>
            {isOpen && <AddProductModal closeModal={this.closeModal}/>}
          </section>
          <GlobalStyle></GlobalStyle>
          <Switch>
            <MainWrapper>
              <SideBar/>
              <Route path="/" exact>
                <InvitationContainer>Welcome to My Shop</InvitationContainer>
              </Route>
              <Route path="/products">
                <ProductList/>
              </Route>
              <Route path="/cart">
                <Cart/>
              </Route>
            </MainWrapper>
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
