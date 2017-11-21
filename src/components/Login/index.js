import React, { Component } from 'react'
import LoginForm from '../LoginForm'

export default class Login extends Component {
    render() {
        return (
            <div className="blocky">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="reg-login-info">
                                <h2>Login to Access Amazing Benefits <span className="color">!!!</span></h2>
                                <img src={require("../../assets/img/back1.jpg")} alt="" className="img-responsive img-thumbnail" />
                                <p>Duis leo risus, vehicula luctus nunc. Quiue rhoncus, a sodales enim arcu quis turpis. Duis leo risus, condimentum ut posuere ac, vehicula luctus nunc. Quisque rhoncus, a sodales enim arcu quis turpis.</p>
                            </div>
                        </div>  
                        <div className="col-md-6">
                            <div className="register-login">
                                <div className="cool-block">
                                    <div className="cool-block-bor">  
                                    <h3>Login</h3>
                                        <LoginForm />                                   
                                    </div>
                                </div>   
                            </div>
                        </div>      
                    </div>    
                </div>
            </div> 
        )
    }
}