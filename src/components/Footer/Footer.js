import React from 'react';
import classes from './Footer.module.css';

 function Footer() {
   return (
     <div className={ classes.footer }>
        <div>
          <p><a href="https://www.vivaladirtleague.com/" rel="noreferrer" target="_blank">original website</a></p>
        </div>
        <div className={ classes.authorSocial}>
          <a href="https://vk.com/id_andreykharebov" target="_blank" rel="noreferrer"><i className="fab fa-vk"></i></a>
        </div>
        <div className={ classes.footerSocial }>
          <ul>
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
     </div>
   )
 }
 
export default Footer;
