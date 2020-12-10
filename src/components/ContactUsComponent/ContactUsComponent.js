import React from "react";
import ContactsSection from "./ContactsSection /ContactsSection";
import classes from "./ContactUsComponent.module.css";
import FormSection from "./FormSection/FormSection";

function ContactUsComponent() {
  return (
    <div id="contact" className={ classes.contactUsComponent }>
      <h2>contact us</h2>
      <div className={ classes.formAndContactsSection }>
        <FormSection />
        <ContactsSection />
      </div>
    </div>
  );
}

export default ContactUsComponent;
