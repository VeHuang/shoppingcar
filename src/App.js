import React, { Component } from 'react';
import Layout from './components/Layout'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'
window.jQuery = $;
window.$ = $;
global.jQuery = $;
require('bootstrap/dist/js/bootstrap.min.js');
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
