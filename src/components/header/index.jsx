import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import SkyLight from 'react-skylight';
import { useEffect } from 'react';
import { axios } from 'axios';
import api, { getLocation } from '../../api';
import get from 'lodash.get';

const Header = props => {
  let subtitle;
  console.log('Header props: ', props);
  let currentLocation = localStorage.getItem('selectedLocation');
  const { path, url } = props.match;
  const [selectedCity, setSelectedCity] = useState(currentLocation || 'Select City');
  const [see, SetSee] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await getLocation();
      SetSee(apiResponse.data);
    };
    fetchData();
  }, []);

  const updateSelectedCity = cityName => {
    setSelectedCity(cityName.toLowerCase());
    subtitle.hide();
    localStorage.setItem('selectedLocation', cityName.toLowerCase());
    let pathArr = ['', '', ''];
    if (url !== '/') {
      pathArr = url.split('/');
    }
    props.history.push(`/${cityName.toLowerCase()}/${pathArr[2]}`);
  };

  return (
    <Fragment>
      <header>
        <div className='header-top wow fadeIn'>
          <div className='container'>
            <a className='navbar-brand' href='#'>
              <img src='/images/logo.png' alt='image' />
            </a>
            <div className='right-header'>
              <div className='header-info'>
                <div className='info-inner'>
                  <span className='icontop'>
                    <img src='/images/phone-icon.png' alt='#' />
                  </span>
                  <span className='iconcont'>
                    <a href='tel:800 123 456'>800 123 456</a>
                  </span>
                </div>
                <div className='info-inner'>
                  <span className='icontop'>
                    <i className='fa fa-envelope' aria-hidden='true'></i>
                  </span>
                  <span className='iconcont'>
                    <a data-scroll href='mailto:info@yoursite.com'>
                      info@Lifecare.com
                    </a>
                  </span>
                </div>
                <div className='info-inner'>
                  <span className='icontop'>
                    <i className='fa fa-clock-o' aria-hidden='true'></i>
                  </span>
                  <span className='iconcont'>
                    <a data-scroll href='#'>
                      Daily: 7:00am - 8:00pm
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='header-bottom wow fadeIn'>
          <div className='container'>
            <nav className='main-menu'>
              <div className='navbar-header'>
                <button
                  type='button'
                  className='navbar-toggle collapsed'
                  data-toggle='collapse'
                  data-target='#navbar'
                  aria-expanded='false'
                  aria-controls='navbar'>
                  <i className='fa fa-bars' aria-hidden='true' />
                </button>
              </div>
              <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link className={path === '/' ? 'active' : ''} to={selectedCity ? `/${selectedCity}` : '/'}>
                      Home
                    </Link>
                  </li>
                  {/* <li><Link data-scroll to="/about">About us</Link></li> */}
                  <li>
                    <Link className={path === '/services' ? 'active' : ''} data-scroll to={selectedCity ? `/${selectedCity}/services` : '/services'}>
                      Services
                    </Link>
                  </li>
                  {/* <li><Link data-scroll to="/doctors">Doctors</Link></li> */}
                  {/* <li><Link data-scroll to="/price">Price</Link></li> */}
                  {/* <li><Link data-scroll to="/testimonials">Testimonials</Link></li> */}
                  <li>
                    <Link className={path === '/contact' ? 'active' : ''} data-scroll to={selectedCity ? `/${selectedCity}/contact` : '/contact'}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className='serch-bar'>
              <div id='custom-search-input'>
                <div className='input-group col-md-12'>
                  <input type='text' className='form-control input-lg' placeholder='Search' />
                  <span className='input-group-btn'>
                    <button className='btn btn-info btn-lg' type='button'>
                      <i className='fa fa-search' aria-hidden='true' />
                    </button>
                  </span>
                </div>
              </div>
              <div style={{ padding: 0, border: 'none', overflow: 'hidden', margin: '10px 0', color: 'white' }}>
                <div className='col-md-12'>
                  <h4>
                    <i style={{ cursor: 'pointer' }} onClick={e => subtitle.show()} class='fa fa-map-marker' aria-hidden='true'>
                      {' '}
                      {'  ' + selectedCity}
                    </i>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SkyLight hideOnOverlayClicked ref={_subtitle => (subtitle = _subtitle)} title='Please select city'>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
          {get(see, 'data', []).map(locate => {
            return (
              <div
                onClick={() => updateSelectedCity(locate.name)}
                style={{ border: '1px solid #000', borderRadius: '10%', padding: 5, cursor: 'pointer' }}>
                {locate.name}
              </div>
            );
          })}
        </div>
      </SkyLight>
    </Fragment>
  );
};

export default withRouter(Header);
