import React, { Component } from 'react'
import * as rs from 'reactstrap'

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <rs.Container>
                    <rs.Row>
                        <div className="col-md-4 col-sm-4">
                            <div className="fwidget">
                                <h4>Oslon de<span className="color">'</span> Techno</h4>
                                <hr />
                                <p>Duis leo risus, vehicula luctus nunc.  Quiue rhoncus, a sodales enim arcu quis turpis. Duis leo risus, condimentum ut posuere ac, vehicula luctus nunc.  Quisque rhoncus, a sodales enim arcu quis turpis.</p>
                                <div className="social">
                                    <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                                    <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                                    <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                                    <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                                    <a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="fwidget">
                                <h4>Categories</h4>
                                <hr />
                                <ul>
                                    <li><a href="#">Sed eu leo orci, condimentum gravida metus</a></li>
                                    <li><a href="#">Etiam at nulla ipsum, in rhoncus purus</a></li>
                                    <li><a href="#">Fusce vel magna faucibus felis dapibus facilisis</a></li>
                                    <li><a href="#">Vivamus scelerisque dui in massa</a></li>
                                    <li><a href="#">Pellentesque eget adipiscing dui semper</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="fwidget">
                                <h4>Get In Touch</h4>
                                <hr />
                                <div className="address">
                                    <p><i className="fa fa-home color contact-icon"></i> #12, Plot No.14, Raj Karmara Street, </p>
                                    <p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 5th Stage, Koramangala, Madiwala,</p>
                                    <p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bangalore - 493922, Karananana.</p>
                                    <p><i className="fa fa-phone color contact-icon"></i> +94-948-323-5532</p>
                                    <p><i className="fa fa-envelope color contact-icon"></i> <a href="mailto:something@gmail.com">some.thing@gmail.com</a></p>
                                </div>

                            </div>
                        </div>
                    </rs.Row>
                    <div className="copy text-center">
                        © {(new Date()).getFullYear()} - PwC. All rights reserved.
                    </div>
                </rs.Container>
            </footer>
        );
    }
}