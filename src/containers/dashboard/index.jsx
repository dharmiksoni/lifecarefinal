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
                  <h3>Emergency Case</h3>
                  <p>multi-speciality healthcare provider which aims to deliver a hassle free surgical experience to all patients by leveraging technology, and a set of advanced operations and powerful processes</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="row">
                <div className="service-time middle" style={{background: '#0071d1'}}>
                  <span className="info-icon"><i className="fa fa-clock-o" aria-hidden="true" /></span> 
                  <h3>Working Hours</h3>
                  <div className="time-table-section">
                    <ul>
                      <li><span className="left">Monday - Friday</span><span className="right">8.00 – 18.00</span></li>
                      <li><span className="left">Saturday</span><span className="right">8.00 – 16.00</span></li>
                      <li><span className="left">Sunday</span><span className="right">8.00 – 13.00</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="row">
                <div className="service-time three" style={{background: '#0060b1'}}>
                  <span className="info-icon"><i className="fa fa-hospital-o" aria-hidden="true" /></span>
                  <h3>Clinic Timetable</h3>
                  <p>Dignissimos ducimus qui blanditii sentium volta tum deleniti atque cori as quos dolores et quas mole.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Dashboard;