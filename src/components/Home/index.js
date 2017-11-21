import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
     <div>
      <div style={{height: '10px'}}></div>    
      <div className="tp-banner-container">
          <div style={{width:'100%',height:'100%', backgroudColor: 'rgba(0, 0, 0, 0)', backgroundRepeat: 'no-repeat',backgroundImage: 'url('+ require("../../assets/img/rs-2.jpg")+')',backgroundSize: 'cover', backgroundPosition: 'center center'}} />
      </div>    
     </div> 
    )
  }
}