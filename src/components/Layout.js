import React, { Component } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home/index'
import Login from './Login/index'
import Product from './Product/index'
import ShoppingCart from './shoppingcart'
import {Route, Switch} from 'react-router-dom'

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
        carts: {}
    }

    if(localStorage.getItem('shoppingItems')){
      this.state.carts = JSON.parse(localStorage.getItem('shoppingItems'));
    }
  }

  addCart = (shoppingItem, i) => {
    let carts = this.state.carts
    if (carts[shoppingItem.name]) {
        carts[shoppingItem.name].qty++
    } else {
        carts[shoppingItem.name] = { qty: 1, price: shoppingItem.price }
    }
    
    this.setState({
        carts: carts
    })

    localStorage.setItem('shoppingItems', JSON.stringify(carts));
  }

  updateCart = (name, e) => {
    let carts = this.state.carts
    carts[name].qty = e.target.value
    this.setState({
      carts: carts
    })

    localStorage.setItem('shoppingItems', JSON.stringify(carts));
  }

   removeCartItem = (name) => {
    let carts = this.state.carts
    delete carts[name]
    this.setState({
      carts: carts
    })
  }

  render() {
    return (
      <div>
        <ShoppingCart onUpdateCart={this.updateCart} onRemoveCartItem={this.removeCartItem} shoppingItems = {this.state.carts}/>
        <div className="header">
          <NavBar shoppingItems = {this.state.carts}></NavBar>
        </div>
        <Switch>
          <Route exact path="/" render={() => <Home/>}/>
          <Route exact path="/home" render={() => <Home/>}/>
          <Route exact path="/login" render={() => <Login/>}/>
          <Route exact path="/products" render={() => <Product addCart={this.addCart} />}/>
        </Switch>
        <Footer />
      </div>
    )
  }
}