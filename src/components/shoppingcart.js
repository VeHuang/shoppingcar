import React, { Component } from 'react'
import {CartAmountConverter} from './cartButton'

export default class ShoppingCart extends Component {
   constructor (props) {
        super(props)
        this.state = {
            shoppingItems: props.shoppingItems
        }
    }

    componentWillReceiveProps (props) {
        this.setState({
            shoppingItems: props.shoppingItems
        })
    }

    render(){
      return(
        <div className="modal fade" id="shoppingcart" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
        <div className="modal-dialog">
         <div className="modal-content">
           <div className="modal-header">
             <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
             <h4 className="modal-title">Shopping Cart</h4>
           </div>
           <div className="modal-body">          
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                   this.state && this.state.shoppingItems
                   ? Object.keys(this.state.shoppingItems).map((key, i)=>(
                            <tr key={i}>
                                <td><a href="single-item.html">{key}</a></td>
                                <td>
                                    <input type="number" min='0' onChange={this.props.onUpdateCart.bind(null, key)}
                                        value={this.state.shoppingItems[key].qty}></input>
                                </td>
                                <td>${this.state.shoppingItems[key].price}</td>
                                <td><button className="btn btn-danger btn-sm" onClick={this.props.onRemoveCartItem.bind(null, key)}>Remove</button></td>
                            </tr>
                        ))
                    :null    
                }
                <tr>
                  <th></th>
                  <th>Total</th>
                  <th>${this.state && this.state.shoppingItems
                            ? CartAmountConverter(this.state.shoppingItems)
                            : 0}</th>
                  <th></th>
                </tr>
              </tbody>
            </table>
            
           </div>
           <div className="modal-footer">
             <button type="button" className="btn btn-default" data-dismiss="modal">Continue Shopping</button>
             <button type="button" className="btn btn-info">Checkout</button>
           </div>
         </div>
       </div>
       </div>)
    }
}