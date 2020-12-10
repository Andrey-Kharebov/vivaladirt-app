import React from 'react';
import classes from './UpperHeader.module.css';


 function UpperHeader() {
   return (
    <div className={ classes.upperHeader }>
      <div className={ classes.emailContact }>
        <i className="fas fa-envelope"></i><span className={ classes.email }>vivaladirtleague@gmail.com</span>
      </div>
      <ul className={ classes.socialMedia }>
        <li>
          <a href="https://www.facebook.com/vivaladirtleague/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
        </li>
        <li>
          <a href="https://twitter.com/vivadirt/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
        </li>
        <li>
          <a href="https://www.instagram.com/vivaladirt/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
        </li>
        <li>
          <a href="https://www.youtube.com/user/VivaLaDirtLeague" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
        </li>
      </ul>
    </div>
   )
 }
 
export default UpperHeader;
