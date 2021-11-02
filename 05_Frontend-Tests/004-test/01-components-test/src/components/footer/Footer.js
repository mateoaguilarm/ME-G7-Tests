import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Services</h6>
                            <ul className="footer-links">
                                <li><Link to="http://scanfcode.com/category/c-language/">Consult</Link></li>
                                <li><Link to="http://scanfcode.com/category/front-end-development/">Especialist Treatment</Link></li>
                                <li><Link to="http://scanfcode.com/category/back-end-development/">Psycological Feedback</Link></li>
                                <li><Link to="http://scanfcode.com/category/java-programming-language/">Offices</Link></li>
                                <li><Link to="http://scanfcode.com/category/android/">Co-Work Zones</Link></li>
                                <li><Link to="http://scanfcode.com/category/templates/">Join Us</Link></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><Link to="http://scanfcode.com/contribute-at-scanfcode/">Contact Us</Link></li>
                                <li><Link to="http://scanfcode.com/contact/">About Us</Link></li>
                                <li><Link to="http://scanfcode.com/contribute-at-scanfcode/">Services</Link></li>
                                <li><Link to="http://scanfcode.com/contact/">Gallery</Link></li>
                                <li><Link to="http://scanfcode.com/contact/">Scheldule</Link></li>
                                <li><Link to="http://scanfcode.com/privacy-policy/">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
        </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                                    <strong>
                                        <span> Medical Center</span>
                                    </strong>
                                </p>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                    <li><Link className="facebook" to="#"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link className="twitter" to="#"><i className="fa fa-twitter"></i></Link></li>
                                    <li><Link className="dribbble" to="#"><i className="fa fa-dribbble"></i></Link></li>
                                    <li><Link className="linkedin" to="#"><i className="fa fa-linkedin"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </footer>
        </div>
    )
}

export default Footer
