import React from "react";
import classes from "./ContactUsComponent.module.css";

function ContactUsComponent() {
  return (
    <div id="contact" className={ classes.contactUsComponent }>
      <h2>contact us</h2>
      <div className={ classes.formAndContactsSection }>
        <div className={ classes.formSection }>
          <h3>Thanks for stopping by!</h3>
          <p>Please email us to discuss what package best suites. We look forward to working with you!</p>
          <div className={ classes.contactForm }>
            <form>
              <div>
                <input id='firstName' type='text' placeholder="First Name" />
              </div>
              <div>
                <input id='lastName' type='text' placeholder="Last Name" />
              </div>
              <div>
                <input id='Email Address' type='text' placeholder="Email Address" />
              </div>
              <div>
                <textarea id='message' type='text' placeholder="Message" />
              </div>
              <div> 
                <button>submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className={ classes.contactsSection }>
          <img src="/assets/logo.png" alt="logo"></img>
          <h4>Viva La Dirt League</h4>
          <div className={ classes.address }>
            <p>PO Box 41378</p>
            <p>St Lukes 1346</p>
            <p>Auckland</p>
            <p>vivaladirtleague@gmail.com</p>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default ContactUsComponent;
