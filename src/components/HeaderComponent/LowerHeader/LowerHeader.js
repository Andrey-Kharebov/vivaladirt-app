import React from 'react';
import classes from './LowerHeader.module.css';

 function LowerHeader() {
   return (
     <div className={ classes.lowerHeader}>
        <div className={ classes.headerLogo }>
          <img src="./assets/logo.png" alt="logo"></img>
        </div>
        <div className={ classes.headerMenu }>
          <ul>
            <li>about us</li>
            <li>packeges</li>
            <li>videos</li>
            <li>store</li>
            <li>patreon</li>
            <li>contact</li>
          </ul>
        </div>
     </div>
   )
 }
 
export default LowerHeader;
