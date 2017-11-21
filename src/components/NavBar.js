import React, { Component } from 'react'
import * as rs from 'reactstrap'
import { Route, Link} from 'react-router-dom'

class MenuItem extends Component {

    constructor (props) {
        super(props)        
    }

    goto = (history,e) => {
        history.push(e.target.value) 
    }

    render() {
        return (
            <Route render={({ history }) => (
                <div>
                    <div className="navi">
                        <div id="ddtopmenubar" className="mattblackmenu">
                            <ul> 
                                <li><Link to={'/home'}> Home </Link></li>
                                <li><Link to={'/products'}> Products </Link></li>
                                <li><Link to={'/about'}> About </Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navis">
                        <select onChange={this.goto.bind(this, history)} className="menu-select">
                            <option value="home">Home</option>
                            <option value="products">Products</option>
                            <option value="about">About</option>
                        </select>
                    </div>
                    </div>) } />
        );
    }
}

export default class NavBar extends Component {
    render() {
        return (
            <rs.Container>
                <rs.Row>
                    <div className="col-xs-12 col-sm-2">
                        <div className="logo">
                            <h1 style={styles.logo}>
                                <Link to={'/'} style={styles.logoText}>OlsonKart</Link>
                            </h1>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-5">
                        <MenuItem></MenuItem>
                    </div>
                    <div className="col-xs-12 col-sm-5">
                        <div className="kart-links">
							<Link to={'/login'}>Login</Link>
							<a href="register.html">Signup</a>
							<a data-toggle="modal" href="#shoppingcart"><i className="fa fa-shopping-cart"></i> 3 Items - $300</a>
						</div>
                    </div>
                </rs.Row>
            </rs.Container>
        );
    }
}


const styles = {
    logo: {
        fontSie: '40px',
        margin: 0,
        padding: '10px 0px'
    },
    logoText: {
        color: '#fff',
        fontFamily: "'Open Sans Condensed',sans-serif"
    },
    downarrowpointer: {
        width: '11px',
        height: '7px'
    }
}