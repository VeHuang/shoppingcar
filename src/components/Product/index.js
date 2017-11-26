import React, { Component } from 'react'
import ProductList from './list'

export default class Product extends Component {
    render() {
        return(
             <div className="blocky">
                <div className="shop-items">
                    <div className="container">
                        <ProductList addCart = {this.props.addCart} />
                    </div>
                </div>
            </div>
        )
    }
}