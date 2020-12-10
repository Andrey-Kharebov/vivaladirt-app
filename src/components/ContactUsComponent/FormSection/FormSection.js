import React, { useState } from "react";
import classes from "./FormSection.module.css";

function FormSection() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', message: ''
  })

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const sendAndClearForm = (event) => {
    console.log(form);
    setForm({firstName: '', lastName: '', email: '', message: ''});
    event.preventDefault();
  }

  return (
    <div className={classes.formSection}>
      <h3>Thanks for stopping by!</h3>
      <p>
        Please email us to discuss what package best suites. We look forward to
        working with you!
      </p>
      <div className={classes.contactForm}>
        <form onSubmit={ sendAndClearForm }>
          <div>
            <input id="firstName" type="text" placeholder="First Name" name="firstName" value={ form.firstName } onChange={ changeHandler } />
          </div>
          <div>
            <input id="lastName" type="text" placeholder="Last Name" name="lastName" value={ form.lastName } onChange={ changeHandler } />
          </div>
          <div>
            <input id="Email Address" type="text" placeholder="Email Address" name="email" value={ form.email } onChange={ changeHandler } />
          </div>
          <div>
            <textarea id="message" type="text" placeholder="Message" name="message" value={ form.message } onChange={ changeHandler } />
          </div>
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormSection;
