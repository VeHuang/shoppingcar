import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Layout from './components/Layout'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
require("./assets/css/ddlevelsmenu-base.css")
require("./assets/css/ddlevelsmenu-topbar.css")
require("./assets/css/style.css")
require("./assets/css/responsive.css")

class App extends Component {
  render() {
    return (
        <Layout></Layout>
    );
  }
}

export default App;
