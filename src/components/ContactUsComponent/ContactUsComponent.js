import React from "react";
import classes from "./ContactUsComponent.module.css";

function ContactUsComponent() {
  return (
    <div className={ classes.contactUsComponent }>
      <h2>contact us</h2>
      <div className={ classes.formAndContactsSection }>
        <div className={ classes.formSection }>
          <h3>Thanks for stopping by!</h3>
          <p>Please email us to discuss what package best suites. We look forward to working with you!</p>
          <div className={ classes.contactForm }>
            <form>
              <div>
                <input id='firstName' type='text' />
                {/* <label for='firstName'>First Name</label> */}
              </div>
              <div>
                <input id='lastName' type='text' />
                {/* <label for='lastName'>Last Name</label> */}
              </div>
              <div>
                <input id='Email Address' type='text' />
                {/* <label for='Email Address'>Email Address</label> */}
              </div>
              <div>
                <textarea id='message' type='text' />
                {/* <label for='message'>Message</label> */}
              </div>
              <div> 
                <button>submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className={ classes.contactsSection }>
          <img src="/assets/logo.png" alt="logo"></img>
          <p>Viva La Dirt League</p>
          <p>PO Box 41378</p>
          <p>St Lukes 1346</p>
          <p>Auckland</p>
          <p>vivaladirtleague@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUsComponent;
