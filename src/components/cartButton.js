import React from 'react'

export const CartAmountConverter = (items) => 
    Object.keys(items).reduce((sum, item) =>
        sum += parseInt(items[item].qty) * items[item].price, 0)
 
 const CartQtyConverter = (items) => 
    Object.keys(items).reduce((sum, item) =>
        sum += parseInt(items[item].qty), 0)

export default class CartButton extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            items: props.items
        }
    }

    componentWillReceiveProps (props) {
        this.setState({
            items: props.items
        })

        if(!localStorage.getItem('shoppingItems')){
            this.setState({
                items: {}
            })
        }
    }

    render () {
        return (
            <a data-toggle="modal" href="#shoppingcart"><i className="fa fa-shopping-cart"></i>&nbsp; 
            {this.state && this.state.items ?
                CartQtyConverter(this.state.items) : 0
            } Items - ${this.state && this.state.items ? 
                        CartAmountConverter(this.state.items) : 0}</a>
        )
    }

}