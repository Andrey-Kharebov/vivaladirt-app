import React from "react";
import classes from "./ContactsSection.module.css";

function ContactsSection() {
  return (
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
  );
}

export default ContactsSection;
