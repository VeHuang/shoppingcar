import React, { Component } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home/index'
import Login from './Login/index'
import Product from './Product/index'
import {Route, Link, Switch} from 'react-router-dom'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <NavBar></NavBar>
        </div>
        {/*<div className="blocky">
          <div className="container">*/}
          <Switch>
            <Route exact path="/" render={() => <Home/>}/>
            <Route exact path="/home" render={() => <Home/>}/>
            <Route exact path="/login" render={() => <Login/>}/>
            <Route exact path="/products" render={() => <Product />}/>
          </Switch>
          {/*</div>
        </div>*/}
        <Footer />
      </div>
    )
  }
}