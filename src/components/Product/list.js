import React, { Component } from 'react'
import {getProducts} from '../../api/product'
import Card from './card'

export default class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            carts: {},
            open: false
        }
    }
    componentWillMount() {
        if (localStorage.getItem('user')) { 
            getProducts()
                .then(response => {
                    if (response.data.status === 'success') {
                     this.setState({products: response.data.res})
                    } else {
                        return Promise.reject(response.data.status)
                    }
                })
                .catch(function (error) {
                    alert(`Error occurred. Message: ${error}`)
                })
        }
    }

    addCart = (product, i) => {
        let carts = this.state.carts
        if (carts[product.name]) {
            carts[product.name].qty++
        } else {
            carts[product.name] = { qty: 1, price: product.price }
        }
        
        this.setState({
            carts: carts
        })
    }

    render(){
        return(
            <div className="row">
                {this.state && this.state.products
                    ? this.state.products
                        .map((product, i) => (
                            <div key={i} className="col-md-3 col-sm-6 col-xs-12">
                                <Card product={product} onClick={this.addCart.bind(this, product, i)} key={product.name}/>                    
                            </div>)) 
                    : localStorage.getItem('user') ? 'Loading...'  : 'Please log in first'
                }                
            </div>
        )
    }
}