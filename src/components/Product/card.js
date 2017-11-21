import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
        <div className="item">
            <div className="item-image">
                <a href="single-item.html">
                    <img src={this.props.product.imgurl} alt="" className="img-responsive"></img>
                </a>
            </div>
            <div className="item-details">
                <h5><a href="single-item.html">{this.props.product.name}</a></h5>
                <div className="clearfix"></div>
                <p>{this.props.product.description}</p>
                <hr />
                <div className="item-price pull-left">${this.props.product.price}</div>
                <div className="pull-right" onClick={() => this.props.onClick()}><a href="#" className="btn btn-danger btn-sm">Add to Cart</a></div>
                <div className="clearfix"></div>
            </div>
        </div>
    )
  }
}