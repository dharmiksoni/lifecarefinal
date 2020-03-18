import React from 'react';
import Header from '../../components/header';

const Contact = () => {
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
      <div id="getintouch" className="section wb wow fadeIn" style={{paddingBottom: 0}}>
        <div className="container">
          <div className="heading">
            <span className="icon-logo"><img src="/images/icon-logo.png" alt="#" /></span>
            <h2>Get in Touch</h2>
          </div>
        </div>
        <div className="contact-section">
          <div className="form-contant">
            <form id="ajax-contact" >
            {/* action="assets/mailer.php" method="post" */}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group in_name">
                    <input type="text" className="form-control" placeholder="Name" required="required" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group in_email">
                    <input type="email" className="form-control" placeholder="E-mail" required="required" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group in_email">
                    <input type="tel" className="form-control" id="phone" placeholder="Phone" required="required" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group in_email">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group in_message"> 
                    <textarea className="form-control" id="message" rows={5} placeholder="Message" required="required" defaultValue={""} />
                  </div>
                  <div className="actions">
                    <input type="submit" defaultValue="Send Message" name="submit" id="submitButton" className="btn small" title="Submit Your Message!" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div id="googleMap" style={{width: '100%', height: '450px'}} />
        </div>
      </div>
    </div>
  );
}
 
export default Contact;