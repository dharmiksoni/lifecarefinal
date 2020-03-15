import React from 'react';
import Header from '../../components/header';
import Loader from '../../components/loader';

const Dashboard = () => {
    return(
        <div>
            {/* <Loader /> */}
            <Header />
            {/* <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> */}
            <div id="home" className="parallax first-section wow fadeIn" data-stellar-background-ratio="0.4" style={{backgroundImage: 'url("images/slider-bg.png")'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="text-contant">
                  <h2>
                    <span className="center"><span className="icon"><img src="images/icon-logo.png" alt="#" /></span></span>
                    <a href className="typewrite" data-period={2000} data-type="[ &quot;Welcome to Life Care&quot;, &quot;We Care Your Health&quot;, &quot;We are Expert!&quot; ]">
                      <span className="wrap" />
                    </a>
                  </h2>
                </div>
              </div>
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        {/* end section */}
        <div id="time-table" className="time-table-section">
          <div className="container">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="row">
                <div className="service-time one" style={{background: '#2895f1'}}>
                  <span className="info-icon"><i className="fa fa-ambulance" aria-hidden="true" /></span>
                  <h3>Proctology</h3>
                  <p>Proctology is the branch of medicine concerned with the anus and rectum</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="row">
                <div className="service-time middle" style={{background: '#0071d1'}}>
                  <span className="info-icon"><i className="fa fa-clock-o" aria-hidden="true" /></span> 
                  <h3>Gynaecology</h3>
                  <p>Gynaecology is a medical branch which deals with diseases specific to women and girls, especially those affecting the breasts and the reproductive system.</p>
                  {/* <div className="time-table-section">
                    <ul>
                      <li><span className="left">Monday - Friday</span><span className="right">8.00 – 18.00</span></li>
                      <li><span className="left">Saturday</span><span className="right">8.00 – 16.00</span></li>
                      <li><span className="left">Sunday</span><span className="right">8.00 – 13.00</span></li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="row">
                <div className="service-time three" style={{background: '#0060b1'}}>
                  <span className="info-icon"><i className="fa fa-hospital-o" aria-hidden="true" /></span>
                  <h3>Laparoscopy</h3>
                  <p>Laparoscopic surgery or minimally invasive surgery is a surgery technique with smaller incisions and reduced recovery time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Dashboard;