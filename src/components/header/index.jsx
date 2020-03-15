import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import SkyLight from 'react-skylight';

const Header = (props) => {
  let subtitle;
  // console.log("HEader props: ", props);
  let currentLocation = localStorage.getItem('selectedLocation');
  const { path } = props.match;
  const [selectedCity, setSelectedCity] = useState(currentLocation || 'Select City');

  const updateSelectedCity = (cityName) => {
    setSelectedCity(cityName);
    subtitle.hide();
    localStorage.setItem('selectedLocation', cityName);
  }

  return (
    <Fragment>
      <header>
        <div className="header-top wow fadeIn">
          <div className="container">
            <a className="navbar-brand" href="#"><img src="images/logo.png" alt="image" /></a>
            <div className="right-header">
              <div className="header-info">
                <div className="info-inner">
                  <span className="icontop"><img src="images/phone-icon.png" alt="#" /></span>
                  <span className="iconcont"><a href="tel:800 123 456">800 123 456</a></span>
                </div>
                <div className="info-inner">
                  <span className="icontop"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                  <span className="iconcont"><a data-scroll href="mailto:info@yoursite.com">info@Lifecare.com</a></span>
                </div>
                <div className="info-inner">
                  <span className="icontop"><i className="fa fa-clock-o" aria-hidden="true"></i></span>
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
                  <li><Link className={path === '/' ? "active" : ""} to="/">Home</Link></li>
                  {/* <li><Link data-scroll to="/about">About us</Link></li> */}
                  <li><Link className={path === '/services' ? "active" : ""} data-scroll to="/services">Services</Link></li>
                  {/* <li><Link data-scroll to="/doctors">Doctors</Link></li> */}
                  {/* <li><Link data-scroll to="/price">Price</Link></li> */}
                  {/* <li><Link data-scroll to="/testimonials">Testimonials</Link></li> */}
                  <li><Link className={path === '/contact' ? "active" : ""} data-scroll to="/contact">Contact</Link></li>
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
              <div style={{ padding: 0, border: 'none', overflow: 'hidden', margin: '10px 0', color: 'white' }}>
                <div className="col-md-12">
                  <h4><i style={{ cursor: 'pointer' }} onClick={(e) => subtitle.show()} class="fa fa-map-marker" aria-hidden="true">  {'  ' + selectedCity}</i></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SkyLight hideOnOverlayClicked ref={_subtitle => (subtitle = _subtitle)} title="Please select city">
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
          <div onClick={() => updateSelectedCity('Bangalore')} style={{ border: '1px solid #000', borderRadius: '10%', padding: 10, cursor: 'pointer' }}>Bangalore</div>
          <div onClick={() => updateSelectedCity('Delhi')} style={{ border: '1px solid #000', borderRadius: '10%', padding: 10, cursor: 'pointer' }}>Delhi</div>
          <div onClick={() => updateSelectedCity('Mumbai')} style={{ border: '1px solid #000', borderRadius: '10%', padding: 10, cursor: 'pointer' }}>Mumbai</div>
          <div onClick={() => updateSelectedCity('Pune')} style={{ border: '1px solid #000', borderRadius: '10%', padding: 10, cursor: 'pointer' }}>Pune</div>
        </div>
      </SkyLight>
    </Fragment>
  )
}

export default withRouter(Header);