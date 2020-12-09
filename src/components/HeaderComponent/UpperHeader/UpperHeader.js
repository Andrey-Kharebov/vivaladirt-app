import React from 'react';
import classes from './UpperHeader.module.css';


 function UpperHeader() {
   return (
    <div className={ classes.upperHeader }>
      <div className={ classes.emailContact }>
        <i className="fas fa-envelope"></i><span className={ classes.email }>vivaladirtleague@gmail.com</span>
      </div>
      <ul className={ classes.socialMedia }>
        <li><i className="fab fa-facebook-f"></i></li>
        <li><i className="fab fa-twitter"></i></li>
        <li><i className="fab fa-instagram"></i></li>
        <li><i className="fab fa-youtube"></i></li>
      </ul>
    </div>
   )
 }
 
export default UpperHeader;
