import React from 'react';
import classes from './Footer.module.css';

 function Footer() {
   return (
     <div className={ classes.footer }>
        <div>
          <p><a href="#">original website</a></p>
        </div>
        <div className={ classes.authorSocial}>
          <i className="fab fa-vk"></i>
        </div>
        <div className={ classes.footerSocial }>
          <ul>
            <li><i className="fab fa-facebook-f"></i></li>
            <li><i className="fab fa-twitter"></i></li>
            <li><i className="fab fa-instagram"></i></li>
            <li><i className="fab fa-youtube"></i></li>
          </ul>
        </div>
     </div>
   )
 }
 
export default Footer;
