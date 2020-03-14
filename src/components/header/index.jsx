import React from 'react';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <div className="header-top wow fadeIn">
          <div className="container">
            <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="image" /></a>
            <div className="right-header">
              <div className="header-info">
                <div className="info-inner">
                  <span className="icontop"><img src="images/phone-icon.png" alt="#" /></span>
                  <span className="iconcont"><a href="tel:800 123 456">800 123 456</a></span>	
                </div>
                <div className="info-inner">
                  <span className="icontop"><i className="fa fa-envelope" aria-hidden="true" /></span>
                  <span className="iconcont"><a data-scroll href="mailto:info@yoursite.com">info@Lifecare.com</a></span>	
                </div>
                <div className="info-inner">
                  <span className="icontop"><i className="fa fa-clock-o" aria-hidden="true" /></span>
                  <span className="iconcont"><a data-scroll href="#">Daily: 7:00am - 8:00pm</a></span>	
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom wow fadeIn">
          <div className="container">
            <nav className="main-menu">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i className="fa fa-bars" aria-hidden="true" /></button>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li><Link className="active" to="/">Home</Link></li>
                  <li><Link data-scroll to="/about">About us</Link></li>
                  <li><Link data-scroll to="/services">Services</Link></li>
                  <li><Link data-scroll to="/doctors">Doctors</Link></li>
                  <li><Link data-scroll to="/price">Price</Link></li>
                  <li><Link data-scroll to="/testimonials">Testimonials</Link></li>
                  <li><Link data-scroll to="/contact">Contact</Link></li>
                </ul>
              </div>
            </nav>
            <div className="serch-bar">
              <div id="custom-search-input">
                <div className="input-group col-md-12">
                  <input type="text" className="form-control input-lg" placeholder="Search" />
                  <span className="input-group-btn">
                    <button className="btn btn-info btn-lg" type="button">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;