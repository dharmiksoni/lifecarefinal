import React from 'react';
import Header from '../../components/header';
import TextField from '@material-ui/core/TextField';

const Services = () => {


  const handleClick = () => {

  }

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
            <div id="service" className="services wow fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
              <div className="inner-services">
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                  <div className="serv">
                    <span className="icon-service"><img src="images/service-icon1.png" alt="#" /></span>
                    <h4>PREMIUM FACILITIES</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                  <div className="serv">
                    <span className="icon-service"><img src="images/service-icon2.png" alt="#" /></span>
                    <h4>LARGE LABORATORY</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                  <div className="serv">
                    <span className="icon-service"><img src="images/service-icon3.png" alt="#" /></span>
                    <h4>DETAILED SPECIALIST</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                  <div className="serv">
                    <span className="icon-service"><img src="images/service-icon4.png" alt="#" /></span>
                    <h4>CHILDREN CARE CENTER</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                  <div className="serv">
                    <span className="icon-service"><img src="images/service-icon5.png" alt="#" /></span>
                    <h4>FINE INFRASTRUCTURE</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                  <div className="serv">
                    <span className="icon-service"><img src="images/service-icon6.png" alt="#" /></span>
                    <h4>ANYTIME BLOOD BANK</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="appointment-form">
                <h3><span>+</span> Book Appointment</h3>
                <div className="form">
                  <form action="index.html">
                    <fieldset>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                          <div className="form-group">
                            <input type="text" id="name" placeholder="Your Name"  required/>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                          <div className="form-group">
                            <input type="email" placeholder="Email Address" id="email" required/>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 select-section">
                        <div className="row">
                          <div className="form-group">
                            <select className="form-control">
                              <option>Day</option>
                              <option>Sunday</option>
                              <option>Monday</option>
                              <option>Tuesday</option>
                              <option>Wednesday</option>
                              <option>Thurday</option>
                              <option>Friday</option>
                              <option>Saturday</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <select className="form-control">
                              <option>Time</option>
                              <option>AM</option>
                              <option>PM</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                          <div className="form-group">
                            <select className="form-control">
                              <option>Doctor Name</option>
                              <option>Mr. Thomas</option>
                              <option>Mr. John</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                          <div className="form-group">
                            <textarea rows={4} id="textarea_message" className="form-control" placeholder="Your Message..." defaultValue={""} required/>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                          <div className="form-group">
                            <div className="center"><button type="submit" onClick={handleClick}>Submit</button></div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end section */}
    </div>
  );
}
 
export default Services;